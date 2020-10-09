import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemadiecinueveView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>CC</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaRoja ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "left" }}>
                      <b>
                        Es un centro de servicio telefónico que tiene la
                        capacidad de atender altos volúmenes de llamadas, con
                        diferentes objetivos. Su principal enfoque es el de la
                        generación de llamadas de Salida y la recepción de
                        llamadas, cubriendo las expectativas de cada una de las
                        campañas implementadas
                      </b>
                      .<br />
                      Ahí se encuentran agentes, asesores, supervisores o
                      ejecutivos, especialmente entrenados, realizan llamadas
                      (llamadas salientes) o reciben llamadas (llamadas
                      entrantes) desde o hacia: clientes (externos o internos),
                      socios comerciales, compañías asociadas u otros.
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
export default TemadiecinueveView;
