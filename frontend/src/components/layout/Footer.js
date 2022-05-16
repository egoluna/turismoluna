
import '../../styles/components/layout/Footer.css';
import React from 'react';
const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8"><p>Derechos Reservados. Luna Viajes 2022</p></div>
                    <div className="col-sm-4">
                        <ul>
                            <li>Telefono: +54-291-7455555</li>
                            <li>Email: contacto@turismoluna.com.ar</li>
                            <li><i className="fab fa-instagram icono"></i> turismoluna</li>
                            <li><i className="fab fa-facebook icono"></i> turismoluna</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;