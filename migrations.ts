
var Bluebird = require('bluebird');
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
var Umzug = require('umzug');
var umzug = new Umzug({
  sequelize:sequelize,
  migrations: {
    params:[sequelize.getQueryInterface(), Sequelize, function success(data) {
      console.log("SOMETHING COMPLETED THIS IS A CALLBACK");
    }],
    path:'./migrations',
    pattern: /^\d+[\w-]+\.js$/
  }
  
});

sequelize.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
    mig(sequelize);
})
.catch(function (err) {
    console.log('Unable to connect to the database:', err);
});

var mig = function (sequelize) {
    // umzug.execute({
    //   sequelize:sequelize,
    //   migrations: ['20160902160618','20160902160803'],
    //   params:[sequelize.getQueryInterface(), Sequelize, Bluebird],
    //   method: 'up' 
    // }).then(function (migrations) {
    //   console.log("\n\nWHATS UP HERE: ");
    //   console.log(migrations);
    //   // "migrations" will be an Array of all executed/reverted migrations.
    // });
    umzug.up().then( function success(migrations) {
      console.log("dont thin it worked")
    });
};