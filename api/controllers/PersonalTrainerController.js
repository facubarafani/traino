
module.exports = {
  login: async function (req, res){
    const email = req.param('email');
    const password = req.param('password');

    const personaltrainer = await PersonalTrainer.findOne({
      email: email,
      password: password,
    });
    if(personaltrainer){
      req.session.personaltrainer = personaltrainer;
      res.redirect('/');
    }else{
      req.session.personaltrainer = null;
      res.redirect('/');
    }
  },
  logout: async function (req, res){
    req.session.personaltrainer = null;
    res.redirect('/');
  }
};
