import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Adds a "reveal-in" class once the element scrolls into view.
 * Pair with the `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale`
 * utility classes defined in index.css.
 */
const useScrollReveal = (options = {}) => {
    const { threshold = 0.18, rootMargin = "0px 0px -80px 0px", once = true } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(prefersReducedMotion);

    useEffect(() => {
        const node = ref.current;
        if (!node || prefersReducedMotion()) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) observer.unobserve(entry.target);
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, isVisible];
};

export default useScrollReveal;
