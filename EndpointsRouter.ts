import * as express from 'express';
export class EndpointsRouter {
    router: express.Router;
    
    
    constructor(options?: any) {
        
        this.router = express.Router();
        this.router.get('/endpoints', function(req:express.Request, res: express.Response) {
            res.send("in the endpoints");
        });
        return this;
    }
    getRouter(): express.Router {
        var router = express.Router();
        router.get('/endpointsOther', function(req:express.Request, res: express.Response) {
            res.send("CONNECTED TO TOERH external module Endpoints Router");
        });
        return router;
    }
    

    
}