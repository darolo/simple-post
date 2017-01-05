const start = "^";
const end = "$";
const path = "\/";
const alphanumeric = "[A-Za-z0-9]";
const url_char = "(?:" + alphanumeric + "+[\-]?)+" + alphanumeric + "+";
const url_search = "(?:" + alphanumeric + "+[\+]?)+" + alphanumeric + "+";

module.exports = {
    "home": {
        exp: start + path + end,
        method: "GET",
        controller: "Index"
    },

    "article": {
        exp: start + path + "(" + url_char + ")" + path + end,
        method: "GET",
        controller: "Post"
    },

    "search": {
        exp: start + path + "Search" + path + "(" + url_search + ")" + path + end,
        method: "GET",
        controller: "Post"
    }
};