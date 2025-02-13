export const contactController = {
    Getcontact(req, res) {
        res.render("contact");
    },

    contactSumbit(req, res) {
        const pseudo = req.body.pseudo; 
        const mail = req.body.mail;    
        const text = req.body.text;     
        console.log(req.body.pseudo)
        // Passer pseudo à la vue de confirmation
        res.render('contact-sumbit', { pseudo, text});  
    }
};

