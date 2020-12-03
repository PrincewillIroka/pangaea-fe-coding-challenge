import { render } from "../custom-render";
import App from "../App";
import Products from "../pages/Products"

describe("<App />", () => {
  test("Renders <Products /> component correctly", () => {
    render(<Products />);
  });
});
