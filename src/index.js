import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';


const uri='http://localhost:3000/login'

ReactDOM.render(
  <Auth0Provider
    domain="dev-965zdczv.us.auth0.com"
    clientId="wPdgKJjkeHBVOfutXT1F904XaL4J0WwP"
    redirectUri={uri}
  >
    <App />,
  </Auth0Provider>,
  document.getElementById("root")
);
