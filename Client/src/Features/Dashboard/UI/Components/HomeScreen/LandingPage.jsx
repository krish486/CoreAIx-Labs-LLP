const LandingPage = () => {
    return (
        <section
            id="about"
            className="
                min-h-[95vh]
                flex
                flex-col
                items-center
                justify-center
                text-center
                pt-30
                relative
                px-6
                overflow-hidden
            "
        >
            {/* Wrapper for Brand and the Decorative Scribble Arc to lock them together properly */}
            <div className="relative inline-block mb-6 animate-fade-in-up">

                {/* Decorative underline scribble positioned absolutely behind the brand element */}
                <svg
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top--1/2
                        -translate-x-1/2
                        -translate-y-[30%]
                        w-[150%]
                        max-w-[320px]
                        h-auto
                        aspect-[400/80]
                        opacity-[0.7]
                        z-0
                    "
                    viewBox="0 0 400 80"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <path
                        className="animate-dash-draw"
                        d="M10 50 C 100 10, 300 10, 390 50"
                        stroke="var(--accent-gold)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="6 8"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Brand Text explicitly set to relative with higher z-index so it sits cleanly on top of the SVG line */}
                <div
                    className="
                        relative
                        z-10
                        font-['Caveat']
                        text-[2.5rem]
                        text-(--accent-primary)
                        font-bold
                        rotate-[-1.5deg]
                        px-4
                    "
                >
                    CoreAIx Labs LLP •
                </div>
            </div>

            {/* Small orbiting accent icon */}
            <svg
                aria-hidden="true"
                className="animate-drift pointer-events-none absolute right-[10%] top-[22%] hidden h-14 w-14 opacity-70 lg:block"
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z"
                    fill="var(--accent-primary-soft)"
                />
            </svg>

            {/* Main Quote */}
            <h1
                className="
        animate-fade-in-up
        text-[clamp(2.5rem,5vw,4.5rem)]
        font-bold
        leading-[1.15]
        max-w-225
        mb-7.5
        text-(--ink)
        relative
        z-10
    "
                style={{ animationDelay: "0.1s" }}
            >
                From Technical Complexity to Investor Clarity.
            </h1>

            {/* Description */}
            <p
                className="
                    animate-fade-in-up
                    text-[1.2rem]
                    text-(--ink-muted)
                    max-w-150
                    mb-15
                    leading-normal
                "
                style={{ animationDelay: "0.22s" }}
            >
                You Built Something Complex.
                Now Make It Impossible to Misunderstand.
            </p>

            {/* CTA */}
            <a
                href="#contact"
                className="
                    animate-fade-in-up
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-sm
                    border-[1.5px]
                    border-(--border-color)
                    bg-(--ink-strong)
                    px-7
                    py-3.5
                    font-['Plus_Jakarta_Sans']
                    text-base
                    font-semibold
                    text-(--bg-card)
                    no-underline
                    shadow-[3px_4px_0px_var(--accent-primary-soft)]
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:shadow-[5px_7px_0px_var(--shadow-color)]
                    active:translate-y-0
                    active:shadow-[1px_2px_0px_var(--shadow-color)]
                "
                style={{ animationDelay: "0.34s" }}
            >
                Start the Conversation
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                </span>
            </a>
        </section>
    );
};

export default LandingPage;