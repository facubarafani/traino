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
        birthDate: {
              type: 'string',
              description: 'Personal Trainer age'
        },
        contactPhone: {
            type: 'number',
            description: 'Personal Trainer contact number'
        },
        emailAddress: {
            type: 'string',
            required: true,
            description: 'Personal Trainer email address'
        },
        password: {
            type: 'string',
            required: true,
            protect: true,
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
