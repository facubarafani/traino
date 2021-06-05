module.exports = {


  friendlyName: 'View plan',


  description: 'Display "Plan" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/plan/plan'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
