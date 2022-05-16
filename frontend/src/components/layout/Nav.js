import '../../styles/components/layout/Nav.css';

import { NavLink } from 'react-router-dom';

const Nav =(props)=>{
    return(
    <nav>
        <div className="holder">
            <ul>
                <li><NavLink activeClassName='activo' exact to="/">HOME</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/nosotros">NOSOTROS</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/destinos">DESTINOS</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/novedades">NOVEDADES</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/galeria">GALERIA</NavLink></li>
                <li><NavLink activeClassName='activo' exact to="/contacto">CONTACTO</NavLink></li>
            </ul>
        </div>
    </nav>
    );}
export default Nav;