import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class TemarioView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Temario</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <Table bordered className="cajaA1">
                <thead style={{ background: "#c52d49" }} className="cajaA1">
                  <tr>
                    <th colSpan="2">
                      {" "}
                      <p
                        className="text-white text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        1. Introducción al Centro de Contacto.
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{ background: "#c52d49" }}
                  className="cajaA1 text-white"
                >
                  <tr>
                    <td style={{width:"50%"}}>1.1 ¿Qué es un callcenter?</td>
                    <td style={{width:"50%"}}>1.7 Líneas de Negocio</td>
                  </tr>
                  <tr>
                    <td>1.2 ¿Qué es un centro de Contacto?</td>
                    <td>1.7.1 Consultoría</td>
                  </tr>
                  <tr>
                    <td>
                      1.3 Diferencias entre Callcenter y centro de contacto.
                    </td>
                    <td>1.7.2 CoSourcing</td>
                  </tr>
                  <tr>
                    <td>1.4 ¿Qué es lo que hace un Centro de Contacto?</td>
                    <td>1.7.3 Outsourcing</td>
                  </tr>
                  <tr>
                    <td>1.5 Funciones de un Agente Telefónico</td>
                    <td>1.7.4 Capacitación</td>
                  </tr>
                  <tr>
                    <td>1.6 Servicios de un Centro de Contacto</td>
                    <td>1.7.5 Calidad</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>1.7.6 Business Inteligencie</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemarioView;
