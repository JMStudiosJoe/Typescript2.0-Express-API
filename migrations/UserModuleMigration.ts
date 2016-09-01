module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    console.log("START migration up and going");
    console.log(queryInterface);
    console.log("--------------------------------------------");
    console.log(Sequelize);
    queryInterface.createTable(
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
    )
  },
 
  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    console.log("user module migration down and dirty");
    queryInterface.dropTable('users');
  }
};