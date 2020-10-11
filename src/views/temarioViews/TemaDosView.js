import React, { Component } from "react";
import { CardBody, Col, Row, CardHeader } from "reactstrap";

import ReactPlayer from "react-player";

class TemaDosView extends Component {
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
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: "0px" }}
              >
                <b>Introducción</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <Row className="centrado-fila">
                <Col xs="8">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <p className="mt-3">
                      El mercado de los contact centers es uno de los más
                      dinámicos y avanzados tecnológicamente, pero motivado por
                      sus particulares características debe saber hacer frente a
                      numerosos retos que tiene planteados en su actividad,{" "}
                      <b>
                        como la falta de formación de los equipos de trabajo, de
                        la elevada rotación del personal, la compleja relación
                        con el cliente y el offshoring o deslocalización
                      </b>
                      .
                    </p>
                  </div>

                  {/*<div
                    className="cajaGris
                   ml-2 mr-2 mt-3"
                  >
                  <ReactPlayer url="https://www.youtube.com/watch?v=htqByzHGzGU" />
                  </div>*/}
                </Col>
                <Col xs="12" className="mt-3">
                 
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
