import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { AppStateProvider } from "./store";
import Products from "./pages/Products";

function App() {
  return (
    // <AppStateProvider>
    <Router>
      <Switch>
        <Route path="/" component={Products} />
      </Switch>
    </Router>
    // </AppStateProvider>
  );
}

export default App;
