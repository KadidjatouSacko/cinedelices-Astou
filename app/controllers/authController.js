export const authController = {
  GetRegistration(req,res) {
    const css = 'registration';
      res.render("registration");

  },
 LoginPage(req,res) { 
  res.render("login");

 }

}

