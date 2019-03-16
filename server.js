var express = require('express');

var app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/table", function(req, res) {
res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
res.sendFile(path.join(__dirname, "view.html"));
});
