import React from "react";
import { Items } from "../../Items";
import Product from "./product";
import './shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Shophouse</h1>
      </div>
      <div className="products">
        {Items.map((item) => (
          <Product data={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
