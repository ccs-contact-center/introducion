import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import swal from "sweetalert";
import AuthService from "../../services/AuthService";
import API_CCS from "../../services/API_CCS";
const API = new API_CCS();

class Actividad3View extends Component {
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

      id_ccs: this.Auth.getProfile().id_ccs,
      form: "intro-3",
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
        text: "Se guardo la actividad: 3, con id: " + respuesta[0].id,
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
        text: "No se guardo la actividad: 3, Intenta de nuevo. ",
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
              <h2> Evaluación 3: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="12">
                  <p>
                    3. Contesta las 5 preguntas.:
                  </p>
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: "#d5d4d8", }}>
                  <FormGroup>
                    <Row className="centrado-fila">
                      <Col xs="6">
                        <Label for="palabra1">
                          <b>
                            1. Menciona la diferencia entre un Call Center y un
                            Centro de Contacto.{" "}
                          </b>
                        </Label>

                        <Input
                          type="textarea"
                          name="palabra1"
                          id="palabra1"
                          value={this.state.palabra1}
                          onChange={this.onChange.bind(this)}
                        />
                        <br />
                        <Label for="palabra2">
                          <b>
                            2. Menciona los 4 canales de un centro de contacto.
                          </b>
                        </Label>

                        <Input
                          type="textarea"
                          name="palabra2"
                          id="palabra2"
                          value={this.state.palabra2}
                          onChange={this.onChange.bind(this)}
                        />
                        <br />
                        <Label for="palabra3">
                          <b>
                            3. Menciona y explica brevemente 3 servicios que
                            puede ofrecer un Centro de contacto o Call Center.
                          </b>
                        </Label>
                        <Input
                          type="textarea"
                          name="palabra3"
                          id="palabra3"
                          value={this.state.palabra3}
                          onChange={this.onChange.bind(this)}
                        />
                        <br />
                        <Label for="palabra4">
                          <b>4. Describe la función del agente telefónico</b>
                        </Label>
                        <Input
                          type="textarea"
                          name="palabra4"
                          id="palabra4"
                          value={this.state.palabra4}
                          onChange={this.onChange.bind(this)}
                          style={{ marginTop: "10px" }}
                        />

                        <br />
                        <Label for="palabra5">
                          <b>5. ¿Qué es una línea de negocio?</b>
                        </Label>
                        <Input
                          type="textarea"
                          name="palabra5"
                          id="palabra5"
                          value={this.state.palabra5}
                          onChange={this.onChange.bind(this)}
                        />
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

              <div>
                {/* <p>{JSON.stringify(this.state)}</p>{" "} */}
              </div>
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Actividad3View;
