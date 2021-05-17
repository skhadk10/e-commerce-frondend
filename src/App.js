import logo from "./logo.svg";

import DafaultLayout from "./component/layout/DafaultLayout";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Login from "./page/login/Login";
import CreateLogin from "./page/create-login/CreateLogin.js";
import PrivateRoute from "./component/layout/private-route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/Dashboard">
                <CreateLogin/>
          </PrivateRoute>
          <Route exact path="/Products">
        
          </Route>
          <Route exact path="/Createlogin">
            <CreateLogin />
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
