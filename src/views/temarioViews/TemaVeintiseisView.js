import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  Col,
  Row,
 
} from "reactstrap";

class TemaVeintiseisView extends Component {
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
            <Col xs="12">
              <h3 style={{ color: "red", textAlign: "" }}>DIAGNÓSTICO</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <p className="text-justify">
                      Levantamos la situación actual de la organización,
                      identificamos áreas de oportunidad y su impacto en la
                      empresa, a través de nuestra metodología.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="centrado-fila mt-2">
            <Col xs="12">
              <h3 style={{ color: "red", textAlign: "" }}>PROYECTO</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaGris
                   ml-2 mr-2"
                  >
                    <p className="text-justify">
                      Solucionamos las áreas de oportunidad a través de la
                      implementación de nuestras prácticas ya probadas en
                      estrategia, procesos, gente y gestión del negocio.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="centrado-fila mt-2">
            <Col xs="12">
              <h3 style={{ color: "red", textAlign: "" }}>SEGUIMIENTO</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <p className="text-justify">
                      Detectamos desviaciones al deber ser, a través de la
                      auditoría a lo implementado durante el proyecto, generamos
                      compromisos y planes de acción para corregir las
                      desviaciones detectadas.
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
export default TemaVeintiseisView;
