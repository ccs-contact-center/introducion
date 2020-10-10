import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import once from "../../assets/img/intro/11.png";

class TemaOnceView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>
              Diferencias
              </h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaGris  ml-2 mr-2">
                    <div className="centrado-fila">
                      <img
                        src={once}
                        style={{ width: 490 }}
                        alt="once "
                        className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                      />
                    </div>
                    <br />
                    <p style={{ textAlign: "left" }}>
                      La diferencia entre <b>call center y contact center</b>,
                      se basa en los canales de entrada y salida a la hora de
                      recepcionar o emitir información a los contactos o
                      usuarios que demandan el servicio.
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
export default TemaOnceView;
