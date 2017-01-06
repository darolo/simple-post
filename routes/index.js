var express = require('express');
var router = express.Router();

/* MIDLEWARES */
function validPostParams(req, res, next) {
    if (/^([A-Za-z0-9]+\-?[A-Za-z0-9]+)+$/.test(req.params.post)) next();
    else res.sendStatus(404);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/:post.html")
.get(
    validPostParams,
    function (req, res) {
        console.log(req.params);
        res.send('POST');
    }
);

/* GET search page. */
router.route("/Search/:query/")
    .get(function (req, res) {
        res.send('SEARCH');
    });

/* GET tag page. */
router.route("/Tag/:tag/")
    .get(function (req, res) {
        res.send('Tag');
    });

module.exports = router;
