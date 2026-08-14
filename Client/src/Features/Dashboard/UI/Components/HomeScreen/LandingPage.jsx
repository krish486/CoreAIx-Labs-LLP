
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
            {/* Decorative underline scribble behind headline */}
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[38%] hidden h-40 w-[36rem] -translate-x-1/2 opacity-[0.5] md:block"
                viewBox="0 0 400 120"
                fill="none"
            >
                <path
                    className="animate-dash-draw"
                    d="M20 90 C 120 20, 280 20, 380 90"
                    stroke="var(--accent-gold)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="6 8"
                />
            </svg>

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

            {/* Brand */}
            <div
                className="
                    animate-fade-in-up
                    font-['Caveat']
                    text-[2.5rem]
                    text-(--accent-primary)
                    mb-6
                    font-bold
                    rotate-[-1.5deg]
                "
            >
                CoreAIx Labs LLP •
            </div>

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
                From Technical Complexity to Investor Clarity.{" "}
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
