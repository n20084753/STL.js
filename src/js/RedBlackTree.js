import BinarySearchTree from './BinarySearchTree';
import { Node } from './util';

const Colors = {
    'BLACK': 0,
    'RED': 1
}

class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = Colors.RED;
        this.parent = null;
    }
}

export default class RedBlackTree extends BinarySearchTree {
    constructor() {
        super();
        this.root = null;
    }

    rotateLL(node) {
        const temp = node.left;
        node.left = temp.right;
        if (temp.right && temp.right.key) {
            temp.right.parent = node;
        }
        temp.parent = node.parent;
        if (!node.parent) {
            this.root = temp;
        } else if (node === node.parent.left) {
            node.parent.left = temp;
        } else {
            node.parent.right = temp;
        }
        temp.right = node;
        node.parent = temp;
    }

    rotateRR(node) {
        const temp = node.right;
        node.right = temp.left;
        if (temp.left && temp.left.key) {
            temp.left.parent = node;
        }
        temp.parent = node.parent;
        if (!node.parent) {
            this.root = temp;
        } else if (node === node.parent.left) {
            node.parent.left = temp;
        } else {
            node.parent.right = temp;
        }
        temp.left = node;
        node.parent = temp;
    }

    rotateLR(node) {
        node.left = this.rotateRR(node.left);
        return this.rotateLL(node);
    }

    rotateRL(node) {
        node.right = this.rotateLL(node.right);
        return this.rotateRR(node);
    }

    insert(key) {
        if (this.root == null) {
            this.root = new RedBlackNode(key);
            this.root.color = Colors.BLACK;
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode); // Recolours and rotates
        }
    }

    insertNode(node, key) {
        if (node.key > key) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            }
            return this.insertNode(node.left, key);
        }
        if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        }
        return this.insertNode(node.right, key);
    }

    fixTreeProperties(node) {
        while (node 
            && node.parent 
            && node.color === Colors.RED  
            && node.parent.color === Colors.RED
        ) {
            let parent = node.parent;
            const grandParent = parent.parent;
            // CASE A: parent is a left child
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;
                // CASE A1: unlce node is red so we need to recolor
                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    // CASE A2: node is right child - left rotate
                    if (node == parent.right) {
                        this.rotateRR(parent);
                        node = parent;
                        parent = node.parent;
                    } 
                    
                    this.rotateLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            } else {
                const uncle = grandParent.left;

                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    if (node === parent.left) {
                        this.rotateLL(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    this.rotateRR(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            }
        }
        this.root.color = Colors.BLACK;
    }    
}
