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

  if (!this.nodes[val1] || !this.nodes[val2]) {
    return 'Nodes do not exist';
  }

  this.nodes[val1].push(val2);
  this.nodes[val2].push(val1);

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