import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import AgregarNoticia from './components/AgregarNoticia';
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/agregarNoticia'>
         <AgregarNoticia></AgregarNoticia>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
