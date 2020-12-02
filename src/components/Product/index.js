import React, { useContext, useEffect, memo } from "react";
import Wrapper from "./productStyle";
// import { AppContext } from "../../store";

function Product(props) {
  // const { state, dispatch } = useContext(AppContext);

  const formatMoney = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: props.currency,
    });
  };

  const handleAddToCart = (product) => {
    // dispatch({ kind: "isCartVisible", payload: true });
    props.toggleCartVisibility(true);
  };

  return (
    <Wrapper>
      <div className="product-container">
        <div className="product-content">
          <img
            className="product-image"
            src={props.product?.image_url}
            alt={props.product?.title}
          />
          <h2 className="product-name">{props.product?.title}</h2>
          <div className="product-price-container">
            <span className="product-price-text product-price-from-text">
              From:
            </span>
            <span className="product-price-text">
              {formatMoney(props.product?.price)}
            </span>
          </div>
          <button
            className="product-btn-add-to-cart"
            onClick={() => handleAddToCart(props.product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default memo(Product);
