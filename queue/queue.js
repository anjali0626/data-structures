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
  // TODO...
};

// Find length of queue
Queue.prototype.size = function() {
  // TODO...
};

// Display queue
Queue.prototype.showQueue = function() {
  // TODO...
};