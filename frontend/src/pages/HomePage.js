import '../styles/components/pages/HomePage.css';
import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            {/* fotos en carrusel ------------------------------------------------------------------*/}
            <nav>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/galeria/img01.jpg" className="d-block w-100" alt="Paisajes Naturales" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-4">PAISAJES</h5>
                                <h4 className="display-4">NATURALES</h4>
                                <p className="bg-secondary bg-gradient bg-opacity-50 text-center">Recorrer los senderos llenos de aventuras</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/galeria/img02.jpg" width="960" className="d-block w-100" alt="Paisaje de ensueño" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-4">PAISAJES</h5>
                                <h4 className="display-4">DE ENSUEÑO</h4>
                                <p className="bg-secondary bg-gradient bg-opacity-50 text-center">Disfrutar de paisajes de ensueño</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/galeria/img03.jpg" className="d-block w-100" alt="Paisajes magestuosos" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-4">PAISAJES</h5>
                                <h4 className="display-4">MAGESTUOSOS</h4>
                                <p className="bg-secondary bg-gradient bg-opacity-50 text-center">Maravillarse ante la grandiosidad de los lugares</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </nav>
            {/*FIN fotos en carrusel ------------------------------------------------------------------*/}

            {/*Acordeon----------------------------------------------------------------*/}
            <div className="container">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-secondary text-white" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                INICIO
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body row border-1">
                                <div className="col-12 col-md-4">
                                    <p className="lead">El encanto de viajar a la costa bonaerense en verano; el norte siempre es más amable en otoño; el
                                        invierno da cita a puro esquí en la Cordillera de los Andes y la primavera se celebra en santuarios naturales
                                    </p>
                                </div>
                                <div className="col-12 col-md-8 bg-light">
                                    <p className="lead">La gran extensión de la <strong>Argentina</strong> y sus estaciones bien marcadas permite que durante todo el año el
                                        viajero pueda elegir el clima ideal para sus vacaciones. En invierno se puede escapar al frío
                                        viajando al norte del país, donde hay máximas de 19 grados. O en verano, huir del calor, eligiendo
                                        el verano de la Patagonia, donde se registran unos 15 grados menos que en la Ciudad de Buenos Aires,
                                        por ejemplo. </p>
                                </div>
                                <div className="col-12">
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/bu-XsOIzbsA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed  bg-secondary text-white" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                ARGENTINA
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body row lead">
                                <div className="col-12 col-md-5 mb-3 mt-3">
                                    <p className="align-middle">Argentina es, con 6 759 000 turistas en 2017 según la Organización Mundial del Turismo, el país más visitado de Sudamérica y el segundo más visitado de toda América Latina después de México, siendo superados en América también por Estados Unidos (82,9 millones) y Canadá (27,3 millones).
                                    </p>
                                    <p className="align-middle">
                                    Las gigantescas distancias exigen en la mayoría de los casos viajes en avión.
                                    </p>
                                    </div>
                                <div className="col-12 col-md-7 mb-3 "><img src="images/inicio/argentina01.jpg" className="w-100" alt="testimonio 3" /></div>
                                <div className="col-12 col-md-8 mb-3  bg-info  bg-opacity-25"><img src="images/inicio/argentina02.jpg" className="w-100" alt="argentina 3" /></div>
                                <div className="col-12 col-md-4 mb-3  bg-info  bg-opacity-25">Dotada de un inmenso territorio con grandes atracciones turísticas, una variedad de climas enorme, maravillas naturales, cultura, costumbres y gastronomías famosas a nivel internacional, un grado de desarrollo muy alto, buena calidad de vida y una infraestructura bien preparada, la Argentina es receptora de masivas cantidades de viajeros.</div>
                                <div className="col-12 col-md-6 mb-3">El país presenta toda la gama de climas posibles: templado, cálido seco, cálido húmedo, frío seco, frío húmedo, semiárido, estepario, subantártico, subtropical, frío de montaña y una enorme variedad de microclimas.</div>
                                <div className="col-12 col-md-6 mb-3 "><img src="images/inicio/argentina03.jpg" className="w-100" alt="argentina 3" /></div>
                                <div className="col-12 col-md-12 mb-3  bg-info  bg-opacity-25">El territorio argentino se extiende desde las más elevadas cumbres de los Andes en el oeste hacia los grandes ríos y las extensas playas y acantilados del Mar argentino en el este, desde la selva tropical de las yungas al norte hasta los valles, glaciares, lagos y bosques fríos de la Patagonia Andina en el sur hasta la Antártida. </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed  bg-secondary text-white" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                TESTIMONIOS
                            </button>

                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body row ">
                                <div className="col-12 col-md-4 card mb-3">
                                    <div className="card h-100">
                                        <img src="images/inicio/testimonio1.png" className="card-img-top" alt="testimonio 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Elena Prost (Cataratas del Iguazú)</h5>
                                            <p className="card-text">Cumplio con todo y más! Inolvidable viaje</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 card mb-3">
                                    <div className="card h-100">
                                        <img src="images/inicio/testimonio2.png" className="card-img-top" alt="testimonio 2" />
                                        <div className="card-body">
                                            <h5 className="card-title">Dario Martinez(Puerto Madryn)</h5>
                                            <p className="card-text">Estan en todos los detalles. 100% recomendable</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 card mb-3">
                                    <div class="card h-100">
                                        <img src="images/inicio/testimonio3.png" className="card-img-top" alt="testimonio 3" />
                                        <div className="card-body">
                                            <h5 className="card-title">Antonio Sanchez (Calafate)</h5>
                                            <p className="card-text">Todo muy bien organizado desde la recogida hasta el final de la excursión. El
                                                guía conoce bien la zona y da información detallada de cada sitio por donde pasamos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/*Pagina ------------------------------------------------------------------*/}
        </main >
    );
}
export default HomePage;