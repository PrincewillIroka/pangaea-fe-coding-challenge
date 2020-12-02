import React, { useContext } from "react";
import Wrapper from "./cartStyle";
// import { AppContext } from "../../store";
import ArrowLeft from "../../assets/svg/chevron-left.svg";
import Minus from "../../assets/svg/minus.svg";
import Plus from "../../assets/svg/plus.svg";
import Close from "../../assets/svg/close.svg";

export default function Cart(props) {
  // const { state, dispatch } = useContext(AppContext);

  const handleToggleCart = (value) => {
    // dispatch({ kind: "isCartVisible", payload: false });
    props.toggleCartVisibility(value);
  };

  const handleProductQuantity = () => {};

  const handleRemoveProduct = () => {};

  return (
    <Wrapper>
      <section
        className={`cart-container ${
          props.isCartVisible
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
            <select className="cart-currency-select">
              <option value="USD"> USD </option>
              <option value="EUR"> EUR </option>
              <option value="CAD"> CAD </option>
              <option value="AUD"> AUD </option>
              <option value="GBP"> GBP </option>
              <option value="JPY"> JPY </option>
              <option disabled=""> --- </option>
              <option value="AED"> AED </option>
              <option value="AFN"> AFN </option>
              <option value="ALL"> ALL </option>
              <option value="AMD"> AMD </option>
              <option value="ANG"> ANG </option>
              <option value="AOA"> AOA </option>
              <option value="ARS"> ARS </option>
              <option value="AUD"> AUD </option>
              <option value="AWG"> AWG </option>
              <option value="AZN"> AZN </option>
              <option value="BAM"> BAM </option>
              <option value="BBD"> BBD </option>
              <option value="BDT"> BDT </option>
            </select>
          </div>

          <div className="cart-products-container">
            <div className="cart-single-product">
              <div className="cart-product-col-1">
                <h4 className="cart-product-name">Dark Circle Defense</h4>
                <div className="cart-product-detail">
                  <div className="cart-product-quantity">
                    <img
                      src={Minus}
                      alt="Minus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                    <span className="cart-product-quantity-counter">1</span>
                    <img
                      src={Plus}
                      alt="Plus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                  </div>
                  <span className="cart-product-price">$10.00</span>
                </div>
              </div>
              <div className="cart-product-col-2">
                <img
                  src={Close}
                  alt="Close Icon"
                  onClick={() => handleRemoveProduct()}
                  className="cart-product-close-icon"
                />
                <img
                  className="cart-product-image"
                  alt="Product image here"
                  src="https://cdn.shopify.com/s/files/1/2960/5204/products/charcoal-cleanser_731658f5-f7ce-42bc-b78f-3ffb01d0bf22_1024x1024.png?v=1602810817"
                />
              </div>
            </div>

            <div className="cart-single-product">
              <div className="cart-product-col-1">
                <h4 className="cart-product-name">Dark Circle Defense</h4>
                <div className="cart-product-detail">
                  <div className="cart-product-quantity">
                    <img
                      src={Minus}
                      alt="Minus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                    <span className="cart-product-quantity-counter">1</span>
                    <img
                      src={Plus}
                      alt="Plus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                  </div>
                  <span className="cart-product-price">$10.00</span>
                </div>
              </div>
              <div className="cart-product-col-2">
                <img
                  src={Close}
                  alt="Close Icon"
                  onClick={() => handleRemoveProduct()}
                  className="cart-product-close-icon"
                />
                <img
                  className="cart-product-image"
                  alt="Product image here"
                  src="https://cdn.shopify.com/s/files/1/2960/5204/products/charcoal-cleanser_731658f5-f7ce-42bc-b78f-3ffb01d0bf22_1024x1024.png?v=1602810817"
                />
              </div>
            </div>

            <div className="cart-single-product">
              <div className="cart-product-col-1">
                <h4 className="cart-product-name">Dark Circle Defense</h4>
                <div className="cart-product-detail">
                  <div className="cart-product-quantity">
                    <img
                      src={Minus}
                      alt="Minus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                    <span className="cart-product-quantity-counter">1</span>
                    <img
                      src={Plus}
                      alt="Plus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                  </div>
                  <span className="cart-product-price">$10.00</span>
                </div>
              </div>
              <div className="cart-product-col-2">
                <img
                  src={Close}
                  alt="Close Icon"
                  onClick={() => handleRemoveProduct()}
                  className="cart-product-close-icon"
                />
                <img
                  className="cart-product-image"
                  alt="Product image here"
                  src="https://cdn.shopify.com/s/files/1/2960/5204/products/charcoal-cleanser_731658f5-f7ce-42bc-b78f-3ffb01d0bf22_1024x1024.png?v=1602810817"
                />
              </div>
            </div>

            <div className="cart-single-product">
              <div className="cart-product-col-1">
                <h4 className="cart-product-name">Dark Circle Defense</h4>
                <div className="cart-product-detail">
                  <div className="cart-product-quantity">
                    <img
                      src={Minus}
                      alt="Minus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                    <span className="cart-product-quantity-counter">1</span>
                    <img
                      src={Plus}
                      alt="Plus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                  </div>
                  <span className="cart-product-price">$10.00</span>
                </div>
              </div>
              <div className="cart-product-col-2">
                <img
                  src={Close}
                  alt="Close Icon"
                  onClick={() => handleRemoveProduct()}
                  className="cart-product-close-icon"
                />
                <img
                  className="cart-product-image"
                  alt="Product image here"
                  src="https://cdn.shopify.com/s/files/1/2960/5204/products/charcoal-cleanser_731658f5-f7ce-42bc-b78f-3ffb01d0bf22_1024x1024.png?v=1602810817"
                />
              </div>
            </div>

            <div className="cart-single-product">
              <div className="cart-product-col-1">
                <h4 className="cart-product-name">Dark Circle Defense</h4>
                <div className="cart-product-detail">
                  <div className="cart-product-quantity">
                    <img
                      src={Minus}
                      alt="Minus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                    <span className="cart-product-quantity-counter">1</span>
                    <img
                      src={Plus}
                      alt="Plus Icon"
                      onClick={() => handleProductQuantity()}
                    />
                  </div>
                  <span className="cart-product-price">$10.00</span>
                </div>
              </div>
              <div className="cart-product-col-2">
                <img
                  src={Close}
                  alt="Close Icon"
                  onClick={() => handleRemoveProduct()}
                  className="cart-product-close-icon"
                />
                <img
                  className="cart-product-image"
                  alt="Product image here"
                  src="https://cdn.shopify.com/s/files/1/2960/5204/products/charcoal-cleanser_731658f5-f7ce-42bc-b78f-3ffb01d0bf22_1024x1024.png?v=1602810817"
                />
              </div>
            </div>
          </div>

          <div className="cart-footer-container">
            <div className="cart-footer-content">
              <div className="cart-subtotal-container">
                <span>Subtotal</span>
                <span>$175.80</span>
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
