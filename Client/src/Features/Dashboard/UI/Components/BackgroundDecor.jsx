
/**
 * Fixed, full-viewport ambient background: soft color blobs, a faint dot
 * grid and a couple of hand-drawn accent marks. Purely decorative —
 * aria-hidden and pointer-events-none so it never interferes with content.
 */
const BackgroundDecor = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Base page tint */}
            <div className="absolute inset-0 bg-(--bg-page) transition-colors duration-500" />

            {/* Dot grid texture */}
            <div
                className="
                    absolute inset-0
                    opacity-[0.35]
                    dark:opacity-[0.18]
                    bg-[radial-gradient(var(--grid-dot)_0.7px,transparent_0.7px)]
                    bg-size-[26px_26px]
                "
            />

            {/* Soft color blobs */}
            <div
                className="
                    animate-float-slow
                    absolute -left-32 -top-24 h-[26rem] w-[26rem]
                    rounded-full blur-3xl
                    bg-(--overlay-blob-1)
                "
            />

            <div
                className="
                    animate-float-slower
                    absolute right-[-10%] top-[8%] h-[22rem] w-[22rem]
                    rounded-full blur-3xl
                    bg-(--overlay-blob-3)
                "
            />

            <div
                className="
                    animate-float-slow
                    absolute left-[8%] top-[55%] h-[24rem] w-[24rem]
                    rounded-full blur-3xl
                    bg-(--overlay-blob-2)
                "
                style={{ animationDelay: "-3s" }}
            />

            <div
                className="
                    animate-float-slower
                    absolute right-[-6%] bottom-[-8%] h-[28rem] w-[28rem]
                    rounded-full blur-3xl
                    bg-(--overlay-blob-4)
                "
                style={{ animationDelay: "-6s" }}
            />

            {/* Hand-drawn accent: orbiting spark, top right of hero */}
            <svg
                className="animate-drift absolute right-[6%] top-[18%] h-24 w-24 opacity-40 dark:opacity-30 hidden md:block"
                viewBox="0 0 100 100"
                fill="none"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="34"
                    stroke="var(--accent-blue)"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                />
                <circle cx="50" cy="16" r="3.2" fill="var(--accent-primary)" />
            </svg>

            {/* Hand-drawn accent: sparkle near collaboration section */}
            <svg
                className="animate-float-slower absolute left-[4%] top-[130%] h-16 w-16 opacity-40 dark:opacity-25 hidden lg:block"
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z"
                    fill="var(--accent-gold)"
                />
            </svg>

            {/* Faint connecting scribble line running down the page */}
            <svg
                className="absolute left-1/2 top-[10%] h-[160%] w-2 -translate-x-1/2 opacity-[0.08] dark:opacity-[0.12] hidden md:block"
                viewBox="0 0 4 1600"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M2 0 C 40 200, -36 400, 2 600 S 40 1000, 2 1200 S -36 1400, 2 1600"
                    stroke="var(--ink)"
                    strokeWidth="1.4"
                    strokeDasharray="2 10"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default BackgroundDecor;
