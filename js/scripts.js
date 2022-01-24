function Place(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

Place.prototype.info = function() {
  return this.location + ", " + this.landmark + ", " + this.time + ", " + this.notes;
};

$(document).ready(function() {
  let berlin = new Place("Germany", "Berlin Wall", "2003", "language spoken: German");
  let ensenada = new Place("Mexico", "Rivera del Pacifico", "1998", "language spoken: Spanish");
  let boston = new Place("USA", "Freedom Trail", "1996", "language spoken: English");
  let berlinInfo = berlin.info();
  let ensenadaInfo = ensenada.info();
  let bostonInfo = boston.info();

  $("#berlin").click(function() {
    $("#show-Berlin").html(berlinInfo).show();
  });
  $("#ensenada").click(function() {
    $("#show-Ensenada").html(ensenadaInfo).show();
  });
  $("#boston").click(function() {
  $("#show-Boston").html(bostonInfo).show();
  });
});