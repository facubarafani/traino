/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  if(await PersonalTrainer.count() > 0){
    return;
  }

  await PersonalTrainer.createEach([
    {email: 'personaltrainer@fitness.com', password: '12345', name: 'Juan Perez'},
  ])

};
