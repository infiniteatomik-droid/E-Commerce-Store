import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";

export default function Header() {
    const { totalQuantity } = useSelector((state: RootState) => state.cart);

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <Link to="/" className="font-bold text-lg">E-Commerce Store</Link>
          
            <Link to="/cart" className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Cart ({totalQuantity})
            </Link>
        </header>
    );
}
