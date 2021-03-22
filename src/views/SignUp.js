import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import MyLoginFormComponent from "../components/SignUpForm"

// core components
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import FooterDefault from "components/Footers/FooterDefault";
import { useAuth0 } from "@auth0/auth0-react";



function SignUp(props) {
  const {

    isAuthenticated,

  } = useAuth0();
  
  React.useEffect(() => {
    document.body.classList.add("signup-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("signup-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  console.log( isAuthenticated, "la autenticacion")




  return (
    <>
    
      <FixedTransparentNavbar/>
      <div className="wrapper">
      <div className="page-header header-filter " filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/fig5.png").default + ")",
            // width:'100%',
            // height: '100%',
            width: '1250px',
            height: '1050px',
            background_size: 'cover',
            background_position: 'center top'
   
          }}
        ></div>
        <div className="content">
          {isAuthenticated ?
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6" lg="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                  <i className="now-ui-icons media-2_sound-wave"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Para ofrecer un mejor servicio</h5>
                    <p className="description">
                      Por favor introduzca sus datos correctamente.

                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                  <i className="now-ui-icons media-1_button-pause"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Registro</h5>
                    <p className="description">
                      El Boton de registro aparecera una vez validado los datos.
                      
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                  <i className="now-ui-icons users_circle-08"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Registro</h5>
                    <p className="description">
                      La edad debe ser mayor de 18 años
                      
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Numero de Telefono</h5>
                    <p className="description">
                      El numero de telefono debe ser de 9 digitos.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                  <i className="now-ui-icons business_bulb-63"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Registro</h5>
                    <p className="description">
                      Las contraseñas deben conincider
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="6" lg="4">
                <Card className="card-signup">
                  <CardBody>
                      <div className="author" >
                       <img
                        alt = "nothing"
                         className="btn-icon btn-round mr-2"
                          color="twitter"
                           src={require("assets/img/favicon.png").default}
                       ></img>
                        </div>
                    
                    <div className="card-description ml-auto mr-auto" md="5" >
                        <MyLoginFormComponent />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container> 
          :
          <Container>
          <div className="text-center">
          ""Usted no se encuentra registrado click en""
          </div>
          <Button
              className="btn-round"
              color="success"
              type="button"
            >
            <Link to="/" >
                  <i className="now-ui-icons users_circle-08"></i>
              Ingresar
            </Link>
          </Button>
          </Container> }
          
        </div>
        </div>
        <FooterDefault />
     
  </div>
</>
  );
}

export default SignUp;
