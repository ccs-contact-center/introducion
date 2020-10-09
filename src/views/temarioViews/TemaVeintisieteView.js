import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import veitisiete from "../../assets/img/intro/27.png";

class TemaVeintisieteView extends Component {
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
              <img
                src={veitisiete}
                style={{ width: 400 }}
                alt="veitisiete "
                className="img-fluid bordeImagen animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <p className="text-justify">
                      Outsourcing hace referencia a un método de trabajo en el
                      que una empresa delega ciertas funciones en departamentos
                      externos u otro tipo de negocios que se dedican
                      profesionalmente a ello.
                    </p>
                    <ul className="text-left">
                      <li>
                        <b>Ahorrando costos</b>.
                      </li>
                      <li>
                        <b>Servicio confiable</b>.
                      </li>
                      <li>
                        <b>Subcontratación</b>.
                      </li>
                      <li>
                        <b>Ahorro de tiempo y esfuerzo</b>.
                      </li>
                      <li>
                        <b>Disminución de margen de error</b>.
                      </li>
                      <li>
                        <b>Mejora del rendimiento global </b>.
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
export default TemaVeintisieteView;
