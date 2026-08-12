import React from "react";

const CollabPage = () => {
    return (
        <section
            id="collaboration"
            className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:py-32"
        >
            <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block -rotate-1 font-['Caveat'] text-xl text-[#C96B5B]">
                    partnerships & growth
                </span>

                <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-bold leading-tight text-[#1E1E1B] sm:text-5xl lg:text-6xl">
                    Built for the{" "}
                    <span className="relative inline-block">
                        Right Collaboration
                        <span className="absolute bottom-1 left-0 z-0 h-2 w-full -rotate-1 bg-[#D9A441]/30" />
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-[#686761] md:text-lg">
                    We work with founders who have something technically
                    ambitious to explain, and need a narrative investors can
                    understand, remember, and believe.
                </p>
            </div>

            <div className="relative mx-auto mt-16 max-w-5xl">

                <div className="absolute -top-7 left-4 z-20 hidden rotate-[-4deg] bg-[#F3D98B] px-5 py-2 shadow-[2px_4px_8px_rgba(0,0,0,0.12)] md:block">
                    <span className="font-['Caveat'] text-lg text-[#4D4B45]">
                        The next story?
                    </span>
                </div>

                <div className="relative min-h-107.5 rotate-[0.4deg] overflow-hidden border border-[#1E1E1B]/20 bg-[#FDFBF5] px-7 py-12 shadow-[6px_8px_20px_rgba(30,30,27,0.10)] md:px-14">

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-30
                            bg-[radial-gradient(#686761_0.7px,transparent_0.7px)]
                            bg-size-[18px_18px]
                        "
                    />

                    <div className="absolute -top-2 left-1/2 h-10 w-32 -translate-x-1/2 rotate-2 bg-[#E8D9A7]/70" />

                    <span className="absolute left-7 top-8 hidden rotate-[-5deg] font-['Caveat'] text-lg text-[#8EA9C1] md:block">
                        founder → vision → narrative
                    </span>

                    <span className="absolute bottom-8 right-8 hidden rotate-[4deg] font-['Caveat'] text-lg text-[#8FA58A] md:block">
                        room for the next one...
                    </span>

                    <div className="relative z-10 flex min-h-87.5 flex-col items-center justify-center text-center">

                        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[#C96B5B]/60 rotate-[-5deg]">

                            <div className="absolute inset-2 rounded-full border border-[#D9A441]/50 rotate-[8deg]" />

                            <span className="font-['Caveat'] text-2xl text-[#C96B5B]">
                                + 01
                            </span>

                        </div>

                        {/* Heading */}
                        <h3 className="mt-8 max-w-2xl font-['Playfair_Display'] text-3xl font-bold leading-tight text-[#1E1E1B] md:text-5xl">
                            The next story
                            <br />
                            is still unwritten.
                        </h3>

                        {/* Description */}
                        <p className="mt-5 max-w-xl font-['Plus_Jakarta_Sans'] text-sm leading-7 text-[#686761] md:text-base">
                            We’re building this network one strong
                            collaboration at a time. If you’re building
                            something ambitious and need to turn complex
                            technology into an investor-ready narrative,
                            this space is yours.
                        </p>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="
                                group
                                mt-8
                                inline-flex
                                items-center
                                gap-3
                                border-2
                                border-[#1E1E1B]
                                bg-[#F7F3E8]
                                px-6
                                py-3
                                font-['Plus_Jakarta_Sans']
                                text-sm
                                font-semibold
                                text-[#1E1E1B]
                                shadow-[3px_4px_0px_#1E1E1B]
                                transition-all
                                duration-200
                                hover:-translate-y-1
                                hover:shadow-[5px_7px_0px_#1E1E1B]
                                active:translate-y-0
                                active:shadow-[1px_2px_0px_#1E1E1B]
                            "
                        >
                            Start Your Vision Download

                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Statement */}
            <div className="mx-auto mt-12 max-w-xl text-center">
                <span className="font-['Caveat'] text-xl text-[#C96B5B]">
                    One great idea. One sharp narrative. One conversation away.
                </span>
            </div>
        </section>
    );
};

export default CollabPage;