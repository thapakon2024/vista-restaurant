package main

import (
	"database/sql"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

// MenuItem represents a menu item
type MenuItem struct {
	ID          int     `json:"id" db:"id"`
	Name        string  `json:"name" db:"name"`
	Description string  `json:"description" db:"description"`
	Price       float64 `json:"price" db:"price"`
	Category    string  `json:"category" db:"category"`
	Image       string  `json:"image" db:"image"`
}

// Reservation represents a table reservation
type Reservation struct {
	ID     int    `json:"id" db:"id"`
	Name   string `json:"name" db:"name"`
	Phone  string `json:"phone" db:"phone"`
	Date   string `json:"date" db:"date"`
	Time   string `json:"time" db:"time"`
	People int    `json:"people" db:"people"`
}

var db *sql.DB

func main() {
	// Initialize database
	initDB()
	defer db.Close()

	// Create Gin router
	r := gin.Default()

	// CORS middleware
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"http://localhost:3000", 
		"https://baantodo.netlify.app",
		"https://*.vercel.app",
	}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	config.AllowCredentials = true
	r.Use(cors.New(config))

	// API routes
	api := r.Group("/api")
	{
		// Menu endpoints
		api.GET("/menu", getMenuItems)
		api.POST("/menu", createMenuItem)
		api.PUT("/menu/:id", updateMenuItem)
		api.DELETE("/menu/:id", deleteMenuItem)
		
		// Reservation endpoints
		api.POST("/reservation", createReservation)
		api.GET("/reservations", getReservations)
	}

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "OK"})
	})

	// Get port from environment variable or default to 8080
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s...", port)
	r.Run(":" + port)
}

func initDB() {
	var err error
	db, err = sql.Open("sqlite3", "./restaurant.db")
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Create tables
	createTables()
	// Insert sample menu data
	insertSampleData()
}

func createTables() {
	menuTable := `
	CREATE TABLE IF NOT EXISTS menu_items (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		description TEXT NOT NULL,
		price REAL NOT NULL,
		category TEXT NOT NULL,
		image TEXT NOT NULL
	)`

	reservationTable := `
	CREATE TABLE IF NOT EXISTS reservations (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		phone TEXT NOT NULL,
		date TEXT NOT NULL,
		time TEXT NOT NULL,
		people INTEGER NOT NULL
	)`

	if _, err := db.Exec(menuTable); err != nil {
		log.Fatal("Failed to create menu_items table:", err)
	}

	if _, err := db.Exec(reservationTable); err != nil {
		log.Fatal("Failed to create reservations table:", err)
	}
}

func insertSampleData() {
	// Check if menu items already exist
	var count int
	err := db.QueryRow("SELECT COUNT(*) FROM menu_items").Scan(&count)
	if err != nil {
		log.Fatal("Failed to check menu items:", err)
	}

	if count > 0 {
		return // Data already exists
	}

	menuItems := []MenuItem{
		{Name: "Margherita Pizza", Description: "Fresh tomatoes, mozzarella, basil, and olive oil", Price: 18.99, Category: "Pizza", Image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300"},
		{Name: "Grilled Salmon", Description: "Fresh Atlantic salmon with lemon butter sauce", Price: 28.99, Category: "Seafood", Image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300"},
		{Name: "Caesar Salad", Description: "Crisp romaine lettuce, parmesan, croutons, caesar dressing", Price: 14.99, Category: "Salads", Image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300"},
		{Name: "Beef Burger", Description: "Angus beef patty with lettuce, tomato, and fries", Price: 16.99, Category: "Burgers", Image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"},
		{Name: "Chicken Alfredo", Description: "Grilled chicken breast over fettuccine with creamy alfredo sauce", Price: 22.99, Category: "Pasta", Image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300"},
		{Name: "Chocolate Lava Cake", Description: "Warm chocolate cake with molten center, vanilla ice cream", Price: 8.99, Category: "Desserts", Image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300"},
		{Name: "Mediterranean Wrap", Description: "Grilled vegetables, feta cheese, olives in a warm tortilla", Price: 13.99, Category: "Wraps", Image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300"},
		{Name: "BBQ Ribs", Description: "Slow-cooked pork ribs with tangy BBQ sauce", Price: 24.99, Category: "BBQ", Image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300"},
	}

	for _, item := range menuItems {
		_, err := db.Exec(
			"INSERT INTO menu_items (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)",
			item.Name, item.Description, item.Price, item.Category, item.Image,
		)
		if err != nil {
			log.Printf("Failed to insert menu item %s: %v", item.Name, err)
		}
	}
	log.Println("Sample menu data inserted successfully")
}

// API Handlers
func getMenuItems(c *gin.Context) {
	rows, err := db.Query("SELECT id, name, description, price, category, image FROM menu_items")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch menu items"})
		return
	}
	defer rows.Close()

	var menuItems []MenuItem
	for rows.Next() {
		var item MenuItem
		err := rows.Scan(&item.ID, &item.Name, &item.Description, &item.Price, &item.Category, &item.Image)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan menu item"})
			return
		}
		menuItems = append(menuItems, item)
	}

	c.JSON(http.StatusOK, menuItems)
}

// Create a new menu item
func createMenuItem(c *gin.Context) {
	var item MenuItem
	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	// Validate required fields
	if item.Name == "" || item.Price <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Name and price are required"})
		return
	}

	result, err := db.Exec(`
		INSERT INTO menu_items (name, description, price, category, image) 
		VALUES (?, ?, ?, ?, ?)`,
		item.Name, item.Description, item.Price, item.Category, item.Image)
	
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create menu item"})
		return
	}

	// Get the inserted ID
	id, err := result.LastInsertId()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get inserted ID"})
		return
	}

	item.ID = int(id)
	c.JSON(http.StatusCreated, item)
}

// Update an existing menu item
func updateMenuItem(c *gin.Context) {
	id := c.Param("id")
	var item MenuItem
	
	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	// Validate required fields
	if item.Name == "" || item.Price <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Name and price are required"})
		return
	}

	result, err := db.Exec(`
		UPDATE menu_items 
		SET name = ?, description = ?, price = ?, category = ?, image = ? 
		WHERE id = ?`,
		item.Name, item.Description, item.Price, item.Category, item.Image, id)
	
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update menu item"})
		return
	}

	// Check if any rows were affected
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to check update result"})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Menu item not found"})
		return
	}

	// Return the updated item with the ID
	item.ID, _ = strconv.Atoi(id)
	c.JSON(http.StatusOK, item)
}

// Delete a menu item
func deleteMenuItem(c *gin.Context) {
	id := c.Param("id")

	result, err := db.Exec("DELETE FROM menu_items WHERE id = ?", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete menu item"})
		return
	}

	// Check if any rows were affected
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to check delete result"})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Menu item not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Menu item deleted successfully"})
}

func createReservation(c *gin.Context) {
	var reservation Reservation
	if err := c.ShouldBindJSON(&reservation); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	// Validate reservation data
	if reservation.Name == "" || reservation.Phone == "" || reservation.Date == "" || reservation.Time == "" || reservation.People <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "All fields are required"})
		return
	}

	// Parse and validate date
	_, err := time.Parse("2006-01-02", reservation.Date)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid date format. Use YYYY-MM-DD"})
		return
	}

	// Parse and validate time
	_, err = time.Parse("15:04", reservation.Time)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid time format. Use HH:MM"})
		return
	}

	// Insert reservation into database
	result, err := db.Exec(
		"INSERT INTO reservations (name, phone, date, time, people) VALUES (?, ?, ?, ?, ?)",
		reservation.Name, reservation.Phone, reservation.Date, reservation.Time, reservation.People,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create reservation"})
		return
	}

	id, _ := result.LastInsertId()
	reservation.ID = int(id)

	c.JSON(http.StatusCreated, reservation)
}

func getReservations(c *gin.Context) {
	rows, err := db.Query("SELECT id, name, phone, date, time, people FROM reservations ORDER BY date, time")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch reservations"})
		return
	}
	defer rows.Close()

	var reservations []Reservation
	for rows.Next() {
		var reservation Reservation
		err := rows.Scan(&reservation.ID, &reservation.Name, &reservation.Phone, &reservation.Date, &reservation.Time, &reservation.People)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan reservation"})
			return
		}
		reservations = append(reservations, reservation)
	}

	c.JSON(http.StatusOK, reservations)
}
