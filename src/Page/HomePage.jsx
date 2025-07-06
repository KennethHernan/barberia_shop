import Portada1 from "../assets/joven-en-peluqueria-corte-de-pelo.jpg"
import img_1 from "../assets/hombre-guapo-cortando-barba-en-un-salon-de-peluqueria.jpg"
import img_2_1 from '../assets/joven-en-peluqueria-corte-de-pelo (1).jpg';
import img_2 from "../assets/chica-africa-mujer-haciendo-cejas-chicas-en-un-salon-de-belleza.jpg"
import img_3 from "../assets/img3.jpg"
import img_4 from "../assets/hombre-guapo-en-barberia-afeitado-barba.jpg"
import img_5 from "../assets/una-peluquera-profesional-hace-el-corte-de-pelo-de-un-cliente-la-nina-esta-sentada-en-una-mascara-en-el-salon-de-belleza.jpg"
import Logo from "../assets/Logo.svg"
function HomePage() {
    return (
        <div className="w-screen bg-transparent">
            <div className="w-full h-[100vh] fixed top-0 "
                style={{
                    backgroundImage: `url(${Portada1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
            </div>

            <section className="absolute top-0 w-full h-auto bg-transparent">
                {/* Seccion 1 */}
                <div className="h-[100vh]" id="inicio">
                    <section className="h-[90px] flex justify-between text-[#fff] px-10 py-3">
                        <p className="w-[120px] font-bold text-[30px]">Triba</p>
                        <div className="h-auto flex gap-5 items-center justify-center">
                            <a href="#inicio">
                                <button className="hover:bg-[#00000084] px-4 py-2 rounded-[10px] transition-colors duration-800">Inicio</button>
                            </a>
                            <a href="#servicio">
                                <button className="hover:bg-[#00000084] px-4 py-2 rounded-[10px] transition-colors duration-800">Servicios</button>
                            </a>
                            <a href="#nosotros">
                                <button className="hover:bg-[#00000084] px-4 py-2 rounded-[10px] transition-colors duration-800">Locks & Oc</button>
                            </a>
                            <a href="#contacto">
                                <button className="hover:bg-[#00000084] px-4 py-2 rounded-[10px] transition-colors duration-800">Contacto</button>
                            </a>
                        </div>
                    </section>

                    <div className="w-auto h-auto m-10 text-[#fff]">
                        <p className="w-[90vh] text-[50px] font-extrabold mb-[25vh] mt-[12vh]">
                            Tu imagen habla por ti. Haz que diga lo mejor con Locks & Co.
                        </p>
                        <section className="flex justify-between ">
                            <div>
                                <p className="text-[25px] font-bold">Cortes que Inspiran Confianza</p>
                                <p className="font-light">Barbería & Peluquería de estilo moderno para hombres y mujeres.</p>
                            </div>
                            <a href="#contacto">
                                <button className="mt-10 px-6 py-3 bg-white text-black rounded-[5px] text-[20px] font-medium hover:bg-opacity-5 hover:text-white transition-all duration-800">Reservar cita</button>
                            </a>
                        </section>
                    </div>
                </div>
                {/* Seccion 2 */}
                <section className="h-[100vh] px-10 bg-white flex items-center" id="nosotros">
                    <div className="w-[50%]">
                        <img src={img_1} />
                    </div>
                    <div className="w-[50%] p-10">
                        <p className="text-[35px] font-bold mb-10">Somos Locks & Co</p>
                        <section className="grid grid-row-3 gap-5">
                            <p>En Locks & Co combinamos la tradición de la barbería clásica con las últimas tendencias en peluquería moderna. Somos un espacio diseñado para quienes buscan más que un simple corte: ofrecemos una experiencia de estilo, cuidado y confianza. </p>
                            <p>Nuestro equipo de profesionales está comprometido en brindar un servicio personalizado, con técnicas precisas y productos de alta calidad. Desde cortes clásicos hasta tratamientos capilares, afeitados premium y estilismo femenino, Locks & Co es el lugar donde tu imagen se transforma. </p>
                            <p>Visítanos y descubre un ambiente acogedor, moderno y pensado para que salgas sintiéndote como tu mejor versión.</p>
                        </section>
                    </div>
                </section>

                {/* Seccion 3 */}
                <section className="h-[100vh] flex items-center">
                    <div className="w-[50%] h-screen bg-black">
                        <img src={img_2_1} className="object-cover bg-cover h-[100vh]" />
                    </div>
                    <div className="w-[50%] h-screen bg-black">
                        <img src={img_2} className="object-cover bg-cover h-[100vh]" />
                    </div>
                </section>

                {/* Seccion 4 */}
                <section className="p-10 bg-white flex justify-between text-[14px]">
                    <div className="w-[250px] text-center">
                        <p className="text-[20px] font-bold mb-1">Corte Clásico</p>
                        <p>Corte de cabello con estilo clásico o moderno, a tu gusto.</p>
                    </div>
                    <div className="w-[250px] text-center">
                        <p className="text-[20px] font-bold mb-1">Barbería Profesional</p>
                        <p>Afeitado con toalla caliente, perfilado de barba y cuidado facial.</p>
                    </div>
                    <div className="w-[250px] text-center">
                        <p className="text-[20px] font-bold mb-1">Estilo para Damas</p>
                        <p>Cortes, peinados, coloración y tratamientos para el cabello femenino.</p>
                    </div>
                </section>

                {/* Seccion 5 */}
                <section className="bg-white px-10 pt-10 pb-10 flex items-center" id="servicio">
                    <div className="w-[50%] p-10 text-[35px] font-bold flex flex-col items-center">
                        <div>
                            <p className="w-[60vh]">CORTE DE CABELLO CLÁSICO</p>
                            <p className="text-[#A96E41]">ESTILO</p>
                            <p className="text-[16px] font-normal w-[60vh]">Redescubre el estilo con un corte clásico o moderno, adaptado a tu personalidad. Ya sea elegante, urbano o casual, en Locks & Co cuidamos cada detalle para que salgas con una imagen renovada.</p>
                            <p>S/ 20.00</p>
                        </div>
                    </div>

                    <div className="w-[50%] h-[65vh] p-10 overflow-hidden">
                        <img src={img_3} className="-mt-[40vh]" />
                    </div>
                </section>

                {/* Seccion 6 */}
                <section className="bg-black text-white px-10 flex items-center">
                    <div className="w-[50%] p-10">
                        <img src={img_4} />
                    </div>
                    <div className="w-[50%] p-10 text-[35px] font-bold flex flex-col items-center">
                        <div>
                            <p className="w-[60vh]">CORTE DE CABELLO BARBERÍA PROFESIONAL</p>
                            <p className="text-[#A96E41]">PRESICIÓN</p>
                            <p className="text-[16px] font-normal w-[60vh]">Relájate con una experiencia completa: afeitado con toalla caliente, perfilado exacto de barba y tratamiento facial. El servicio perfecto para quienes valoran la precisión y el cuidado personal.</p>
                            <p>S/ 30.00</p>
                        </div>
                    </div>
                </section>
                {/* Seccion 5 */}
                <section className="bg-white px-10 flex items-center">
                    <div className="w-[50%] p-10 text-[35px] font-bold flex flex-col items-center">
                        <div>
                            <p className="w-[60vh]">CORTE DE CABELLO ESTILO PARA DAMAS</p>
                            <p className="text-[#A96E41]">TRANSFORMACIÓN</p>
                            <p className="text-[16px] font-normal w-[60vh]">Cortes, peinados, coloración y tratamientos pensados para realzar tu belleza. Vive una verdadera transformación con asesoría personalizada y los mejores productos.</p>
                            <p>S/ 40.00</p>
                        </div>
                    </div>

                    <div className="w-[50%] p-10">
                        <img src={img_5} />
                    </div>
                </section>

                {/* Seccion 6 */}
                <section className="bg-black px-10 flex items-center text-[#fff] h-[100vh]" id="contacto">
                    <div className="p-10 text-[35px] font-bold flex flex-col items-center justify-center w-full">
                        <p>¿LISTO PARA TU NUEVO LOOK?</p>
                        <p className="text-[#A96E41]">¿Quieres aprender con nosotros?</p>
                        <a href="https://wa.me/942355046" target="_blank">
                            <button className="mt-10 px-6 py-3 bg-[#A96E41] text-black text-[20px] font-medium hover:bg-opacity-5 hover:text-white transition-all duration-800">
                                Agendar por WhatsApp
                            </button>
                        </a>
                    </div>
                </section>
            </section >
        </ div >

    );
}

export default HomePage;
