import api from "./api";

// Admin API functions for menu management

export const createMenuItem = async (menuItem) => {
	try {
		const response = await api.post("/menu", menuItem);
		return response.data;
	} catch (error) {
		console.error("Error creating menu item:", error);
		throw error;
	}
};

export const updateMenuItem = async (id, menuItem) => {
	try {
		const response = await api.put(`/menu/${id}`, menuItem);
		return response.data;
	} catch (error) {
		console.error("Error updating menu item:", error);
		throw error;
	}
};

export const deleteMenuItem = async (id) => {
	try {
		const response = await api.delete(`/menu/${id}`);
		return response.data;
	} catch (error) {
		console.error("Error deleting menu item:", error);
		throw error;
	}
};

// Re-export the existing getMenuItems function
export { getMenuItems } from "./api";
