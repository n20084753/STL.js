import Stack from './Stack';

// tests
const stack = new Stack();
stack.push(10);
stack.push(100);
stack.push(200);
console.log(stack.size());
stack.empty();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.pop());
