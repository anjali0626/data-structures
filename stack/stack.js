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

  if (this.index === 0) {
    return 'Stack is empty.';
  }

  var poppedValue = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;

  return poppedValue;
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

// Return the most recently added element in stack
Stack.prototype.peek = function() {

  var lastValue;

  var lengthOfStack = 0;

  for (var key in this.storage) {
    lengthOfStack += 1;
  }

  if (lengthOfStack === 0) {
    return 'Your Stack is empty.';
  }

  lastValue = this.storage[lengthOfStack - 1];

  return lastValue;
};

// Return the minimum value in stack
Stack.prototype.minStack = function() {

  var minValue = this.storage[0];

  var lengthOfStack = 0;

  for (var key in this.storage) {

    if (this.storage[key] < minValue) {
      minValue = this.storage[key];
    }

    lengthOfStack += 1;

  }

  if (lengthOfStack === 0) {
    return 'There is no minimum value as your Stack is empty';
  }

  return minValue;
};