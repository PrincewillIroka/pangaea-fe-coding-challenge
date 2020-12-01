import React, { useContext } from "react";
import Wrapper from "./cartStyle";
import { AppContext } from "../../store";
import arrowRight from "../../assets/svg/arrow-right.svg";

export default function Cart() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Wrapper>
      <section className="cart-container">
        <div className="cart-dummy-content"></div>
        <div className="cart-full-content">
          <div className="cart-content-header">
            <img
              src={arrowRight}
              alt="ArrowRight Icon"
              className="icon-arrow-right"
            />
            <span className="cart-title">YOUR CART</span>
          </div>

          <div className="cart-currency-container"></div>

          <div className="cart-content-footer">
            <div className="cart-subtotal-container">
              <span>Subtotal</span>
              <div className="cart-subtotal-price">
                <span>$175.80</span>
                <span>every 2 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
