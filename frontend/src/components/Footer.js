import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Restaurant Info */}
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-2xl font-bold text-white mb-4">Bella Vista</h3>
						<p className="text-gray-300 mb-4">
							Experience fine dining at its best. Our restaurant offers an
							exquisite culinary journey with fresh ingredients, expert
							preparation, and exceptional service.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors duration-200"
							>
								<span className="sr-only">Facebook</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors duration-200"
							>
								<span className="sr-only">Instagram</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.346-1.24-.898-.75-1.347-1.804-1.347-3.16 0-1.356.449-2.41 1.347-3.16.898-.75 2.049-1.24 3.346-1.24 1.297 0 2.448.49 3.346 1.24.898.75 1.347 1.804 1.347 3.16 0 1.356-.449 2.41-1.347 3.16-.898.75-2.049 1.24-3.346 1.24zm7.718-9.03a.968.968 0 01-.969-.969.968.968 0 01.969-.969.968.968 0 01.969.969.968.968 0 01-.969.969z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors duration-200"
							>
								<span className="sr-only">Twitter</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
						</div>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Info</h3>
						<div className="space-y-2 text-gray-300">
							<p>123 Fine Dining Street</p>
							<p>Culinary District, CD 12345</p>
							<p>Phone: (555) 123-4567</p>
							<p>Email: info@bellavista.com</p>
						</div>
					</div>

					{/* Hours */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Hours</h3>
						<div className="space-y-2 text-gray-300">
							<div className="flex justify-between">
								<span>Mon - Thu:</span>
								<span>5:00 PM - 10:00 PM</span>
							</div>
							<div className="flex justify-between">
								<span>Fri - Sat:</span>
								<span>5:00 PM - 11:00 PM</span>
							</div>
							<div className="flex justify-between">
								<span>Sunday:</span>
								<span>4:00 PM - 9:00 PM</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
					<p>&copy; 2025 Bella Vista Restaurant. All rights reserved.</p>
					{/* Hidden admin access - only visible on hover and you need to know the path */}
					<Link 
						to="/secret-admin-dashboard-2024" 
						className="text-gray-900 hover:text-gray-700 transition-colors duration-200 opacity-0 hover:opacity-30 text-xs absolute bottom-2 right-4"
						title="Admin Access"
					>
						⚙️
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
