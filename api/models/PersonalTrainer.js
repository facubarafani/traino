/**
 * PersonalTrainer.js
 *
 * A personal trainer which can have multiple users and associate plans to them
 * 
 * 
 * SailsJS already has by deafult created_at and updated_at
 */

 module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      dni: {
          type: 'number',
          description: 'Personal Trainer DNI',
      },
      name: {
          type: 'string',
          description: 'Personal Trainer name'
      },
      surname: {
          type: 'string',
          description: 'Personal Trainer surname'
      },
      age: {
          type: 'number',
          description: 'Personal Trainer age'
      },
      phone: {
          type: 'string',
          description: 'Personal Trainer contact number'
      },
      email: {
          type: 'string',
          description: 'Personal Trainer email address'
      },
      password: {
          type: 'string',
          description: 'Personal Trainer password to access webapp'
      },
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      users: {
          collection: 'user',
          via: 'personalTrainer'
      },
  
    },
  
  
  };