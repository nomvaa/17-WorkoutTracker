const path = require("path");

module.exports = function(app) {
    // sendfile to excerise htnml
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // senfile stats html
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
