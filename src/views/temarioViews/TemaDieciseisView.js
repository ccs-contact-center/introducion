import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import dieciseis from "../../assets/img/intro/16.png";

class TemaDieciseisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.3 Diferencias entre Call Center y Centro de contacto</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>Canales</h3>
              <div className="centrado-fila">
                <img
                  src={dieciseis}
                  style={{ width: 400 }}
                  alt="dieciseis "
                  className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaRoja ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "left" }}>
                      <b>Correo Electrónico</b>.<br />
                      Sin ninguna duda, el correo electrónico es el baluarte
                      principal de cualquier <b>campaña de outbound</b>. Suelen ser
                      programados y enviados de manera masiva, y comunican todo
                      tipo de información a los clientes, desde <b>ofertas o
                      promociones recurrentes, hasta avisos y recordatorios</b>.
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
export default TemaDieciseisView;
