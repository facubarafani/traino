const Membership = require("../models/Membership");
const UserController = require("./UserController");

module.exports = {
    createMembership: async function (req, res){
      const cost = req.param('cost');
      const initialDate = req.param('initialDate');
      const duration = req.param('duration');
      const fechaVencimiento = req.param('fechaVencimiento');
      const userId = req.param('userId');
      var createdMembership = await Membership.create({cost: cost, initialDate: initialDate, duration: duration, fechaVencimiento: fechaVencimiento, user: 1}).fetch();
      // await Membership.populate(userId, 'user')
      await User.findOne({id: userId}).update({membership: createdMembership.id})

      if (createdMembership) {
        res.redirect('/');
      } else {
        console.log('Error al crear membresia');
      }
  
    },
  };