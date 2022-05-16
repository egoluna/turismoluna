import '../styles/components/pages/GaleriaPage.css';
import React from 'react';

const NovedadesPage = (props) => {
    return (
        <section className="holder">
            <h2>Galeria</h2>
            <div className="contenedor">

                <div class="view">
                    <img src="images/galeria/img01.png"/>
                    <div class="mask">
                        <h2>Barrio La Boca — Buenos Aires</h2>
                        <p>La Boca es un mítico barrio que se encuentra en la ciudad de Buenos Aires donde se mantiene una estética muy particular que te remonta a los primeros años cuando los inmigrantes llegaron al país.
</p>
                    </div>
                </div>
                <div class="view">
                    <img src="images/galeria/img02.png"/>
                    <div class="mask">
                        <h2>Cataratas del Iguazú - Misiones</h2>
                        <p>Miles de litros de agua cayendo, así parece poca cosa pero es imponente cuando uno está por esos puentes de acero a metros de la Garganta del diablo.
</p>
                    </div>
                </div>
                <div class="view">
                    <img src="images/galeria/img03.png"/>
                    <div class="mask">
                        <h2>Mar del plata — Buenos Aires</h2>
                        <p>Quizás el destino de verano más popular de Argentina, en Enero se llena de turistas y ofrece kilómetros y kilómetros de playas para todos los gustos.
</p>
                    </div>
                </div>
                <div class="view">
                <img src="images/galeria/img04.png"/>
                    <div class="mask">
                        <h2>Mendoza</h2>
                        <p>Centro de esquí, zoológico más grande de latinoamérica, ciudad cosmopolíta, ruta del vino y complejo de aguas termales.</p>
                    </div>
                </div>
                <div class="view">
                <img src="images/galeria/img05.png"/>
                    <div class="mask">
                        <h2>Bosque de Arrayanes — Villa la Angostura</h2>
                        <p>Un sendero para recorrer a pie en medio de un bosque de árboles Arrayanes.</p>
                    </div>
                </div>


                <div class="view">
                    <img src="images/galeria/img06.png"/>
                    <div class="mask">
                        <h2>Perito Moreno</h2>
                        <p>Gigantesca masa de hielo es visible desde diferentes miradores que hacen las delicias de los amantes a la fotografía.</p>
                    </div>
                </div>

                <div class="view">
                    <img src="images/galeria/img07.png"/>
                    <div class="mask">
                        <h2>Talampaya- San Juan</h2>
                        <p>Formaciones geológicas: El Fraile, el Rey Mago, la Catedral, el Tablero de Ajedrez, las Agujas, el Pesebre y el Castillo</p>
                    </div>
                </div>

                <div class="view">
                    <img src="images/galeria/img08.png"  />
                    <div class="mask">
                        <h2>Sierra de las Quijadas - San Luis</h2>
                        <p>Zona de una gran riqueza paleontológica, ya que en su territorio se han hallado numerosos fósiles de dinosaurios
                        </p>
                    </div>
                </div>




            </div>            
        </section>
    );
}
export default NovedadesPage;