// Binary Tree Node Definition
class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
  }
  
  // Binary Tree Class Definition
  class BinaryTree<T> {
    root: TreeNode<T> | null = null;
  
    // Insert a value into the binary tree (O(log n) for balanced trees)
    insert(value: T): void {
      const newNode = new TreeNode(value);
      
      if (this.root === null) {
        this.root = newNode;
        return;
      }
      
      const insertNode = (node: TreeNode<T>, newNode: TreeNode<T>): void => {
        if (newNode.value < node.value) {
          // Insert in the left subtree
          if (node.left === null) {
            node.left = newNode;
          } else {
            insertNode(node.left, newNode);
          }
        } else {
          // Insert in the right subtree
          if (node.right === null) {
            node.right = newNode;
          } else {
            insertNode(node.right, newNode);
          }
        }
      };
      
      insertNode(this.root, newNode);
    }
  
    // In-order traversal (O(n))
    inOrderTraversal(node: TreeNode<T> | null = this.root): void {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  
    // Pre-order traversal (O(n))
    preOrderTraversal(node: TreeNode<T> | null = this.root): void {
      if (node !== null) {
        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    // Post-order traversal (O(n))
    postOrderTraversal(node: TreeNode<T> | null = this.root): void {
      if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
      }
    }
  
    // Search for a value (O(log n) for balanced trees)
    search(value: T): boolean {
      const searchNode = (node: TreeNode<T> | null, value: T): boolean => {
        if (node === null) {
          return false;
        }
        if (value === node.value) {
          return true;
        }
        return value < node.value
          ? searchNode(node.left, value)
          : searchNode(node.right, value);
      };
      return searchNode(this.root, value);
    }
  
    // Find the minimum value (O(log n) for balanced trees)
    findMin(node: TreeNode<T> | null = this.root): TreeNode<T> | null {
      if (node === null || node.left === null) {
        return node;
      }
      return this.findMin(node.left);
    }
  
    // Find the maximum value (O(log n) for balanced trees)
    findMax(node: TreeNode<T> | null = this.root): TreeNode<T> | null {
      if (node === null || node.right === null) {
        return node;
      }
      return this.findMax(node.right);
    }
  
    // Get the height of the binary tree (O(n))
    height(node: TreeNode<T> | null = this.root): number {
      if (node === null) {
        return -1;
      }
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    // Print the tree (in-order traversal)
    print(): void {
      this.inOrderTraversal();
    }
  }
  
  // Pros and Cons of Binary Trees:
  
  /* 
    Pros:
    1. Fast Search, Insert, and Delete (Balanced Trees): In a balanced binary tree, operations like search, insertion, and deletion can be done in O(log n) time.
    2. Efficient Space Usage: Binary trees make efficient use of memory by storing elements in a hierarchical manner.
    3. Supports Sorted Data: In Binary Search Trees (BST), the data is stored in sorted order, making operations like search very efficient.
    4. Flexible Structure: Binary trees are flexible for various types of traversal and can represent hierarchical data efficiently.
  
    Cons:
    1. Unbalanced Trees: If the tree is unbalanced (e.g., a skewed tree), the time complexity for operations like search and insertion becomes O(n).
    2. Memory Overhead: Each node requires extra memory to store left and right pointers, which increases memory usage compared to arrays.
    3. Complex Implementation: Binary trees can be difficult to implement and maintain, especially when balancing is required.
    4. Limited Random Access: Unlike arrays, binary trees do not support random access by index.
  
    Application Cases:
  
    1. **Database Indexing**:
       - **Use Case**: Binary trees, particularly **Balanced Binary Search Trees** like **AVL Trees** or **Red-Black Trees**, are used to implement indexing in databases. This allows for efficient searching, insertion, and deletion of records, making queries and data retrieval much faster in large datasets.
       - **Example**: Relational Database Management Systems (RDBMS) like **MySQL** and **PostgreSQL** use these types of trees to index tables and optimize query performance.
  
    2. **Priority Queues**:
       - **Use Case**: A **Binary Heap**, a special type of binary tree, is used to implement **priority queues**. The tree is organized in a way that the parent node is always greater (or smaller, in the case of a min-heap) than its children. This structure allows for efficient extraction of the highest (or lowest) priority element in constant time.
       - **Example**: Priority queues are used in **task scheduling algorithms**, **Dijkstra’s algorithm** for finding the shortest path, and **Huffman encoding** for data compression.
  
    3. **Expression Parsing and Evaluation**:
       - **Use Case**: Binary trees can be used to represent mathematical expressions. The tree structure helps in parsing and evaluating complex expressions in compilers or interpreters. Operators are stored in the internal nodes, and operands in the leaves.
       - **Example**: In a calculator application or an expression evaluator, an expression like `3 + (4 * 5)` would be represented as a binary tree, with `+` as the root, and `3` and `4 * 5` as the children.
  
    4. **File Systems**:
       - **Use Case**: File systems use tree-like structures to store files and directories. A **binary tree** or **n-ary tree** may be used to represent a directory hierarchy, where each node is a directory or file.
       - **Example**: File explorers like **Windows Explorer** or **macOS Finder** rely on tree structures to represent and navigate through the file system.
  
    5. **Decision Trees in Machine Learning**:
       - **Use Case**: In machine learning, **decision trees** are used as models for classification and regression tasks. These trees recursively split the data based on feature values, with each internal node representing a decision point, and each leaf node representing the final output.
       - **Example**: Decision tree algorithms like **CART (Classification and Regression Trees)** or **ID3** are used for predictive analytics, such as in customer segmentation, credit scoring, or spam detection.
  
    6. **Routing Algorithms in Networking**:
       - **Use Case**: Binary trees are used in some routing algorithms, such as **Binary Trie** structures in networking, where nodes represent possible routes or network addresses. These structures are optimized for fast lookups and route traversal.
       - **Example**: **Routing tables** in **Internet Protocol (IP)** networks can sometimes use tree structures to efficiently find the shortest path to a destination.
  
    7. **Game Trees (Artificial Intelligence)**:
       - **Use Case**: In AI and game theory, binary trees are used to represent game states in algorithms like **Minimax** for decision-making in games. Each node in the tree represents a possible state of the game, and the edges represent the actions leading to the next state.
       - **Example**: The game of **Tic-Tac-Toe** can be represented using a binary tree, where each node represents a move in the game, and the leaves represent the final game states (win, loss, or draw).
  */
  
  // Testing the Binary Tree
  
  const tree = new BinaryTree<number>();
  
  // Inserting values into the binary tree
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(13);
  tree.insert(17);
  
  console.log("In-order traversal:");
  tree.inOrderTraversal(); // Output: 3, 5, 7, 10, 13, 15, 17
  
  console.log("Pre-order traversal:");
  tree.preOrderTraversal(); // Output: 10, 5, 3, 7, 15, 13, 17
  
  console.log("Post-order traversal:");
  tree.postOrderTraversal(); // Output: 3, 7, 5, 13, 17, 15, 10
  
  // Searching for a value
  console.log("Searching for 7:", tree.search(7)); // Output: true
  console.log("Searching for 8:", tree.search(8)); // Output: false
  
  // Finding the minimum and maximum values
  console.log("Minimum value:", tree.findMin()?.value); // Output: 3
  console.log("Maximum value:", tree.findMax()?.value); // Output: 17
  
  // Getting the height of the tree
  console.log("Height of the tree:", tree.height()); // Output: 2
  