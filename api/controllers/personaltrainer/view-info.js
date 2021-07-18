module.exports = {


  friendlyName: 'View info',


  description: 'Display "Info" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/personaltrainer/info'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
