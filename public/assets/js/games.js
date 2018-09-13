$(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newGame = {
      name: $("#gameName").val().trim(),
      // bad: $("[name=bad]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newGame
    }).then(
      function() {
        console.log("created new game");
        location.reload();
      }
    );
    // $.ajax("/api/newGame", {
    //   type: "POST",
    //   data: newGame
    // }).then(function()
    // {
    //   console.log("adding new game");
    //   location.reload
    // })
  });
});
