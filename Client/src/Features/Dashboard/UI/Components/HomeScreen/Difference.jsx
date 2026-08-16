import useScrollReveal from "../../../hooks/useScrollReveal";

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
    const [headerRef, headerVisible] = useScrollReveal();
    const [leftRef, leftVisible] = useScrollReveal({ threshold: 0.1 });
    const [rightRef, rightVisible] = useScrollReveal({ threshold: 0.1 });
    const [bottomRef, bottomVisible] = useScrollReveal();

    return (
        <div id="solutions" className="w-screen bg-(--bg-page) transition-colors duration-300">
            <section
                id="vs"
                className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:py-32"
            >
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`reveal ${headerVisible ? "reveal-in" : ""} mx-auto mb-14 max-w-3xl text-center`}
                >
                    <span className="inline-block -rotate-1 font-['Caveat'] text-xl text-(--accent-primary-soft)">
                        differentiation
                    </span>

                    <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-bold leading-tight text-(--ink-strong) sm:text-5xl lg:text-6xl">
                        Why We{" "}
                        <span className="relative inline-block">
                            Pitch Differently
                            <span className="absolute bottom-1 left-0 z-0 h-2 w-full -rotate-1 bg-(--accent-gold)/30" />
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-(--ink-muted) md:text-lg">
                        Your technology already has the substance. We turn that
                        substance into a narrative investors can understand,
                        remember, and believe.
                    </p>
                </div>

                {/* VS Container */}
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_80px_1fr] md:gap-5">

                    {/* Traditional Approach */}
                    <div
                        ref={leftRef}
                        className={`reveal-left ${leftVisible ? "reveal-in" : ""}
                        min-h-120
                        -rotate-1
                        border-[1.5px]
                        border-dashed
                        border-(--border-color)
                        bg-(--bg-card-alt)
                        p-8
                        shadow-[4px_6px_0px_var(--shadow-color)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:rotate-0
                        hover:shadow-[7px_9px_0px_var(--shadow-color)]
                        sm:p-10
                        lg:p-[50px_40px]
                    `}
                    >
                        <h3 className="mb-7 border-b-[1.5px] border-(--border-color) pb-4 font-['Playfair_Display'] text-3xl font-bold text-(--ink-strong)">
                            Traditional Pitch Agency
                        </h3>

                        <ul className="flex flex-col gap-5">
                            {traditionalApproach.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Plus_Jakarta_Sans'] text-base leading-6 text-(--ink-muted) md:text-lg"
                                >
                                    <span className="mt-0.5 shrink-0 font-semibold text-(--accent-primary-soft)">
                                        ×
                                    </span>

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 -rotate-1 font-['Caveat'] text-lg text-(--accent-primary-soft)">
                            Your story gets buried in the process.
                        </div>
                    </div>

                    {/* VS */}
                    <div className="flex items-center justify-center">
                        <span
                            className="
                            animate-gentle-pulse
                            rotate-[-5deg]
                            font-['Caveat']
                            text-5xl
                            text-(--accent-primary-soft)
                            drop-shadow-[2px_2px_0px_var(--bg-input)]
                            md:text-5xl
                            lg:text-6xl
                        "
                        >
                            VS
                        </span>
                    </div>

                    {/* CoreAIx */}
                    <div
                        ref={rightRef}
                        className={`reveal-right ${rightVisible ? "reveal-in" : ""}
                        min-h-120
                        rotate-1
                        border-[1.5px]
                        border-(--border-color)
                        bg-(--bg-card)
                        p-8
                        shadow-[4px_6px_0px_var(--shadow-color)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:rotate-0
                        hover:shadow-[8px_12px_0px_rgba(30,30,27,0.16)]
                        sm:p-10
                        lg:p-[50px_40px]
                    `}
                    >
                        <div className="mb-7 flex items-center justify-between border-b-[1.5px] border-(--border-color) pb-4">
                            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-(--ink-strong)">
                                DeckedOut
                            </h3>

                            <span className="rotate-2 border border-(--accent-green) px-2 py-1 font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-wider text-(--accent-green-strong)">
                                Founder First
                            </span>
                        </div>

                        <ul className="flex flex-col gap-5">
                            {coreAIxApproach.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 font-['Plus_Jakarta_Sans'] text-base font-medium leading-6 text-(--ink-strong) md:text-lg"
                                >
                                    <span className="mt-0.5 shrink-0 font-bold text-(--accent-green)">
                                        ✓
                                    </span>

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 rotate-1 font-['Caveat'] text-lg text-(--accent-green)">
                            Your vision stays at the center.
                        </div>
                    </div>
                </div>

                {/* Bottom Statement */}
                <div
                    ref={bottomRef}
                    id="why-us"
                    className={`reveal-scale ${bottomVisible ? "reveal-in" : ""} mx-auto mt-16 max-w-3xl text-center`}
                >
                    <div
                        className="
                        rotate-[0.5deg]
                        border
                        border-(--border-color)/20
                        bg-(--bg-input)
                        px-7
                        py-8
                        shadow-[4px_5px_0px_rgba(30,30,27,0.08)]
                    "
                    >
                        <p className="font-['Playfair_Display'] text-2xl font-semibold leading-relaxed text-(--ink-strong) md:text-3xl">
                            We don't replace your{" "}
                            <span className="relative inline-block">
                                vision.
                                <span className="absolute bottom-0 left-0 h-1.5 w-full -rotate-1 bg-(--accent-gold)/50" />
                            </span>{" "}
                            We make investors see it.
                        </p>

                        <p className="mt-4 -rotate-1 font-['Caveat'] text-xl text-(--accent-primary-soft)">
                            Less agency theatre. More founder signal.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Difference;
