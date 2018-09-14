$(function() {
// this is used to execute everything that is going on in the handlebars 
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
// this creates a new entry from the form in handlebars 
    var newGame = {
      name: $("#gameName").val().trim(),

      // two values provided 
      bad: $("[name=bad]:checked").val().trim()
    };
// then it calls on the /api/burgers to show the data with the new entry 
    $.ajax("/api/burgers", {
      type: "POST",
      data: newGame
    }).then(function()
    {
      console.log("adding a new game");
      location.reload();
    })

  });
  // this part changes the option of a bad/good game 
  // also uses the partials to execute this 
  // NOTE: these buttons are available for every games and new entries
  $(".change-bad").on("click", function(event)
  {
    var id = $(this).data("id");
// if a game is labeled bad in the database this button named good can be clicked to change it to the other side with the good games
    var newBad = {
      bad: false,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBad
    }).then(function() {
      location.reload();
    })
  });
// this changes the game from a good game to a bad game 
  $(".change-good").on("click", function(event)
  {
    var id = $(this).data("id");
// by setting the bad in the database to true, and then the database is changed in the orm
    var newGood = {
      bad: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newGood
    }).then(function() {
      location.reload();
    })
  });
});
