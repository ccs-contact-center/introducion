import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import treintaydos from "../../assets/img/intro/32.png";

class TemaTreitaydosView extends Component {
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
                Calidad
              </h3>
              <div className="centrado-fila">
                <img
                  src={treintaydos}
                  style={{ width: 450 }}
                  alt="treintaydos "
                  className="img-fluid bordeImagen animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <p className="text-justify">
                      El departamento de Call Center es, en muchas ocasiones, el
                      primer contacto que tiene el cliente con una empresa. Es
                      también el canal de atención de reclamaciones y quejas y
                      de recepción de posibles ofertas comerciales. Por ello,
                      una atención al cliente eficaz y satisfactoria es vital
                      para el éxito de un negocio. Resulta, por tanto,
                      imprescindible desarrollar un sistema de control de
                      calidad del departamento de Call Center que audite
                      constantemente el servicio que se ofrece a usuarios y
                      potenciales clientes.
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
export default TemaTreitaydosView;
