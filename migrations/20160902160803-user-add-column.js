'use strict';
var Bluebird = require('bluebird');
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    
      // Describe how to achieve the task.
      // Call resolve/reject at some point.
      console.log("\n\n-----User Add Column Migration-------");
      return new Bluebird(function (resolve, reject) {
        return queryInterface.addColumn(
          'users',
          'creditCardNumber',
          Sequelize.STRING
          ).then(function success(data) {
          console.log("users ADDED COLUMN created");
        }, function failed(err) {
          console.log(err);
        });;
        });
        
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
