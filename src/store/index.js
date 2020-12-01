import { createContext, useReducer } from "react";

export function appReducer(state, action) {
  state = { ...state, [action.kind]: action.payload };
  return state;
}

export const AppContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    isCartVisible: false,
    cart: [],
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
