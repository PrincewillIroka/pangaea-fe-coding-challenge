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
    max-height: 170px;
    cursor: pointer;
  }

  .product-name {
    font-size: 1rem;
    line-height: 1.7;
    font-family: "FF Bau Regular", sans-serif;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .product-price-text {
    font-size: 1rem;
    line-height: 1.5;
    font-family: "FF Bau Regular", sans-serif;
    font-weight: 400;
  }

  .product-price-from-text {
    margin-right: 0.25rem;
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

  @media screen and (min-width: 992px) {
    .product-container {
      padding: 3rem 2rem;
    }

    .product-btn-add-to-cart {
      max-width: 157px;
    }
  }

  @media screen and (min-width: 768px) {
    .product-container {
      padding: 3rem 2rem;
    }

    .product-btn-add-to-cart {
      max-width: 190px;
    }
  }
`;

export default Wrapper;
