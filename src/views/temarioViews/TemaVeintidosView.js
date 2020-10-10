import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaVeintidosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 1.5 ¿Funciones de un Agente Telefónico?</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>Funciones</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaGris ml-2 mr-2">
                    <ul style={{ textAlign: "justify" }}>
                      <li>
                        El cargo se desempeña en la mayor parte de su jornada
                        laboral en una gran sala llena de puestos de trabajo
                        sentado, recibiendo o realizando llamadas.
                      </li>
                      <li>
                        Trabaja en turnos de mañana, tarde y noche, con una muy
                        escasa variación de tareas.
                      </li>
                      <li>
                        Riesgos laborales más descritos es el ruido, junto con
                        el nivel de estrés.
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
export default TemaVeintidosView;
