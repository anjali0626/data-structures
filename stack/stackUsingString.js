// Implement Stack data structure using string as storage

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

  var poppedValue = this.storage.substring(this.storage.lastIndexOf('-')+1);

  this.storage = this.storage.substring(0, this.storage.lastIndexOf('-'));

  return poppedValue;

};

// Find length of stack
Stack.prototype.size = function() {

  var count = 0;

  for (var i = 0; i <= this.storage.lastIndexOf('-'); i += 1) {

    if (this.storage[i] === '-') {
      count += 1;
    }

  }

  return count;

};

// Display stack
Stack.prototype.showStack = function() {

  console.log('Your Stack looks like:', this.storage);

};