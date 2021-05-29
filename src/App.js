import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navegacion from './components/comun/Navegacion';
import Inicio from './components/Inicio';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/' >
        <Inicio></Inicio>
        </Route>
        <Route exact path='/login'>
        <Login></Login>
        </Route>
        <Route exact path=''></Route>
        <Route exact path=''></Route>
      </Switch>
    </Router>
  );
}

export default App;
