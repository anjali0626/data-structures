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

  if (this.value === val) {

    return true;

  } else if (val < this.value) {

    return !!this.leftSubTree && this.leftSubTree.contains(val);

  } else if (val > this.value) {

    return !!this.rightSubTree && this.rightSubTree.contains(val);

  }

  return false;
};

// Traverse binary search tree in depth-first in-order fashion and invoke callback for every node
BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(callback) {

  if (!this.leftSubTree && !this.rightSubTree) {
    return callback(this);
  }

  if (this.leftSubTree) {
    this.leftSubTree.traverseDepthFirst_inOrder(callback);
  }

  callback(this);

  if (this.rightSubTree) {
    this.rightSubTree.traverseDepthFirst_inOrder(callback);
  }

};

// Traverse binary search tree in depth-first pre-order fashion and invoke callback for every node
BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(callback) {

  callback(this);

  if (this.leftSubTree) {
    this.leftSubTree.traverseDepthFirst_preOrder(callback);
  }

  if (this.rightSubTree) {
    this.rightSubTree.traverseDepthFirst_preOrder(callback);
  }

};

// Traverse binary search tree in depth-first post-order fashion and invoke callback for every node
BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(callback) {

  if (this.leftSubTree) {
    this.leftSubTree.traverseDepthFirst_postOrder(callback);
  }

  if (this.rightSubTree) {
    this.rightSubTree.traverseDepthFirst_postOrder(callback);
  }

  callback(this);

};