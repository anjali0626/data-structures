// Implement Graph data structure

var Graph = function() {

  this.nodes = {};

};

// Add passed in value to graph
Graph.prototype.addNode = function(val) {

  if (val === undefined) {
    return;
  }

  this.nodes[val] = this.nodes[val] || [];

};

// Create a link between two nodes in graph (the the two node are present in the graph)
Graph.prototype.addEdge = function(val1, val2) {

  if (!this.nodes[val1] || !this.nodes[val2]) {
    return 'Nodes do not exist';
  }

  this.nodes[val1].push(val2);
  this.nodes[val2].push(val1);

};

// Find whether two nodes are connected or not in graph
Graph.prototype.hasEdge = function(val1, val2) {
  // TODO...
};

// Invoke the passed in callback for each node of graph
Graph.prototype.forEach = function(callback) {

  for (var key in this.nodes) {
    callback(key, this.nodes[key], this.nodes);
  }

};

// Traverse the graph (starting from the passed in value) and invoke callback for each node in depth-first fashion
Graph.prototype.traverseDepthFirst = function(val, callback) {
  // TODO...
};

// Traverse the graph (starting from the passed in value) and invoke callback for each node in breadth-first fashion
Graph.prototype.traverseBreadthFirst = function(val, callback) {
  // TODO...
};