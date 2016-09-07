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
      var promise =  new Bluebird(function (resolve, reject) {

        console.log("\n\n-----User Module Migration-------");


        return queryInterface.createTable(
            'users',
            {
              id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              createdAt: {
                type: Sequelize.DATE
              },
              updatedAt: {
                type: Sequelize.DATE
              },
              firstName: Sequelize.STRING,
              lastName: Sequelize.STRING
            }
          );
        });
        return promise;

        
        

        
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
