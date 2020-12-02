import React, { useContext, useState, useEffect } from "react";
import shortid from "shortid";
import Wrapper from "./productsStyle";
import Cart from "../../components/Cart";
import Product from "../../components/Product";
import Skeleton from "../../components/Skeleton";
import { AppContext } from "../../store";
import query from "../../graphql/query";
import { getProducts } from "../../graphql/services/products";

export default function Products() {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState({
    isLoading: true,
    hasErrors: false,
    products: [
      {
        id: 3,
        title: "Premium-Grade Moisturizing Balm",
        image_url:
          "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png",
        price: 29,
      },
      {
        id: 3,
        title: "Premium-Grade Moisturizing Balm",
        image_url:
          "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png",
        price: 29,
      },
    ],
    currency: "USD",
  });

  useEffect(() => {
    async function fetchData() {
      await query(getProducts())
        .then((response) => {
          console.log("response");
          console.log(response);
          const products = response?.data?.products ||[];
          setData({ ...data, isLoading: false, products });
        })
        .catch((err) => {
          setData({ ...data, isLoading: false, hasErrors: true });
        });
    }
    fetchData();
  }, []);

  const renderProducts = () => {
    const { products, currency, hasErrors } = data;
    return hasErrors ? (
      <div>Sorry! An error occured.</div>
    ) : products && products.length ? (
      products.map((product) => (
        <Product
          key={shortid.generate()}
          product={product}
          currency={currency}
        />
      ))
    ) : (
      <div>No product found</div>
    );
  };

  return (
    <Wrapper>
      <section className="products-container">
        <div className="products-content">
          {data.isLoading ? <Skeleton /> : renderProducts()}
        </div>
        {state.isCartVisible ? <Cart /> : null}
      </section>
    </Wrapper>
  );
}
