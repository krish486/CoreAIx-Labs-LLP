import React from "react";
import useWhatsApp from "../../../hooks/useWhatsApp";
import useAirplaneFlight from "../../../hooks/useAirplaneFlight ";

const Aeroplane = () => {
    const airplaneRef = useAirplaneFlight();

    const {
        openWhatsApp,
        handleWhatsAppKeyDown,
    } = useWhatsApp();

    return (
        <div
            ref={airplaneRef}
            role="button"
            tabIndex={0}
            aria-label="Contact us on WhatsApp"
            onClick={openWhatsApp}
            onKeyDown={handleWhatsAppKeyDown}
            className="
                fixed
                z-999
                flex
                cursor-pointer
                items-center
                gap-3
                p-2.5
                select-none
                drop-shadow-[4px_8px_12px_rgba(26,25,22,0.20)]
                transition-[filter]
                duration-200
                hover:drop-shadow-[6px_12px_18px_rgba(26,25,22,0.30)]
                will-change-transform
            "
        >
            {/* Label */}
            <div
                className="
                    whitespace-nowrap
                    rotate-1
                    rounded
                    border-[1.5px]
                    border-[#1a1916]
                    bg-white
                    px-3
                    py-1.5
                    font-['Caveat']
                    text-[1.3rem]
                    text-[#1a1916]
                    shadow-[2px_2px_0px_#1a1916]
                "
            >
                Contact Us ↗
            </div>

            {/* Airplane */}
            <svg
                className="
                    h-18
                    w-18
                    origin-center
                "
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M 5 40 L 95 10 L 65 70 L 45 45 L 5 40 Z"
                    fill="#ffffff"
                    stroke="#1a1916"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />

                <path
                    d="M 45 45 L 95 10"
                    stroke="#1a1916"
                    strokeWidth="2"
                    strokeLinecap="round"
                />

                <path
                    d="M 45 45 L 65 70"
                    stroke="#1a1916"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                />

                <path
                    d="M 30 52 L 45 45"
                    stroke="#1a1916"
                    strokeWidth="1.5"
                />
            </svg>
        </div>
    );
};

export default Aeroplane;