import React from "react";

const LandingPage = () => {
    return (
        <section
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
            "
        >
            {/* Brand */}
            <div
                className="
                     font-['Caveat']
        text-[2.5rem]
        text-[#c84b31]
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
                    text-[clamp(2.5rem,5vw,4.5rem)]
                    font-bold
                    leading-[1.15]
                    max-w-225
                    mb-7.5
                    text-(--ink-black)
                "
            >
                From Technical Complexity to Investor Clarity.{" "}
            </h1>

            {/* Description */}
            <p
                className="
                    text-[1.2rem]
                    text-(--ink-muted)
                    max-w-150
                    mb-15
                    leading-normal
                "
            >
                You Built Something Complex.
                Now Make It Impossible to Misunderstand.
            </p>
        </section>
    );
};

export default LandingPage;