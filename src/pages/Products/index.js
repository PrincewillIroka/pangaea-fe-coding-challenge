import React, { useContext, useState, useEffect, useMemo } from "react";
import shortid from "shortid";
import Wrapper from "./productsStyle";
import Cart from "../../components/Cart";
import Product from "../../components/Product";
import Skeleton from "../../components/Skeleton";
// import { AppContext } from "../../store";
import query from "../../graphql/query";
import { getProducts } from "../../graphql/services/products";

export default function Products() {
  // const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState({
    isLoading: true,
    hasErrors: false,
    products: [],
    currency: "USD",
    isCartVisible: false,
  });

  useEffect(() => {
    fetchData();
  }, [data.products]);

  const fetchData = async () => {
    await query(getProducts())
      .then((response) => {
        const products = response?.data?.products || [];
        setData({ ...data, isLoading: false, products });
      })
      .catch((err) => {
        console.error(err);
        setData({ ...data, isLoading: false, hasErrors: true });
      });
  };

  const toggleCartVisibility = (isCartVisible) => {
    setData({ ...data, isCartVisible });
  };

  const RenderProducts = () => {
    const { products, currency, hasErrors } = data;
    // return useMemo(() => {
      return hasErrors ? (
        <div>Sorry! An error occured.</div>
      ) : products && products.length ? (
        products.map((product) => (
          <Product
            key={shortid.generate()}
            product={product}
            currency={currency}
            toggleCartVisibility={toggleCartVisibility}
          />
        ))
      ) : (
        <div>No product found</div>
      );
    // }, []);
  };

  return (
    <Wrapper>
      <section className="products-container">
        <div className="products-content">
          {data.isLoading ? <Skeleton /> : <RenderProducts/>}
        </div>
        <Cart
          isCartVisible={data.isCartVisible}
          toggleCartVisibility={toggleCartVisibility}
        />
      </section>
    </Wrapper>
  );
}
