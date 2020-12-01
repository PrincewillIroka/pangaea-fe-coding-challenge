import React, { useContext, useState } from "react";
import shortid from "shortid";
import Wrapper from "./productsStyle";
import Cart from "../../components/Cart";
import Product from "../../components/Product";
import { AppContext } from "../../store";

export default function Products() {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState({
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
    currency: 'USD'
  });

  return (
    <Wrapper>
      <section className="products-container">
        <div className="products-content">
          {data.products?.length ? (
            data.products?.map((product) => (
              <Product key={shortid.generate()} product={product} currency={data.currency}/>
            ))
          ) : (
            <div>None found</div>
          )}
        </div>
        {state.isCartVisible ? <Cart /> : null}
      </section>
    </Wrapper>
  );
}
