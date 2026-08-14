import { useContactForm } from "../../../hooks/useContactForm";
import useScrollReveal from "../../../hooks/useScrollReveal";

const inputClasses = `
    w-full
    rounded-sm
    border-[1.5px]
    border-(--border-color)
    bg-(--bg-input)
    px-4
    py-3.5
    font-['Plus_Jakarta_Sans']
    text-base
    text-(--ink-strong)
    outline-none
    transition-all
    duration-200
    placeholder:text-(--ink-faint)
    focus:bg-(--bg-card)
    focus:border-(--accent-primary-soft)
    focus:ring-0
`;

const labelClasses =
    "font-['Playfair_Display'] text-lg font-semibold text-(--ink-strong)";

const ContactForm = () => {
    const { handleSubmit, status, errorMessage } = useContactForm();
    const [ref, isVisible] = useScrollReveal();

    const isSending = status === "sending";

    return (
        <section
            id="contact"
            className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:py-32"
        >
            <div
                ref={ref}
                className={`reveal-scale ${isVisible ? "reveal-in" : ""}
                    relative
                    mx-auto
                    max-w-200
                    rotate-[0.4deg]
                    border-[1.5px]
                    border-(--border-color)
                    bg-(--bg-card)
                    p-8
                    shadow-[6px_8px_0px_var(--shadow-color)]
                    transition-colors
                    duration-300
                    sm:p-10
                    md:p-15
                `}
            >
                {/* Decorative tape */}
                <div
                    className="
                        absolute
                        -top-4
                        left-10
                        h-8
                        w-28
                        -rotate-3
                        bg-(--bg-stamp)/80
                        shadow-[1px_2px_4px_rgba(0,0,0,0.08)]
                    "
                    aria-hidden="true"
                />

                {/* Handwritten label */}
                <div
                    className="
                        absolute
                        right-8
                        top-7
                        rotate-3
                        font-['Caveat']
                        text-xl
                        text-(--accent-primary-soft)
                        md:right-12
                    "
                >
                    Get In Touch
                </div>

                {/* Heading */}
                <div className="mb-10 text-left">
                    <span className="inline-block -rotate-1 font-['Caveat'] text-xl text-(--accent-primary-soft)">
                        start a conversation
                    </span>

                    <h2 className="mt-3 max-w-2xl font-['Playfair_Display'] text-4xl font-bold leading-tight text-(--ink-strong) sm:text-5xl">
                        How can we{" "}
                        <span className="relative inline-block">
                            help?
                            <span
                                className="
                                    absolute
                                    bottom-1
                                    left-0
                                    z-0
                                    h-2
                                    w-full
                                    -rotate-1
                                    bg-(--accent-gold)/30
                                "
                            />
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-(--ink-muted) md:text-lg">
                        Have a question, project idea, or something you'd like
                        to discuss? Send us the raw version. We'll get back to
                        you as soon as possible.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-6"
                >
                    {/* NAME */}
                    <div className="flex flex-col gap-2 text-left">
                        <label htmlFor="name" className={labelClasses}>
                            Your Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                            disabled={isSending}
                            className={inputClasses}
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-2 text-left">
                        <label htmlFor="email" className={labelClasses}>
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@company.com"
                            autoComplete="email"
                            required
                            disabled={isSending}
                            className={inputClasses}
                        />
                    </div>

                    {/* COMPANY */}
                    <div className="flex flex-col gap-2 text-left">
                        <label htmlFor="company" className={labelClasses}>
                            Company / Organization
                        </label>

                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your company or organization"
                            autoComplete="organization"
                            disabled={isSending}
                            className={inputClasses}
                        />
                    </div>

                    {/* QUERY TYPE */}
                    <div className="flex flex-col gap-2 text-left">
                        <label htmlFor="queryType" className={labelClasses}>
                            What can we help with?
                        </label>

                        <select
                            id="queryType"
                            name="queryType"
                            required
                            disabled={isSending}
                            className={`appearance-none ${inputClasses}`}
                        >
                            <option value="">
                                Select an option
                            </option>

                            <option value="general">
                                General Inquiry
                            </option>

                            <option value="project">
                                Project / Product
                            </option>

                            <option value="investor">
                                Investor Presentation
                            </option>

                            <option value="technical">
                                Technical Consultation
                            </option>

                            <option value="partnership">
                                Partnership
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>
                    </div>

                    {/* MESSAGE */}
                    <div className="flex flex-col gap-2 text-left">
                        <label htmlFor="message" className={labelClasses}>
                            Your Message
                        </label>

                        <textarea
                            id="requirement"
                            name="requirement"
                            rows={6}
                            placeholder="Tell us what you're working on, what you need help with, or simply ask your question..."
                            required
                            disabled={isSending}
                            className={`resize-y leading-6 ${inputClasses}`}
                        />
                    </div>

                    {/* BUTTON */}
                    <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            disabled={isSending}
                            className="
                                inline-flex
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-sm
                                border-[1.5px]
                                border-(--border-color)
                                bg-(--ink-strong)
                                px-8
                                py-4
                                font-['Plus_Jakarta_Sans']
                                text-base
                                font-semibold
                                text-(--bg-card)
                                shadow-[3px_3px_0px_var(--accent-primary-soft)]
                                transition-all
                                duration-200
                                hover:-translate-x-0.5
                                hover:-translate-y-0.5
                                hover:bg-(--accent-primary-soft)
                                hover:shadow-[5px_5px_0px_var(--shadow-color)]
                                active:translate-x-0
                                active:translate-y-0
                                active:shadow-[2px_2px_0px_var(--shadow-color)]
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                        >
                            {isSending ? (
                                <>
                                    <svg
                                        className="mr-2 h-4 w-4 animate-spin"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />

                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        />
                                    </svg>

                                    Sending...
                                </>
                            ) : (
                                "Send Message →"
                            )}
                        </button>

                        <span className="-rotate-2 font-['Caveat'] text-lg text-(--ink-muted)">
                            We usually reply within 1–2 business days.
                        </span>
                    </div>

                    {/* SUCCESS */}
                    {status === "success" && (
                        <div
                            role="status"
                            className="
                                animate-fade-in-up
                                rounded-sm
                                border-[1.5px]
                                border-(--accent-green-strong)
                                bg-(--accent-green)/15
                                px-4
                                py-3
                                font-['Plus_Jakarta_Sans']
                                text-sm
                                font-medium
                                text-(--accent-green-strong)
                            "
                        >
                            ✓ Thanks! Your message has been sent successfully.
                            We'll get back to you shortly.
                        </div>
                    )}

                    {/* ERROR */}
                    {status === "error" && (
                        <div
                            role="alert"
                            className="
                                animate-fade-in-up
                                rounded-sm
                                border-[1.5px]
                                border-(--accent-primary)
                                bg-(--accent-primary)/10
                                px-4
                                py-3
                                font-['Plus_Jakarta_Sans']
                                text-sm
                                font-medium
                                text-(--accent-primary)
                            "
                        >
                            {errorMessage}
                        </div>
                    )}
                </form>

                <div className="mt-10 border-t border-dashed border-(--border-color)/30 pt-5">
                    <p className="rotate-[0.5deg] font-['Caveat'] text-lg text-(--accent-green)">
                        Bring the messy version. That's where the good ideas
                        usually start.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;