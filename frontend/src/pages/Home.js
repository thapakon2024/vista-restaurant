import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMenuItems } from "../services/api";

const Home = () => {
	const [featuredItems, setFeaturedItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFeaturedItems = async () => {
			try {
				const menuItems = await getMenuItems();
				// Get first 3 items as featured
				setFeaturedItems(menuItems.slice(0, 3));
			} catch (error) {
				console.error("Error fetching featured items:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchFeaturedItems();
	}, []);

	return (
		<div className="pt-16">
			{/* Hero Section */}
			<section className="relative bg-gray-900 text-white">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
					style={{
						backgroundImage:
							"url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)",
					}}
				></div>
				<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Welcome to <span className="text-primary-400">Bella Vista</span>
					</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-3xl">
						Experience culinary excellence in an elegant atmosphere. Our passion
						for fine dining brings you the freshest ingredients prepared by
						world-class chefs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							to="/menu"
							className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
						>
							View Our Menu
						</Link>
						<Link
							to="/reservation"
							className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
						>
							Make a Reservation
						</Link>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Our Story
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								Founded in 2010, Bella Vista has been serving exceptional
								cuisine that celebrates both traditional flavors and modern
								culinary innovation. Our commitment to quality ingredients and
								impeccable service has made us a destination for food lovers
								from around the world.
							</p>
							<p className="text-lg text-gray-600 mb-8">
								Every dish is crafted with passion and attention to detail,
								ensuring that each visit is a memorable culinary journey.
							</p>
							<Link
								to="/contact"
								className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
							>
								Learn More
							</Link>
						</div>
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
								alt="Restaurant interior"
								className="rounded-lg shadow-xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Dishes */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Featured Dishes
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Discover some of our most popular dishes, crafted with the finest
							ingredients and prepared with culinary expertise.
						</p>
					</div>

					{loading ? (
						<div className="flex justify-center">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{featuredItems.map((item) => (
								<div
									key={item.id}
									className="bg-white rounded-lg shadow-lg overflow-hidden"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-48 object-cover"
									/>
									<div className="p-6">
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											{item.name}
										</h3>
										<p className="text-gray-600 mb-4">{item.description}</p>
										<div className="flex justify-between items-center">
											<span className="text-2xl font-bold text-primary-600">
												${item.price.toFixed(2)}
											</span>
											<span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
												{item.category}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					)}

					<div className="text-center mt-12">
						<Link
							to="/menu"
							className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
						>
							View Full Menu
						</Link>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-primary-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Ready for an Unforgettable Dining Experience?
					</h2>
					<p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
						Book your table today and let us create a memorable evening for you
						and your guests.
					</p>
					<Link
						to="/reservation"
						className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
					>
						Make a Reservation
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
