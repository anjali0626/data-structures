// Implement Stack data structure using object as storage

var Stack = function() {

  this.storage = {};
  this.index = 0;

};

// Input a value in stack
// Time Complexity: O(1)
Stack.prototype.push = function(val) {

  this.storage[this.index] = val;
  this.index += 1;

};

// Remove last value from Stack and return the deleted value
// Time Complexity: O(1)
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
// Time Complexity: O(1)
Stack.prototype.size = function() {

  return 'Size of Stack = ' + this.index;
};

// Return the most recently added element in stack
// Time Complexity: O(1)
Stack.prototype.peek = function() {

  if (this.index === 0) {
    return 'Stack is empty.';
  }

  var lastValue = this.storage[this.index - 1];

  return 'Last element in Stack = ' + lastValue;

};

// Return the minimum value in stack
// Time Complexity: O(n)
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

  return 'Minimum element of Stack = ' + minValue;
};