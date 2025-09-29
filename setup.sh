#!/bin/bash

# Bible Transcription Database Setup Script

echo "📚 Bible Transcription Database Setup"
echo "======================================"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}❌ Docker is not installed. Please install Docker first.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Docker found${NC}"
}

# Check if Docker Compose is installed
check_docker_compose() {
    if ! docker compose version &> /dev/null; then
        echo -e "${RED}❌ Docker Compose is not installed. Please install Docker Compose first.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Docker Compose found${NC}"
}

# Setup environment
setup_env() {
    if [ ! -f .env ]; then
        echo -e "${YELLOW}📝 Creating .env file...${NC}"
        cp .env.example .env
        echo -e "${GREEN}✅ .env file created. Please update with your API keys.${NC}"
    else
        echo -e "${GREEN}✅ .env file already exists${NC}"
    fi
}

# Start local database
start_local_db() {
    echo -e "${YELLOW}🚀 Starting local PostgreSQL database...${NC}"
    docker compose up -d postgres

    # Wait for database to be ready
    echo -e "${YELLOW}⏳ Waiting for database to be ready...${NC}"

    # Give it more time to start
    for i in {1..30}; do
        if docker compose exec postgres pg_isready -U postgres -d bible_transcription &>/dev/null; then
            echo -e "${GREEN}✅ Local database is running${NC}"
            return 0
        fi
        echo -n "."
        sleep 2
    done

    echo -e "${RED}❌ Failed to start database${NC}"
    docker compose logs postgres
    exit 1
}

# Initialize database schema
init_schema() {
    echo -e "${YELLOW}🏗️ Initializing database schema...${NC}"
    docker compose exec -T postgres psql -U postgres -d bible_transcription < database/schema.sql
    echo -e "${GREEN}✅ Schema initialized${NC}"
}

# Seed initial data
seed_data() {
    echo -e "${YELLOW}🌱 Seeding initial data...${NC}"
    docker compose exec -T postgres psql -U postgres -d bible_transcription < database/seeds/01_books.sql
    echo -e "${GREEN}✅ Initial data seeded${NC}"
}

# Install Node dependencies
install_dependencies() {
    echo -e "${YELLOW}📦 Installing Node.js dependencies...${NC}"
    npm install @supabase/supabase-js pg dotenv
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Main menu
show_menu() {
    echo ""
    echo "What would you like to do?"
    echo "1) Setup local development environment"
    echo "2) Start local database only"
    echo "3) Migrate to Supabase"
    echo "4) View database stats"
    echo "5) Stop all services"
    echo "6) Exit"
    read -p "Select option: " option

    case $option in
        1)
            check_docker
            check_docker_compose
            setup_env
            start_local_db
            init_schema
            seed_data
            install_dependencies
            echo -e "${GREEN}✅ Local development environment is ready!${NC}"
            echo -e "${YELLOW}📌 Access pgAdmin at: http://localhost:5050${NC}"
            echo -e "${YELLOW}📌 Database: localhost:5432/bible_transcription${NC}"
            ;;
        2)
            start_local_db
            ;;
        3)
            echo -e "${YELLOW}🚀 Starting migration to Supabase...${NC}"
            node database/scripts/migrate_to_supabase.js
            ;;
        4)
            echo -e "${YELLOW}📊 Database Statistics:${NC}"
            docker compose exec postgres psql -U postgres -d bible_transcription -c "SELECT * FROM processing_status;"
            ;;
        5)
            echo -e "${YELLOW}🛑 Stopping all services...${NC}"
            docker compose down
            echo -e "${GREEN}✅ All services stopped${NC}"
            ;;
        6)
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo -e "${RED}Invalid option${NC}"
            show_menu
            ;;
    esac
}

# Run main menu
show_menu