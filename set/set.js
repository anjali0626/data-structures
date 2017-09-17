// Implement Set data structure

var Set = function() {

  this.storage = {};
  this.counter = 0;

};

// Find the number of values present in set
Set.prototype.size = function() {

  return this.counter;
};

// Find whether a value is present in set or not
Set.prototype.has = function(val) {

  return !!this.storage[val];
};

// Add a value to set
Set.prototype.add = function(val) {

  if (this.has(val)) {
    return 'Value is already present in Set.';
  }

  this.storage[val] = true;
  this.counter += 1;

  return this;
};

// Delete a value from set
Set.prototype.delete = function(val) {
  // TODO...
};

// Invoke callback for every value present in set
Set.prototype.forEach = function(callback) {
  // TODO...
};