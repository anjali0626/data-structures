// Implement Set data structure

var Set = function() {

  this.storage = {};
  this.counter = 0;

};

// Add a value to set
Set.prototype.add = function(val) {
  // TODO...
};

// Delete a value from set
Set.prototype.delete = function(val) {
  // TODO...
};

// Find the number of values present in set
Set.prototype.size = function() {

  return this.counter;
};

// Find whether a value is present in set or not
Set.prototype.has = function(val) {

  return !!this.storage[val];
};

// Invoke callback for every value present in set
Set.prototype.forEach = function(callback) {
  // TODO...
};