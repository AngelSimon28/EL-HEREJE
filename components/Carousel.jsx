import { useState } from "react";
import Image from "next/image";
import ElHereje from "../public/ElHereje.png";
import cuchillo from "../public/cuchillo.jpg";
import lola from "../public/lola.jpg";
import lasviudas from "../public/Lasviudas.jpg";

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "ASESINATO DOMÉSTICO EN LAS VIUDAS",
            description:
                "El pasado martes en Valladolid, las autoridades recibieron una llamada de los vecinos, los cuales denunciaban el asesinato de Mario por parte de su mujer Carmen.",
            image: lasviudas,
            href: "/article1"
        },
        {
            id: 2,
            title: "CRÍTICA DE CINCO HORAS CON MARIO",
            description:
                "Nuestro crítico de teatro Abel Villorejo ha visto esta semana la obra de teatro de Cinco horas con Mario, ¿Quieres saber que opina?",
            image: lola,
            href: "/article3"
        },
    ];

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        );
    };

    return (
        <div className="mx-auto relative max-w-xl py-8">
            <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => prevSlide()}
            >
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        ></path>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => nextSlide()}
            >
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-white dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image
                        class="rounded-t-lg h-64 w-full object-cover"
                        src={slides[currentSlide].image}
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {slides[currentSlide].title}
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {slides[currentSlide].description}
                    </p>
                    <a
                        href={slides[currentSlide].href}
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            aria-hidden="true"
                            class="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};