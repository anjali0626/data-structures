// Implement Tree data structure

var Tree = function(val) {

  this.value = val;
  this.children = [];

};

// Time Complexity : O(1)
Tree.prototype.addChild = function(val) {

  var newChild = new Tree(val);

  this.children.push(newChild);

  return newChild;
};

// Time Complexity : O(n)
Tree.prototype.contains = function(val) {

  if (this.value === val) {
    return true;
  }

  for (var i = 0; i < this.children.length; i += 1) {

    if (this.children[i].contains(val)) {
      return true;
    }

  }

  return false;
};