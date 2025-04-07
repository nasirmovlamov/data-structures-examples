// Array Class Definition (Wrapper)
class CustomArray<T> {
    private items: T[] = [];
  
    // Add a value to the array (push operation) - O(1)
    add(item: T): void {
      this.items.push(item);
    }
  
    // Remove a value from the array by index (O(n) in the worst case)
    remove(index: number): T | undefined {
      if (index >= 0 && index < this.items.length) {
        return this.items.splice(index, 1)[0];
      }
      return undefined;
    }
  
    // Access an element by index (O(1))
    get(index: number): T | undefined {
      return this.items[index];
    }
  
    // Find the index of a value (O(n) in the worst case)
    indexOf(item: T): number {
      return this.items.indexOf(item);
    }
  
    // Check if the array is empty (O(1))
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the array (O(1))
    size(): number {
      return this.items.length;
    }
  
    // Clear the array (O(n))
    clear(): void {
      this.items = [];
    }
  
    // Print the array elements
    print(): void {
      console.log(this.items.join(', '));
    }
  }
  
  // Pros and Cons of Array:
  
  /*
    Pros:
    1. **Random Access**: Arrays provide **constant-time** access to elements by index (O(1)).
    2. **Efficient Memory Usage**: Arrays use contiguous blocks of memory, which allows for efficient access and storage of elements.
    3. **Simple and Easy to Implement**: Arrays are a fundamental data structure and are easy to implement and use in most programming languages.
    4. **Versatile**: Arrays are versatile and can hold multiple types of data, including primitive types, objects, or even other arrays (multi-dimensional arrays).
  
    Cons:
    1. **Fixed Size (In Static Arrays)**: In some implementations, arrays have a fixed size. This can be problematic if the array needs to grow dynamically.
    2. **Inefficient Insertions/Deletions (In the Middle)**: Inserting or deleting elements at the middle of the array is **O(n)**, as elements must be shifted to accommodate the change.
    3. **Resizing Overhead**: In dynamic arrays (like JavaScript's `Array`), resizing the array can be expensive when the array exceeds its capacity and needs to be resized.
    4. **Memory Wastage (In Sparse Arrays)**: Arrays can waste memory when they are sparsely populated, especially when large arrays have a small number of non-empty elements.
  
    Application Cases:
  
    1. **Storing and Accessing Elements Sequentially**:
       - **Use Case**: Arrays are ideal for situations where you need to store a collection of elements and access them sequentially.
       - **Example**: In **games** or **simulation systems**, arrays are often used to store positions, scores, or game states where accessing each element in a specific order is necessary.
  
    2. **Sorting Algorithms**:
       - **Use Case**: Arrays are commonly used in sorting algorithms like **QuickSort**, **MergeSort**, or **BubbleSort**. The array's continuous memory layout makes it suitable for such algorithms.
       - **Example**: Sorting **student records**, **numbers**, or **inventory items** in applications often use arrays for efficient sorting.
  
    3. **Matrix Operations**:
       - **Use Case**: Arrays are used to represent **matrices** in numerical computing or graphics programming, especially when dealing with 2D arrays.
       - **Example**: In **image processing** or **3D rendering**, matrices are often represented using 2D arrays to transform and manipulate image pixels or 3D coordinates.
  
    4. **Implementing Other Data Structures**:
       - **Use Case**: Arrays are often used as the underlying structure for more complex data structures, such as **stacks**, **queues**, **heaps**, or **hash tables**.
       - **Example**: In **priority queues** or **binary heaps**, arrays are used to maintain the heap property and efficiently store data.
  
    5. **Buffer Management**:
       - **Use Case**: Arrays are frequently used to implement **buffers** for storing data temporarily before it is processed.
       - **Example**: In **networking** or **file systems**, buffers store data that is being read from or written to disk or transmitted over the network.
  
    6. **Caching and Lookup Tables**:
       - **Use Case**: Arrays are used to implement **caches** and **lookup tables**, where the value for a given key is stored at a specific index.
       - **Example**: **Memoization** techniques in dynamic programming often use arrays to store previously computed results for faster access.
  
    7. **Queue and Stack Implementations**:
       - **Use Case**: Arrays are often used to implement more complex data structures like **stacks** and **queues** due to their efficient access and manipulation.
       - **Example**: In **Web APIs** or **task scheduling systems**, arrays can be used to manage tasks in a **queue** or function calls in a **stack**.
  
  */
  
  // Testing the CustomArray
  
  const array = new CustomArray<number>();
  
  // Adding values to the array
  array.add(10);
  array.add(20);
  array.add(30);
  array.add(40);
  array.add(50);
  
  console.log("Array after adding elements:");
  array.print(); // Output: 10, 20, 30, 40, 50
  
  // Accessing an element by index
  console.log("Element at index 2:", array.get(2)); // Output: 30
  
  // Finding the index of a value
  console.log("Index of 30:", array.indexOf(30)); // Output: 2
  
  // Removing an element from the array
  console.log("Removed element:", array.remove(3)); // Output: 40
  console.log("Array after removing element:");
  array.print(); // Output: 10, 20, 30, 50
  
  // Checking if the array is empty
  console.log("Is array empty?", array.isEmpty()); // Output: false
  
  // Checking the size of the array
  console.log("Size of array:", array.size()); // Output: 4
  
  // Clearing the array
  array.clear();
  console.log("Array after clear operation:");
  array.print(); // Output: (empty)
  