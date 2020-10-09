import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import ReactPlayer from "react-player";

class TemaVeinticuatroView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>
                Para finalizar
              </h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaGris ml-2 mr-2">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=CVs24k5d6bA"
                      width="100%"
                      controls
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
export default TemaVeinticuatroView;
