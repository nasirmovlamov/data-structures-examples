// Stack Class Definition
class Stack<T> {
    private items: T[] = [];
  
    // Push a value onto the stack (O(1))
    push(item: T): void {
      this.items.push(item);
    }
  
    // Pop a value from the stack (O(1))
    pop(): T | undefined {
      return this.items.pop();
    }
  
    // Peek the top value of the stack (O(1))
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty (O(1))
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the stack (O(1))
    size(): number {
      return this.items.length;
    }
  
    // Clear the stack (O(n))
    clear(): void {
      this.items = [];
    }
  
    // Print the stack elements
    print(): void {
      console.log(this.items.join(' '));
    }
  }
  
  // Pros and Cons of Stack:
  
  /*
    Pros:
    1. **Simple Structure**: The stack data structure is very simple and easy to implement. It follows a LIFO (Last In, First Out) order.
    2. **Efficient Operations**: Basic operations like `push`, `pop`, and `peek` are all done in constant time, O(1).
    3. **Memory Efficient**: The stack structure can be used efficiently to manage memory in function calls, especially in recursion.
    4. **Support for Undo Operations**: Stacks are ideal for supporting undo/redo operations, as the last action can be reversed (popped) quickly.
  
    Cons:
    1. **Limited Access**: A stack only allows access to the top element, so you cannot access elements in the middle or bottom directly.
    2. **Fixed Size (In Some Implementations)**: If using a fixed-size stack (like an array with a fixed capacity), it can lead to overflow when the stack reaches its limit.
    3. **No Random Access**: Unlike arrays, you cannot access elements randomly; you can only interact with the top element.
    4. **Lack of Flexibility**: Stacks are very restrictive in their usage, limited to only pushing, popping, and peeking, which limits their versatility compared to other data structures like queues or linked lists.
  
    Application Cases:
  
    1. **Function Call Management (Call Stack)**:
       - **Use Case**: The **call stack** is a special type of stack used in programming to manage function calls. When a function is called, its execution context is pushed onto the stack. Once the function execution is completed, it is popped from the stack, and control returns to the previous function.
       - **Example**: In **JavaScript**, when you call a function, it gets pushed to the call stack, and when the function execution finishes, it gets popped off. This is essential for managing recursive function calls and program flow.
  
    2. **Undo/Redo Operations**:
       - **Use Case**: Stacks are commonly used in applications where the ability to undo or redo an action is required. Every action is pushed onto a stack, and when an undo is requested, the top action is popped from the stack to revert it.
       - **Example**: In text editors like **Microsoft Word** or **VS Code**, every text modification is pushed to a stack. When the user presses undo, the last change is popped from the stack, restoring the previous state.
  
    3. **Expression Evaluation**:
       - **Use Case**: Stacks are used to evaluate expressions, especially in infix, prefix, and postfix notation. The operands and operators are managed in a stack for evaluation in postfix (Reverse Polish Notation).
       - **Example**: In **compilers** or **calculators**, stacks are used to evaluate expressions like `3 + 4 * 5`, where operators and operands are pushed and popped in a specific order to respect operator precedence.
  
    4. **Depth-First Search (DFS)**:
       - **Use Case**: In graph and tree traversal algorithms, a **stack** can be used to implement **Depth-First Search (DFS)**. Nodes are visited by pushing them onto the stack, and then popping the nodes off the stack to visit their neighbors.
       - **Example**: DFS is used in algorithms like **maze solving**, **pathfinding**, and **topological sorting** in directed graphs.
  
    5. **Backtracking Algorithms**:
       - **Use Case**: In problems where you need to explore multiple possibilities, backtracking algorithms use stacks to store intermediate states. This allows you to "backtrack" by popping states off the stack and trying a different path.
       - **Example**: In solving puzzles like **Sudoku** or **N-Queens**, stacks are used to backtrack and explore different configurations until a solution is found.
  
    6. **Parentheses Matching**:
       - **Use Case**: Stacks are often used to validate matching parentheses or brackets in expressions. Every opening parenthesis is pushed onto the stack, and each closing parenthesis pops the stack to ensure the matching pair exists.
       - **Example**: In code editors or compilers, stacks are used to ensure that parentheses, curly braces `{}`, and square brackets `[]` are properly matched.
  
    7. **Reversing Data**:
       - **Use Case**: Stacks can be used to reverse a sequence of elements. By pushing the elements onto the stack and then popping them, the sequence is reversed.
       - **Example**: In algorithms where you need to reverse a string or an array, a stack can be utilized to easily reverse the order of elements.
  */
  
  // Testing the Stack
  
  const stack = new Stack<number>();
  
  // Pushing values onto the stack
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  
  console.log("Stack after push operations:");
  stack.print(); // Output: 10 20 30 40 50
  
  // Peeking the top value
  console.log("Top element:", stack.peek()); // Output: 50
  
  // Popping values from the stack
  console.log("Popped element:", stack.pop()); // Output: 50
  console.log("Stack after pop operation:");
  stack.print(); // Output: 10 20 30 40
  
  // Checking if the stack is empty
  console.log("Is stack empty?", stack.isEmpty()); // Output: false
  
  // Checking the size of the stack
  console.log("Size of stack:", stack.size()); // Output: 4
  
  // Clearing the stack
  stack.clear();
  console.log("Stack after clear operation:");
  stack.print(); // Output: (empty)
  