import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import doce from "../../assets/img/intro/12.png";

class TemaDoceView extends Component {
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
                  <div className="cajaRoja  ml-2 mr-2">
                    <div className="centrado-fila">
                      <img
                        src={doce}
                        style={{ width: 450 }}
                        alt="doce "
                        className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                      />
                    </div>
                    <br />
                    <p style={{ textAlign: "left" }}>
                      La principal diferencia entre un call y un contact center
                      radica en los servicios que ofrecen. Mientras que un Call
                      Center solamente utiliza un canal, el telefónico, un
                      Contact Center puede englobar varias formas de
                      comunicación entre el cliente y el agente, como por
                      ejemplo a través de <b>email, mensajes de texto, chat, redes
                      sociales y por supuesto, también mediante llamadas
                      telefónicas</b>.
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
export default TemaDoceView;
