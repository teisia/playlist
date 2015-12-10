var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json"
})

getter.done(function(response) {
  var albums = response["results"];
  for (var i = 0; i < albums.length; i++) {
    $(".albums").append('<img src=images/'+albums[i]["cover_art"]+' />');
};
});
