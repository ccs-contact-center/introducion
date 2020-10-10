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
} from "reactstrap";
import swal from "sweetalert";
import AuthService from "../../services/AuthService";
import actividad2 from "../../assets/img/intro/actividad.png";
import API_CCS from "../../services/API_CCS";
const API = new API_CCS();

class Actividad1View extends Component {
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
      palabra7: "",

      id_ccs: this.Auth.getProfile().id_ccs,
      form: "intro-1",
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
        text: "Se guardo la actividad: 1, con id: " + respuesta[0].id,
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
        text: "No se guardo la actividad: 1, Intenta de nuevo. ",
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
              <h2> Evaluación 1: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="12">
                  <p>
                    1. Completa el flujo de acuerdo con el proceso del Call
                    Center.
                  </p>
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: "#d5d4d8" }}>
                  <Row>
                    <Col xs="12" className="centrado-fila">
                      <div
                        style={{
                          width: "600px",
                          height: "450px",

                          background: `url(${actividad2})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <FormGroup>
                          <Row>
                            <Col
                              xs="6"
                              style={{ paddingTop: "80px" }}
                              className="centrado-fila"
                            >
                              <Input
                                type="text"
                                name="palabra1"
                                id="palabra1"
                                value={this.state.palabra1}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "80px",
                                  border: "solid 1px blue",
                                }}
                              />
                            </Col>
                            <Col xs="6" style={{ paddingTop: "80px" }}></Col>
                          </Row>
                          <Row>
                            <Col
                              xs="6"
                              style={{ paddingTop: "" }}
                              className="centrado-fila"
                            ></Col>
                            <Col xs="6" style={{}}>
                              <Input
                                type="text"
                                name="palabra2"
                                id="palabra2"
                                value={this.state.palabra2}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "80px",
                                  border: "solid 1px blue",
                                }}
                                className="float-left"
                              />
                              <Input
                                type="text"
                                name="palabra3"
                                id="palabra3"
                                value={this.state.palabra3}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "80px",
                                  border: "solid 1px blue",
                                }}
                                className="float-right"
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              xs="6"
                              style={{ paddingTop: "80px" }}
                              className="centrado-fila"
                            >
                              <Input
                                type="text"
                                name="palabra4"
                                id="palabra4"
                                value={this.state.palabra4}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "80px",
                                  border: "solid 1px blue",
                                }}
                                className="float-left"
                              />
                            </Col>
                            <Col xs="6" style={{}}></Col>
                          </Row>
                          <Row>
                            <Col
                              xs="6"
                              style={{ paddingTop: "45px" }}
                              className="centrado-fila"
                            >
                              <Input
                                type="text"
                                name="palabra5"
                                id="palabra5"
                                value={this.state.palabra5}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "80px",
                                  border: "solid 1px blue",
                                }}
                                className="float-left"
                              />
                            </Col>
                            <Col xs="6" style={{}}></Col>
                          </Row>
                          <Row>
                            <Col
                              xs="6"
                              style={{ paddingTop: "45px" }}
                              className="centrado-fila"
                            >
                              <Input
                                type="text"
                                name="palabra6"
                                id="palabra6"
                                value={this.state.palabra6}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "80px",
                                  border: "solid 1px blue",
                                }}
                                className="float-left"
                              />
                            </Col>
                            <Col xs="6" style={{}}>
                              <Input
                                type="text"
                                name="palabra7"
                                id="palabra7"
                                value={this.state.palabra7}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "80px",
                                  border: "solid 1px blue",
                                }}
                                className="float-left"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="centrado-fila mt-3">
                  <Button color="primary" onClick={this.onSave.bind(this)}>
                    Enviar
                  </Button>
                </div>
              </Form>

              {/* <div> <p>{JSON.stringify(this.state)}</p> </div> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Actividad1View;
