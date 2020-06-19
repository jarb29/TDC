import React, { useContext,  useEffect }  from "react";
import { Context } from '../AppContext';
import { withRouter } from "react-router";

import BasicForm from "./adminitrador-componentes/BasicForm";
import Tabs from "./adminitrador-componentes//Tabs.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";


function Administrador(props) {
  const { store, actions } = useContext(Context);
  

  useEffect(() => {
    
   
    if(store.isAuthenticated && store.currentUser.hasOwnProperty('tienda')) props.history.push('/landing-page');
    if(store.isAuthenticated && store.currentUser.hasOwnProperty('administrador')) props.history.push('/administrador');
    if(!store.isAuthenticated) props.history.push('/admi/login');
    actions.salsas();
    actions.store();
    actions.orders();

  }, []);

  React.useEffect(() => {

    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    <FixedTransparentNavbar />
      <div className="wrapper">
        <div className="main">
          <BasicForm />
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default  withRouter(Administrador);
