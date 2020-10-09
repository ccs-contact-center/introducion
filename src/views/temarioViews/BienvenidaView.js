import React, { Component } from "react";
import { CardBody, CardHeader, Row, Col } from "reactstrap";
import "animate.css";

import logo from "../../assets/img/intro/logo2.png";
import bienvenida from "../../assets/img/intro/bg.png";

class BienvenidaView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );
  render() {
    return (
      <div>
        <CardHeader className="text-center">
          <h1>¡Bienvenido! </h1>
        </CardHeader>
        <CardBody className="text-center">
          <Row className="centrado-fila">
            <Col md="6" sm="6" xs="12">
              <img
                src={logo}
                style={{ width: 260 }}
                alt="Logo CCS"
                className="img-fluid animated  bounceInRight delay-1s"
              />
              <div className="mt-2 animated  bounceInLeft delay-1s">
                
                <h2>INTRODUCCIÓN AL CENTRO DE CONTACTO</h2>
              </div>
            </Col>
            <Col md="6" sm="6" xs="12">
              <img
                src={bienvenida}
                // style={{ width: 500 }}
                alt="bienvenida"
                className="img-fluid bordeImagen animated  bounceInRight delay-2s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default BienvenidaView;
