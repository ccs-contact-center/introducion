import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import catorce from "../../assets/img/intro/14.png";

class TemaCatorceView extends Component {
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
                  src={catorce}
                  style={{ width: 400 }}
                  alt="catorce "
                  className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaGris  ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "left" }}>
                      <b>Teléfono</b>.<br/> Un Contact Center gestiona llamadas de manera
                      masiva, ya formen parte de campañas de outbound, de
                      inbound o de blending, mediante listados de teléfonos que
                      se distribuyen entre los distintos agentes que forman
                      parte de este Contact Center. Estos agentes suelen
                      utilizar líneas <b>VoIP</b>, por el motivo de que normalmente
                      suelen ser mucho más baratas que las líneas tradicionales.
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
export default TemaCatorceView;
