import { useState, useEffect } from "react";
import { getMenuItems } from "../services/api";

const Menu = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		const fetchMenuItems = async () => {
			try {
				const items = await getMenuItems();
				setMenuItems(items);
			} catch (error) {
				console.error("Error fetching menu items:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMenuItems();
	}, []);

	// Get unique categories
	const categories = [
		"All",
		...new Set(menuItems.map((item) => item.category)),
	];

	// Filter items by category
	const filteredItems =
		selectedCategory === "All"
			? menuItems
			: menuItems.filter((item) => item.category === selectedCategory);

	return (
		<div className="pt-16 min-h-screen bg-gray-50">
			{/* Header */}
			<section className="bg-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Our Menu
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Explore our carefully curated selection of dishes, prepared with
							the finest ingredients and crafted with passion by our expert
							chefs.
						</p>
					</div>
				</div>
			</section>

			{/* Category Filter */}
			<section className="py-8 bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
									selectedCategory === category
										? "bg-primary-600 text-white"
										: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Menu Items */}
			<section className="py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{loading ? (
						<div className="flex justify-center py-12">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
						</div>
					) : (
						<>
							{filteredItems.length === 0 ? (
								<div className="text-center py-12">
									<p className="text-lg text-gray-600">
										No items found in this category.
									</p>
								</div>
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{filteredItems.map((item) => (
										<div
											key={item.id}
											className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
										>
											<div className="relative">
												<img
													src={item.image}
													alt={item.name}
													className="w-full h-48 object-cover"
												/>
												<div className="absolute top-4 right-4">
													<span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium shadow">
														{item.category}
													</span>
												</div>
											</div>
											<div className="p-6">
												<div className="flex justify-between items-start mb-2">
													<h3 className="text-xl font-semibold text-gray-900">
														{item.name}
													</h3>
													<span className="text-2xl font-bold text-primary-600 ml-4">
														${item.price.toFixed(2)}
													</span>
												</div>
												<p className="text-gray-600 leading-relaxed">
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>
							)}
						</>
					)}
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-primary-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Ready to Taste These Amazing Dishes?
					</h2>
					<p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
						Reserve your table now and enjoy an exceptional dining experience at
						Bella Vista.
					</p>
					<a
						href="/reservation"
						className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
					>
						Make a Reservation
					</a>
				</div>
			</section>
		</div>
	);
};

export default Menu;
