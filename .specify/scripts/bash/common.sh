#!/usr/bin/env bash
# Common functions and variables for all scripts

# get_repo_root determines the repository root path, preferring the Git top-level when available and falling back to the script's grand-root.
# When not inside a Git repository, resolves the script's directory and returns the ancestor three levels up.
get_repo_root() {
    if git rev-parse --show-toplevel >/dev/null 2>&1; then
        git rev-parse --show-toplevel
    else
        # Fall back to script location for non-git repos
        local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
        (cd "$script_dir/../../.." && pwd)
    fi
}

# get_current_branch determines the current feature branch name using an override, Git, or repository layout fallbacks.
# Priority: use SPECIFY_FEATURE if set; otherwise use the current Git branch when available; otherwise pick the highest-numbered
# 3-digit-prefixed directory under "specs" in the repository root; if none found, fall back to "main".
get_current_branch() {
    # First check if SPECIFY_FEATURE environment variable is set
    if [[ -n "${SPECIFY_FEATURE:-}" ]]; then
        echo "$SPECIFY_FEATURE"
        return
    fi
    
    # Then check git if available
    if git rev-parse --abbrev-ref HEAD >/dev/null 2>&1; then
        git rev-parse --abbrev-ref HEAD
        return
    fi
    
    # For non-git repos, try to find the latest feature directory
    local repo_root=$(get_repo_root)
    local specs_dir="$repo_root/specs"
    
    if [[ -d "$specs_dir" ]]; then
        local latest_feature=""
        local highest=0
        
        for dir in "$specs_dir"/*; do
            if [[ -d "$dir" ]]; then
                local dirname=$(basename "$dir")
                if [[ "$dirname" =~ ^([0-9]{3})- ]]; then
                    local number=${BASH_REMATCH[1]}
                    number=$((10#$number))
                    if [[ "$number" -gt "$highest" ]]; then
                        highest=$number
                        latest_feature=$dirname
                    fi
                fi
            fi
        done
        
        if [[ -n "$latest_feature" ]]; then
            echo "$latest_feature"
            return
        fi
    fi
    
    echo "main"  # Final fallback
}

# has_git checks whether the current directory is inside a Git repository. Exits with status 0 when inside a Git repository and non-zero otherwise.
has_git() {
    git rev-parse --show-toplevel >/dev/null 2>&1
}

# check_feature_branch validates that a branch name starts with a three-digit prefix followed by a dash when a Git repository is present; when not in a Git repository it prints a warning and returns success.
check_feature_branch() {
    local branch="$1"
    local has_git_repo="$2"
    
    # For non-git repos, we can't enforce branch naming but still provide output
    if [[ "$has_git_repo" != "true" ]]; then
        echo "[specify] Warning: Git repository not detected; skipped branch validation" >&2
        return 0
    fi
    
    if [[ ! "$branch" =~ ^[0-9]{3}- ]]; then
        echo "ERROR: Not on a feature branch. Current branch: $branch" >&2
        echo "Feature branches should be named like: 001-feature-name" >&2
        return 1
    fi
    
    return 0
}

# get_feature_dir constructs the feature directory path by joining the repository root with "specs/<branch>"
get_feature_dir() { echo "$1/specs/$2"; }

# get_feature_paths emits a here-document assigning environment-like variables that describe the repository root, current branch, whether Git is present, the feature directory, and common feature file paths (spec, plan, tasks, research, data-model, quickstart, and contracts).
get_feature_paths() {
    local repo_root=$(get_repo_root)
    local current_branch=$(get_current_branch)
    local has_git_repo="false"
    
    if has_git; then
        has_git_repo="true"
    fi
    
    local feature_dir=$(get_feature_dir "$repo_root" "$current_branch")
    
    cat <<EOF
REPO_ROOT='$repo_root'
CURRENT_BRANCH='$current_branch'
HAS_GIT='$has_git_repo'
FEATURE_DIR='$feature_dir'
FEATURE_SPEC='$feature_dir/spec.md'
IMPL_PLAN='$feature_dir/plan.md'
TASKS='$feature_dir/tasks.md'
RESEARCH='$feature_dir/research.md'
DATA_MODEL='$feature_dir/data-model.md'
QUICKSTART='$feature_dir/quickstart.md'
CONTRACTS_DIR='$feature_dir/contracts'
EOF
}

# check_file checks whether the given path is a regular file and echoes a checkmark (`✓`) or crossmark (`✗`) followed by the provided label.
check_file() { [[ -f "$1" ]] && echo "  ✓ $2" || echo "  ✗ $2"; }
# check_dir checks whether the specified directory exists and is non-empty and echoes a prefixed checkmark (`✓`) or cross (`✗`) followed by the provided label.
check_dir() { [[ -d "$1" && -n $(ls -A "$1" 2>/dev/null) ]] && echo "  ✓ $2" || echo "  ✗ $2"; }
