import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Table,
} from "reactstrap";
import swal from "sweetalert";
import AuthService from "../../services/AuthService";
import API_CCS from "../../services/API_CCS";
const API = new API_CCS();

class Actividad4View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      palabra1: "",
      palabra2: "",
      palabra3: "",
      palabra4: "",
      palabra5: "",
      palabra6: "",

      id_ccs: this.Auth.getProfile().id_ccs,
      form: "intro-4",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 4, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });

      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 4, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación 4: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="12">
                  <p>4. Describe cada una de las líneas de negocio.</p>
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: "#d5d4d8" }}>
                  <FormGroup>
                    <Row className="centrado-fila">
                      <Col xs="6">
                        <Table bordered dark>
                          <thead>
                            <tr>
                              <th style={{ width: "50%" }}>Línea de Negocio</th>
                              <th style={{ width: "50%" }}>Descripción</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> Consultoría</td>
                              <td>
                                {" "}
                                <Input
                                  type="textarea"
                                  name="palabra1"
                                  id="palabra1"
                                  value={this.state.palabra1}
                                  onChange={this.onChange.bind(this)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>CoSourcing</td>
                              <td>
                                <Input
                                  type="textarea"
                                  name="palabra2"
                                  id="palabra2"
                                  value={this.state.palabra2}
                                  onChange={this.onChange.bind(this)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Outsourcing</td>
                              <td>
                                {" "}
                                <Input
                                  type="textarea"
                                  name="palabra3"
                                  id="palabra3"
                                  value={this.state.palabra3}
                                  onChange={this.onChange.bind(this)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Capacitación</td>
                              <td>
                                {" "}
                                <Input
                                  type="textarea"
                                  name="palabra4"
                                  id="palabra4"
                                  value={this.state.palabra4}
                                  onChange={this.onChange.bind(this)}
                                  style={{ marginTop: "10px" }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Calidad</td>
                              <td>
                                {" "}
                                <Input
                                  type="textarea"
                                  name="palabra5"
                                  id="palabra5"
                                  value={this.state.palabra5}
                                  onChange={this.onChange.bind(this)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Business Inteligencie</td>
                              <td>
                                {" "}
                                <Input
                                  type="textarea"
                                  name="palabra6"
                                  id="palabra6"
                                  value={this.state.palabra6}
                                  onChange={this.onChange.bind(this)}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </FormGroup>
                </div>

                <div className="centrado-fila mt-3">
                  <Button color="primary" onClick={this.onSave.bind(this)}>
                    Enviar
                  </Button>
                </div>
              </Form>

              {/* <div> <p>{JSON.stringify(this.state)}</p></div> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Actividad4View;
