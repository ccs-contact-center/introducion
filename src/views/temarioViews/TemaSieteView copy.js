import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import siete from "../../assets/img/intro/siete.png";

class TemaSieteView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.1 ¿Qué es un Call Center?</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>Call Center</h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="12" className="centrado-fila ">
                
                  <div className="cajaGris  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "left" }}>
                      Un call center es, como su nombre en inglés lo indica, un{" "}
                      <b>centro de llamadas</b> donde los empleados ofrecen
                      servicios por vía <b>telefónica</b> a los clientes. Éstos
                      centros suelen ser contratados por muchas empresas, para
                      así poder ofrecer{" "}
                      <b>
                        atención al cliente, soporte técnico, servicios
                        empresariales, atención de emergencia y otros
                      </b>
                      , sin necesidad de realizar una gran inversión en personal
                      y equipos.
                    </p>
                    <img
                    src={siete}
                    style={{ width: "270px" }}
                    alt="siete "
                    className="img-fluid bordeImagen"
                  />
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
export default TemaSieteView;
