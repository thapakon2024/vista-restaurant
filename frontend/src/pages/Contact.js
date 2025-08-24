const Contact = () => {
	return (
		<div className="pt-16 min-h-screen bg-gray-50">
			{/* Header */}
			<section className="bg-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Contact Us
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							We'd love to hear from you. Get in touch with us for reservations,
							inquiries, or any questions about Bella Vista Restaurant.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Information */}
			<section className="py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Details */}
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Get in Touch
							</h2>

							<div className="space-y-6">
								{/* Address */}
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<svg
											className="h-6 w-6 text-primary-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-medium text-gray-900">
											Address
										</h3>
										<p className="text-gray-600">
											123 Fine Dining Street
											<br />
											Culinary District, CD 12345
											<br />
											United States
										</p>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<svg
											className="h-6 w-6 text-primary-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-medium text-gray-900">Phone</h3>
										<p className="text-gray-600">(555) 123-4567</p>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<svg
											className="h-6 w-6 text-primary-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-medium text-gray-900">Email</h3>
										<p className="text-gray-600">info@bellavista.com</p>
									</div>
								</div>

								{/* Hours */}
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<svg
											className="h-6 w-6 text-primary-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-medium text-gray-900">Hours</h3>
										<div className="text-gray-600 space-y-1">
											<p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
											<p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
											<p>Sunday: 4:00 PM - 9:00 PM</p>
										</div>
									</div>
								</div>
							</div>

							{/* Social Media */}
							<div className="mt-8 pt-8 border-t border-gray-200">
								<h3 className="text-lg font-medium text-gray-900 mb-4">
									Follow Us
								</h3>
								<div className="flex space-x-4">
									<a
										href="#"
										className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
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
										className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
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
										className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
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
						</div>

						{/* Map */}
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="h-96 bg-gray-200 flex items-center justify-center">
								<div className="text-center">
									<svg
										className="mx-auto h-12 w-12 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<h3 className="mt-2 text-sm font-medium text-gray-900">
										Interactive Map
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										Map would be integrated here
										<br />
										(Google Maps, Mapbox, etc.)
									</p>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900 mb-2">
									Location
								</h3>
								<p className="text-gray-600">
									Located in the heart of the Culinary District, Bella Vista is
									easily accessible by car or public transportation. Street
									parking and valet service available.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-primary-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Ready to Dine with Us?
					</h2>
					<p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
						Make a reservation today and experience the exceptional cuisine and
						service that Bella Vista is known for.
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

export default Contact;
