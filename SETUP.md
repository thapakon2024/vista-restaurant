# 🍽️ Bella Vista Restaurant - Full-Stack Web Application

A complete restaurant website built with **React** frontend and **Go** backend, featuring a modern design and full reservation system.

## 🚀 Quick Start Guide

### Backend Setup (Go + Gin)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   go mod tidy
   ```

3. **Start the server:**
   ```bash
   go run main.go
   ```
   
   The backend will run on `http://localhost:8080`

### Frontend Setup (React + TailwindCSS)

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   
   The frontend will run on `http://localhost:3000`

## 📋 Features

### Frontend Features
- ✅ **Home Page**: Restaurant introduction with featured dishes
- ✅ **Menu Page**: Dynamic menu with category filtering
- ✅ **Reservation Page**: Interactive booking form with validation
- ✅ **Contact Page**: Restaurant information and location
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Modern UI**: Clean design with TailwindCSS
- ✅ **Navigation**: React Router with active state highlighting

### Backend Features
- ✅ **REST API**: Full CRUD operations for menu and reservations
- ✅ **SQLite Database**: Persistent data storage
- ✅ **CORS Enabled**: Cross-origin requests from frontend
- ✅ **Input Validation**: Server-side validation for all inputs
- ✅ **Sample Data**: Pre-populated menu items
- ✅ **Error Handling**: Comprehensive error responses

## 🛠️ Technology Stack

**Frontend:**
- React 18 (Functional Components + Hooks)
- React Router 6 (Client-side routing)
- TailwindCSS (Styling)
- Axios (HTTP client)

**Backend:**
- Go 1.20+ (Programming language)
- Gin (Web framework)
- SQLite (Database)
- CORS middleware

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menu` | Get all menu items |
| POST | `/api/reservation` | Create a new reservation |
| GET | `/api/reservations` | Get all reservations |
| GET | `/health` | Health check |

## 📊 Database Schema

### menu_items
- `id` (INTEGER) - Primary key
- `name` (TEXT) - Item name
- `description` (TEXT) - Item description
- `price` (REAL) - Item price
- `category` (TEXT) - Item category
- `image` (TEXT) - Image URL

### reservations
- `id` (INTEGER) - Primary key
- `name` (TEXT) - Customer name
- `phone` (TEXT) - Phone number
- `date` (TEXT) - Reservation date (YYYY-MM-DD)
- `time` (TEXT) - Reservation time (HH:MM)
- `people` (INTEGER) - Number of people

## 🧪 Testing the Application

### Test Backend API
```bash
# Get menu items
curl http://localhost:8080/api/menu

# Create a reservation
curl -X POST http://localhost:8080/api/reservation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "+1234567890", 
    "date": "2025-08-25",
    "time": "19:00",
    "people": 4
  }'

# Get reservations
curl http://localhost:8080/api/reservations
```

### Sample Data
The backend automatically creates sample menu items including:
- Margherita Pizza ($18.99)
- Grilled Salmon ($28.99)
- Caesar Salad ($14.99)
- Beef Burger ($16.99)
- Chicken Alfredo ($22.99)
- Chocolate Lava Cake ($8.99)
- Mediterranean Wrap ($13.99)
- BBQ Ribs ($24.99)

## 🎨 UI Screenshots

The application features:
- **Elegant color scheme** with orange primary colors
- **Professional typography** using Inter font
- **High-quality images** from Unsplash
- **Smooth animations** and hover effects
- **Responsive grid layouts** for all screen sizes

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

### Backend Development
```bash
cd backend
go run main.go     # Start development server
go build          # Build binary
go test           # Run tests
```

## 📦 Project Structure

```
web-app/
├── backend/
│   ├── main.go           # Main server file
│   ├── go.mod            # Go dependencies
│   ├── restaurant.db     # SQLite database (auto-created)
│   └── README.md         # Backend documentation
├── frontend/
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── App.js        # Main app component
│   ├── package.json      # Frontend dependencies
│   └── README.md         # Frontend documentation
└── README.md             # This file
```

## 🚨 Troubleshooting

### Common Issues

1. **Backend won't start:**
   - Make sure Go is installed (`go version`)
   - Run `go mod tidy` to install dependencies
   - Check if port 8080 is available

2. **Frontend won't connect to backend:**
   - Ensure backend is running on port 8080
   - Check CORS configuration
   - Verify API endpoints in browser dev tools

3. **Database issues:**
   - SQLite database is created automatically
   - Delete `restaurant.db` to reset data

4. **Styling issues:**
   - Ensure TailwindCSS is properly configured
   - Check if PostCSS is working correctly

## 🎯 Next Steps / Enhancements

- Add user authentication and admin panel
- Implement email notifications for reservations
- Add menu item image upload functionality
- Create a reservation management dashboard
- Add payment integration
- Implement table availability checking
- Add customer reviews and ratings
- Create a mobile app version

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🚀**

Built with ❤️ using React and Go
