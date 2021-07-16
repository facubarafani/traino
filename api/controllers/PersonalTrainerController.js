
module.exports = {
  login: async function (req, res){
    const email = req.param('email');
    const password = req.param('password');

    const personaltrainer = await PersonalTrainer.findOne({
      emailAddress: email,
    });
    if(personaltrainer && await sails.argon2.verify(personaltrainer.password, password)){
      req.session.personaltrainer = personaltrainer;
      res.redirect('/');
    }else{
      req.session.personaltrainer = null;
      res.redirect('/404');
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
    let password = req.param('password');

    password = await sails.argon2.hash(password);

    var createdUser = await PersonalTrainer.create({fullName: `${lastName} ${name}`, emailAddress: email, dni: dni, password: password, birthDate: birthDate, contactPhone: contactPhone}).fetch()

    if (createdUser) {
      res.redirect('/')
    } else {
      console.log("Error al crear usuario")
    }
  },

  plan: async function (req, res){
    const personalTrainerId = req.session.personaltrainer.id;
    const allUsers = await User.find({personalTrainer: personalTrainerId});
    res.view('pages/personaltrainer/plan', {allUsers});
  },

  createPlan: async function (req, res){
    const userId = req.param('userId');
    res.view('pages/personaltrainer/createPlan', {userId});
  },

  addPlan: async function (req, res){
    const userId = req.param('userId');
    const descripcion = req.param('descripcion');
    const nombreEjercicio = req.param('nombre');
    const imagenLink = req.param('imagen');

    const createdPlan = await Exercise.create({name: nombreEjercicio, description: descripcion, image: imagenLink}).fetch();
    await User.update({ id: userId }).set({exercises: createdPlan.id});
    res.redirect('/');
  }
};
