import styled from "styled-components";

const Wrapper = styled.div`
  .product-container {
    flex: 1;
    padding: 2.5rem 0.5rem;
  }

  .product-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .product-image {
    object-fit: contain;
    max-width: 100%;
    height: 170px;
    cursor: pointer;
    margin-bottom: 3rem;
  }

  .product-name {
    font-size: 1rem;
    line-height: 1.7;
    font-family: "FF Bau Regular", sans-serif;
    font-weight: 400;
    margin-bottom: 0.3rem;
    cursor: pointer;
    text-align: center;
  }

  .product-price-container {
    margin-bottom: 0.5rem;

    > .product-price-text {
      font-size: 1rem;
      line-height: 1.5;
      font-family: "FF Bau Regular", sans-serif;
      font-weight: 400;
    }

    > .product-price-from-text {
      margin-right: 0.25rem;
    }
  }

  .product-btn-add-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    border: 0px;
    line-height: 1.2;
    padding-top: 2px;
    font-weight: 600;
    font-family: "FF Bau Regular", sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 52px;
    background: rgb(75, 85, 72);
    color: rgb(252, 252, 249);
    margin-top: 0.5rem;
    width: 100%;
    cursor: pointer;

    &:hover {
      background: rgb(43, 46, 43);
    }
  }

  .products-loader-container {
    display: flex;
    align-items: center;
    justify-center: center;
    height: 100%;
    width: 100%;
    background: red;

    > .loader {
      border: 16px solid #f3f3f3;
      border-top: 16px solid #3498db;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  @media screen and (max-width: 992px) {
    .product-name {
      font-size: 0.8125rem;
    }

    .product-price-container {
      margin-bottom: 0.5rem;

      .product-price-text {
        font-size: 0.8125rem;
      }
    }
    
  }
  
`;

export default Wrapper;
