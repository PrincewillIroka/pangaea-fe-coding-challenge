import styled from "styled-components";

const Wrapper = styled.div`
  .cart-container {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    transition-duration: 0.4s;
  }

  .cart-container-visible{
    transform: translateX(0%);
    z-index: 1399;
  }

  .cart-container-hidden{
    transform: translateX(120%);
  }

  .cart-dummy-content {
    width: 55%;
    opacity: 0.8;
    background: rgb(205, 209, 206);
    backdrop-filter: blur(3px);
  }

  .cart-full-content {
    width: 45%;
    background: #fff;
    height: 100%;
    position: relative;
    background: #F2F3F0;
  }

  .cart-header-content {
    display: flex;
    align-items: center;
    padding: 20px 0 0 30px;

    >.icon-arrow-left {
      height: 20px;
      width: 20px;
      border: 1px solid #ccc;
      border-radius: 50%;
      padding: 3px;
    }

    >.cart-title{
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
    margin: 10px 30px 20px;

    >.cart-currency-select{
      max-width: 80px;
      padding: 8px 13px 5px 10px;
      background-position: 100% 60%;
      cursor: pointer;
      outline: none;
      border: transparent;

      option {
        display: block;
        font-size: 15px;
        height: 2.0rem;
        padding: 5px 1px;
      }
    }
  }

  .cart-products-container{
    padding: 0 30px;    
    height: calc(100% - 300px);
    overflow-y: auto;

    >.cart-single-product{
      display: flex;
      height: 163px;
      margin-bottom: 20px;

      >.cart-product-col-1{
        background: #fff;
        width: 70%;
        padding: 20px 30px;
        font-size: 16px;
        display: flex;
        flex-direction: column;        

        >.cart-product-name{
          margin-bottom: auto;
          font-weight: 500;
          font-family: Arial;
        }

        >.cart-product-detail{
          display: flex;
          justify-content: space-between;
          align-items: center;

          >.cart-product-quantity{
            display: flex;
            border: 1px solid #BCBCBC;
            padding: 5px 7px;
            align-items: center;

            img{
              height: 14px;
              width: 14px;
              cursor: pointer;
            }            

            >.cart-product-quantity-counter{
              width: 60px;
              display: flex;
              justify-content: center;
            }
          }

          >.cart-product-price{
            margin-left: auto;
          }
        }

      }

      >.cart-product-col-2{
        background: #FDFDFD;
        width: 30%;
        display: flex;
        flex-direction: column;   
        
        >.cart-product-close-icon{
          margin: 10px 10px 0 auto;
          cursor: pointer;
          height: 15px;
          width: 15px;
        }

        >.cart-product-image{
          height: 60px;
          width: calc(100% - 20px);
          object-fit: contain;
          margin: auto 10px;
        }
      }
    }

    .cart-empty-container{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
  }

  .cart-footer-container {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    
    >.cart-footer-content{
      display: flex;
      flex-direction: column;
      padding: 0 20px;

      >.cart-subtotal-container {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
        border-top: 1px solid #6F7C70;
      }

      >button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        text-transform: uppercase;
        margin-bottom: 10px;
        border: none;
        cursor: pointer;
      }

      >.cart-btn-make-subscription{
        background: #FFFFFF;
        border-style: 1px solid #2C2E2B;
        letter-spacing: 2px;
      }

      >.cart-btn-proceed-checkout{
        background: #4B5648;
        color: #FFFFFF;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .cart-dummy-content {
      display: none;
    }
  
    .cart-full-content {
      width: 100%;
    }
  }
`;

export default Wrapper;
