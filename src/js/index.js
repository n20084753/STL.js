import Stack from './Stack';
import Queue from './Queue';
import Set from './Set';

// test set
const setA = new Set();

setA.add(1);
setA.add(2);
setA.add(6);

const setB = new Set();

setB.add(2);
setB.add(4);
setB.add(1);
setB.add(6);

const setC = setA.union(setB);
console.log(setC.toArray());

const setD = setA.intersection(setB);
console.log(setD.toArray());

const setE = setA.difference(setB);
console.log(setE.toArray());

console.log(setA.isSubset(setB));

// // test stack
// const stack = new Stack();
// stack.push(10);
// stack.push(100);
// stack.push(200);
// console.log(stack.size());
// stack.empty();
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.pop());


// // test queue
// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(100);
// queue.enqueue(200);
// console.log(queue.size());
// queue.empty();
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.size());
// console.log(queue.dequeue());
