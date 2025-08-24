# Restaurant Website - Full Stack Application

A full-stack restaurant website built with React (frontend) and Go (backend).

## Project Structure

```
web-app/
├── frontend/          # React application
├── backend/           # Go application with Gin framework
└── README.md
```

## Quick Start

### Backend (Go + Gin)
```bash
cd backend
go mod init restaurant-backend
go mod tidy
go run main.go
```
The backend will run on `http://localhost:8080`

### Frontend (React + TailwindCSS)
```bash
cd frontend
npm install
npm start
```
The frontend will run on `http://localhost:3000`

## Features

- **Home Page**: Restaurant introduction and featured dishes
- **Menu Page**: Dynamic menu items from backend API
- **Reservation Page**: Table booking form
- **Contact Page**: Contact information and map
- **REST API**: Full CRUD operations for menu and reservations
- **Database**: SQLite for data persistence

## API Endpoints

- `GET /api/menu` - Get all menu items
- `POST /api/reservation` - Create a new reservation
- `GET /api/reservations` - Get all reservations

## Tech Stack

**Frontend:**
- React 18
- React Router
- TailwindCSS
- Axios for API calls

**Backend:**
- Go 1.21+
- Gin framework
- SQLite database
- CORS enabled
