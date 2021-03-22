import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// reactstrap components
import {
  Collapse,
  Navbar,
  Nav,
  Container,
} from "reactstrap";
import LogoutButton from "../LogOut";
import Loading from "components/Loading";



function FixedTransparentNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const {
    isAuthenticated
  } = useAuth0();


  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
        <div className="navbar-translate">
          <div className="author" style ={{width:"110px", opacity: '0.7', borderImage: '50 round'}}>
            <img
            alt="..."
            className="avatar img-raised"
            src={require("assets/img/favicon.png").default}
            ></img>
          </div>
          <div >
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              { isAuthenticated ?  
              <LogoutButton />
               :
              <Loading />
                } 
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default FixedTransparentNavbar;
