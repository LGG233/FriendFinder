// Code / Pseudocode / Status for FriendFinder

// Files needed
// - friends.js - holds the array containing survey reponses
// - home.html - main HTML page. Needs to be revised to show that I did a little work on it
// - survey.html - survey HTML page. Any stylistic changes on main page should be reflected here. Update survey with my own questions - DONE
// - apiRoutes.js 
// - htmlRoutes.js

// PUT LOGIC FOR COMPARING INTO APIROUTES FILE, AS PART OF THE POST


// You cycle through the objects in the array, one by one, comparing value pairs, eg 
// if (res[0].scores[0] lance[1] === nitza[1], x = x + 3. If lance[1] - nitza[1] === 1 || -1, x = x +2. Etc.


// require new_friend from apiRoutes file-- this contains the data the user posts
// compare new_friend.scores[0] to res[i].scores[0]-- how to avoid for loop inside for loop. 
// - solution to that problem may be to grab res[i] and put it into an array that we compare to new_friend:


var latestPost = res[res.length]; // this creates a variable to access the last JSON posted to the array
var compareUsers = [] // creates an array to store the name and pointCount for each survey

function compareScores() {
    var pointCount = 0; // variable to count "similarity points" of the newly submitted survey when compared to each survey already recorded
    for (var i = 0; i < (res.length - 1); i++) {
        if (new_friend.scores[i] === res.scores[i]) {
            pointCount = pointCount + 3;
        } else if (new_friend.scores[i] - res.scores[i] === 1 || res.scores[i] - new_friend.scores[i] === 1) {
            pointCount = pointCount + 2;
        } else if (new_friend.scores[i] - res.scores[i] === 2 || res.scores[i] - new_friend.scores[i] === 2) {
            pointCount = pointCount + 1;
        } else {
            pointCount = pointCount;
        }
        var userScore = {
            "name": res.name,
            "score": pointCount
        }
        compareUsers.push(userScore);
        


    }
}

// for
// if ()

// Three else statements to get that result.Then push everyone's score into an object array and check for the highest number.