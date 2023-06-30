import React, { useContext } from "react";
import { Items } from "../../Items";
import { ShopContext } from "../../context/shopcontext";
import CartItem from "./cartitem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button className="CheckOutBtn">CheckOut</button>
        </div>
      ) : (
        <div>
        <h1>Your Shopping Cart is Empty</h1>
        <button className="BackToShopBtn" onClick={() => navigate("/")}>Back to Shop</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
