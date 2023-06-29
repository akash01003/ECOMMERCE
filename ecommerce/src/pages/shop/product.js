import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="ProductImages" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="cartButton" onClick={() => addToCart(id)}>
        Add to Cart {cartItemCount > 0 && <> ({cartItemCount}) </>}
      </button>
    </div>
  );
};

export default Product;
