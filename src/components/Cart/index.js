import React, { useContext } from "react";
import shortid from "shortid";
import Wrapper from "./cartStyle";
import { AppContext } from "../../store";
import ArrowLeft from "../../assets/svg/chevron-left.svg";
import Minus from "../../assets/svg/minus.svg";
import Plus from "../../assets/svg/plus.svg";
import Close from "../../assets/svg/close.svg";
import { formatMoney } from "../../utils";

export default function Cart(props) {
  const { state, dispatch } = useContext(AppContext);

  const handleToggleCart = (value) => {
    props.toggleCartVisibility(value);
  };

  const handleProductQuantity = (type, cartItem) => {
    let cart = state.cart;

    cart = cart.map((item) => {
      if (item.id === cartItem.id) {
        if (type === "plus") {
          item.quantity += 1;
        } else if (type === "minus") {
          item.quantity -= 1;
        }
      }
      return item;
    });

    dispatch({ kind: "cart", payload: cart });
  };

  const handleRemoveProduct = (index) => {
    let cart = state.cart;
    cart.splice(index, 1);
    dispatch({ kind: "cart", payload: cart });
  };

  const handleChangeCurrency = (selectedCurrency) => {
    props.changeCurrency(selectedCurrency);
  };

  const getTotalAmount = (cart) => {
    let total = 0;
    total = cart?.reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      return acc;
    }, 0);
    return total;
  };

  return (
    <Wrapper>
      <section
        className={`cart-container ${
          props.data?.isCartVisible
            ? "cart-container-visible"
            : "cart-container-hidden"
        }`}
      >
        <div className="cart-dummy-content"></div>
        <div className="cart-full-content">
          <div className="cart-header-content">
            <img
              src={ArrowLeft}
              alt="ArrowLeft Icon"
              className="icon-arrow-left"
              onClick={() => handleToggleCart(false)}
            />
            <span className="cart-title">YOUR CART</span>
          </div>

          <div className="cart-currency-container">
            <select
              className="cart-currency-select"
              onChange={(e) => handleChangeCurrency(e.target.value)}
              value={props.data?.selectedCurrency}
            >
              {props.data?.currencies?.map((currency) => (
                <option value={currency} key={shortid.generate()}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="cart-products-container">
            {state.cart && state.cart.length ? (
              state.cart.map((cartItem, index) => (
                <div className="cart-single-product" key={shortid.generate()}>
                  <div className="cart-product-col-1">
                    <h4 className="cart-product-name">{cartItem.title}</h4>
                    <div className="cart-product-detail">
                      <div className="cart-product-quantity">
                        <img
                          src={Minus}
                          alt="Minus Icon"
                          onClick={() => {
                            cartItem?.quantity === 1
                              ? handleRemoveProduct(index)
                              : handleProductQuantity("minus", cartItem);
                          }}
                        />
                        <span className="cart-product-quantity-counter">
                          {cartItem.quantity}
                        </span>
                        <img
                          src={Plus}
                          alt="Plus Icon"
                          onClick={() =>
                            handleProductQuantity("plus", cartItem)
                          }
                        />
                      </div>
                      <span className="cart-product-price">
                        {cartItem.price}
                      </span>
                    </div>
                  </div>
                  <div className="cart-product-col-2">
                    <img
                      src={Close}
                      alt="Close Icon"
                      onClick={() => handleRemoveProduct(index)}
                      className="cart-product-close-icon"
                      title="Remove Item from Cart"
                    />
                    <img
                      className="cart-product-image"
                      alt="Product here"
                      src={cartItem.image_url}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="cart-empty-container">
                <span>No Item in Cart</span>
              </div>
            )}
          </div>

          <div className="cart-footer-container">
            <div className="cart-footer-content">
              <div className="cart-subtotal-container">
                <span>Subtotal</span>
                <span>
                  {formatMoney(
                    getTotalAmount(state.cart),
                    props.data?.selectedCurrency
                  )}
                </span>
              </div>
              <button className="cart-btn-make-subscription">
                Make this a subscription (Save 20%)
              </button>
              <button className="cart-btn-proceed-checkout">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
