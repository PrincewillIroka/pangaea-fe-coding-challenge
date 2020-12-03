import styled from "styled-components";

const Wrapper = styled.div`
  .products-container {
    background: #e2e6e3;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .products-content {
    flex-wrap: wrap;
    display: flex;

    > div {
      width: 33.33%;
    }
  }

  .products-error-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(43, 46, 43);
    font-size: 18px;
  }

  .products-loader-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(43, 46, 43);
    font-size: 18px;

    .loader {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      vertical-align: text-bottom;
      border: 0.25em solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      -webkit-animation: spinner-border 0.75s linear infinite;
      animation: spinner-border 0.75s linear infinite;
    }

    @-webkit-keyframes spinner-border {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spinner-border {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .products-content {
      > div {
        width: 50%;
      }
    }
  }
`;

export default Wrapper;
