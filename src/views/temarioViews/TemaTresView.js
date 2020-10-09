import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> 1. Introducción al Centro de Contacto</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="3">
              <Row className="centrado-fila">
                <Col xs="12">
                  <h3 style={{ color: "red", textAlign: "center" }}>
                    Línea del tiempo
                  </h3>
                </Col>
                <Col xs="6"></Col>
              </Row>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12" className="centrado-fila">
                  <div className="cajaRoja ">
                    <b>1985 - 1990</b>
                  </div>
                  <div className="cajaGris  ml-2 mr-2">
                    Como extensión operacional de las empresas.
                  </div>
                  <div className="cajaRoja ">
                    Se empieza a definir el término
                  </div>
                </Col>
                <Col xs="12" className="centrado-fila">
                  <div className="cajaGris mt-3 ">
                    <b>1991-2000</b>
                  </div>
                  <div className=" cajaRoja  ml-2 mr-2">
                    Se empiezan a crear como empresas independientes
                  </div>
                  <div className="cajaGris ">BOOM del Sector</div>
                </Col>
                <Col xs="12" className="centrado-fila">
                  <div className="cajaRoja mt-3 ">
                    <b>2001- 2010</b>
                  </div>
                  <div className="cajaGris  ml-2 mr-2">
                    Reto: Mejorar el servicio, reducir costos.
                  </div>
                  <div className="cajaRoja ">Empieza el Outsourcing</div>
                </Col>
                <Col xs="12" className="centrado-fila">
                  <div className="cajaGris mt-3 centrado-fila ">
                    <b>2011</b>
                  </div>
                  <div className=" cajaRoja  ml-2 mr-2">
                    Redefinición del negocio
                  </div>
                  <div className="cajaGris ">Integración de Redes Sociales</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDosView;
