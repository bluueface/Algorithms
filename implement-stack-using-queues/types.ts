export interface IStack<T> {
  // Push an element onto the stack
  push(item: T): void;

  // Remove and return the element from the top of the stack
  pop(): T | undefined;

  // Return the element from the top of the stack without removing it
  top(): T | undefined;

  // Check if the stack is empty
  isEmpty(): boolean;
}
