import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import diagrama from "../../assets/img/intro/diagrama.jpg";
import diagrama2 from "../../assets/img/intro/diagrama2.png";

class TemaOchoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.1 ¿Qué es un Call Center?</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                Funcionamiento
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="12" className="centrado-fila ">
                  <div className="cajaGris  ml-2 mr-2  centrado-fila">
                    <div
                      style={{
                        width: "600px",
                        height: "450px",
                        position: "relative",
                      }}
                      className="centrado-fila"
                    >
                      <img
                        src={diagrama}
                        style={{
                          width: "590px",
                          position: "absolute",
                          zIndex: "4",
                        }}
                        alt="diagrama "
                        className="img-fluid "
                      />
                      <img
                        src={diagrama2}
                        style={{
                          width: "600px",
                          position: "absolute",
                          zIndex: "5",
                          top:"80px"
                        }}
                        alt="diagrama "
                        className="img-fluid animated  bounceInRight delay-3s"
                      />
                    </div>
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
export default TemaOchoView;
