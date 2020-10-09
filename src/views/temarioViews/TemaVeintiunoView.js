import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaVeintiunoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.4 ¿Qué es lo que hace un Centro de Contacto?</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>Funciones</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaGris ml-2 mr-2">
                  
                    <p style={{ textAlign: "justify" }}>
                      Un agente telefónico ofrece <b>soluciones, soporte, servicios
                      o productos</b> de acuerdo a las necesidades de los clientes
                      por medio del teléfono, ya sea que reciba las llamadas o
                      bien, que las haga.
                    </p>
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
export default TemaVeintiunoView;
