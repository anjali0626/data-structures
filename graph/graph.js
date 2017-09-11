// Implement Graph data structure

var Graph = function() {

  this.nodes = {};

};

Graph.prototype.addNode = function(val) {

  if (val === undefined) {
    return;
  }

  this.nodes[val] = this.nodes[val] || [];

};

Graph.prototype.addEdge = function(val1, val2) {
  // TODO...
};

Graph.prototype.hasEdge = function(val1, val2) {
  // TODO...
};

Graph.prototype.forEach = function(callback) {
  // TODO...
};

Graph.prototype.traverseDepthFirst = function() {
  // TODO...
};

Graph.prototype.traverseBreadthFirst = function() {
  // TODO...
};