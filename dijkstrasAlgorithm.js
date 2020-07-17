// adjacency list

class WeightedGraph {
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
  
    addEdge(vertex1, vertex2, weight) {
      if(!this.adjacencyList[vertex1]) return {error: 'First vertex does not exist'};
      if(!this.adjacencyList[vertex2]) return {error: 'Second vertex does not exist'};
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight});
      return {success: true, added: `${vertex1} <--> ${vertex2}`};
    }
  
    dijkstra(start, end) {
      const distances = {};
      const prev = {};
      const queue = new SimplePriorityQueue();
      const path = []; // to be returned at the end
      let shortest;
      for(let vertex in this.adjacencyList) {
        if(vertex === start) {
          distances[vertex] = 0;
          queue.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          queue.enqueue(vertex, Infinity);
        }
        prev[vertex] = null;
      }
  
      while(queue.length()) {
        shortest = queue.dequeue().val;
        if(shortest === end){
          // we are done
          // build path to return
          while(prev[shortest]) {
            path.push(shortest);
            shortest = prev[shortest];
          }
          break;
        }
        if(shortest || distances[shortest] !== Infinity) {
          for (let index in this.adjacencyList[shortest]) {
            // find neighboring node
            let nextNode = this.adjacencyList[shortest][index];
            //calculate distance to neighboring node
            let candidate = distances[shortest] + nextNode.weight;
            let nextNeighbor = nextNode.node;
            // if the new distance is smaller then we update
            if(candidate < distances[nextNeighbor]) {
              // updating new shortest distance to neighbor
              distances[nextNeighbor] = candidate;
              // updating previous - how we got to neighbor
              prev[nextNeighbor] = shortest;
              // enqueue in priority queue with ne priority
              queue.enqueue(nextNeighbor, candidate);
            }
          }
        }
      }
  
      return path.concat(shortest).reverse();
    }
  
  }
  
  // this one is using sort every time which is O(Nlog(N))
  class SimplePriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    }
    dequeue(){
      return this.values.shift();
    }
    sort(){
      this.values.sort((a,b) => a.priority - b.priority);
    }
    length(){
      return this.values.length;
    }
  }
  
  const graph = new WeightedGraph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  graph.addEdge('A', 'B', 4);
  graph.addEdge('A', 'C', 2);
  graph.addEdge('B', 'E', 3);
  graph.addEdge('C', 'D', 2);
  graph.addEdge('D', 'E', 3);
  graph.addEdge('D', 'F', 1);
  graph.addEdge('E', 'F', 1);
  graph.addEdge('C', 'F', 4);
  console.log(JSON.stringify(graph, null, 1));
  console.log(graph.dijkstra("A", "E"))
  