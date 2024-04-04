import Navbar from "./Navbar";
import Footer from './Footer';
import useProductData from './UseProductData';
import { Remove_Item } from "../slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";


function MyCart() {
    const products = useProductData(); //Call The Custom Hook

    const cartItems = useSelector(state => state.cart) //Acess Data From Redux Store

    const dispatch = useDispatch(); //Dispatch actions to the Redux store from your React component

    // Filter products based on whether they are in the cart
    const productsInCart = products.filter(product => {
        return cartItems.some(item => item.id === product.id);
    });

    return (
        <div className='MyCart'>
            <Navbar />
            <h1 className='text-center my-16'>My Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 mx-24 my-6">
                {productsInCart.map(product => (
                    <div key={product.id} className='mt-12'>
                        <img src={product.image} alt="images" className='rounded-md bg-contain h-60 w-60' />
                        <h1 className='text-xl font-serif'>{product.title}</h1>
                        <div className="flex gap-9 mt-6">
                            <h2> Usd: {product.price}</h2>
                            <button onClick={() => dispatch(Remove_Item(product.id))} type="button" className='bg-red-600 rounded-full px-5 py-2'>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default MyCart