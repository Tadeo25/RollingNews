import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio";
import SeccionNoticias from './components/SeccionNoticia'
import Suscripcion from "./components/Suscripcion";
import AgregarNoticia from './components/AgregarNoticia';
import ListaNoticias from './components/ListaNoticias';
import EditarNoticia from './components/EditarNoticia';
import Clima from "./components/Clima";

function App() {
  const [temperatura, setTemperatura] = useState(0);
  const [termica, setTermica] = useState(0);
  const [humedad, setHumedad] = useState(0);
  const [icono, setIcono] = useState("");

  const URL = process.env.REACT_APP_API_URL
  const [noticias, setNoticias] = useState([]);
  
  useEffect(() => {
    consultarClima();
  }, []);

  const consultarClima = async () => {
    const respuesta = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=3836873&lang=es&units=metric&appid=ca68d2c3ae10488558ec62298f38d45b"
    );
    const resultado = await respuesta.json();
    setTemperatura(resultado.main.temp);
    setTermica(resultado.main.feels_like);
    setHumedad(resultado.main.humidity);
    setIcono(resultado.weather[0].icon);
  };
  

  useEffect(() =>{
    consultarAPI();
  }, []);

  const consultarAPI = async () =>{
    try {
      const res = await fetch(URL);
      if (res.status === 200) {
      const datos = await res.json();
      console.log(datos);
      setNoticias(datos);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
          <Inicio></Inicio>
        </Route>
        <Route exact path="/Seccion">
          <SeccionNoticias></SeccionNoticias>
        </Route>
        <Route exact path="/suscripcion">
          <Suscripcion></Suscripcion>
        </Route>
        <Route exact path='/agregarNoticia'>
           <AgregarNoticia consultarAPI={consultarAPI}></AgregarNoticia>
         </Route>
         <Route exact path='/lista'>
           <ListaNoticias noticias={noticias} consultarAPI={consultarAPI}></ListaNoticias>
         </Route>
         <Route exact path='/editarnoticia/:_id'>
           <EditarNoticia consultarAPI={consultarAPI}></EditarNoticia>
         </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
  }

export default App;
