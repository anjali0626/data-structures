// Implement Linked List data structure

var Node = function(val) {

  this.value = val;
  this.next = null;

};

var LinkedList = function(valueOfHeadNode) {

  this.head = new Node(valueOfHeadNode);
  this.tail = this.head;

};

// Add a node to the end of Linked List
LinkedList.prototype.addToTail = function(val) {

  var newTailNode = new Node(val);

  this.tail.next = newTailNode;
  this.tail = newTailNode;

  return newTailNode;
};

// Add a node to the beginning of Linked List
LinkedList.prototype.addToHead = function(val) {

  var oldHeadNode = this.head;

  var newHeadNode = new Node(val);

  this.head = newHeadNode;

  newHeadNode.next = oldHeadNode;

  return this.head;
};

// Delete the tail node of Linked List
LinkedList.prototype.removeFromTail = function() {
  // TODO...
};

// Delete the head node of Linked List
LinkedList.prototype.removeFromHead = function() {
  // TODO...
};

// Add a node after a reference node in Linked List
LinkedList.prototype.addAfter = function() {
  // TODO...
};

// Delete a node after a reference node in Linked List
LinkedList.prototype.removeAfter = function() {
  // TODO...
};

// Add a node before a reference node in Linked List
LinkedList.prototype.addBefore = function() {
  // TODO...
};

// Delete a node before a reference node in Linked List
LinkedList.prototype.removeBefore = function() {
  // TODO...
};

// Call the passed in callback function for every value in Linked List
LinkedList.prototype.forEach = function() {
  // TODO...
};

// Find if node is present in Linked List
LinkedList.prototype.contains = function() {
  // TODO...
};

// Display Linked List
LinkedList.prototype.showStack = function() {
  // TODO...
};