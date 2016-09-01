module.exports = {
    up: function (queryInterface, Sequelize) {
        // logic for transforming into the new state
        console.log("user module migration up and going");
    },
    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
        console.log("user module migration down and dirty");
    }
};
