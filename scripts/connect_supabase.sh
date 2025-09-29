#!/bin/bash

# Load environment variables
source .env

# Connect to Supabase directly using psql with connection string
# Supabase PostgreSQL connection format:
# postgresql://postgres:[password]@[host]:5432/postgres

SUPABASE_HOST=$(echo $SUPABASE_URL | sed 's|https://||' | sed 's|.supabase.co|.supabase.co|')
SUPABASE_DB_CONNECTION="postgresql://postgres.kmbndafjfxzbyokzqgno:$SUPABASE_DB_PASSWORD@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres"

echo "Connecting to Supabase PostgreSQL..."
echo "Host: $SUPABASE_HOST"

# Test connection first
echo "Testing connection..."
psql "$SUPABASE_DB_CONNECTION" -c "SELECT version();"

if [ $? -eq 0 ]; then
    echo "Connection successful! Applying migration..."
    psql "$SUPABASE_DB_CONNECTION" -f scripts/supabase_migration.sql
else
    echo "Connection failed. Please check credentials."
fi