import React, { useContext, memo } from "react";
import Wrapper from "./productStyle";
import { AppContext } from "../../store";
import { formatMoney } from "../../utils";

function Product(props) {
  const { state, dispatch } = useContext(AppContext);

  const handleAddToCart = async (product) => {
    let cart = state.cart;
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      cart = cart.map((item) => {
        if (item.id === cartItem.id) {
          item.quantity += 1;
        }
        return item;
      });
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    await dispatch({ kind: "cart", payload: cart });
    props.toggleCartVisibility(true);
  };

  return (
    <Wrapper>
      <div className="product-container" data-test-id="product-container">
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
              {formatMoney(props.product?.price, props.currency)}
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
