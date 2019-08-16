const user = require('../models/user');

module.exports = {
  register: async function() {
    let response= await user.register()
    return response
  }
};
