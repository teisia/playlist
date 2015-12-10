var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json"
})

getter.done(function(response) {
  var albums = response["results"];
  for (var i = 0; i < albums.length; i++) {
    var my_id = albums[i]["id"];
    $(".albums").append('<img class="album" src="images/'+albums[i]["cover_art"]+'" id="'+my_id+'"/>');
}

var container = [];

$(document).on("click", ".album", function() {
  var albums = response["results"];
  for (var i = 0; i < albums.length; i++) {
    var x = albums[i]["artist"]+': '+albums[i]["title"];
    if (albums[i]["id"] == this.id) {
    $(".trackList").append(x+'\n');
    container.push(x);
}
}
})
});

$(function() {
  $("#submit").click(function() {
    $.post(
      "https://lit-fortress-6467.herokuapp.com/post",
      {"container[]":[]},
      function(data) {
        console.log("yay!");
        console.log(data);
}
)

})
});
