import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import trece from "../../assets/img/intro/13.png";

class TemaTreceView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>Diferencias</h3>
              <div className="centrado-fila">
                <img
                  src={trece}
                  style={{ width: 450 }}
                  alt="trece "
                  className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaRoja  ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "left" }}>
                      Un <b>Contact Center</b> es mucho más versátil, funcional y
                      ofrece mejores resultados en la actualidad debido a que
                      cada día más los clientes suelen evitar las llamadas de
                      teléfono de números que no conocen, y cuando por descuido
                      contestan, en un alto porcentaje suelen evadirlas
                      utilizando cualquier excusa.
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
export default TemaTreceView;
