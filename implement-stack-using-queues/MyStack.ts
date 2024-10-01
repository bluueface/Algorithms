import { IStack } from "./types";

class MyStack<T> implements IStack<T> {
  private queue1: T[];
  private queue2: T[];

  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(item: T): void {
    this.queue2.push(item);

    //Move all elements from q1 to q2
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift()!);
    }

    // Swap q1 and q2, now q1 has the stack elements in LIFO order
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  pop(): T | undefined {
    return this.queue1.shift();
  }

  top(): T | undefined {
    return this.queue1[0];
  }

  isEmpty(): boolean {
    return this.queue1.length === 0;
  }
}

export default MyStack;
