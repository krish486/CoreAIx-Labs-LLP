import { useState } from "react";
import { useTheme } from "../../../../context/useTheme";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#collaboration", label: "Collaboration" },
    { href: "#solutions", label: "Why Us" },
    { href: "#contact", label: "Contact" },
];

const linkClasses = `
    relative
    no-underline
    text-(--ink-muted)
    text-[0.95rem]
    font-medium
    transition-colors
    duration-200
    hover:text-(--ink-strong)

    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-0.5
    after:bg-(--accent-primary)
    after:transition-all
    after:duration-200
    hover:after:w-full
`;

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-sm
                border-[1.5px]
                border-(--border-color)
                bg-(--bg-tag)
                text-(--ink-strong)
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[2px_2px_0px_var(--shadow-color)]
                active:translate-y-0
                active:shadow-none
            "
        >
            {isDark ? (
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <path d="M12 2.5v2.4" />
                        <path d="M12 19.1v2.4" />
                        <path d="M4.2 4.2l1.7 1.7" />
                        <path d="M18.1 18.1l1.7 1.7" />
                        <path d="M2.5 12h2.4" />
                        <path d="M19.1 12h2.4" />
                        <path d="M4.2 19.8l1.7-1.7" />
                        <path d="M18.1 5.9l1.7-1.7" />
                    </g>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
                    <path
                        d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </button>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="
                fixed top-0 left-0 right-0 z-1000
                bg-(--bg-nav)/90
                backdrop-blur-sm
                border-b-[1.5px] border-(--border-color)
                rotate-[-0.2deg]
                transition-colors
                duration-300
            "
        >
            <div
                className="
                    max-w-350
                    mx-auto
                    px-6 py-4
                    flex items-center justify-between
                    md:px-10
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
                        text-(--ink-strong)
                    "
                >
                    CoreAIx Labs

                    <span
                        className="
                            font-['Plus_Jakarta_Sans']
                            text-[0.75rem]
                            font-medium
                            px-1.5 py-0.5
                            border border-(--border-color)
                            rounded-sm
                            bg-(--bg-tag)
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
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className={linkClasses}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    {/* BOOK A CALL */}
                    <a
                        href="#contact"
                        aria-label="Book a Call"
                        className="
                            hidden
                            sm:inline-flex
                            font-['Caveat']
                            text-[1.25rem]
                            bg-(--bg-card)
                            border-[1.5px]
                            border-(--border-color)
                            px-4 py-1.5
                            rounded-sm
                            no-underline
                            text-(--ink-strong)

                            shadow-[2px_2px_0px_var(--shadow-color)]

                            rotate-1

                            transition-all
                            duration-200

                            hover:-translate-x-px
                            hover:-translate-y-px
                            hover:rotate-1
                            hover:shadow-[3px_3px_0px_var(--shadow-color)]
                            hover:bg-(--accent-gold-strong)
                        "
                    >
                        Book a Call
                    </a>

                    {/* MOBILE MENU TOGGLE */}
                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-sm
                            border-[1.5px]
                            border-(--border-color)
                            bg-(--bg-tag)
                            text-(--ink-strong)
                            lg:hidden
                        "
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                            {menuOpen ? (
                                <path
                                    d="M6 6l12 12M18 6L6 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            ) : (
                                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M4 7h16" />
                                    <path d="M4 12h16" />
                                    <path d="M4 17h16" />
                                </g>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <ul
                    className="
                        flex
                        flex-col
                        gap-1
                        list-none
                        border-t
                        border-(--border-color)/20
                        bg-(--bg-nav)
                        px-6
                        py-4
                        lg:hidden
                    "
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="
                                    block
                                    no-underline
                                    py-2.5
                                    text-(--ink-muted)
                                    font-medium
                                    hover:text-(--ink-strong)
                                "
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    <li className="pt-2 sm:hidden">
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="
                                inline-flex
                                font-['Caveat']
                                text-[1.25rem]
                                bg-(--bg-card)
                                border-[1.5px]
                                border-(--border-color)
                                px-4 py-1.5
                                rounded-sm
                                no-underline
                                text-(--ink-strong)
                                shadow-[2px_2px_0px_var(--shadow-color)]
                            "
                        >
                            Book a Call
                        </a>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Navbar;
