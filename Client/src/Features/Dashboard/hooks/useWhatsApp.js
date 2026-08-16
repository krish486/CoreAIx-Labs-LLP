const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

const useWhatsApp = () => {
    const openWhatsApp = () => {
        const message = encodeURIComponent(
            "Hello DeckedOut, I would like to discuss a project with you."
        );

        const whatsappUrl =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const handleWhatsAppKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openWhatsApp();
        }
    };

    return {
        openWhatsApp,
        handleWhatsAppKeyDown,
    };
};

export default useWhatsApp;