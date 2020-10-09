import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import catorce from "../../assets/img/intro/img1.png";
import img2 from "../../assets/img/intro/img2.png";

class TemaCuatroView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1. Introducción al Centro de Contacto</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>Objetivos</h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="6">
                  <div className="cajaGris  ml-2 mr-2">
                    <b>Reducción de costos</b><br/>
                    <img
                      src={catorce}
                      style={{ width:"150px" }}
                      alt="catorce "
                      className="img-fluid"
                    />
                    <ul style={{ textAlign: "left" }}>
                      <li>Marcacion Directa a Interno (DID)</li>
                      <li>Costo de negocio</li>
                      <li>Tiempo de llamada</li>
                      <li>Tiempo de Espera</li>
                      <li>Personal</li>
                      <li>Transferencia</li>
                      <li>Papel</li>
                      <li>Complejidad</li>
                      <li>Tiempo de aprendizaje</li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="cajaRoja  ">
                    <b>Incremento de ganancias</b><br/>
                    <img
                      src={img2}
                      style={{ width:"150px" }}
                      alt="img2 "
                      className="img-fluid"
                    />
                    <ul style={{ textAlign: "left" }}>
                      <li>Tiempo de aprendizaje</li>
                      <li>Productividad de agentes</li>
                      <li>Satisfacción de clientes</li>
                      <li>Incrementar posibilidades de negocios</li>
                      <li>Retención de clientes</li>
                      <li>Funcionalidad</li>
                      <li>Calidad</li>
                      <li>Posición competitiva</li>
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
export default TemaCuatroView;
