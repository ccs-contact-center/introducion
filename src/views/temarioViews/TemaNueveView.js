import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import nueve from "../../assets/img/intro/9.png";

class TemaNueveView extends Component {
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
                Centro de Contacto
              </h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaGris  ml-2 mr-2">
                    <p style={{ textAlign: "left" }}>
                      Un <b>contact center es similar a un call center</b>; sin
                      embargo éste expande los canales mediante los cuales una
                      compañía interactúa con el público, ya que además de hacer
                      y recibir llamadas,{" "}
                      <b>
                        también maneja otros medios como emails, chats y redes
                        sociales entre otros
                      </b>
                      .
                    </p>
                    <img
                      src={nueve}
                      style={{ width: 260 }}
                      alt="nueve "
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
export default TemaNueveView;
