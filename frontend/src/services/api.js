import axios from "axios";

// Use environment variable or fallback to localhost for development
const API_BASE_URL = process.env.REACT_APP_API_URL
	? `${process.env.REACT_APP_API_URL}/api`
	: "http://localhost:8080/api";

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Menu API
export const getMenuItems = async () => {
	try {
		const response = await api.get("/menu");
		return response.data;
	} catch (error) {
		console.error("Error fetching menu items:", error);
		throw error;
	}
};

// Reservation API
export const createReservation = async (reservationData) => {
	try {
		const response = await api.post("/reservation", reservationData);
		return response.data;
	} catch (error) {
		console.error("Error creating reservation:", error);
		throw error;
	}
};

export const getReservations = async () => {
	try {
		const response = await api.get("/reservations");
		return response.data;
	} catch (error) {
		console.error("Error fetching reservations:", error);
		throw error;
	}
};

export default api;
