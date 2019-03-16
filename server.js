var express = require('express');
var path = require('path');

var app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});