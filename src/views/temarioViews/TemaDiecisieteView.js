import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import diecisiete from "../../assets/img/intro/17.png";

class TemaDiecisieteView extends Component {
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
                  src={diecisiete}
                  style={{ width: 400 }}
                  alt="diecisiete "
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaRoja ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "left" }}>
                      <b>Redes Sociales</b>.<br />
                      Las Redes Sociales son el elemento más novedoso que se ha
                      incorporado al <b>Contact Center</b>. Permiten acceder a una
                      ingente cantidad de público potencial, así como dirigir
                      los esfuerzos de las campañas que desea realizar la
                      empresa específicamente al público más conveniente, ya que
                      permiten tanto geolocalizar a un determinado grupo de
                      usuario, como encontrar a los usuarios cuyos intereses
                      están relacionados con los servicios y productos que
                      ofrece la empresa.
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
export default TemaDiecisieteView;
