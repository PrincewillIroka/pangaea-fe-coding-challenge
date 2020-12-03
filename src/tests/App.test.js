import { render } from "../custom-render";
import Products from "../pages/Products";
import Cart from "../components/Cart";
import Product from "../components/Product";

describe("<App />", () => {
  test("Renders <Products /> component correctly", () => {
    const { container, queryAllByTestId } = render(<Products />);
    const element = queryAllByTestId("products-container");
    expect(element).toBeTruthy();
  });

  test("Renders <Cart /> component correctly", () => {
    const mockFunc = jest.fn();
    const defaultProps = {
      data: {
        isLoading: true,
        hasErrors: false,
        products: [],
        currencies: [],
        selectedCurrency: "USD",
        isCartVisible: false,
      },
      changeCurrency: mockFunc,
      toggleCartVisibility: mockFunc,
    };
    const { queryAllByTestId } = render(<Cart {...defaultProps} />);
    const element = queryAllByTestId("cart-container");
    expect(element).toBeTruthy();
  });

  test("Renders <Product /> component correctly", () => {
    const mockFunc = jest.fn();
    const defaultProps = {
      product: {
        id: 3,
        title: "Premium-Grade Moisturizing Balm",
        image_url:
          "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png",
        price: 29,
      },
      currency: "USD",
      toggleCartVisibility: mockFunc,
    };
    const { queryAllByTestId } = render(<Product {...defaultProps} />);
    const element = queryAllByTestId("product-container");
    expect(element).toBeTruthy();
  });
});
