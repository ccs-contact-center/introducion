import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaVeintinueveView extends Component {
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
                ETAPAS DEL PROCESO DE OUTSOURCING
              </h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaGris
                   ml-2 mr-2"
                  >
                    <ol className="text-left">
                      <li>
                        <b>Análisis</b>: se comienza con la designación de un
                        equipo encargado de la implementación que empezará por
                        definir las áreas de la empresa que necesitan
                        optimizarse.
                      </li>
                      <li>
                        <b>Selección</b>: luego de definir las áreas a
                        optimizar, se eligen las actividades que se pueden
                        delegar a un proveedor de servicios.
                      </li>
                      <li>
                        <b>Licitación</b>: se hace un listado de las diferentes
                        empresas de outsourcing especializadas en las áreas
                        requeridas.
                      </li>
                     
                    </ol>
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
export default TemaVeintinueveView;
