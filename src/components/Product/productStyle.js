import styled from "styled-components";

const Wrapper = styled.div`
  .product-container {
    flex: 1;
    padding: 7rem 0.5rem;
  }

  .product-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .product-image {
    object-fit: contain;
    max-width: 7.5rem;
    height: 170px;
    cursor: pointer;
  }

  .product-name {
    font-size: 1.1rem;
    font-family: "FF Bau Regular", sans-serif;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 0.4rem;
  }

  .product-price-container {
    font-size: 1.1rem;
    margin-bottom: 1.8rem;

    > .product-price-text {
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
    font-weight: 400;
    font-family: "FF Bau Regular", sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 52px;
    background: #596557;
    color: rgb(252, 252, 249);
    width: 190px;
    cursor: pointer;
    font-size: 1.1rem;

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
    .product-container {
      padding: 5rem 1rem;
    }

    .product-name,
    .product-price-container,
    .product-btn-add-to-cart {
      font-size: 0.875rem;
    }

    .product-btn-add-to-cart {
      font-size: 1.0rem;
    }
  }

  @media screen and (max-width: 768px) {
    .product-btn-add-to-cart {
      width: 100%;
    }
  }
`;

export default Wrapper;
