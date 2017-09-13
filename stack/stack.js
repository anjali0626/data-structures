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

  return 'Deleted element = ' + poppedValue;
};

// Find length of stack
Stack.prototype.size = function() {

  return 'Size of Stack = ' + this.index;
};

// Display stack
Stack.prototype.showStack = function() {

  console.log('Your Stack looks like: ', this.storage);

};

// Return the most recently added element in stack
Stack.prototype.peek = function() {

  if (this.index === 0) {
    return 'Stack is empty.';
  }

  var lastValue = this.storage[this.index - 1];

  return 'Last element in Stack = ' + lastValue;

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