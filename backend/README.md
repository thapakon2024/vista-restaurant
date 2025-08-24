# Restaurant Backend API

A REST API server built with Go and Gin framework for the restaurant website.

## Features

- RESTful API endpoints for menu items and reservations
- SQLite database for data persistence
- CORS enabled for frontend integration
- Input validation and error handling
- Sample menu data automatically populated

## API Endpoints

### Menu
- `GET /api/menu` - Get all menu items

### Reservations
- `POST /api/reservation` - Create a new reservation
- `GET /api/reservations` - Get all reservations

### Health Check
- `GET /health` - Server health status

## Running the Backend

1. **Initialize Go modules:**
   ```bash
   go mod init restaurant-backend
   go mod tidy
   ```

2. **Run the server:**
   ```bash
   go run main.go
   ```

The server will start on `http://localhost:8080`

## Database Schema

### menu_items
- `id` - Primary key (INTEGER)
- `name` - Item name (TEXT)
- `description` - Item description (TEXT)
- `price` - Item price (REAL)
- `category` - Item category (TEXT)
- `image` - Image URL (TEXT)

### reservations
- `id` - Primary key (INTEGER)
- `name` - Customer name (TEXT)
- `phone` - Phone number (TEXT)
- `date` - Reservation date (TEXT, YYYY-MM-DD)
- `time` - Reservation time (TEXT, HH:MM)
- `people` - Number of people (INTEGER)

## Sample API Requests

### Create a Reservation
```bash
curl -X POST http://localhost:8080/api/reservation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "+1234567890",
    "date": "2025-08-25",
    "time": "19:00",
    "people": 4
  }'
```

### Get Menu Items
```bash
curl http://localhost:8080/api/menu
```

### Get Reservations
```bash
curl http://localhost:8080/api/reservations
```
