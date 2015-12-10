var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json"
})

getter.done(function(response) {
  var albums = response["results"];
  for (var i = 0; i < 3; i++) {
    // <!--  -->console.log("we are trying to load "+i);
    var randd = Math.floor((Math.random() * 5));
    $(".albumArt").append('<img src=images/'+albums[randd]["cover_art"]+' />');
};
});
