import React, { Component } from "react";
import { Card, CardFooter } from "reactstrap";
import withAuth from "../services/withAuth";
//import { connect } from 'react-redux';
//import { addProfile, setCampaign, darkTheme,setAvatar } from '../../Redux/Actions/profile';
import Navegador from "./temarioViews/ComponentsNavTemari/Navegador";
import BienvenidaView from "./temarioViews/BienvenidaView";
import ObjetivoView from "./temarioViews/ObjetivoView";
import TemarioView from "./temarioViews/TemarioView";
import TemaUnoView from "./temarioViews/TemaUnoView";
import TemaDosView from "./temarioViews/TemaDosView";
import TemaTresView from "./temarioViews/TemaTresView";
import TemaCuatroView from "./temarioViews/TemaCuatroView";
import TemaCincoView from "./temarioViews/TemaCincoView";
import TemaSeisView from "./temarioViews/TemaSeisView";
import TemaSieteView from "./temarioViews/TemaSieteView";
import TemaOchoView from "./temarioViews/TemaOchoView";
import TemaNueveView from "./temarioViews/TemaNueveView";
import TemaDiezView from "./temarioViews/TemaDiezView";
import TemaOnceView from "./temarioViews/TemaOnceView";
import TemaDoceView from "./temarioViews/TemaDoceView";
import TemaTreceView from "./temarioViews/TemaTreceView";
import TemaCatorceView from "./temarioViews/TemaCatorceView";
import TemaQuiceView from "./temarioViews/TemaQuiceView";
import TemaDieciseisView from "./temarioViews/TemaDieciseisView";
import TemaDiecisieteView from "./temarioViews/TemaDiecisieteView";

import TemadiecinueveView from "./temarioViews/TemadiecinueveView";
import TemaVeinteView from "./temarioViews/TemaVeinteView";
import TemaVeintiunoView from "./temarioViews/TemaVeintiunoView";
import TemaVeintidosView from "./temarioViews/TemaVeintidosView";
import TemaVeintitresView from "./temarioViews/TemaVeintitresView";
import TemaVeinticuatroView from "./temarioViews/TemaVeinticuatroView";
import TemaVeinticincoView from "./temarioViews/TemaVeinticincoView";
import TemaVeintiseisView from "./temarioViews/TemaVeintiseisView";
import TemaVeintisieteView from "./temarioViews/TemaVeintisieteView";
import TemaVeintiochoView from "./temarioViews/TemaVeintiochoView";
import TemaVeintinueveView from "./temarioViews/TemaVeintinueveView";
import TemaTreitaView from "./temarioViews/TemaTreitaView";
import TemaTreitayunoView from "./temarioViews/TemaTreitayunoView";
import TemaTreitaydosView from "./temarioViews/TemaTreitaydosView";
import TemaTreitaytresView from "./temarioViews/TemaTreitaytresView";
import Actividad1View from "./temarioViews/Actividad1View";
import Actividad2View from "./temarioViews/Actividad2View";
import Actividad3View from "./temarioViews/Actividad3View";
import Actividad4View from "./temarioViews/Actividad4View";
import Fin from "./temarioViews/Fin";

//import RecapitulacionView from './temarioViews/RecapitulacionView'

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );
  state = {
    index: 0,
  };
  constructor() {
    super();
    this.setIndex = this.setIndex.bind(this);
  }

  setIndex(index) {
    this.setState({
      index: index,
    });
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          {this.state.index === 0 ? (
            <BienvenidaView />
          ) : // < />
          //
          this.state.index === 1 ? (
            <ObjetivoView />
          ) : this.state.index === 2 ? (
            <TemarioView />
          ) : this.state.index === 3 ? (
            <TemaUnoView />
          ) : this.state.index === 4 ? (
            <TemaDosView />
          ) : this.state.index === 5 ? (
            <TemaTresView />
          ) : this.state.index === 6 ? (
            <TemaCuatroView />
          ) : this.state.index === 7 ? (
            <TemaCincoView />
          ) : this.state.index === 8 ? (
            <TemaSeisView />
          ) : this.state.index === 9 ? (
            <TemaSieteView />
          ) : this.state.index === 10 ? (
            <TemaOchoView />
          ) : this.state.index === 11 ? (
            <TemaNueveView />
          ) : this.state.index === 12 ? (
            <TemaDiezView />
          ) : this.state.index === 13 ? (
            <TemaOnceView />
          ) : this.state.index === 14 ? (
            <TemaDoceView />
          ) : this.state.index === 15 ? (
            <TemaTreceView />
          ) : this.state.index === 16 ? (
            <TemaCatorceView />
          ) : this.state.index === 17 ? (
            <TemaQuiceView />
          ) : this.state.index === 18 ? (
            <TemaDieciseisView />
          ) : this.state.index === 19 ? (
            <TemaDiecisieteView />
          ) : this.state.index === 20 ? (
            <TemadiecinueveView />
          ) : this.state.index === 21 ? (
            <TemaVeinteView />
          ) : this.state.index === 22 ? (
            <TemaVeintiunoView />
          ) : this.state.index === 23 ? (
            <TemaVeintidosView />
          ) : this.state.index === 24 ? (
            <TemaVeintitresView />
          ) : this.state.index === 25 ? (
            <TemaVeinticuatroView />
          ) : this.state.index === 26 ? (
            <TemaVeinticincoView />
          ) : this.state.index === 27 ? (
            <TemaVeintiseisView />
          ) : this.state.index === 28 ? (
            <TemaVeintisieteView />
          ) : this.state.index === 29 ? (
            <TemaVeintiochoView />
          ) : this.state.index === 30 ? (
            <TemaVeintinueveView />
          ) : this.state.index === 31 ? (
            <TemaTreitaView />
          ) : this.state.index === 32 ? (
            <TemaTreitayunoView />
          ) : this.state.index === 33 ? (
            <TemaTreitaydosView />
          ) : this.state.index === 34 ? (
            <TemaTreitaytresView />
          ) : this.state.index === 35 ? (
            <Actividad1View />
          ) : this.state.index === 36 ? (
            <Actividad2View />
          ) : this.state.index === 37 ? (
            <Actividad3View />
          ) : this.state.index === 38 ? (
            <Actividad4View />
          ) : this.state.index === 39 ? (
            <Fin />
          ) : null}
          <br />
          <CardFooter>
            <Navegador handleNavigation={this.setIndex} maxIndex={39} />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     profile: state.profile.profile,
//     campaign: state.campaign.campaign,
//     darkTheme: state.darkTheme.darkTheme
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addProfile: (name) => {
//       dispatch(addProfile(name))
//     },
//     setCampaign: (id) => {
//       dispatch(setCampaign(id))
//     },
//     darkTheme: (isDarkTheme) => {
//       dispatch(darkTheme(isDarkTheme))
//     },
//     setAvatar: (data) => {
//       dispatch(setAvatar(data))
//     }

//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Inicio));
export default withAuth(Inicio);
