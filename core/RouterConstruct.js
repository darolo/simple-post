module.exports = class RouterConstruct {
    constructor(req, res) {
        this.route = require('../config/route');
        this.queryString = require('querystring');
        this.routeModel = require('../core/model/route');
        this.req = req;
        this.res = res;
    }

    getRoute() {
        this.res.statusCode = 200;
    }
}