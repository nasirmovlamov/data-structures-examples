// Graph using Adjacency List Representation
class GraphAdjList<T> {
    private adjList: Map<T, T[]> = new Map();
  
    // Add a node to the graph
    addNode(value: T): void {
      if (!this.adjList.has(value)) {
        this.adjList.set(value, []);
      }
    }
  
    // Add an edge between two nodes (undirected)
    addEdge(node1: T, node2: T): void {
      if (!this.adjList.has(node1)) {
        this.addNode(node1);
      }
      if (!this.adjList.has(node2)) {
        this.addNode(node2);
      }
  
      this.adjList.get(node1)?.push(node2);
      this.adjList.get(node2)?.push(node1); // Undirected graph
    }
  
    // Remove a node and its corresponding edges
    removeNode(value: T): void {
      if (!this.adjList.has(value)) return;
  
      // Remove edges from other nodes pointing to this node
      this.adjList.forEach((edges, node) => {
        this.adjList.set(node, edges.filter(edge => edge !== value));
      });
  
      // Remove the node
      this.adjList.delete(value);
    }
  
    // Print the graph
    printGraph(): void {
      this.adjList.forEach((edges, node) => {
        console.log(`${node} -> ${edges.join(', ')}`);
      });
    }
  
    // Pros and Cons of Graphs
  
    /*
      **Pros**:
      1. **Expressiveness**: Graphs can represent complex relationships like networks, dependencies, or hierarchies.
      2. **Flexibility**: Can represent both **directed** and **undirected** relationships.
      3. **Efficient Traversal**: Algorithms like **DFS** and **BFS** allow easy exploration of graph elements, which is essential for problems like pathfinding, social network analysis, etc.
      4. **Dynamic Nature**: You can add and remove nodes or edges as needed, supporting dynamic applications.
      5. **Optimized Pathfinding**: Algorithms like **Dijkstra's** can quickly find the shortest path between nodes.
  
      **Cons**:
      1. **Complexity**: Graph algorithms can be more complex to implement compared to simpler structures like arrays or linked lists.
      2. **Memory Usage**: For dense graphs, adjacency matrices can waste memory since many cells might remain empty (0) if the graph is sparse.
      3. **Traversal Overhead**: Traversing a graph might require additional time due to the need to follow links, especially in sparse graphs.
      4. **Implementation Difficulty**: Depending on the graph's size and type, implementing efficient algorithms (like **Dijkstra’s**) or managing large graphs might be tricky.
  
      **Application Cases**:
      
      1. **Social Networks**:
         - **Use Case**: Users (nodes) and their connections (edges) are represented as a graph. Graph algorithms help recommend friends or analyze user groups.
         - **Example**: In **Facebook**, relationships between users are stored in a graph, enabling features like friend suggestions.
      
      2. **Shortest Path Algorithms**:
         - **Use Case**: Graphs are used for pathfinding problems where the goal is to find the shortest route between two nodes.
         - **Example**: **Google Maps** uses graph traversal algorithms like **Dijkstra’s** to calculate the fastest route between locations.
      
      3. **Web Crawling**:
         - **Use Case**: A graph can represent a website, where pages are nodes and links are edges. This allows a crawler to traverse the web.
         - **Example**: **Search engines** use graph algorithms to index web pages and rank them based on relevance.
      
      4. **Recommendation Systems**:
         - **Use Case**: Graphs can represent users and items, where edges represent interactions or preferences. Collaborative filtering methods use graph traversal to recommend items.
         - **Example**: **Netflix** and **Spotify** use graph-based algorithms to suggest movies, music, or shows based on user interactions.
      
      5. **Network Routing**:
         - **Use Case**: In networking, nodes represent routers and edges represent the connections between them. Algorithms like **Bellman-Ford** or **Link-State** help route data efficiently.
         - **Example**: **Internet routing** algorithms use graphs to find the optimal path for data packets between computers.
      
      6. **Task Scheduling and Dependency Management**:
         - **Use Case**: A directed acyclic graph (DAG) can represent tasks and their dependencies, ensuring tasks are performed in the correct order.
         - **Example**: **CI/CD pipelines** use DAGs to manage task execution, ensuring that dependent tasks are completed in the right sequence.
  
    */
  
  }
  
// Example usage:

const graphList = new GraphAdjList<number>();
graphList.addNode(1);
graphList.addNode(2);
graphList.addEdge(1, 2);
graphList.addEdge(1, 3);
graphList.addEdge(3, 4);
graphList.printGraph();
// Output:
// 1 -> 2, 3
// 2 -> 1
// 3 -> 1, 4
// 4 -> 3

  