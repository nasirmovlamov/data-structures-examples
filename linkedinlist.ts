// ListNode Definition
class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
  }
  
// LinkedList Class Definition
class LinkedList<T> {
    private head: ListNode<T> | null = null;
    private size: number = 0;
  
    // Add a value to the front of the linked list (O(1))
    addFirst(value: T): void {
      const newNode = new ListNode(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    // Add a value to the end of the linked list (O(n))
    addLast(value: T): void {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Remove the first node (O(1))
    removeFirst(): T | null {
      if (!this.head) return null;
      const removedValue = this.head.value;
      this.head = this.head.next;
      this.size--;
      return removedValue;
    }
  
    // Remove the last node (O(n))
    removeLast(): T | null {
      if (!this.head) return null;
      if (!this.head.next) {
        const removedValue = this.head.value;
        this.head = null;
        this.size--;
        return removedValue;
      }
      let current = this.head;
      while (current.next && current.next.next) {
        current = current.next;
      }
      const removedValue = current.next?.value ?? null;
      current.next = null;
      this.size--;
      return removedValue;
    }
  
    // Get the size of the linked list (O(1))
    getSize(): number {
      return this.size;
    }
  
    // Print the linked list (O(n))
    print(): void {
      let current = this.head;
      let output = '';
      while (current) {
        output += `${current.value} -> `;
        current = current.next;
      }
      console.log(output.slice(0, -4)); // Remove the last arrow
    }
  
    // Check if the linked list is empty (O(1))
    isEmpty(): boolean {
      return this.size === 0;
    }
  
    // Find an element by index (O(n))
    get(index: number): T | null {
      if (index < 0 || index >= this.size) return null;
      let current = this.head;
      let currentIndex = 0;
      while (current && currentIndex < index) {
        current = current.next;
        currentIndex++;
      }
      return current?.value ?? null;
    }
}
  
  // Pros and Cons of Linked List:
  
  /*
    Pros:
    1. **Dynamic Size**: Linked lists can grow and shrink in size dynamically, unlike arrays that require resizing when full.
    2. **Efficient Insertions and Deletions (O(1))**: Insertions and deletions, especially at the beginning of the list, are efficient (O(1)).
    3. **Memory Efficiency**: Linked lists only allocate memory for the elements that exist, unlike arrays that need to allocate a contiguous block of memory.
    4. **No Memory Wastage**: In a linked list, each node is allocated memory individually, so there’s no wasted space as there might be in sparse arrays.
  
    Cons:
    1. **Random Access is Slow (O(n))**: Accessing an element by index takes linear time (O(n)), unlike arrays that offer constant-time access (O(1)).
    2. **Extra Memory Usage per Node**: Each node requires additional memory to store the reference (or pointer) to the next node.
    3. **Sequential Access**: To traverse the list, you must follow the links from the head to the desired node, making operations like searching slower than in arrays.
    4. **Pointer Overhead**: Each node must store an additional pointer, which can make the linked list less memory-efficient in terms of per-element storage.
  
    Application Cases:
  
    1. **Dynamic Memory Allocation**:
       - **Use Case**: Linked lists are ideal when you don't know the size of the data in advance, and dynamic allocation is required. It is particularly useful when the list size changes frequently.
       - **Example**: Memory managers or dynamic data storage systems use linked lists to allocate memory for varying size objects.
  
    2. **Implementing Stacks and Queues**:
       - **Use Case**: Linked lists can be used to implement **stacks** and **queues**, providing efficient insertions and deletions at both ends.
       - **Example**: **Task scheduling** systems or **recursion** stack can benefit from using linked lists to handle dynamic task sizes.
  
    3. **Efficient Insertions and Deletions**:
       - **Use Case**: Linked lists are commonly used in situations where insertion and deletion of elements need to be fast and frequent, particularly when operating at the head or tail of the list.
       - **Example**: In **real-time processing** systems, linked lists can manage a **queue of tasks** where tasks are dynamically added and removed.
  
    4. **Undo/Redo Functionality in Software**:
       - **Use Case**: A **doubly linked list** can be used for implementing undo/redo operations, where each state of an application is stored in a node, and users can traverse forward or backward through previous states.
       - **Example**: **Text editors** or **design software** where users can undo or redo previous actions, each action being represented as a node in the linked list.
  
    5. **Navigating Between Related Data**:
       - **Use Case**: Linked lists can be used in **graph traversal** or **navigation systems**, where each node points to the next node or related data.
       - **Example**: **Browser history**, where each visited page is stored as a node, and users can navigate forward or backward using links between pages.
  
    6. **Polynomial Arithmetic**:
       - **Use Case**: Linked lists are used in representing **polynomials**, where each node stores a coefficient and the corresponding power of the term.
       - **Example**: **Scientific computing** or **symbolic algebra systems** where polynomials are represented as linked lists of terms for efficient addition, subtraction, and multiplication.
  
  */
  
// Testing the LinkedList

const list = new LinkedList<number>();

// Adding values to the linked list
list.addFirst(10);
list.addFirst(20);
list.addLast(30);
list.addLast(40);

console.log("Linked List after adding elements:");
list.print(); // Output: 20 -> 10 -> 30 -> 40

// Removing the first element
console.log("Removed first element:", list.removeFirst()); // Output: 20
console.log("Linked List after removing first element:");
list.print(); // Output: 10 -> 30 -> 40

// Removing the last element
console.log("Removed last element:", list.removeLast()); // Output: 40
console.log("Linked List after removing last element:");
list.print(); // Output: 10 -> 30

// Getting the size of the linked list
console.log("Size of linked list:", list.getSize()); // Output: 2

// Accessing an element by index
console.log("Element at index 0:", list.get(0)); // Output: 10
console.log("Element at index 1:", list.get(1)); // Output: 30

// Checking if the linked list is empty
console.log("Is the linked list empty?", list.isEmpty()); // Output: false

// Clearing the list
list.removeFirst(); // Remove 10
list.removeFirst(); // Remove 30
console.log("Linked List after clearing all elements:");
list.print(); // Output: (empty)
  