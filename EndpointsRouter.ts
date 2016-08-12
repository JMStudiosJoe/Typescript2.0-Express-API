import express = require('express');

class EndpointsRouter {
    constructor() {
        var router = express.Router();
        router.get('/endpoints', function(req:express.Request, res: express.Response) {
            res.send("GETTING THE ");
        })
        console.log("constructor gets called");
        return router;
    }
}


export {EndpointsRouter};