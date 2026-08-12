
export const contactFormHook = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            "Thank you. Your request has been received by CoreAIx Labs LLP."
        );
    };

    return { handleSubmit }
}

