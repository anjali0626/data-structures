var Stack = function() {

  this.storage = '';

};

// Input a value in stack
Stack.prototype.push = function(val) {

  this.storage += '-';
  this.storage += val;

};

// Remove last value from Stack and return the deleted value
Stack.prototype.pop = function() {
  // TODO..
};

// Find length of stack
Stack.prototype.size = function() {
  // TODO..
};

// Display stack
Stack.prototype.showStack = function() {

  console.log('Your Stack looks like:', this.storage);

};