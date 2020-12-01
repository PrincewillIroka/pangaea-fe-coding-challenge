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
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    > div {
      width: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    .products-content {
      padding-left: 0rem;
      padding-right: 0rem;

      > div {
        width: 33.33%;
      }
    }
  }
`;

export default Wrapper;
