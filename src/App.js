import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navegacion from "./components/common/Navegacion";
import Inicio from "./components/Inicio";
//import SeccionNoticias from './components/SeccionNoticias'
import Suscripcion from "./components/Suscripcion";
import { useState, useEffect } from "react";
import Clima from "./components/Clima";

function App() {
  const [temperatura, setTemperatura] = useState(0);
  const [termica, setTermica] = useState(0);
  const [humedad, setHumedad] = useState(0);
  const [icono, setIcono] = useState("");
  
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
          {/* <SeccionNoticias></SeccionNoticias> */}
        </Route>
        <Route exact path="/suscripcion">
          <Suscripcion></Suscripcion>
        </Route>
        <Route exact path=""></Route>
      </Switch>
    </Router>
  );
}

export default App;
