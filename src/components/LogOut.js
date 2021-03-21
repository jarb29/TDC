import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
// import {getTodos} from "../api/todos-api";
import { Link } from "react-router-dom";


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (

  <Link to="/" >
  <Button
    aria-controls="customized-menu"
    aria-haspopup="true"
    variant="contained"
    color="default"
    id="navbarDropdownMenuLink"
    onClick={() => logout({ returnTo: window.location.origin })}
    // onClick = {() => getTodos()}
   > 
   <div className="now-ui-icons users_circle-08 text-center">
    {" "} Cerrar Sesion
    </div>
   </Button>
   </Link >
  );
};

export default LogoutButton;
