/**
 * Plan.js
 *
 * A plan that belongs to a User which can be modified by a personal trainer
 * 
 * Attributes required: created_at, last_update, days_left (derivated), routines (A plan can have multiple routines),
 *  user_attributed (linked via dni), personal_trainer_attributed (linked via dni) -  A plan has only one personal trainer
 * attributed and can only be attributed to one User.
 * 
 * SailsJS already has by deafult created_at and updated_at
 */

 module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      daysLeft: {
          type: 'number',
          description: 'Days left before User needs new plan',
      },
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      user: {
          model: 'user'
      },
      personalTrainer: {
          model: 'personalTrainer'
      },
      routines: {
          collection: 'routine',
          via: 'plan'
      }
  
    },
  
  
  };