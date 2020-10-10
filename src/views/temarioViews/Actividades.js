import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import logo2 from "../../assets/img/intro/logo2.png";

class Actividades extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
        
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
           
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                  
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <h2 className="text-center">A continuación, realizaremos una evaluación para reforzar los conocimientos adquiridos.</h2>
                    <img
                  src={logo2}
                  style={{  }}
                  alt="logo2 "
                  className="img-fluid bordeImagen animated  bounceInLeft delay-1s"
                />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default Actividades;
