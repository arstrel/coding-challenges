// adjacency list

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(val) {
      if(!val) return {error: 'Need a value to add a vertex'};
      if(this.adjacencyList[val]) {
        return { error: 'Vertex already exist'};
      }
      this.adjacencyList[val] = [];
      return {success: true, added: val}
    }
  
    addEdge(vertex1, vertex2) {
      if(!this.adjacencyList[vertex1]) return {error: 'First vertex does not exist'};
      if(!this.adjacencyList[vertex2]) return {error: 'Second vertex does not exist'};
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return {success: true, added: `${vertex1} <--> ${vertex2}`};
    }
  
    removeEdge(v1, v2) {
      if(!this.adjacencyList[v1]) return {error: 'First vertex does not exist'};
      if(!this.adjacencyList[v2]) return {error: 'Second vertex does not exist'};
      let errors = '';
      let index1 = this.adjacencyList[v1].indexOf(v2);
      if(index1<0) errors += `Edge does not exist ${v1} --> ${v2}. `;
      this.adjacencyList[v1] = [...this.adjacencyList[v1].slice(0, index1), 
      ...this.adjacencyList[v1].slice(index1+1)];
      
      let index2 = this.adjacencyList[v2].indexOf(v1);
      if(index2<0) errors += `Edge does not exist ${v2} --> ${v1}.`;
      this.adjacencyList[v2] = [...this.adjacencyList[v2].slice(0, index2), 
      ...this.adjacencyList[v2].slice(index2+1)];
  
      return {success: true, removed: errors ? errors : `${v1} <-X-> ${v2}`};
    }
  
    removeVertex(val) {
      if(!this.adjacencyList[val]) return {error: `Vertex ${val} does not exist`};
      this.adjacencyList[val].forEach(v => this.removeEdge(val, v));
      delete this.adjacencyList[val];
      return {success: true, removed: val};
    }
  
    // depth first traversal 
    dfsRecursive(vertex) {
      let resultsList = [];
      let visitedList = {};
      let list = this.adjacencyList;
  
      (function traverse  (val) {
        if(!val) return;
        resultsList.push(val);
        visitedList[val] = true;
        list[val].forEach(v => {
          if(!visitedList[v]) return traverse(v);
          })
         
      })(vertex);
      
      return resultsList;
    }
  
    dfsIterative(start) {
      const stack = [];
      const discovered = {};
      const resultList = [];
      let vertex;
      stack.push(start);
  
      while (stack.length) {
        vertex = stack.pop();
        if(!discovered[vertex]) {
          resultList.push(vertex);
          discovered[vertex] = true;
          this.adjacencyList[vertex].forEach(neighbor => stack.push(neighbor));
        }
      }
      return resultList;
    }
  
    bfs(start) {
      const queue = [];
      const visited = {};
      const resultList = [];
      let vertex;
      queue.unshift(start);
  
      while(queue.length) {
        vertex = queue.pop();
        if(!visited[vertex]) {
          resultList.push(vertex);
          visited[vertex] = true;
          this.adjacencyList[vertex].forEach(neighbor => queue.unshift(neighbor))
        }
      }
      return resultList;
    }
  
  }
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');
  console.log(graph);
  console.log('-=-=-=- resursive');
  console.log(graph.dfsRecursive('A'));
  console.log('-=-=-=- iterative');
  console.log(graph.dfsIterative('A'));
  console.log('-=-=-=- bredth first');
  console.log(graph.bfs('A'));