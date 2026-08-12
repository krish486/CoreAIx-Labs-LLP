import React from "react";

const Navbar = () => {
    return (
        <header
            className="
                fixed top-0 left-0 right-0 z-1000
                bg-[#f9f8f3]/90
                backdrop-blur-sm
                border-b-[1.5px] border-[#1a1916]
                rotate-[-0.2deg]
            "
        >
            <div
                className="
                    max-w-350
                    mx-auto
                    px-10 py-4
                    flex items-center justify-between
                "
            >
                {/* LOGO */}
                <a
                    href="#"
                    className="
                        flex items-baseline gap-1.5
                        no-underline
                        font-['Playfair_Display']
                        text-[1.25rem]
                        font-bold
                        text-[#1a1916]
                    "
                >
                    CoreAIx Labs

                    <span
                        className="
                            font-['Plus_Jakarta_Sans']
                            text-[0.75rem]
                            font-medium
                            px-1.5 py-0.5
                            border border-[#1a1916]
                            rounded-sm
                            bg-[#f4f2ea]
                            rotate-2
                        "
                    >
                        LLP
                    </span>
                </a>

                {/* NAVIGATION */}
                <ul
                    className="
                        hidden
                        lg:flex
                        items-center
                        gap-7
                        list-none
                    "
                >
                    <li>
                        <a
                            href="#about"
                            className="
                                relative
                                no-underline
                                text-[#6b695d]
                                text-[0.95rem]
                                font-medium
                                transition-colors
                                duration-200
                                hover:text-[#1a1916]

                                after:content-['']
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:w-0
                                after:h-0.5
                                after:bg-[#c84b31]
                                after:transition-all
                                after:duration-200
                                hover:after:w-full
                            "
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#solutions"
                            className="
                                relative
                                no-underline
                                text-[#6b695d]
                                text-[0.95rem]
                                font-medium
                                transition-colors
                                duration-200
                                hover:text-[#1a1916]

                                after:content-['']
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:w-0
                                after:h-0.5
                                after:bg-[#c84b31]
                                after:transition-all
                                after:duration-200
                                hover:after:w-full
                            "
                        >
                            Solutions
                        </a>
                    </li>

                    <li>
                        <a
                            href="#vs"
                            className="
                                relative
                                no-underline
                                text-[#6b695d]
                                text-[0.95rem]
                                font-medium
                                transition-colors
                                duration-200
                                hover:text-[#1a1916]

                                after:content-['']
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:w-0
                                after:h-0.5
                                after:bg-[#c84b31]
                                after:transition-all
                                after:duration-200
                                hover:after:w-full
                            "
                        >
                            Approach
                        </a>
                    </li>

                    <li>
                        <a
                            href="#collaboration"
                            className="
                                relative
                                no-underline
                                text-[#6b695d]
                                text-[0.95rem]
                                font-medium
                                transition-colors
                                duration-200
                                hover:text-[#1a1916]

                                after:content-['']
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:w-0
                                after:h-0.5
                                after:bg-[#c84b31]
                                after:transition-all
                                after:duration-200
                                hover:after:w-full
                            "
                        >
                            Collaboration
                        </a>
                    </li>

                    <li>
                        <a
                            href="#why-us"
                            className="
                                relative
                                no-underline
                                text-[#6b695d]
                                text-[0.95rem]
                                font-medium
                                transition-colors
                                duration-200
                                hover:text-[#1a1916]

                                after:content-['']
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:w-0
                                after:h-0.5
                                after:bg-[#c84b31]
                                after:transition-all
                                after:duration-200
                                hover:after:w-full
                            "
                        >
                            Why Us
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="
                                relative
                                no-underline
                                text-[#6b695d]
                                text-[0.95rem]
                                font-medium
                                transition-colors
                                duration-200
                                hover:text-[#1a1916]

                                after:content-['']
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:w-0
                                after:h-0.5
                                after:bg-[#c84b31]
                                after:transition-all
                                after:duration-200
                                hover:after:w-full
                            "
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* BOOK A CALL */}
                <a
                    href="#contact"
                    aria-label="Book a Call"
                    className="
                        font-['Caveat']
                        text-[1.25rem]
                        bg-white
                        border-[1.5px]
                        border-[#1a1916]
                        px-4 py-1.5
                        rounded-sm
                        no-underline
                        text-[#1a1916]

                        shadow-[2px_2px_0px_#1a1916]

                        rotate-1

                        transition-all
                        duration-200

                        hover:-translate-x-px
                        hover:-translate-y-px
                        hover:rotate-1
                        hover:shadow-[3px_3px_0px_#1a1916]
                        hover:bg-[#e09f3e]
                    "
                >
                    Book a Call
                </a>
            </div>
        </header>
    );
};

export default Navbar;