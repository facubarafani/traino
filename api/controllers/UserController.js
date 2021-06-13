

module.exports = {
  login: async function (req, res){
    const email = req.param('email');
    const password = req.param('password');

    const user = await User.findOne({
      emailAddress: email,
      password: password,
      });
    if(user){
      req.session.user = user;
      res.redirect('/');
    }else{
      req.session.user = null;
      res.redirect('/');
    }
  },
  logout: async function (req, res){
    req.session.user = null;
    res.redirect('/');
  }
};
