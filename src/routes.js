import React from 'react';


const Inicio = React.lazy(() => import('./views/Inicio'));
const BienvenidaView = React.lazy(() => import('./views/temarioViews/BienvenidaView'));

const TemaUnoView = React.lazy(() => import('./views/temarioViews/TemaUnoView'));
const TemaDosView = React.lazy(() => import('./views/temarioViews/TemaDosView'));
const TemaTresView = React.lazy(() => import('./views/temarioViews/TemaTresView'));
const TemaCuatroView = React.lazy(() => import('./views/temarioViews/TemaCuatroView'));
const TemaCincoView = React.lazy(() => import('./views/temarioViews/TemaCincoView'));
const TemaSeisView = React.lazy(() => import('./views/temarioViews/TemaSeisView'));

const TemaSieteView = React.lazy(() => import('./views/temarioViews/TemaSieteView'));
const TemaOchoView = React.lazy(() => import('./views/temarioViews/TemaOchoView'));

const TemaNueveView = React.lazy(() => import('./views/temarioViews/TemaNueveView'));
const TemaDiezView = React.lazy(() => import('./views/temarioViews/TemaDiezView'));

const TemaOnceView = React.lazy(() => import('./views/temarioViews/TemaOnceView'));
const TemaDoceView = React.lazy(() => import('./views/temarioViews/TemaDoceView'));
const TemaTreceView = React.lazy(() => import('./views/temarioViews/TemaTreceView'));
const TemaCatorceView = React.lazy(() => import('./views/temarioViews/TemaCatorceView'));
const TemaQuiceView = React.lazy(() => import('./views/temarioViews/TemaQuiceView'));
const TemaDieciseisView = React.lazy(() => import('./views/temarioViews/TemaDieciseisView'));
const TemaDiecisieteView = React.lazy(() => import('./views/temarioViews/TemaDiecisieteView'));

const TemadiecinueveView = React.lazy(() => import('./views/temarioViews/TemadiecinueveView'));

const TemaVeinteView = React.lazy(() => import('./views/temarioViews/TemaVeinteView'));
const TemaVeintiunoView = React.lazy(() => import('./views/temarioViews/TemaVeintiunoView'));
const TemaVeintidosView = React.lazy(() => import('./views/temarioViews/TemaVeintidosView'));

const TemaVeintitresView = React.lazy(() => import('./views/temarioViews/TemaVeintitresView'));
const TemaVeinticuatroView = React.lazy(() => import('./views/temarioViews/TemaVeinticuatroView'));

const TemaVeinticincoView = React.lazy(() => import('./views/temarioViews/TemaVeinticincoView'));
const TemaVeintiseisView = React.lazy(() => import('./views/temarioViews/TemaVeintiseisView'));
const TemaVeintisieteView = React.lazy(() => import('./views/temarioViews/TemaVeintisieteView'));
const TemaVeintiochoView = React.lazy(() => import('./views/temarioViews/TemaVeintiochoView'));
const TemaVeintinueveView = React.lazy(() => import('./views/temarioViews/TemaVeintinueveView'));
const TemaTreitaView = React.lazy(() => import('./views/temarioViews/TemaTreitaView'));
const TemaTreitayunoView = React.lazy(() => import('./views/temarioViews/TemaTreitayunoView'));
const TemaTreitaydosView = React.lazy(() => import('./views/temarioViews/TemaTreitaydosView'));
const TemaTreitaytresView = React.lazy(() => import('./views/temarioViews/TemaTreitaytresView'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },

  { path: '/temarioViews/TemaUnoView', name: 'Introducción > P1', component: TemaUnoView },
  { path: '/temarioViews/TemaDosView', name: 'Introducción > P2', component: TemaDosView },
  { path: '/temarioViews/TemaTresView', name: 'Línea del tiempo  ', component: TemaTresView },
  { path: '/temarioViews/TemaCuatroView', name: 'Objetivos', component: TemaCuatroView },
  { path: '/temarioViews/TemaCincoView', name: 'Tipos de Servicio > P1 ', component: TemaCincoView },
  { path: '/temarioViews/TemaSeisView', name: 'Tipos de Servicio  > P2', component: TemaSeisView },
  
  { path: '/temarioViews/TemaSieteView', name: 'Call Center  ', component: TemaSieteView },
  { path: '/temarioViews/TemaOchoView', name: 'Funcionamiento', component: TemaOchoView },
  
  { path: '/temarioViews/TemaNueveView', name: 'Centro de Contacto  ', component: TemaNueveView },
  { path: '/temarioViews/TemaDiezView', name: 'Funcionamiento', component: TemaDiezView },

  { path: '/temarioViews/TemaOnceView', name: 'Diferencias > P1  ', component: TemaOnceView },
  { path: '/temarioViews/TemaDoceView', name: 'Diferencias > P2', component: TemaDoceView },
  { path: '/temarioViews/TemaTreceView', name: 'Diferencias  > P3 ', component: TemaTreceView },
  { path: '/temarioViews/TemaCatorceView', name: 'Canales > P1', component: TemaCatorceView },
  { path: '/temarioViews/TemaQuiceView', name: 'Canales > P2 ', component: TemaQuiceView },
  { path: '/temarioViews/TemaDieciseisView', name: 'Canales > P3', component: TemaDieciseisView },
  { path: '/temarioViews/TemaDiecisieteView', name: 'Canales > P4 ', component: TemaDiecisieteView },
  
  { path: '/temarioViews/TemadiecinueveView', name: 'CC ', component: TemadiecinueveView },

  { path: '/temarioViews/TemaVeinteView', name: 'Funciones > P1', component: TemaVeinteView },
  { path: '/temarioViews/TemaVeintiunoView', name: 'Funciones > P2', component: TemaVeintiunoView },
  { path: '/temarioViews/TemaVeintidosView', name: 'Funciones > P3', component: TemaVeintidosView },
  
  { path: '/temarioViews/TemaVeintitresView', name: 'Servicios', component: TemaVeintitresView },
  { path: '/temarioViews/TemaVeinticuatroView', name: 'Para finalizar  ', component: TemaVeinticuatroView },

  { path: '/temarioViews/TemaVeinticincoView', name: '¿Qué es?  ', component: TemaVeinticincoView },
  { path: '/temarioViews/TemaVeintiseisView', name: 'Consultoría  ', component: TemaVeintiseisView },
  { path: '/temarioViews/TemaVeintisieteView', name: 'Outsourcing', component: TemaVeintisieteView },
  { path: '/temarioViews/TemaVeintiochoView', name: 'TIPOS DE OUTSOURCING  ', component: TemaVeintiochoView },
  { path: '/temarioViews/TemaVeintinueveView', name: 'ETAPAS DEL PROCESO DE OUTSOURCING > P1  ', component: TemaVeintinueveView },
  { path: '/temarioViews/TemaTreitaView', name: 'ETAPAS DEL PROCESO DE OUTSOURCING > P2 ', component: TemaTreitaView },
  { path: '/temarioViews/TemaTreitayunoView', name: 'Capacitación', component: TemaTreitayunoView },
  { path: '/temarioViews/TemaTreitaydosView', name: 'Calidad  ', component: TemaTreitaydosView },
  { path: '/temarioViews/TemaTreitaytresView', name: 'Business Intelligence ', component: TemaTreitaytresView },
  

];


export default routes;
