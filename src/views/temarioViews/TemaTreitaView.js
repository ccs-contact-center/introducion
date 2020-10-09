import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaTreitaView extends Component {
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
                ETAPAS DEL PROCESO DE OUTSOURCING
              </h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <ol start="4" className="text-left">
                      <li>
                        <b>Contrato</b>: una vez elegida la empresa que más se
                        adapte a los requerimientos se construye un documento
                        que contendrá lo acordado por ambas partes en cuanto a
                        obligaciones, restricciones y otros aspectos legales.
                      </li>
                      <li>
                        <b>Adaptación</b>: al iniciar la prestación de
                        servicios, debe haber una fase adaptativa en la que se
                        integren los servicios en la medida acordada por ambas
                        partes.
                      </li>
                      <li>
                        <b>Evaluación</b>: esta última fase debe repetirse
                        periódicamente para medir los resultados de la
                        implementación y mejorar la estructura de
                        subcontratación de personal.
                      </li>
                    </ol>
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
export default TemaTreitaView;
