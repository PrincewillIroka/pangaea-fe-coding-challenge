import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AppStateProvider } from "./store";

const Wrapper = ({ children }) => {
  return (
    <AppStateProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </AppStateProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
