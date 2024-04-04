import { Add_Item } from '../slices/CartSlice';
import { useDispatch } from 'react-redux';
import useProductData from './UseProductData';

function Body() {

    const products = useProductData();

    const dispatch = useDispatch();

    return (
        <div className='Body'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 mx-24 my-6">
                {products.length > 0 && ( // Check if recipes has data
                    products.map((product) => (
                        <div key={product.id} className='mt-12'>
                            <img src={product.image} alt="images" className='rounded-md bg-contain h-60 w-60' />
                            <h1 className='text-xl font-serif'>{product.title}</h1>
                            <div className="flex gap-9 mt-6">
                                <h2> Usd: {product.price}</h2>
                                <button onClick={() => dispatch(Add_Item(product))} type="button" className='bg-orange-500 rounded-full px-5 py-2'>Add To Cart</button>
                            </div>
                        </div>
                    )))
                }
            </div >
        </div >
    );
}

export default Body;
