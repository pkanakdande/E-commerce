import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './Redux/Slice';
import "../styles/product.css";

function Product() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();
            setProducts(data);
        }
        fetchProduct();
    }, []);

    function addProduct(product) {
        dispatch(add(product));
    }

    return (
        <div className="product-container">
            {products.map(product => (
                <div className='container' key={product.id}>
                    <div className='card'>
                        <img src={product.images[0]} alt={product.title} className='product-img' />
                        <span style={{display:'flex', justifyContent:"center",alignItems:"center",gap:"10px"}}>   <h4>{product.title}</h4>
                            <p className='price'>Price:${product.price}</p></span>
                     
                        <p className='product-description'>{product.description}</p>
                        
                        <button onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
