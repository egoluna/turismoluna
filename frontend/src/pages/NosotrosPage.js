import '../styles/components/pages/NosotrosPage.css';
import React from 'react';

const NosotrosPage =(props)=>{
    return (
    
    <section className="holder">
        <div className="historia">
            <h2>Nosotros</h2>
            <img src="images/nosotros/grupo.jpg" alt="Grupo"/>
            <p>Empresa fundada en el 2004 entre amigos orgullosos de Argentina en constante crecimiento.</p>
            <p>Somos un equipo de gente apasionada por los viajes que trabaja todos los días para que nuestros clientes disfruten sus vacaciones y viajes de negocios</p>
            <p>Experiencia, Conocimiento y Compromiso por los resultados, son las bases sobre las cuales hemos edificado nuestra empresa. La confianza depositada en nuestros servicios, la atención personalizada y la respuesta que nos continúan brindando nuestros clientes, nos ha permitido lograr un sólido posicionamiento y un gran conocimiento en la relación con las compañías aéreas, hoteles, rentadoras de autos, y todos los prestadores de servicios turísticos.</p>            
        </div>
        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="images/nosotros/persona1.jpg" alt="Mariela Alzaga"/>
                    <h5>Mariela Alzaga</h5>
                    <h6>Gerente General</h6>
                    <p> Lic. en Turismo - Universidad Nacional del Sur. Trabajando en la empresa desde sus comienzos.<em> "Me gusta la felicidad reflejada en los clientes"</em></p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/persona2.jpg" alt="Elena Hueque"/>
                    <h5>Elena Hueque</h5>
                    <h6>Ventas</h6>
                    <p>Marketing. Universidad Católica de Cuyo. Trabajando en la empresa desde el 2006. Encargada del personal de ventas.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/persona3.jpg" alt="Julia Ruiz"/>
                    <h5>Julia Ruiz</h5>
                    <h6>Administración</h6>                    
                    <p>Licenciada en Administración Hotelera - Universidad Siglo XXI. Trabajando en la empresa desde sus comienzos. </p>
                </div>
            </div>
            <div className="personas">
                <div className="persona">
                    <img src="images/nosotros/persona4.jpg" alt="Gina Donatti"/>
                    <h5>Gina Donatti</h5>
                    <h6>Alojamientos</h6>
                    <p>Administración Hotelera - Universidad Nacional del Litoral. Trabajando en la empresa desde sus comienzos. Coordinación de hoteles y cabañas.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/persona5.jpg" alt="Itati Romero"/>
                    <h5>Itati Romero</h5>
                    <h6>Excursiones</h6>
                    <p>Profesora de Educación Física - Instituto de La Plata. Encargada de la coordinación de las diferentes excursiones.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/persona6.jpg" alt="Ramiro Moreno"/>
                    <h5>Ramiro Moreno</h5>
                    <h6>Transportes</h6>
                    <p>Licenciado en Organización y Logistica -Universidad Nacional del Nordeste. Encargado de la coordinación de viajes terrestres o aéreos.</p>
                </div>
            </div>
        </div>
    </section>
        );
}
export default NosotrosPage;