#!/bin/bash

# Bella Vista Restaurant - Quick Deployment Script
# This script helps prepare your application for deployment

echo "🍽️ Bella Vista Restaurant - Deployment Preparation"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    print_error "Please run this script from the root project directory"
    exit 1
fi

print_info "Starting deployment preparation..."

# Check dependencies
echo ""
echo "Checking dependencies..."

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_status "Node.js found: $NODE_VERSION"
else
    print_error "Node.js not found. Please install Node.js 18+"
    exit 1
fi

# Check Go
if command -v go &> /dev/null; then
    GO_VERSION=$(go version)
    print_status "Go found: $GO_VERSION"
else
    print_error "Go not found. Please install Go 1.20+"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    print_status "npm found: $NPM_VERSION"
else
    print_error "npm not found. Please install npm"
    exit 1
fi

echo ""
echo "Building applications..."

# Build Backend
echo ""
print_info "Building backend..."
cd backend

if [ ! -f "go.mod" ]; then
    print_error "go.mod not found in backend directory"
    exit 1
fi

# Download dependencies
print_info "Downloading Go dependencies..."
go mod tidy

# Test build
print_info "Testing backend build..."
if go build -o restaurant-server .; then
    print_status "Backend builds successfully"
    rm -f restaurant-server
else
    print_error "Backend build failed"
    exit 1
fi

cd ..

# Build Frontend
echo ""
print_info "Building frontend..."
cd frontend

if [ ! -f "package.json" ]; then
    print_error "package.json not found in frontend directory"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    print_info "Installing frontend dependencies..."
    npm install
fi

# Build for production
print_info "Building frontend for production..."
if npm run build; then
    print_status "Frontend builds successfully"
    BUILD_SIZE=$(du -sh build | cut -f1)
    print_info "Build size: $BUILD_SIZE"
else
    print_error "Frontend build failed"
    exit 1
fi

cd ..

echo ""
print_status "🎉 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Choose a deployment platform (see DEPLOYMENT.md)"
echo "2. Set up your backend (Railway, Render, Heroku)"
echo "3. Set up your frontend (Netlify, Vercel)"
echo "4. Update environment variables"
echo ""
print_info "Frontend build ready in: frontend/build/"
print_info "Backend ready for deployment from: backend/"
echo ""
print_warning "Don't forget to update REACT_APP_API_URL with your backend URL!"

echo ""
echo "Quick deployment options:"
echo "• Frontend: Drag 'frontend/build' folder to Netlify"
echo "• Backend: Run 'railway up' in backend/ directory"
echo ""
print_info "For detailed instructions, see DEPLOYMENT.md"
