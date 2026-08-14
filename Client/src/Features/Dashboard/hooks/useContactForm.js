import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// status: "idle" | "sending" | "success" | "error"
export const useContactForm = () => {
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error(
                "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, " +
                    "VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env file."
            );

            setStatus("error");
            setErrorMessage(
                "Form isn't configured yet. Please try again shortly or reach out on WhatsApp."
            );

            return;
        }

        setStatus("sending");
        setErrorMessage("");

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
                publicKey: PUBLIC_KEY,
            });

            setStatus("success");
            form.reset();
        } catch (error) {
            console.error("EmailJS send failed:", error);
            setStatus("error");
            setErrorMessage(
                "Something went wrong sending your message. Please try again."
            );
        }
    };

    const resetStatus = () => {
        setStatus("idle");
        setErrorMessage("");
    };

    return { handleSubmit, status, errorMessage, resetStatus };
};
