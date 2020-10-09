import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  Col,
  Row,
 
} from "reactstrap";


class TemaVeinticincoView extends Component {
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
              <h3 style={{ color: "red", textAlign: "" }}>¿Qué es?</h3>
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
                      Un modelo de negocio, también conocido como línea de
                      negocio, es la planificación que realiza una empresa
                      respecto a los ingresos y beneficios que intenta obtener.
                      <br />
                      En un modelo de negocio, se establecen las pautas a seguir
                      para atraer clientes, definir ofertas de producto e
                      implementar estrategias publicitarias, entre muchas otras
                      cuestiones vinculadas a la configuración de los recursos
                      de la compañía. En otras palabras una línea de negocio es
                      como la clasificación de las empresas de acuerdo a la
                      actividad comercial a la que se van a dedicar.
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
export default TemaVeinticincoView;
