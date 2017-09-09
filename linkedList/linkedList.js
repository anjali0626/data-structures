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

  var currentNode = this.head;

  if (this.head === this.tail) {
    return 'There is just 1 node in your Linked List i.e. Head Node';
  }

  while (currentNode) {

    if (currentNode.next.next === null) {

      var oldTailNode = currentNode.next;
      this.tail = currentNode;
      currentNode.next = null;

      return oldTailNode;
    }

    currentNode = currentNode.next;
  }

};

// Delete the head node of Linked List
LinkedList.prototype.removeFromHead = function() {

  var oldHeadNode = this.head;

  var newHeadNode = oldHeadNode.next;

  this.head = newHeadNode;

  oldHeadNode.next = null;

  return oldHeadNode;
};

// Add a node after a reference node in Linked List
LinkedList.prototype.addAfter = function(refNode, val) {

  var oldNext = refNode.next;
  var newNext = new Node(val);

  refNode.next = newNext;
  newNext.next = oldNext;

  if (this.tail === refNode) {
    this.tail = newNext;
  }

  return newNext;
};

// Delete a node after a reference node in Linked List
LinkedList.prototype.removeAfter = function(refNode) {

  var deletedNode = refNode.next;

  if (!deletedNode) {
    return 'There is nothing to delete.';
  }

  var newNext = deletedNode.next;

  refNode.next = newNext;

  deletedNode.next = null;

  if (deletedNode === this.tail) {
    this.tail = refNode;
  }

  return deletedNode;
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
LinkedList.prototype.forEach = function(callback) {

  var eachNode = this.head;

  while (eachNode) {

    callback(eachNode.value);
    eachNode = eachNode.next;

  }

};

// Find if node is present in Linked List
LinkedList.prototype.contains = function(val) {

  var currentNode = this.head;

  while (currentNode) {

    if (currentNode.value === val) {
      return currentNode;
    } else {
      currentNode = currentNode.next;
    }

  }

  return 'There is no node with given value in this Linked List.';
};

// Display Linked List
LinkedList.prototype.showLinkedList = function() {

  var linkedList = [];

  this.forEach(function(val) {
    linkedList.push(val);
  });

  return linkedList.join(', ');
};