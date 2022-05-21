import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AgendaEvent from "./pages/agenda";
import KeranjangBelanja from "./pages/keranjang";
import Cart from "./pages/cart";


function App() {
	return (
			<nav class=" container navbar-fluid bg-light navbar-expand-lg p-3">
				<div className="navbar-fluid navbar-expand-lg items-center justify-center mb-5 text-xs text-gray-600 font-semibold uppercase tracking-wide">
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/"
					>
						Home
					</Link>
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/agenda"
					>
						Agenda
					</Link>
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/belanja"
					>
						Belanja Skin
					</Link>
					<Link
						className="mx-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/cart"
					>
						Cart
					</Link>
					<hr/>
				</div>
				<div className="p-6 w-full bg-white rounded-xl shadow-lg">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/agenda" element={<AgendaEvent />}></Route>
						<Route path="/belanja" element={<KeranjangBelanja />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</div>
				</nav>
	);
}

export default App;