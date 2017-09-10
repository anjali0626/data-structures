// Implement Binary Search Tree data structure

var BinarySearchTree = function(val) {

  this.value = val;
  this.leftSubTree = null;
  this.rightSubTree = null;

};

// Insert a value in it's correct place in binary search tree
BinarySearchTree.prototype.insert = function(val) {

  if (val <= this.value) {

    if (this.leftSubTree) {
      this.leftSubTree.insert(val);
    } else {
      this.leftSubTree = new BinarySearchTree(val);
    }

  } else if (val > this.value) {

    if (this.rightSubTree) {
      this.rightSubTree.insert(val);
    } else {
      this.rightSubTree = new BinarySearchTree(val);
    }

  }

  return this;
};

// Find if value is present in binary search tree
BinarySearchTree.prototype.contains = function(val) {
  // TODO...
};

// Traverse binary search tree in depth-first in-order fashion and invoke callback for every node
BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(callback) {
  // TODO...
};

// Traverse binary search tree in depth-first pre-order fashion and invoke callback for every node
BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(callback) {
  // TODO...
};

// Traverse binary search tree in depth-first post-order fashion and invoke callback for every node
BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(callback) {
  // TODO...
};