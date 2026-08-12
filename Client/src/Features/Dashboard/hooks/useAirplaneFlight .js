import { useEffect, useRef } from "react";

const useAirplaneFlight = () => {
    const airplaneRef = useRef(null);

    useEffect(() => {
        const airplane = airplaneRef.current;

        if (!airplane) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );

        path.setAttribute(
            "d",
            "M 0 0 C 250 120, 500 350, 750 550 S 950 700, 1000 800"
        );

        const pathLength = path.getTotalLength();

        let animationFrameId = null;

        const updatePlanePosition = () => {
            if (prefersReducedMotion) {
                airplane.style.left = "auto";
                airplane.style.top = "auto";
                airplane.style.right = "40px";
                airplane.style.bottom = "40px";
                airplane.style.transform =
                    "scale(0.85) rotate(-5deg)";

                return;
            }

            const scrollTop = window.scrollY;

            const scrollRange = 600;

            const progress = Math.min(
                Math.max(scrollTop / scrollRange, 0),
                1
            );

            /*
             * START
             */
            if (progress === 0) {
                airplane.style.left = "10%";
                airplane.style.top = "55%";

                airplane.style.right = "auto";
                airplane.style.bottom = "auto";

                airplane.style.transform =
                    "translate(-50%, -50%) scale(1.25) rotate(-5deg)";

                return;
            }

            /*
             * FLIGHT
             */
            if (progress < 1) {
                const currentLength =
                    progress * pathLength;

                const point =
                    path.getPointAtLength(currentLength);

                const nextPoint =
                    path.getPointAtLength(
                        Math.min(
                            currentLength + 2,
                            pathLength
                        )
                    );

                const angle =
                    Math.atan2(
                        nextPoint.y - point.y,
                        nextPoint.x - point.x
                    ) *
                    (180 / Math.PI);

                const scale =
                    1.25 - progress * 0.4;

                const startX = window.innerWidth * 0.10;

                const startY =
                    window.innerHeight * 0.55;

                const targetX =
                    window.innerWidth - 130;

                const targetY =
                    window.innerHeight - 100;

                const normalizedX =
                    point.x / 1000;

                const normalizedY =
                    point.y / 800;

                const currentX =
                    startX +
                    (targetX - startX) *
                    normalizedX;

                const currentY =
                    startY +
                    (targetY - startY) *
                    normalizedY;

                airplane.style.left =
                    `${currentX}px`;

                airplane.style.top =
                    `${currentY}px`;

                airplane.style.right = "auto";
                airplane.style.bottom = "auto";

                airplane.style.transform =
                    `translate(-50%, -50%) scale(${scale}) rotate(${angle}deg)`;

                return;
            }

            /*
             * FINAL POSITION
             */
            airplane.style.left = "auto";
            airplane.style.top = "auto";

            airplane.style.right = "40px";
            airplane.style.bottom = "40px";

            airplane.style.transform =
                "scale(0.85) rotate(-5deg)";
        };

        const handleScroll = () => {
            if (animationFrameId) return;

            animationFrameId = requestAnimationFrame(() => {
                updatePlanePosition();
                animationFrameId = null;
            });
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            updatePlanePosition
        );

        updatePlanePosition();

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                updatePlanePosition
            );

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return airplaneRef;
};

export default useAirplaneFlight;