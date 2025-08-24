import { useState } from "react";
import { createReservation } from "../services/api";

const Reservation = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		date: "",
		time: "",
		people: "",
	});
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState({ type: "", text: "" });

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage({ type: "", text: "" });

		try {
			// Validate form data
			if (
				!formData.name ||
				!formData.phone ||
				!formData.date ||
				!formData.time ||
				!formData.people
			) {
				throw new Error("Please fill in all fields");
			}

			if (parseInt(formData.people) < 1) {
				throw new Error("Number of people must be at least 1");
			}

			const reservationData = {
				...formData,
				people: parseInt(formData.people),
			};

			await createReservation(reservationData);

			setMessage({
				type: "success",
				text: "Reservation created successfully! We look forward to seeing you.",
			});

			// Reset form
			setFormData({
				name: "",
				phone: "",
				date: "",
				time: "",
				people: "",
			});
		} catch (error) {
			setMessage({
				type: "error",
				text:
					error.response?.data?.error ||
					error.message ||
					"An error occurred. Please try again.",
			});
		} finally {
			setLoading(false);
		}
	};

	// Get today's date for min date input
	const today = new Date().toISOString().split("T")[0];

	return (
		<div className="pt-16 min-h-screen bg-gray-50">
			{/* Header */}
			<section className="bg-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Make a Reservation
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Reserve your table at Bella Vista and enjoy an unforgettable
							dining experience. We'll take care of every detail to make your
							visit special.
						</p>
					</div>
				</div>
			</section>

			{/* Reservation Form */}
			<section className="py-12">
				<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-lg shadow-xl p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Name */}
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Full Name *
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									placeholder="Enter your full name"
								/>
							</div>

							{/* Phone */}
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Phone Number *
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									required
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									placeholder="Enter your phone number"
								/>
							</div>

							{/* Date and Time */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="date"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Date *
									</label>
									<input
										type="date"
										id="date"
										name="date"
										required
										min={today}
										value={formData.date}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									/>
								</div>

								<div>
									<label
										htmlFor="time"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Time *
									</label>
									<input
										type="time"
										id="time"
										name="time"
										required
										min="16:00"
										max="22:00"
										value={formData.time}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									/>
								</div>
							</div>

							{/* Number of People */}
							<div>
								<label
									htmlFor="people"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Number of People *
								</label>
								<select
									id="people"
									name="people"
									required
									value={formData.people}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
								>
									<option value="">Select number of people</option>
									{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
										<option key={num} value={num}>
											{num} {num === 1 ? "Person" : "People"}
										</option>
									))}
								</select>
							</div>

							{/* Message Display */}
							{message.text && (
								<div
									className={`p-4 rounded-md ${
										message.type === "success"
											? "bg-green-50 text-green-700 border border-green-200"
											: "bg-red-50 text-red-700 border border-red-200"
									}`}
								>
									{message.text}
								</div>
							)}

							{/* Submit Button */}
							<button
								type="submit"
								disabled={loading}
								className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
									loading
										? "bg-gray-400 cursor-not-allowed"
										: "bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
								} text-white`}
							>
								{loading ? (
									<div className="flex items-center justify-center">
										<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
										Processing...
									</div>
								) : (
									"Make Reservation"
								)}
							</button>
						</form>

						{/* Restaurant Info */}
						<div className="mt-8 pt-8 border-t border-gray-200">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">
								Restaurant Information
							</h3>
							<div className="space-y-2 text-gray-600">
								<p>
									<strong>Hours:</strong> Monday-Thursday: 5:00 PM - 10:00 PM
								</p>
								<p>
									<strong>Friday-Saturday:</strong> 5:00 PM - 11:00 PM
								</p>
								<p>
									<strong>Sunday:</strong> 4:00 PM - 9:00 PM
								</p>
								<p>
									<strong>Phone:</strong> (555) 123-4567
								</p>
								<p>
									<strong>Address:</strong> 123 Fine Dining Street, Culinary
									District, CD 12345
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Reservation;
