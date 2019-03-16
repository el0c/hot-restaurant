var path = require('path');

var waitlist = require('./api/waitlist');
<<<<<<< HEAD
var tables = require('./api/tables.js');
=======
var tables = require('./api/tables');
>>>>>>> 68546f78745c6c380bfaa7adc055968248bdfe29

module.exports = function(app) {

    app.get("/", function(req, res) {
        //console.log("hello");
        res.sendFile(path.join(__dirname, "./index.html"));
    });

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "./tables.html"));
    });

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "./reserve.html"));
    });

    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    });

    app.get("/api/waitlist", function(req, res) {
        return res.json(waitlist);
    });


    app.get('*', function(req, res){
        res.status(404).send('Something went wrong...');
    });
};