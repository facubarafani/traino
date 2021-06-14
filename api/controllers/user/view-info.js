module.exports = {


  friendlyName: 'View info',


  description: 'Display "Info" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user/info'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
