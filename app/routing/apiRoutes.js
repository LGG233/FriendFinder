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
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            console.log(friends[i].photo);
            for (var j = 0; j < friends[i].scores.length; j++) {
                console.log("Answer to Question " + (j + 1) + ":" + friends[i].scores[j]);
            }
        }
    });

    // API POST Requests - what to do when user submits form, that is, submits data to the server.
    // -  JSON is pushed to the appropriate JavaScript array
    // -  JSON is printed to the console
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        var new_friend = req.body;
        var lastUserArray = [];
        console.log(new_friend);
        for (var i = 0; i < new_friend.scores.length; i++) {
            lastUserArray.push(new_friend.scores[i]);
            // console.log(new_friend.scores[i])
        }
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            // console.log(friends[i].photo);
            for (var j = 0; j < friends[i].scores.length; j++) {
                console.log("Answer to Question " + (j + 1) + ":" + friends[i].scores[j]);
            }
        }
        console.log(lastUserArray);
        friends.push(new_friend);
        res.json(new_friend);
    });
};

// findFriend();
// var userResults = [];
// var oldResults = [];

function userAnswers(new_friend) {
    console.log("2" + new_friend)
}

// function findFriend() {

    //     var lastUser = friendArray[friendArray.length - 1];
    //     var lastUserArray = [];
    //     for (h = 0; h < lastUser.scores.length; h++) {
    //         var dataPoint = lastUser.scores[h]
    //         lastUserArray.push(dataPoint);
    //     }
    //     console.log(lastUserArray);
    //     var allUsersArray = [];
    //     for (var i = 0; i, friendArray.length; i++) {
    //         var dataPoint = friendArray[i].scores;
    //         allUsersArray.push(dataPoint);
    //     }
    //     console.log(allUsersArray)
    // }
