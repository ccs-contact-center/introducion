import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import img5 from "../../assets/img/intro/img5.png";
import img6 from "../../assets/img/intro/img6.png";

class TemaSeisView extends Component {
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
                    <b>Blending</b><br/>
                    <img
                      src={img5}
                      style={{ width:"170px" }}
                      alt="img5 "
                      className="img-fluid"
                    />
                    <ul style={{ textAlign: "left" }}>
                      <li>
                        Durante una campaña puede realizarse una combinación de
                        llamadas entrantes o salientes en el call center. En
                        ambos casos se mantienen los niveles de servicio y se
                        maximiza la productividad de los agentes
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="cajaRoja  ">
                    <b>Redes Sociales</b><br/>
                    <img
                      src={img6}
                      style={{ width:"100px" }}
                      alt="img6 "
                      className="img-fluid"
                    />
                    <ul style={{ textAlign: "left" }}>
                      <li>
                        Las redes sociales suponen un espacio muy atractivo para
                        las marcas, ya que los usuarios pasan una gran cantidad
                        de tiempo prestando una mayor atención que cuando
                        consumen otros medios como la televisión o la prensa.
                        Los responsables de marketing pueden crear páginas,
                        grupos, comunidades o aplicaciones para promocionar una
                        marca o una empresa en las redes sociales.
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
export default TemaSeisView;
