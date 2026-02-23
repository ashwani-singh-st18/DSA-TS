// Stack -> LIFO

class Stack<T> {
  private items: T[] = [];

  // Push element onto stack
  push(element: T): void {
    this.items.push(element);
  }

  // Remove and return top element
  pop(): T | undefined {
    return this.items.pop();
  }

  // View top element without removing
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get size of stack
  size(): number {
    return this.items.length;
  }

  // Clear stack
  clear(): void {
    this.items = [];
  }

  // Print stack
  print(): void {
    console.log(this.items.toString());
  }
}


const stack = new Stack<string>();

stack.push("A")
stack.push("B")
stack.push("C")
stack.push("D")

stack.print()

stack.pop()
stack.print()
stack.peek()

