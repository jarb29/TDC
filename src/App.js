import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LogIn"
// pages

import SingUp from "./views/SignUp"






function App() {

  // const {
    // user,
    // isAuthenticated,
    // returnTo,
    // loginWithRedirect,
    // logout,
  // } = useAuth0();

  // console.log(isAuthenticated, "la autenticacion")


    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <LoginButton {...props} />} />
          <Route path="/registro" render={props => <SingUp {...props} />} />
        </Switch>
      </BrowserRouter>
    )
  
  
 



};

export default App;

