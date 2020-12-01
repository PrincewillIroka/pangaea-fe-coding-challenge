import React, { useContext } from "react";
import Wrapper from "./productStyle";
import { AppContext } from "../../store";

export default function Product({ product, currency }) {
  const { state, dispatch } = useContext(AppContext);

  const formatMoney = (number) => {
    return number.toLocaleString("en-US", { style: "currency", currency });
  };

  const handleAddToCart = (product) => {
    dispatch({ kind: "isCartVisible", payload: true });
  };

  return (
    <Wrapper>
      <div className="product-container">
        <div className="product-content">
          <img
            className="product-image"
            src="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968"
          />
          <h2 className="product-name">{product?.title}</h2>
          <div className="product-price-container">
            <span className="product-price-text product-price-from-text">
              From:
            </span>
            <span className="product-price-text">
              {formatMoney(product?.price)}
            </span>
          </div>
          <button
            className="product-btn-add-to-cart"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
