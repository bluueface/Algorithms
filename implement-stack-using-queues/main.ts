import MyStack from "./MyStack";

const numberStack = new MyStack<Number>();

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.top()); // Output: "3"
console.log(numberStack.pop()); // Output: "3"
console.log(numberStack.isEmpty()); // Output: false
