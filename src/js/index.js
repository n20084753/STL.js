import Stack from './Stack';
import Queue from './Queue';
import Set from './Set';
import Dictionary from './Dictionary';
import HashTable from './HashTable';
import BinarySearchTree from './BinarySearchTree';

// test BinarySearchTree
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(17);
tree.insert(15);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(25);
tree.insert(18);

tree.remove(18);
tree.remove(20);
tree.remove(17);
tree.remove(25);

tree.inOrder(key => console.log(key));
tree.preOrder(key => console.log(key));
tree.postOrder(key => console.log(key));
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(17));

// test HashTable
const hash = new HashTable();
hash.put('jake', 'jake@email.com');
hash.put('jaime', 'jaime@email.com');
hash.put('nathan', 'nathan@email.com');
console.log(hash.toString());
hash.remove('nathan');
console.log(hash.toString());
console.log(hash.get('jake'));

// test Disctionary
const dict = new Dictionary();
dict.set('jake', 'jake@email.com');
dict.set('jaime', 'jaime@email.com');
dict.set('nathan', 'nathan@email.com');

console.log(dict.hasKey('jake'));
console.log(dict.size());
console.log(dict.keys());
console.log(dict.values());
console.log(dict.keyValues());
console.log(dict.get('nathan'));

dict.forEach((k, v) => {
    console.log('for Each: ', `key: ${k}, value: ${v}`);
});

console.log(dict.toString());

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

// test stack
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


// test queue
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(200);
console.log(queue.size());
queue.empty();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.dequeue());
