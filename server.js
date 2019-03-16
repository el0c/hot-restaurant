var express = require('express');

<<<<<<< HEAD
=======

>>>>>>> 6e9f9c8432921a04afd1ed4224c0cb1f3a44a10c
var app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/table", function(req, res) {
res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
res.sendFile(path.join(__dirname, "view.html"));
});
=======
require("./routes")(app);
>>>>>>> 6e9f9c8432921a04afd1ed4224c0cb1f3a44a10c

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
<<<<<<< HEAD
  console.log("App listening on PORT " + PORT);
});
=======
    console.log("App listening on PORT " + PORT);
});
>>>>>>> 6e9f9c8432921a04afd1ed4224c0cb1f3a44a10c
