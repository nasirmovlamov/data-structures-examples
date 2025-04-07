// Queue Class Definition
class Queue<T> {
    private items: T[] = [];
  
    // Enqueue a value into the queue (O(1))
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    // Dequeue a value from the queue (O(1))
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    // Peek at the front value of the queue (O(1))
    peek(): T | undefined {
      return this.items[0];
    }
  
    // Check if the queue is empty (O(1))
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the queue (O(1))
    size(): number {
      return this.items.length;
    }
  
    // Clear the queue (O(n))
    clear(): void {
      this.items = [];
    }
  
    // Print the queue elements
    print(): void {
      console.log(this.items.join(' '));
    }
  }
  
  // Pros and Cons of Queue:
  
  /*
    Pros:
    1. **First In First Out (FIFO)**: The queue follows the FIFO principle, which ensures that elements are processed in the order they are added.
    2. **Efficient Operations**: Basic operations like `enqueue` and `dequeue` are done in constant time, O(1), which ensures efficient performance.
    3. **Useful for Asynchronous Operations**: Queues are ideal for handling tasks or requests that need to be processed sequentially in an orderly fashion.
    4. **Fairness**: By processing tasks in the order they arrive, queues ensure fairness and prevent starvation (where some tasks are never processed).
  
    Cons:
    1. **Limited Access**: A queue only allows access to the front element, meaning that you can't randomly access elements in the middle of the queue.
    2. **Memory Usage**: If a queue grows too large, it might consume significant memory, especially if the queue needs to hold a large number of items.
    3. **Not Suitable for Random Access**: Unlike arrays, where you can access any element by index, a queue is restrictive in that it only allows access to the front of the queue.
    4. **Fixed Size (In Some Implementations)**: Some implementations of queues, such as a fixed-size circular queue, can have a predefined size, which might result in overflow if the queue is full.
  
    Application Cases:
  
    1. **Task Scheduling (Job Queue)**:
       - **Use Case**: Queues are often used in **task scheduling** or **job queues** in operating systems or distributed systems. Tasks that need to be executed are enqueued, and then workers dequeue and process them in the order they arrive.
       - **Example**: In a **multi-threaded environment** or **task scheduler**, tasks are processed in the order they are received, ensuring fairness in execution.
  
    2. **Breadth-First Search (BFS)**:
       - **Use Case**: In graph traversal, a **queue** is used for **Breadth-First Search (BFS)**. BFS explores nodes level by level and uses a queue to manage nodes to visit next.
       - **Example**: In pathfinding algorithms, like finding the shortest path in a maze or graph, BFS uses a queue to store nodes that need to be visited next.
  
    3. **Message Queues in Distributed Systems**:
       - **Use Case**: **Message queues** are commonly used in **distributed systems** to manage communication between different components of the system. Messages are placed in the queue by the producer and retrieved by the consumer in a sequential manner.
       - **Example**: Systems like **RabbitMQ**, **Apache Kafka**, and **AWS SQS** use queues to manage and distribute tasks between microservices or servers.
  
    4. **Print Queue**:
       - **Use Case**: A queue is used in a **print queue** where documents to be printed are queued in the order they are received. The printer processes each document one at a time, ensuring that documents are printed in the correct order.
       - **Example**: In office environments, when multiple users send print jobs to a shared printer, those jobs are placed in a print queue to be processed sequentially.
  
    5. **Customer Service Systems**:
       - **Use Case**: Queues are used in **customer service systems** to manage incoming customer calls or requests. Each customer is served in the order their request was received.
       - **Example**: In a call center, customer support representatives serve callers in the order they enter the queue. Similarly, in websites, **live chat support** often uses queues to manage customer queries.
  
    6. **Data Buffers (Streaming Data)**:
       - **Use Case**: Queues are used as **buffers** to temporarily store streaming data that is being processed. Data from one source is enqueued, and a consumer processes the data sequentially.
       - **Example**: In **video streaming**, data buffers are used to store incoming video frames or audio packets to ensure smooth playback.
  
    7. **Network Packet Handling**:
       - **Use Case**: In **networking**, queues are used to handle incoming and outgoing packets. Each packet is processed in the order it arrives, ensuring that the data is transmitted sequentially and that there is no packet loss.
       - **Example**: **Routers** and **switches** use queues to manage the flow of data packets, ensuring that packets are sent and received in the correct order.
  
  */
  
// Testing the Queue

const queue = new Queue<number>();

// Enqueue values into the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Queue after enqueue operations:");
queue.print(); // Output: 10 20 30 40 50

// Peeking the front value
console.log("Front element:", queue.peek()); // Output: 10

// Dequeue values from the queue
console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue after dequeue operation:");
queue.print(); // Output: 20 30 40 50

// Checking if the queue is empty
console.log("Is queue empty?", queue.isEmpty()); // Output: false

// Checking the size of the queue
console.log("Size of queue:", queue.size()); // Output: 4

// Clearing the queue
queue.clear();
console.log("Queue after clear operation:");
queue.print(); // Output: (empty)
