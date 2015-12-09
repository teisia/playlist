var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json"
})

getter.done(function(response) {
  var albums = response["results"];
  for (var i = 0; i < albums.length; i++) {
    //var randd = Math.floor((Math.random() * 3));
    console.log(albums[i]);
  }
});
