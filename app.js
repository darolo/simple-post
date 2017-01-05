(function () {
    'use strict';
    const http = require('http');
    const config = require('./config/app').server;
    const routerConstruct = require('./core/routerConstruct');
	
    var srcProd = (req, res) => {
        
        new routerConstruct(req, res).getRoute();

        console.log(res);
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World\n');
	}		
	
	http.createServer(srcProd).listen(config.port, config.hostname, config.Running);	
}());