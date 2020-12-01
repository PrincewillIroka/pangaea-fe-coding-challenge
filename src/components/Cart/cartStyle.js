import styled from "styled-components";

const Wrapper = styled.div`
  .cart-container {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    opacity: 0.8;
    z-index: 1399;
    background: rgb(205, 209, 206);
    backdrop-filter: blur(3px);
    display: flex;
  }

  .cart-dummy-content {
    width: 60%;
  }

  .cart-full-content {
    width: 40%;
    background: #fff;
    height: 100%;
    position: relative;
  }

  .cart-content-header {
    display: flex;
    align-items: center;
    padding: 20px 0 0 20px;

    .icon-arrow-right {
      height: 11px;
      width: 11px;
      border: 1px solid #ccc;
      border-radius: 50%;
      padding: 7px;
    }

    .cart-title{
      text-transform: uppercase;
      margin 0 auto;
      color: #696969;
      font-weight: 400;
      font-family: "FF Bau Medium", sans-serif;
      font-size: 12px;
      line-height: 1.2;
    }
  }

  .cart-currency-container{
    margin: 10px 20px 0;
  }

  .cart-content-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #d0d0d0;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1;
    padding: 20px 20px;
    height: 100px;
    width: 100%;

    .cart-subtotal-container {
      display: flex;
      justify-content: space-between;

      .cart-subtotal-price {
        display: flex;
        flex-direction: column;

        > span:nth-child(1) {
          text-align: right;
        }
      }
    }
  }
`;

export default Wrapper;
