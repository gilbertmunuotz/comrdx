import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Navbar() {

    const cartItems = useSelector(state => state.cart); //Check the state from the specific reducer

    return (
        <nav className="bg-transparent fixed top-0 w-full z-10 flex backdrop-blur-lg h-16 items-center justify-between">
            <div className="text-right text-3xl font-serif ml-20">
                <Link to="/">
                    <h1>Daisy Shop</h1>
                </Link>
            </div>
            <Link to="/Mycarts">
                <div className='mr-20 flex text-xl'>
                    <FaBagShopping size={28} /> {cartItems.length}
                </div>
            </Link>
        </nav>
    )
}

export default Navbar