// Implement Stack data structure using object as storage

var Stack = function() {

  this.storage = {};
  this.index = 0;

};

// Input a value in stack
Stack.prototype.push = function(val) {

  this.storage[this.index] = val;
  this.index += 1;

};

// Remove last value from Stack and return the deleted value
Stack.prototype.pop = function() {
  // TODO...
};

// Find length of stack
Stack.prototype.size = function() {

  var lengthOfStack = 0;

  for(var key in this.storage) {
    lengthOfStack += 1;
  }

  return lengthOfStack;
};

// Display stack
Stack.prototype.showStack = function() {

  console.log('Your Stack looks like: ', this.storage);

};