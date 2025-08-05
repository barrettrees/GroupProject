var url = "https://lazerwalker.com/playfab-twine/index.js";

// Your PlayFab Title ID, found in Step 2
var playfabID = "18327D";

// An array of every Twine variable you want to track (don't include the dollar sign)
var trackedVariables = [];

$(function() {
  $.getScript(url, function(data, textStatus, jqxhr) {
    setupPlayfab(playfabID, trackedVariables, State);
  });
});


