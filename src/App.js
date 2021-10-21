import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navegacion from "./components/common/Navegacion";
import Login from './components/Login';
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import SeccionActualidad from './components/Secciones/SeccionActualidad';
import SeccionEspectaculos from './components/Secciones/SeccionEspectaculos';
import SeccionTecnologia from './components/Secciones/SeccionTecnologia';
import SeccionDeportes from './components/Secciones/SeccionDeportes';
import SeccionEconomia from './components/Secciones/SeccionEconomia';
import SeccionPolitica from './components/Secciones/SeccionPolitica';
import SeccionSalud from './components/Secciones/SeccionSalud';
import SeccionFotografia from './components/Secciones/SeccionFotografia';
import Suscripcion from "./components/Suscripcion";
import AgregarNoticia from './components/AgregarNoticia';
import ListaNoticias from './components/ListaNoticias';
import EditarNoticia from './components/EditarNoticia';
import DetalleNoticias from './components/DetalleNoticia';
import DetalleDeportes from './components/DetalleNoticiaDeportes';
import DetalleTecnologia from './components/DetalleNoticiaTecnologia';
import DetalleEspectaculo from './components/DetalleNoticiaEspectaculo';
import Clima from "./components/Clima";
import Error404 from "./components/Error404";
import {isAdmin} from "./components/common/helpers";

function App() {
  const [temperatura, setTemperatura] = useState(0);
  const [termica, setTermica] = useState(0);
  const [humedad, setHumedad] = useState(0);
  const [icono, setIcono] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarClima = async () => {
      const respuesta = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=3836873&lang=es&units=metric&appid=ca68d2c3ae10488558ec62298f38d45b"
      );
      const resultado = await respuesta.json();
      if (resultado){
        setTemperatura(resultado.main.temp);
        setTermica(resultado.main.feels_like);
        setHumedad(resultado.main.humidity);
        setIcono(resultado.weather[0].icon);
      }
      
    };
    consultarClima();
  }, []);



  const consultarAPI = useCallback( async () => {
    try {
      const URL = process.env.REACT_APP_API_URL+'/noticias';
      const res = await fetch(URL);
      if (res.status === 200) {
        const datos = await res.json();
        console.log(datos);
        setNoticias(datos);
      }
    } catch (error) {
      console.log(error);
    }
  
  }, [])

  useEffect(() => {
    consultarAPI();
  }, [consultarAPI]);

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Clima
            temperatura={temperatura}
            termica={termica}
            humedad={humedad}
            icono={icono}
          ></Clima>
          <Inicio noticias={noticias} consultarAPI={consultarAPI}></Inicio>
        </Route>
        <Route exact path='/login'>
        { isAdmin() 
          ? <Redirect to='/lista'/>
          : <Login></Login>}
        </Route>
        <Route exact path="/actualidad">
          <SeccionActualidad></SeccionActualidad>
        </Route>
        <Route exact path="/espectaculos">
          <SeccionEspectaculos></SeccionEspectaculos>
        </Route>        
        <Route exact path="/tecnologia">
          <SeccionTecnologia></SeccionTecnologia>
        </Route>       
        <Route exact path="/deportes">
          <SeccionDeportes></SeccionDeportes>
        </Route>        
         <Route exact path="/economia">
          <SeccionEconomia></SeccionEconomia>
        </Route>        
        <Route exact path="/politica">
          <SeccionPolitica></SeccionPolitica>
        </Route>        
        <Route exact path="/salud">
          <SeccionSalud></SeccionSalud>
        </Route>       
         <Route exact path="/fotografia">
          <SeccionFotografia></SeccionFotografia>
        </Route>
        <Route exact path="/suscripcion">
          <Suscripcion></Suscripcion>
        </Route>
        <Route exact path='/agregarNoticia'>
           <AgregarNoticia consultarAPI={consultarAPI}></AgregarNoticia>
         </Route>
          <Route exact path='/lista'>
           { isAdmin() && <ListaNoticias noticias={noticias} consultarAPI={consultarAPI}></ListaNoticias>}
            {!isAdmin() &&  <Redirect to='/login'/>}
          </Route> 
     
         <Route exact path='/editarnoticia/:_id'>
           <EditarNoticia consultarAPI={consultarAPI}></EditarNoticia>
         </Route>
        <Route exact path="/noticias/Detalle">
          <DetalleNoticias></DetalleNoticias>
        </Route>
        <Route exact path="/noticias/Detalle/Deportes">
          <DetalleDeportes></DetalleDeportes>
        </Route>
        <Route exact path="/noticias/Detalle/Tecnologia">
          <DetalleTecnologia></DetalleTecnologia>
        </Route>
        <Route exact path="/noticias/Detalle/Espectaculo">
          <DetalleEspectaculo></DetalleEspectaculo>
        </Route>
         <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
