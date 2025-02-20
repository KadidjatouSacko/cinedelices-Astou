export const contactController = {
    GetContact(req, res) {
        res.render("contact");
    },

    ContactSumbit(req, res) {
        const pseudo = req.body.pseudo; 
        const mail = req.body.mail;    
        const text = req.body.text; 
        const css = "contact"     
        console.log(req.body.pseudo)
        // Passer pseudo à la vue de confirmation
        res.render('contact-sumbit', { pseudo, text, css});  
    }
};

