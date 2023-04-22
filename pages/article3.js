import Head from "next/head";
import Image from "next/image";
import ElHereje from "../public/ElHereje.png";
import cuchillo from "../public/cuchillo.jpg";
import lasviudas from "../public/Lasviudas.jpg";
import NavBar from "../components/Carousel";
import mani from "../public/mani.jpg";
import cinco from "../public/cinco.jpg";
import cinco2 from "../public/cinco2.jpg";
import Link from "next/link";

export default function Home3() {
    return (
        <div>
            <Head>
                <title>Directorio de artículos</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white">
                <section className="max-h-s bg-zinc-900">
                    <nav className="py-10 mb-12 flex justify-between text-white px-6">
                        <h1 className="text-6xl font-serif dark:text-white">
                            <Link href="/"> El Hereje</Link>
                        </h1>
                        <ul className="flex items-center px-4 text-3xl">
                            <li className="px-4">
                                <Link
                                    href="/articledir"
                                    className="group transition duration-300 font-serif"
                                >
                                    Directorio de artículos
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                </Link>
                            </li>
                            <li className="px-4">
                                <Link
                                    href="/games"
                                    className="group transition duration-300 font-serif"
                                >
                                    Pasatiempos
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                </Link>
                            </li>
                            <li className="px-4">
                                <button className="bg-white text-black px-4 py-2 rounded-full font-serif">
                                    Suscríbete
                                </button>
                            </li>
                        </ul>
                    </nav>
                </section>
            </main>
            <div>
                <h1 className="flex justify-center text-3xl p-4 font-serif">
                CRÍTICA DE CINCO HORAS CON MARIO
                </h1>
                <div class="flex justify-center items-center">
                    <Image
                    class="w-3/6"
                     src={cinco}
                     alt="" />
                </div>
                <h2 className="px-5 font-serif mx-20">Abel Villorejo Lermo </h2>
                <h3 className="p-5 font-serif mx-20">10 de febrero de 2023 </h3>
                <div className="text-justify mx-40 py-10">
                    <p className="px-5 font-serif">
                    Hace ya unos pocos días, acudí al inmejorable Teatro Calderón vallisoletano, donde se iba a realizar una representación de la famosa y renombrada novela Cinco horas con Mario. Para quien no esté muy familiarizado con este título, resumiré brevemente.
                    </p>
                    <p className="px-5 font-serif py-10">
                    Cinco horas con Mario es una novela creada por el escritor Miguel Delibes, la cual fue publicada allá por la lejana década de los 60. La trama principal se puede resumir en el soliloquio de la protagonista. Es el caso de la viuda española Carmen Sotillo (representada en la obra por la veterana actriz Lola Herrera). La novela consiste en este personaje conversando con su difunto marido, Mario Díez Collado, cuya muerte se produjo de forma inesperada en los años 60.
                    </p>
                    <div class="flex justify-center items-center">
                    <Image 
                    class="w-3/6"
                    src={cinco2}
                     alt="" />
                </div>
                    <p className="px-5 font-serif Link py-10">
                    Aunque a primera vista pueda parecer una novela tediosa de leer, con conversaciones igual de aburridas, en realidad se trata de una obra literaria con un importante trasfondo social y político, ya que la protagonista es una representación de las dos Españas de la época, enfrentadas eternamente. Y eso es algo que no cambia por mucho que pase el tiempo.
                        
                    </p>
                    <p className="px-5 font-serif py-10">
                    Dicho esto, ha llegado el momento de la crítica de la obra. En lo que trata a la adaptación del libro al escenario, todos los miembros de la compañía han cumplido un papel fantástico. Sin duda alguna, la obra de teatro en muy fiel a la novela, sin cambiar su esencia ni su importante mensaje. Respecto a la actuación, Lola Herrera ha vuelto a demostrar que ha nacido para interpretar a Carmen. La primera vez que interpretó este papel fue en 1979, a la edad de 44 años. Ahora, y para sorpresa de la mayoría de los espectadores, la brillante artista ha vuelto a interpretarlo con la edad de 86 años, con la misma gracia y talento de siempre.
                    </p>
                    <p className="px-5 font-serif">
                    Me gustaría concluir este breve artículo diciendo que recomiendo esta obra completamente. Todos los elementos de la obra fueron perfectos, desde la dirección y producción hasta la actuación. Si tienen una oportunidad de acudir a este maravilloso espectáculo, no la desaprovechen, ya que se estarían perdiendo una de las mejores interpretaciones de esta novela histórica. 
                    </p>
                    
                </div>
              
                
            </div>
            <footer class="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">El Hereje™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="#" class="mr-4 hover:underline md:mr-6 ">Quiénes somos</Link>
        </li>
        <li>
            <Link href="#" class="mr-4 hover:underline md:mr-6">Política de privacidad</Link>
        </li>
        <li>
            <Link href="#" class="mr-4 hover:underline md:mr-6">Aviso legal</Link>
        </li>
        <li>
            <Link href="#" class="hover:underline">Contacto</Link>
        </li>
    </ul>
</footer>
        </div>
    );
}