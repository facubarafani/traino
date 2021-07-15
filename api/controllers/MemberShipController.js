const Membership = require("../models/Membership");

module.exports = {
    create: async function (req, res){
      const cost = req.param('cost');
      const initialDate = req.param('initialDate');
      const duration = req.param('duration');
      const fechaVencimiento = req.param('fechaVencimiento');
  
      var createdMembership = await Membership.create({cost: cost, initialDate: initialDate, duration: duration, fechaVencimiento: fechaVencimiento}).fetch();
  
      if (createdMembership) {
        res.redirect('/');
      } else {
        console.log('Error al crear usuario');
      }
  
    },
  
    seatc
  };