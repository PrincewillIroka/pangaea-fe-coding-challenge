import { createContext, useReducer } from "react";

export function appReducer(state, action) {
  if (action.kind === "cart") {
    localStorage.setItem("cart", JSON.stringify(action.payload));
  }
  state = { ...state, [action.kind]: action.payload };
  return state;
}

export const AppContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
