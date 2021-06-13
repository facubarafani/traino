
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
  },
  register: async function (req, res){
    const name = req.param('name');
    const lastName = req.param('last_name');
    const dni = req.param('dni');
    const email = req.param('email');
    const birthDate = req.param('birth_date');
    const contactPhone = req.param('contact_phone');
    const password = req.param('password');

    var createdUser = await PersonalTrainer.create({fullName: `${lastName} ${name}`, emailAddress: email, dni: dni, password: password, birthDate: birthDate, contactPhone: contactPhone}).fetch()

if (createdUser) {
  res.redirect('/')
} else {
  console.log("Error al crear usuario")
}

  },
};
