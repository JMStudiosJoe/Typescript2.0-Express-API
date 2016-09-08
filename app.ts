//import * as express from 'express'    //didn't work, with full node_modules path
import express = require('express');    //didn't work, "       "
import * as _ from "lodash";
import {EndpointsRouter} from './EndpointsRouter'
import * as sqlize from "sequelize";


//console.log(sqlize);
var app = express();
var router = express.Router();
var sequelize = new sqlize('mylocal', 'root', 'development', {
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

sequelize.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


var firstMiddleware = function(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log(req.headers);
  console.log(Date());
  console.log("----------------------------");
  next();
};

var end = new EndpointsRouter();
app.use('/endpoints', end.router);
app.use('/o', end.getRouter());
router.get('/', function(req: express.Request, res: express.Response) {
    res.send('you have pinged the home page yo!!!');  
});

router.route('/api')
                    .get(function(req, res) {
                        res.send('GET request for /api');
                    }).post(function(req, res) {

                    });
app.use(firstMiddleware);
app.use('/', router);
app.listen(8000, function(){
    console.log("LISTENING AT PORT %d", 8000);
});

