function Place(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

Place.prototype.info = function() {
  return this.location + ", " + this.landmark + ", " + this.time + ", " + this.notes;
};