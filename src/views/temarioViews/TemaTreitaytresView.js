import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import treintaytres from "../../assets/img/intro/33.png";

class TemaTreitaytresView extends Component {
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
                Business Intelligence
              </h3>
              <div className="centrado-fila">
                <img
                  src={treintaytres}
                  style={{ width: 450 }}
                  alt="treintaytres "
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
                      Un sistema de Business Intelligence es un software o
                      aplicativo que tiene como finalidad transformar los datos
                      de una compañía en información y conocimiento para obtener
                      una ventaja competitiva.
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
export default TemaTreitaytresView;
