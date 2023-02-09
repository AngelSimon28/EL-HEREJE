import Head from "next/head";
import Image from "next/image";
import deved from "../public/ElHereje.png";

export default function Home() {
    return (
        <div>
            <Head>
                <title>El hereje</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-zinc-900 px-10">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between text-white">
                        <h1 className="text-6xl font-jetbrains dark:text-white">
                            El Hereje
                        </h1>
                        <ul className="flex items-center px-4 text-3xl">
                            <li className="px-4">
                                <a
                                    href="#"
                                    className="group transition duration-300"
                                >
                                    Directorio de artículos
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                </a>
                            </li>
                            <li className="px-4">
                                <a
                                    href="#"
                                    className="group transition duration-300"
                                >
                                    Pasatiempos
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                </a>
                            </li>
                            <li className="px-4">
                                <button className="bg-white text-black px-4 py-2 rounded-full">
                                    Suscribete
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10 py-5">
                        <div className="mx-auto border-4 border-white rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
                            <Image
                                src={deved}
                            />
                        </div>
                        <h2 className="text-5xl py-2 text-white font-medium md:text-6xl mt-12">
                            Adentrate en el conocimiento prohibido
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    );
}
