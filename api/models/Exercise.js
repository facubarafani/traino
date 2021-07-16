/**
 * Exercise.js
 *
 * A routine is composed of multiple exercises (many-to-many relationship)
 *
 * SailsJS already has by deafult created_at and updated_at
 */

 module.exports = {

    attributes: {

      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      name: {
        type: 'string',
        description: 'Name of the exercise',
      },
      description: {
        type: 'string',
        description: 'Description of the exercise'
      },
      repetitions:{
        type: 'number',
      },
      series:{
        type: 'number',
      },
      image: {
        type: 'string',
        description: 'Image that represents the exercise'
      },

      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a

      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      routines: {
          collection: 'routine',
          via: 'exercises'
      },
      users: {
        model: 'user'
      }
    },


  };
