import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import GaleriaPage from './pages/GaleriaPage';
//import ServiciosPage from './pages/ServiciosPage';
import DestinosPage from './pages/DestinosPage';


import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage}/>        
        <Route path="/nosotros" exact component={NosotrosPage}/>
        <Route path="/destinos" exact component={DestinosPage}/>
        <Route path="/galeria" exact component={GaleriaPage}/>
        <Route path="/novedades" exact component={NovedadesPage}/>
        <Route path="/contacto" exact component={ContactoPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
