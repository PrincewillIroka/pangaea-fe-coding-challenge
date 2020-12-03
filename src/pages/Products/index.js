import React, { useState, useEffect, useContext } from "react";
import shortid from "shortid";
import { AppContext } from "../../store";
import Wrapper from "./productsStyle";
import Cart from "../../components/Cart";
import Product from "../../components/Product";
import query from "../../graphql/query";
import { getProducts } from "../../graphql/services/products";
import { getCurrencies } from "../../graphql/services/currency";

export default function Products() {
  const { state, dispatch } = useContext(AppContext);

  const [data, setData] = useState({
    isLoading: true,
    hasErrors: false,
    products: [],
    currencies: [],
    selectedCurrency: "USD",
    isCartVisible: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let selectedCurrency = data.selectedCurrency;
      const currenciesResponse = await query(getCurrencies());
      const products = await fetchProducts(selectedCurrency);
      const currencies = currenciesResponse?.data?.currency || [];
      selectedCurrency = currencies.length ? currencies[0] : selectedCurrency;
      setData({
        ...data,
        isLoading: false,
        products,
        currencies,
        selectedCurrency,
      });
    } catch (err) {
      console.error(err);
      setData({ ...data, isLoading: false, hasErrors: true });
    }
  };

  const toggleCartVisibility = (isCartVisible) => {
    setData({ ...data, isCartVisible });
  };

  const fetchProducts = async (selectedCurrency) => {
    const productsResponse = await query(getProducts(selectedCurrency));
    const products = productsResponse?.data?.products || [];
    return products;
  };

  const changeCurrency = async (value) => {
    try {
      const products = await fetchProducts(value);
      updateCartPrices(products);
      setData({
        ...data,
        products,
        selectedCurrency: value,
      });
    } catch (err) {
      console.error(err);
      setData({ ...data, hasErrors: true });
    }
  };

  const updateCartPrices = (products) => {
    let cart = state.cart;
    cart = cart.map((item) => {
      const product = products.find((product) => product.id === item.id);
      item.price = product.price;
      return item;
    });
    dispatch({ kind: "cart", payload: cart });
  };

  const RenderProducts = () => {
    const { products, selectedCurrency } = data;

    return products && products.length ? (
      products.map((product) => (
        <Product
          key={shortid.generate()}
          product={product}
          currency={selectedCurrency}
          toggleCartVisibility={toggleCartVisibility}
        />
      ))
    ) : (
      <div>No product found</div>
    );
  };

  const Loader = () => {
    return (
      <div className="products-loader-container">
        <div className="loader"></div>
      </div>
    );
  };

  return (
    <Wrapper>
      <section className="products-container" data-testid="products-container">
        {data.isLoading ? (
          <Loader />
        ) : data.hasErrors ? (
          <div className="products-error-container">
            <span>Sorry! An error occured.</span>
            <span>Please try again!</span>
          </div>
        ) : (
          <div className="products-content">
            <RenderProducts />
          </div>
        )}
        <Cart
          data={data}
          toggleCartVisibility={toggleCartVisibility}
          changeCurrency={changeCurrency}
        />
      </section>
    </Wrapper>
  );
}
