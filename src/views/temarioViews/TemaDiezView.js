import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import diez from "../../assets/img/intro/10.png";

class TemaDiezView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.2 ¿Qué es un Centro de Contacto?</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                Funcionamiento
              </h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="  ml-2 mr-2">
                    <img
                      src={diez}
                      alt="diez "
                      className="img-fluid  animated  bounceInRight delay-1s"
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
export default TemaDiezView;
