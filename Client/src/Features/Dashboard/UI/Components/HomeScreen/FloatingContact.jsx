import { useState } from "react";
import useWhatsApp from "../../../hooks/useWhatsApp";

/**
 * Static bottom-right contact affordance. Replaces the old scroll-following
 * plane with a simple, always-in-place chat icon so it never overlaps
 * content and stays predictable on every screen size.
 */
const FloatingContact = () => {
    const { openWhatsApp, handleWhatsAppKeyDown } = useWhatsApp();
    const [hovered, setHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-999 flex items-center gap-3 sm:bottom-8 sm:right-8">
            {/* Label */}
            <div
                className={`
                    whitespace-nowrap
                    rounded
                    border-[1.5px]
                    border-(--border-color)
                    bg-(--bg-card)
                    px-3
                    py-1.5
                    font-['Caveat']
                    text-[1.2rem]
                    text-(--ink)
                    shadow-[2px_2px_0px_var(--shadow-color)]
                    transition-all
                    duration-200
                    ${hovered ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 sm:opacity-100 sm:translate-x-0"}
                `}
            >
                Chat with us ↗
            </div>

            {/* Icon button */}
            <div className="relative flex h-16 w-16 items-center justify-center">
                {/* Pulsing ring */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-(--accent-primary)/40"
                    style={{ animation: "ring-pulse 2.4s ease-out infinite" }}
                />

                <button
                    type="button"
                    aria-label="Contact us on WhatsApp"
                    onClick={openWhatsApp}
                    onKeyDown={handleWhatsAppKeyDown}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onFocus={() => setHovered(true)}
                    onBlur={() => setHovered(false)}
                    className="
                        relative
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border-[1.5px]
                        border-(--border-color)
                        bg-(--accent-primary)
                        text-(--bg-card)
                        shadow-[3px_4px_0px_var(--shadow-color)]
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:shadow-[5px_6px_0px_var(--shadow-color)]
                        active:translate-y-0
                        active:shadow-[1px_2px_0px_var(--shadow-color)]
                    "
                >
                    <svg
                        viewBox="0 0 32 32"
                        className="h-7 w-7"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M16 4C9.373 4 4 9.373 4 16c0 2.42.712 4.674 1.938 6.566L4.5 28l5.62-1.4A11.93 11.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4Z"
                            fill="currentColor"
                        />
                        <path
                            d="M11.6 10.9c.28-.03.56-.03.8.02.24.06.5.17.72.68.24.55.83 1.93.9 2.07.08.15.13.32.03.53-.1.2-.15.32-.3.5-.15.17-.3.38-.44.5-.15.15-.3.3-.13.6.17.3.75 1.24 1.62 2.01 1.12 1 2.05 1.31 2.35 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.14.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.75-.18 1.47-.26.72-1.5 1.4-2.1 1.48-.53.08-1.2.11-1.94-.12-.44-.14-1.02-.33-1.75-.66-3.09-1.33-5.1-4.44-5.26-4.65-.15-.2-1.25-1.67-1.25-3.18 0-1.5.79-2.24 1.07-2.55.28-.3.6-.36.8-.37Z"
                            fill="var(--bg-card)"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default FloatingContact;
