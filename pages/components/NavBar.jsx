
export default function NavBar() {
    return (
        <nav className="py-10 mb-12 flex justify-between">
                        <h1 className="text-xl font-jetbrains dark:text-white">
                            developedbysansimo
                        </h1>
                        <ul className="flex items-center">
                            <li>
                                <button
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md ml-8 px-4 py-2 text-white transition-colors"
                                    onClick={handleThemeSwitch}
                                >
                                    {theme === "dark" ?  <BsFillMoonStarsFill /> : <BsFillSunFill />     }
                                </button>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
    )
}