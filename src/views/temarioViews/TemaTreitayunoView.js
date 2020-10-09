import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import treintayuno from "../../assets/img/intro/31.png";

class TemaTreitayunoView extends Component {
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
                La capacitación
              </h3>
              <div className="centrado-fila">
                <img
                  src={treintayuno}
                  style={{ width: 450 }}
                  alt="treintayuno "
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
                      <b>La capacitación</b> se vende como el conjunto de
                      actividades didácticas, orientadas a ampliar los
                      conocimientos, habilidades y aptitudes del personal que
                      labora en una empresa. La capacitación que se ofrece les
                      permite a los trabajadores poder tener un mejor desempeño
                      en sus actuales y futuros cargos, adaptándose a las
                      exigencias cambiantes del entorno.
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
export default TemaTreitayunoView;
