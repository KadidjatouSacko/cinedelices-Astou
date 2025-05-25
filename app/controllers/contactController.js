import { Contact } from "../models/Contact.js";

export const contactController = {
    GetContact(req, res) {
        const js = "index";
        const css = "contact";
        const title = 'contact';
        
        res.render("contact", { css, js , title});
    },

    async ContactSumbit(req, res) {
        const css = "contact";
        const title = "confirmation";
        const js = "index";
        
        console.log("Données reçues :", req.body);

        const { pseudo, email, text } = req.body;

        if (!email) {
            return res.status(400).json({ error: "L'email est obligatoire." });
        }
        
        try {
            const newContact = await Contact.create({ pseudo, email, text });
            
            console.log("Message enregistré avec succès, ID:", newContact.id);

            res.render("contact-sumbit", { pseudo, text, css, js, title });

        } catch (error) {
            console.error("Erreur lors de l'enregistrement du message :", error);

            res.status(500).render("contact", {
                css,
                error: "Une erreur est survenue lors de l'envoi du message.",
                formData: req.body
            });
        }
    }
};