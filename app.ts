//import * as express from 'express'    //didn't work, with full node_modules path
import express = require('express');    //didn't work, "       "
import * as _ from "lodash";
import {EndpointsRouter} from "./EndpointsRouter"
var app = express();
var router = express.Router();

var endpoints = new EndpointsRouter();

console.log(endpoints);
router.get('/', function(req: express.Request, res: express.Response) {
    res.send('im the home page!!!');  
});

router.route('/api')
                    .get(function(req, res) {
                        res.send('GET request for /api');
                    }).post(function(req, res) {

                    });
app.use('/', router);
app.listen(3000, function(){
    console.log("Demo Express server listening on port %d", 3000);
});

