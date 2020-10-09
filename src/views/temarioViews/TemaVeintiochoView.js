import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import veitiocho from "../../assets/img/intro/28.png";

class TemaVeintiochoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.7 Líneas de Negocio</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                TIPOS DE OUTSOURCING
              </h3>
              <div className="centrado-fila">
                <img
                  src={veitiocho}
                  style={{ width: 400 }}
                  alt="veitiocho "
                  className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaGris
                   ml-2 mr-2"
                  >
                    <ul className="text-left">
                      <li>
                        <b>Off-shoring</b>: cuando el servicio requerido lo
                        permite, el off-shoring o deslocalización ofrece la
                        mayor reducción de costes, ya que se trata de la
                        contratación de terceros localizados en países con mano
                        de obra más barata.
                      </li>
                      <li>
                        <b>In-house</b>: traducido literalmente como “dentro de
                        casa”, se refiere a que los servicios requeridos deben
                        prestarse dentro de la organización que los contrata.
                      </li>
                      <li>
                        <b>Off-site</b>: hace referencia a cuando los servicios
                        se realizan dentro de las instalaciones de la
                        organización que los presta.
                      </li>
                      <li>
                        <b>Co-Sourcing</b>: Se presenta cuando ambas partes
                        comparten las responsabilidades y los riesgos de la
                        prestación de servicios.
                      </li>
                    </ul>
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
export default TemaVeintiochoView;
