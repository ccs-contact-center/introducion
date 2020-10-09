import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class Fin extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
        
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
           
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                  
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <h2 className="text-center">Gracias</h2>
                    <p className="text-center">
                      www.ccscontactcenter.com
                      <br />
                      CDMX
                      <br />
                      Amores 321 1° piso
                      <br />
                      Col. Del Valle
                      <br />
                      C.P. 03100 <br />
                      Tel. +52 (55) 5091.9160
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
export default Fin;
