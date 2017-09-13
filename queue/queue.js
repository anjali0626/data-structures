// Implement Queue data structure using object as storage

var Queue = function() {

  this.storage = {};
  this.index = 0;

};

// Input a value in queue
Queue.prototype.enqueue = function(val) {

  this.storage[this.index] = val;
  this.index += 1;

};

// Remove first value from queue and return the deleted value
Queue.prototype.dequeue = function() {

  if (Object.keys(this.storage).length === 0) {
    return 'Queue is empty';
  }

  var deletedValue = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];

  return 'Deleted element = ' + deletedValue;
};

// Find length of queue
Queue.prototype.size = function() {

  var lengthOfQueue = Object.keys(this.storage).length;

  return 'Size of Queue = ' + lengthOfQueue;
};

// Display queue
Queue.prototype.showQueue = function() {

  console.log('Your Queue looks like:', this.storage);

};

// Return the oldest added element in queue
Queue.prototype.peek = function() {

  var lengthOfQueue = 0;

  for (var key in this.storage) {
    lengthOfQueue += 1;
  }

  if (lengthOfQueue === 0) {
    return 'Your Queue is empty.';
  }

  var oldestValue = this.storage[Object.keys(this.storage)[0]];

  return oldestValue;
};

// Find if the queue has the passed in value or not
Queue.prototype.contains = function(val) {

  for (var key in this.storage) {

    if (this.storage[key] === val) {
      return true;
    }

  }

  return false;
};