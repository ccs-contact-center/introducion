import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> 1. Introducción al Centro de Contacto</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: "0px" }}
              >
                <b>Introducción</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <Row className="centrado-fila">
                <Col xs="8">
                  <div
                    className="cajaGris
                   ml-2 mr-2"
                  >
                    <p className="pl-3">
                      Los call center surgen a{" "}
                      <b>
                        nivel mundial en los años 80 y en Latinoamérica en los
                        años 90
                      </b>
                      . <b>Históricamente</b>, los call centers nacieron de la
                      oportunidad de{" "}
                      <b>
                        prestar un servicio inmediato al cliente a través del
                        teléfono
                      </b>
                      . Al principio era principalmente informativo y tenía un
                      carácter de servicio accesorio a la oferta principal del
                      producto. Sin embargo, su utilización se expandió
                      considerablemente, debido principalmente a dos factores:
                    </p>
                  </div>
                </Col>
                <Col xs="2">
                  <Row>
                    <Col xs="12" className="centrado-fila text-center">
                      <div
                        style={{
                          width: "100px",
                          height:"100px",
                          borderRadius: "100%",
                          background: "#c52d49",
                        }}
                        className="pt-3  centrado-fila"
                      >
                        <p className="text-white">
                          <b>Competencia</b>
                        </p>
                      </div>
                    </Col>
                    <Col xs="12" className="centrado-fila mt-2 text-center">
                      <div
                        style={{
                          width: "100px",
                          height:"100px",
                          borderRadius: "100%",
                          background: "#b0afb4",
                        }}
                        className="pt-3 centrado-fila"
                      >
                        <p className="text-black">
                          <b>Demanda </b>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaUnoView;
