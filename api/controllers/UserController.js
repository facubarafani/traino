

module.exports = {
  login: async function (req, res){
    const email = req.param('email');
    const password = req.param('password');

    const user = await User.findOne({
      emailAddress: email,
    });
    if(user && await sails.argon2.verify(user.password, password)){

      if(user.membership){
        const membresia = await Membership.findOne({user: user.id,});
        const date = membresia.initialDate;
        const duracionMembresia = membresia.duration;
        const dateObject = new Date(date);
        const actualDate = new Date();

        dateObject.setMonth(dateObject.getMonth() + duracionMembresia);
        if(actualDate.getTime() > dateObject.getTime()){
          user.membership = null;
          await User.update({id: user.id,}).set({membership: null,});
          await Membership.destroy({user: user.id,});
        }
      }
      req.session.user = user;
      res.redirect('/');
    }else{
      req.session.user = null;
      res.redirect('/404');
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
    let password = req.param('password');

    password = await sails.argon2.hash(password);

    var createdUser = await User.create({fullName: `${lastName} ${name}`, emailAddress: email, dni: dni, password: password, height: height, weight: weight, birthDate: birthDate, contactPhone: contactPhone}).fetch();

    if (createdUser) {
      res.redirect('/');
    } else {
      console.log('Error al crear usuario');
    }

  },

  personalTrainer: async function (req, res){
    const allPersonalTrainers = await PersonalTrainer.find();
    res.view('pages/user/personalTrainer', {allPersonalTrainers});
  },
  addTrainer: async function (req, res){
    const personalTrainerId = req.param('personalTrainerId');
    const personalTrainer = await PersonalTrainer.findOne({id: personalTrainerId,});
    const userId = req.session.user.id;

    if(!personalTrainer){
      res.notFound();
    }

    req.session.user.personalTrainer = personalTrainerId;
    await User.update({ id: userId }).set({personalTrainer: personalTrainerId}).fetch();

    res.redirect('/');
  },

  plan: async function (req, res) {
    const userId = req.session.user.id;
    const allExercises = await Exercise.find({users: userId,});
    res.view('pages/user/plan', {allExercises});
  },

  getAllUsers: async function (req, res) {
    const allUsers = await User.find();
    res.view('pages/membership/create', {allUsers})
  },

  getUsersByName: async function (req, res) {
    const name = req.param('search')
    const usersByName = await Users.find({
      name: {
        'contains' : name
      }
    });
  }
};
