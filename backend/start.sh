#!/bin/bash

# Backend startup script for Bella Vista Restaurant

echo "Starting Bella Vista Restaurant Backend..."
echo "Make sure you're in the backend directory"

# Check if main.go exists
if [ ! -f "main.go" ]; then
    echo "Error: main.go not found. Please make sure you're in the backend directory."
    exit 1
fi

# Initialize Go modules if not done
if [ ! -f "go.mod" ]; then
    echo "Initializing Go modules..."
    go mod init restaurant-backend
fi

# Download dependencies
echo "Downloading dependencies..."
go mod tidy

# Start the server
echo "Starting the server on port 8080..."
go run main.go
