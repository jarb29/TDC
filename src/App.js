import React from "react";
import injectContext from "./AppContext";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import AboutUs from "views/examples/AboutUs.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Ecommercee from "views/examples/Ecommercee.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
import Administrador from "views/Administrador";
import LoginPageAdmi from "views/examples/LoginPageAdmi"
import SignupPageAdmi from "views/examples/SigunpPageAdmi"

// others

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/about-us" render={props => <AboutUs {...props} />} />
      <Route path="/contact-us" render={props => <ContactUs {...props} />} />
      <Route path="/e-commerce" render={props => <Ecommerce {...props} />} />
      <Route path="/e-commercee" render={props => <Ecommercee {...props} />} />
      <Route path="/administrador" render={props => <Administrador {...props} />} />
 
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/admi/login"
        render={props => <LoginPageAdmi {...props} />}
      />
      <Route
        path="/admi/sign-up"
        render={props => <SignupPageAdmi {...props} />}
      />
      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route path="/pricing" render={props => <Pricing {...props} />} />
      <Route
        path="/product-page"
        render={props => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route path="/sections" render={props => <Sections {...props} />} />
      <Route path="/sign-up" render={props => <SignupPage {...props} />} />
      <Redirect to="/landing-page"  />
    </Switch>
  </BrowserRouter>
)};

export default injectContext(App);

