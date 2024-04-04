// useProductData.js (Custom Hook)
import { useState, useEffect } from 'react';

function useProductData() {
    const [products, setProducts] = useState([]);
    const url = 'https://fakestoreapi.com/products/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return products;
}

export default useProductData;
