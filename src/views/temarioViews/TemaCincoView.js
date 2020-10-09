import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import img3 from "../../assets/img/intro/img3.png";
import img4 from "../../assets/img/intro/img4.png";

class TemaCincoView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>
                Tipos de Servicio
              </h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="6">
                  <div className="cajaGris  ml-2 mr-2">
                    <b>In-Bound</b><br/>
                    <img
                      src={img3}
                      style={{ width:"100px" }}
                      alt="img3 "
                      className="img-fluid"
                    />
                    <ul style={{ textAlign: "left" }}>
                      <li>
                        Servicio al cliente: Información, quejas reclamos,
                        estudios de mercado,
                      </li>
                      <li>
                        sondeos de opinión, calidad y satisfacción de clientes,
                      </li>
                      <li>
                        Identificación de oportunidades de ventas cruzadas y
                        referencia para
                      </li>
                      <li>nuevos negocios.</li>
                      <li>Toma de pedidos</li>
                      <li>Oferta de nuevos productos</li>
                      <li>Realización de ventas telefónicas de servicio.</li>
                      <li>
                        Captura de información de los clientes para ser
                        visitados
                      </li>
                      <li>Aclaración de dudas sobre la campaña existente</li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="cajaRoja  ">
                    <b>Out-Bound</b>
                    <br/>
                    <img
                      src={img4}
                      style={{ width:"100px" }}
                      alt="img4 "
                      className="img-fluid"
                    />
                    <ul style={{ textAlign: "left" }}>
                      <li>
                        Verificación de datos (actualización de base de datos)
                      </li>
                      <li>Tele mercadeo</li>
                      <li>
                        Encuestas (Investigación del mercado, toma de opiniones)
                      </li>
                      <li>Ventas de servicio</li>
                      <li>Prestación de campañas</li>
                      <li>Seguimiento a las ventas</li>
                      <li>Divulgación de información</li>
                      <li>Oferta de servicios complementarios o nuevos</li>
                      <li>
                        Recuperación de cartera vencida (gestión de cobranza)
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
export default TemaCincoView;
