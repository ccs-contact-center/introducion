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
import actividad2 from "../../assets/img/intro/actividad.png";
import API_CCS from "../../services/API_CCS";
const API = new API_CCS();

class ActividadView extends Component {
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
      palabra8: "",
      palabra9: "",
      palabra10: "",
      id_ccs: this.Auth.getProfile().id_ccs,
      form: "intro-2",
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
        text: "Se guardo la actividad: 2, con id: " + respuesta[0].id,
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
        text: "No se guardo la actividad: 2, Intenta de nuevo. ",
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
              <h2> Evaluación 2: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="12">
                  <p>
                    2. Enumera 5 ejemplos de servicio de acuerdo con el tipo de
                    llamada:
                  </p>
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: "#d5d4d8" }}>
                  <FormGroup>
                    <Row>
                      <Col xs="6">
                        <Label >
                          <b>In-Bound </b> 
                        </Label>
                        
                        <Input
                          type="text"
                          name="palabra1"
                          id="palabra1"
                          value={this.state.palabra1}
                          onChange={this.onChange.bind(this)}
                        />
                        
                         <Input
                          type="text"
                          name="palabra2"
                          id="palabra2"
                          value={this.state.palabra2}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
                        />
                         <Input
                          type="text"
                          name="palabra3"
                          id="palabra3"
                          value={this.state.palabra3}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
                        />
                         <Input
                          type="text"
                          name="palabra4"
                          id="palabra4"
                          value={this.state.palabra4}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
                        />
                         <Input
                          type="text"
                          name="palabra5"
                          id="palabra5"
                          value={this.state.palabra5}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
                        />
                      </Col>
                      <Col xs="6">
                        <Label>
                          <b>Out-bound </b> 
                        </Label>
                        <Input
                          type="text"
                          name="palabra6"
                          id="palabra6"
                          value={this.state.palabra6}
                          onChange={this.onChange.bind(this)}
                        />
                         <Input
                          type="text"
                          name="palabra7"
                          id="palabra7"
                          value={this.state.palabra7}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
                        />
                          <Input
                          type="text"
                          name="palabra8"
                          id="palabra8"
                          value={this.state.palabra8}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
                        />
                          <Input
                          type="text"
                          name="palabra9"
                          id="palabra9"
                          value={this.state.palabra9}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
                        />
                          <Input
                          type="text"
                          name="palabra10"
                          id="palabra10"
                          value={this.state.palabra10}
                          onChange={this.onChange.bind(this)}
                          style={{marginTop:"10px"}}
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

              <div>{/* <p>{JSON.stringify(this.state)}</p> */}</div>
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ActividadView;
