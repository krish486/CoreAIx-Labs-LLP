import React from "react";
import { contactFormHook } from "../../../hooks/contactFormHook";

const ContactForm = () => {
    const { handleSubmit } = contactFormHook()

    return (
        <section
            id="contact"
            className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:py-32"
        >
            <div
                className="
                    relative
                    mx-auto
                    max-w-200
                    rotate-[0.4deg]
                    border-[1.5px]
                    border-[#1E1E1B]
                    bg-[#FDFBF5]
                    p-8
                    shadow-[6px_8px_0px_#1E1E1B]
                    sm:p-10
                    md:p-15
                "
            >
                <div
                    className="
                        absolute
                        -top-4
                        left-10
                        h-8
                        w-28
                        -rotate-3
                        bg-[#E8D9A7]/80
                        shadow-[1px_2px_4px_rgba(0,0,0,0.08)]
                    "
                    aria-hidden="true"
                />

                <div
                    className="
                        absolute
                        right-8
                        top-7
                        rotate-3
                        font-['Caveat']
                        text-xl
                        text-[#C96B5B]
                        md:right-12
                    "
                >
                    Get In Touch
                </div>

                <div className="mb-10 text-left">
                    <span className="inline-block -rotate-1 font-['Caveat'] text-xl text-[#C96B5B]">
                        start a conversation
                    </span>

                    <h2 className="mt-3 max-w-2xl font-['Playfair_Display'] text-4xl font-bold leading-tight text-[#1E1E1B] sm:text-5xl">
                        Ready to{" "}
                        <span className="relative inline-block">
                            face the hot seat?
                            <span
                                className="
                                    absolute
                                    bottom-1
                                    left-0
                                    z-0
                                    h-2
                                    w-full
                                    -rotate-1
                                    bg-[#D9A441]/30
                                "
                            />
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-[#686761] md:text-lg">
                        Bring us the raw version of your idea. We'll extract
                        the vision, pressure-test the narrative, layer in the
                        right data, and turn it into an investor-ready story.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2 text-left">
                        <label
                            htmlFor="name"
                            className="font-['Playfair_Display'] text-lg font-semibold text-[#1E1E1B]"
                        >
                            Your Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="
                                w-full
                                rounded-sm
                                border-[1.5px]
                                border-[#1E1E1B]
                                bg-[#F7F3E8]
                                px-4
                                py-3.5
                                font-['Plus_Jakarta_Sans']
                                text-base
                                text-[#1E1E1B]
                                outline-none
                                transition-all
                                duration-200
                                placeholder:text-[#8A8880]
                                focus:bg-[#FDFBF5]
                                focus:border-[#C96B5B]
                                focus:ring-0
                            "
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label
                            htmlFor="email"
                            className="font-['Playfair_Display'] text-lg font-semibold text-[#1E1E1B]"
                        >
                            Work Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="founder@yourcompany.com"
                            required
                            className="
                                w-full
                                rounded-sm
                                border-[1.5px]
                                border-[#1E1E1B]
                                bg-[#F7F3E8]
                                px-4
                                py-3.5
                                font-['Plus_Jakarta_Sans']
                                text-base
                                text-[#1E1E1B]
                                outline-none
                                transition-all
                                duration-200
                                placeholder:text-[#8A8880]
                                focus:bg-[#FDFBF5]
                                focus:border-[#C96B5B]
                            "
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label
                            htmlFor="company"
                            className="font-['Playfair_Display'] text-lg font-semibold text-[#1E1E1B]"
                        >
                            Startup / Company
                        </label>

                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your startup or company"
                            required
                            className="
                                w-full
                                rounded-sm
                                border-[1.5px]
                                border-[#1E1E1B]
                                bg-[#F7F3E8]
                                px-4
                                py-3.5
                                font-['Plus_Jakarta_Sans']
                                text-base
                                text-[#1E1E1B]
                                outline-none
                                transition-all
                                duration-200
                                placeholder:text-[#8A8880]
                                focus:bg-[#FDFBF5]
                                focus:border-[#C96B5B]
                            "
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label
                            htmlFor="stage"
                            className="font-['Playfair_Display'] text-lg font-semibold text-[#1E1E1B]"
                        >
                            Where are you right now?
                        </label>

                        <select
                            id="stage"
                            name="stage"
                            required
                            className="
                                w-full
                                appearance-none
                                rounded-sm
                                border-[1.5px]
                                border-[#1E1E1B]
                                bg-[#F7F3E8]
                                px-4
                                py-3.5
                                font-['Plus_Jakarta_Sans']
                                text-base
                                text-[#1E1E1B]
                                outline-none
                                transition-all
                                duration-200
                                focus:bg-[#FDFBF5]
                                focus:border-[#C96B5B]
                            "
                        >
                            <option value="">
                                Select your current stage
                            </option>
                            <option value="idea">
                                Idea / Pre-seed
                            </option>
                            <option value="building">
                                Building the product
                            </option>
                            <option value="fundraising">
                                Preparing to raise
                            </option>
                            <option value="active-raise">
                                Currently fundraising
                            </option>
                            <option value="growth">
                                Growth / Expansion
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label
                            htmlFor="requirement"
                            className="font-['Playfair_Display'] text-lg font-semibold text-[#1E1E1B]"
                        >
                            Tell us about the vision
                        </label>

                        <textarea
                            id="requirement"
                            name="requirement"
                            rows={5}
                            placeholder="What are you building? What needs to be communicated to investors? Give us the unfiltered version..."
                            required
                            className="
                                w-full
                                resize-y
                                rounded-sm
                                border-[1.5px]
                                border-[#1E1E1B]
                                bg-[#F7F3E8]
                                px-4
                                py-3.5
                                font-['Plus_Jakarta_Sans']
                                text-base
                                leading-6
                                text-[#1E1E1B]
                                outline-none
                                transition-all
                                duration-200
                                placeholder:text-[#8A8880]
                                focus:bg-[#FDFBF5]
                                focus:border-[#C96B5B]
                            "
                        />
                    </div>

                    <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            className="
                                inline-flex
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-sm
                                border-[1.5px]
                                border-[#1E1E1B]
                                bg-[#1E1E1B]
                                px-8
                                py-4
                                font-['Plus_Jakarta_Sans']
                                text-base
                                font-semibold
                                text-[#FDFBF5]
                                shadow-[3px_3px_0px_#C96B5B]
                                transition-all
                                duration-200
                                hover:-translate-x-0.5
                                hover:-translate-y-0.5
                                hover:bg-[#C96B5B]
                                hover:shadow-[5px_5px_0px_#1E1E1B]
                                active:translate-x-0
                                active:translate-y-0
                                active:shadow-[2px_2px_0px_#1E1E1B]
                            "
                        >
                            Start the Conversation →
                        </button>

                        <span className="-rotate-2 font-['Caveat'] text-lg text-[#686761]">
                            No polished brief required.
                        </span>
                    </div>
                </form>

                <div className="mt-10 border-t border-dashed border-[#1E1E1B]/30 pt-5">
                    <p className="rotate-[0.5deg] font-['Caveat'] text-lg text-[#8FA58A]">
                        Just bring the messy version. That's where the good
                        story usually starts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;