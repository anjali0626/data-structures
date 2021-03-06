// Implement Set data structure

var Set = function() {

  this.storage = {};
  this.counter = 0;

};

// Find the number of values present in set
// Time Complexity : O(1)
Set.prototype.size = function() {

  return this.counter;
};

// Find whether a value is present in set or not
// Time Complexity : O(1)
Set.prototype.has = function(val) {

  return !!this.storage[val];
};

// Add a value to set
// Time Complexity : O(1)
Set.prototype.add = function(val) {

  if (this.has(val)) {
    return 'Value is already present in Set.';
  }

  this.storage[val] = true;
  this.counter += 1;

  return this;
};

// Delete a value from set
// Time Complexity : O(1)
Set.prototype.delete = function(val) {

  if (this.storage[val]) {
    delete this.storage[val];
    this.counter -= 1;

    return true;
  }

  return false;
};

// Invoke callback for every value present in set
// Time Complexity : O(n)
Set.prototype.forEach = function(callback) {

  for (var key in this.storage) {
    callback(key);
  }

};