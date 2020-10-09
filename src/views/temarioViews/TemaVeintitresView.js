import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import veintitres from "../../assets/img/intro/23.png";

class TemaVeintitresView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.6 Servicios en un Centro de Contacto</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>Servicios</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaGris ml-2 mr-2">
                    <img
                      src={veintitres}
                      style={{ width: 550 }}
                      alt="veintitres "
                      className="img-fluid bordeImagen animated  bounceInRight delay-1s"
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
export default TemaVeintitresView;
