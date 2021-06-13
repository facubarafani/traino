

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
  },

  register: async function (req, res){
    const name = req.param('name');
    const lastName = req.param('last_name');
    const dni = req.param('dni');
    const email = req.param('email');
    const height = req.param('height');
    const weight = req.param('weight');
    const birthDate = req.param('birth_date');
    const contactPhone = req.param('contact_phone');
    const password = req.param('password');

    var createdUser = await User.create({fullName: `${lastName} ${name}`, emailAddress: email, dni: dni, password: password, height: height, weight: weight, birthDate: birthDate, contactPhone: contactPhone}).fetch()

if (createdUser) {
  res.redirect('/')
} else {
  console.log("Error al crear usuario")
}

  },
};
