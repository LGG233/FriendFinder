// ===============================================================================
// Link routes to data source that stores the completed survey information.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// API ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests - what to do when user visits the API link (URL returns JSON of the data in the friends table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests - what to do when user submits form, that is, submits data to the server.
    // -  JSON is pushed to the appropriate JavaScript array
    // -  JSON is printed to the console
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        var new_friend = req.body;
        var friendScores = new_friend.scores
        var friendMatch = {
            name: "",
            photo: "",
            scoreDifference: 1000
        };
        var totalDifference = 0;
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(friendScores[j]) - (friends[i].scores[j]));
            }
            if (totalDifference <= friendMatch.scoreDifference) {
                friendMatch.name = friends[i].name;
                friendMatch.photo = friends[i].photo;
                friendMatch.scoreDifference = totalDifference
            }
        }
        friends.push(new_friend);
        res.json(friendMatch);
    });
};
