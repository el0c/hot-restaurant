module.exports = function(app) {

    app.get("/", function(req, res) {
        //console.log("hello");
        res.sendFile(path.join(__dirname, "index.html"));
    });

    app.get("/table", function(req, res) {
        res.sendFile(path.join(__dirname, "table.html"));
    });

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
    });

    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    })
};