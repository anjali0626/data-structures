// Implement Tree data structure

var Tree = function(val) {

  this.value = val;
  this.children = [];

};

Tree.prototype.addChild = function(val) {

  var newChild = new Tree(val);

  this.children.push(newChild);

  return newChild;
};

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