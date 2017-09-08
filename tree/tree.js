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
  // TODO...
};