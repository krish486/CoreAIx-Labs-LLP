import React from "react";

const traditionalApproach = [
    "Slow, research-heavy processes that delay your fundraising",
    "Paying agencies to research what founders already know",
    "Generic narratives that dilute complex technical ideas",
    "Too much focus on market research, not enough on your vision",
    "Long iteration cycles between founder, researcher and designer",
];

const coreAIxApproach = [
    "Founder-first process built around your raw vision",
    "90-minute Vision Download to extract the real story",
    "Reverse-pitch mechanics to pressure-test the narrative",
    "Secondary data layered in without slowing the process",
    "Investor-ready storytelling delivered at startup speed",
];

const Difference = () => {
    return (
        <div className=" w-screen bg-[#F9F8F4]">
            <section
                id="vs"
                className="mx-auto w-full  max-w-7xl px-6 py-24 md:px-10 lg:py-32"
            >
                {/* Section Header */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="inline-block -rotate-1 font-['Caveat'] text-xl text-[#C96B5B]">
                        differentiation
                    </span>

                    <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-bold leading-tight text-[#1E1E1B] sm:text-5xl lg:text-6xl">
                        Why We{" "}
                        <span className="relative inline-block">
                            Pitch Differently
                            <span className="absolute bottom-1 left-0 z-0 h-2 w-full -rotate-1 bg-[#D9A441]/30" />
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-[#686761] md:text-lg">
                        Your technology already has the substance. We turn that
                        substance into a narrative investors can understand,
                        remember, and believe.
                    </p>
                </div>

                {/* VS Container */}
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_80px_1fr] md:gap-5">

                    {/* Traditional Approach */}
                    <div
                        className="
                        min-h-120
                        -rotate-1
                        border-[1.5px]
                        border-dashed
                        border-[#1E1E1B]
                        bg-[#FBF9F5]
                        p-8
                        shadow-[4px_6px_0px_#1E1E1B]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:rotate-0
                        hover:shadow-[7px_9px_0px_#1E1E1B]
                        sm:p-10
                        lg:p-[50px_40px]
                    "
                    >
                        <h3 className="mb-7 border-b-[1.5px] border-[#1E1E1B] pb-4 font-['Playfair_Display'] text-3xl font-bold text-[#1E1E1B]">
                            Traditional Pitch Agency
                        </h3>

                        <ul className="flex flex-col gap-5">
                            {traditionalApproach.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Plus_Jakarta_Sans'] text-base leading-6 text-[#686761] md:text-lg"
                                >
                                    <span className="mt-0.5 shrink-0 font-semibold text-[#C96B5B]">
                                        ×
                                    </span>

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 -rotate-1 font-['Caveat'] text-lg text-[#C96B5B]">
                            Your story gets buried in the process.
                        </div>
                    </div>

                    {/* VS */}
                    <div className="flex items-center justify-center">
                        <span
                            className="
                            rotate-[-5deg]
                            font-['Caveat']
                            text-5xl
                            text-[#C96B5B]
                            drop-shadow-[2px_2px_0px_#F7F3E8]
                            md:text-5xl
                            lg:text-6xl
                        "
                        >
                            VS
                        </span>
                    </div>

                    {/* CoreAIx */}
                    <div
                        className="
                        min-h-120
                        rotate-1
                        border-[1.5px]
                        border-[#1E1E1B]
                        bg-[#FDFBF5]
                        p-8
                        shadow-[4px_6px_0px_#1E1E1B]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:rotate-0
                        hover:shadow-[8px_12px_0px_rgba(30,30,27,0.16)]
                        sm:p-10
                        lg:p-[50px_40px]
                    "
                    >
                        <div className="mb-7 flex items-center justify-between border-b-[1.5px] border-[#1E1E1B] pb-4">
                            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#1E1E1B]">
                                CoreAIx Labs
                            </h3>

                            <span className="rotate-2 border border-[#8FA58A] px-2 py-1 font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-wider text-[#688064]">
                                Founder First
                            </span>
                        </div>

                        <ul className="flex flex-col gap-5">
                            {coreAIxApproach.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Plus_Jakarta_Sans'] text-base font-medium leading-6 text-[#1E1E1B] md:text-lg"
                                >
                                    <span className="mt-0.5 shrink-0 font-bold text-[#8FA58A]">
                                        ✓
                                    </span>

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 rotate-1 font-['Caveat'] text-lg text-[#8FA58A]">
                            Your vision stays at the center.
                        </div>
                    </div>
                </div>

                {/* Bottom Statement */}
                <div className="mx-auto mt-16 max-w-3xl text-center">
                    <div
                        className="
                        rotate-[0.5deg]
                        border
                        border-[#1E1E1B]/20
                        bg-[#F7F3E8]
                        px-7
                        py-8
                        shadow-[4px_5px_0px_rgba(30,30,27,0.08)]
                    "
                    >
                        <p className="font-['Playfair_Display'] text-2xl font-semibold leading-relaxed text-[#1E1E1B] md:text-3xl">
                            We don't replace your{" "}
                            <span className="relative inline-block">
                                vision.
                                <span className="absolute bottom-0 left-0 h-1.5 w-full -rotate-1 bg-[#D9A441]/50" />
                            </span>{" "}
                            We make investors see it.
                        </p>

                        <p className="mt-4 -rotate-1 font-['Caveat'] text-xl text-[#C96B5B]">
                            Less agency theatre. More founder signal.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Difference;