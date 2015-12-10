var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json"
})

getter.done(function(response) {
  var albums = response["results"];
  for (var i = 0; i < albums.length; i++) {
    var my_id = albums[i]["id"];
    $(".albums").append('<img src="images/'+albums[i]["cover_art"]+'" id="'+my_id+'"/>');
    var my_div = $("#"+my_id);
};
});
