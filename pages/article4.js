import Head from "next/head";
import Image from "next/image";
import ElHereje from "../public/ElHereje.png";
import cuchillo from "../public/cuchillo.jpg";
import lasviudas from "../public/Lasviudas.jpg";
import NavBar from "../components/Carousel";
import mani from "../public/mani.jpg";
import lola from "../public/lola.jpg";
import auditorio from "../public/auditorio.jpg";
import Link from "next/link";

export default function Home4() {
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
                LOLA HERRERA SE  DESMAYA ACTUANDO
                </h1>
                <div class="flex justify-center items-center">
                    <Image class="w-3/6" src={lola} alt="" />
                </div>
                <h2 className="px-5 font-serif mx-20">Abel Villorejo Lermo</h2>
                <h3 className="p-5 font-serif mx-20">19 de febrero de 2023 </h3>
                <div className="text-justify mx-40 py-10">
                    <p className="px-5 font-serif">
                    La actriz vallisoletana Lola Herrera ha sufrido este jueves por la noche un desmayo durante la interpretación de la obra Cinco horas con Mario. El suceso ha tenido lugar en el Auditorio Ciudad de León. Afortunadamente, la actriz (de 84 años de edad) ha conseguido recuperarse sin necesidad de intervención médica ni de un ingreso hospitalario.
                    </p>
                    <p className="px-5 font-serif py-10">
                    La actriz sufrió un desmayo sobre el escenario tras haber sido representados apenas 20 minutos de la actuación. Inmediatamente, la actuación fue suspendida, provocando la alarma entre el público presente.
                    </p>
                    <div class="flex justify-center items-center">
                    <Image 
                    class="w-3/6"
                    src={auditorio}
                     alt="" />
                </div>
                    <p className="px-5 font-serif Link py-10">
                    Un equipo de emergencias se desplazó hasta el Auditorio, el cual examinó a la actriz y la acompañó y ayudó hasta su recuperación total. Este suceso ha sorprendido bastante, ya que la actriz había interpretado con total normalidad la misma obra el pasado jueves.
                        
                    </p>
                    <p className="px-5 font-serif">
                    Ahora, el Ayuntamiento de León y la empresa encargada de representar esta obra, Pentación, están decidiendo una nueva fecha para estrenar de nuevo la obra en la ciudad leonesa.
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