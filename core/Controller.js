module.exports.Controller = new Controller();

function Controller() {

    this.res;
    this.req;
    this.rout;

    function init(res, req, rout) {
        this.res = res;
        this.req = req;
        this.rout = rout;
    };

    function getController() {

    };

};