import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/product.css";

function Nav() {
  const items = useSelector(state => state.cart);

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
      <div className="cart-info">
        <span className="item-count">Items: {items.length}</span>
        <span className="total-price">Total Price: ${calculateTotalPrice()}</span>
      </div>
    </nav>
  );
}

export default Nav;
