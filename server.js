var express = require('express');


var app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});