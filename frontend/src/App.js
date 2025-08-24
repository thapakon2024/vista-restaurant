import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import ProtectedAdmin from "./pages/ProtectedAdmin";

function App() {
	return (
		<Router>
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/reservation" element={<Reservation />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/secret-admin-dashboard-2024" element={<ProtectedAdmin />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
