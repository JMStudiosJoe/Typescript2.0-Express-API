var Sequelize = require('sequelize');
var sequelize = new Sequelize('mylocal', 'root', 'development', {
    host: 'development.ccyhitmusaue.us-west-2.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    // SQLite only
    storage: 'path/to/database.sqlite'
});
//console.log(sequelize);
sequelize.authenticate().then(function (err) {
    console.log('Connection has been established successfully.');
})
    .catch(function (err) {
    console.log('Unable to connect to the database:', err);
});
