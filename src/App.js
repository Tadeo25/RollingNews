import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import AgregarNoticia from './components/AgregarNoticia';
import ListaNoticias from './components/ListaNoticias';
import EditarNoticia from './components/EditarNoticia';
function App() {
  const URL = process.env.REACT_APP_API_URL

  const [noticias, setNoticias] = useState([]);

  useEffect(() =>{
    consultarAPI();
  }, []);

  const consultarAPI = async () =>{
    try {
      const res = await fetch(URL);
      if (res.status === 200) {
      const datos = await res.json();
      setNoticias(datos);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
   <Router>
     <Switch>
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
   </Router>

  );
  }

export default App;
