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
        fullName: {
            type: 'string',
            required: true,
            description: 'Full representation of the user\'s name.',
            maxLength: 120,
            example: 'Mary Sue van der McHenst'
        },
        age: {
            type: 'number',
            description: 'Personal Trainer age'
        },
        phone: {
            type: 'string',
            description: 'Personal Trainer contact number'
        },
        emailAddress: {
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