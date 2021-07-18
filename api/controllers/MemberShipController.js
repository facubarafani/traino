

module.exports = {
    create: async function (req, res){
      const cost = req.param('cost');
      const initialDate = req.param('initialDate');
      const duration = req.param('duration');
      const fechaVencimiento = req.param('fechaVencimiento');
      const userId = req.param('userId');

      const createdMembership = await Membership.create({cost: cost, initialDate: initialDate, duration: duration, fechaVencimiento: fechaVencimiento, user: userId}).fetch();

      await User.update({id: userId}).set({membership: createdMembership.id});
      if (createdMembership) {
        res.redirect('/');
      } else {
        console.log('Error al crear membresia');
      }
    },
  };
