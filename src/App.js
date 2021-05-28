import logo from "./logo.svg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./page/login/Login";
import CreateLogin from "./page/create-login/CreateLogin.js";
import PrivateRoute from "./component/layout/private-route/PrivateRoute";
import ProductDisplay from "./page/product/ProductDisplay";
import ViewProductListTable from "./component/viewproductListTable/viewProductListTable";
import CartviewproductDisplay from "./page/Cartviewproduct/CartviewproductDisplay";
import ViewProductDisplay from "./page/selectedviewproduct/ViewProductDisplay";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/Dashboard">
            <CreateLogin />
          </PrivateRoute>

          <Route exact path="/Products">
            <ProductDisplay />
          </Route>
          <Route exact path="/Products/:slug">
            <ViewProductDisplay />
          </Route>

          <Route exact path="/CreateLogin">
            <CreateLogin />
          </Route>
          <Route exact path="/cart">
            <CartviewproductDisplay />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
