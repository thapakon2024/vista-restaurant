import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "Menu", href: "/menu" },
		{ name: "Reservation", href: "/reservation" },
		{ name: "Contact", href: "/contact" },
		{ name: "Admin", href: "/admin" },
	];

	const isActive = (path) => location.pathname === path;

	return (
		<nav className="bg-white shadow-lg fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="flex-shrink-0">
							<h1 className="text-2xl font-bold text-primary-600">
								Bella Vista
							</h1>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
									isActive(item.href)
										? "text-primary-600 bg-primary-50"
										: "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Menu"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Close"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
									isActive(item.href)
										? "text-primary-600 bg-primary-50"
										: "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
								}`}
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
