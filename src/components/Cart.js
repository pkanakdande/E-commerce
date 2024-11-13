import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './Redux/Slice'
import "../styles/product.css"
function Cart() {
const dispatch=useDispatch()
const products=useSelector(state=>state.cart)

function removedata(productId){
  dispatch(remove(productId))
}   

useEffect(()=>{
 
},[])
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", alignItems: "center" }}>
    {products.map(product => (
        <div className='container' key={product.id} >
            <div className='card' >
                <img src={product.images[0]} alt={product.title} className='product-img'/>
               <span style={{display:'flex', justifyContent:"center",alignItems:"center",gap:"10px"}}> <h4>{product.title}</h4>
                <p className='price'>Price:${product.price}</p></span>
                <p className='product-description'>{product.description}</p>
                <button onClick={() => removedata(product.id)}>Remove</button>
            </div>
        </div>
    ))}
</div>
  )
}

export default Cart