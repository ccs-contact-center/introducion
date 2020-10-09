import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import quice from "../../assets/img/intro/15.png";

class TemaQuiceView extends Component {
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
                  src={quice}
                  style={{ width: 400 }}
                  alt="quice "
                  className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaRojo  ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "left" }}>
                      <b>SMS</b>.<br />
                      Aunque este canal evidentemente no se gestione manualmente
                      por los agentes, sigue siendo una de las herramientas de
                      promoción más efectivas, ya que cualquier teléfono es
                      capaz de recibir SMS. El <b>envío masivo de SMS</b> suele
                      gestionarse mediante un software automatizado, ya sea para
                      enviar <b>publicidad, avisos a clientes o comunicaciones de
                      todo tipo</b>.
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
export default TemaQuiceView;
