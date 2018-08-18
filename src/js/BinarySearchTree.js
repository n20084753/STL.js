import { Node } from './util';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insetNode(this.root, key);
        }
    }

    insetNode(node, key) {
        if (node.key > key) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insetNode(node.left, key);
            }
        } else {
            if (node.right == null) {
              node.right = new Node(key);
            } else {
              this.insetNode(node.right, key);
            }
        }
    }

    remove(key) {
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }

        if (node.key > key) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        if (node.key < key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        if (node.left == null && node.right == null) {
            node = null;
            return node;
        }

        if (node.left == null) {
            node = node.right;
            return node;
        }

        if (node.right == null) {
            node = node.left;
            return node;
        }

        const aux = this.minNode(node.right);
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
        return node;
    }

    search(key) {
        let current = this.root;
        while (current) {
            if (current.key === key) {
                return true;
            }
            current = (current.key > key) ? current.left : current.right;
        }
        return false;
    }

    preOrder(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            this.preOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    inOrder(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    postOrder(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min() {
        return this.minNode();
    }

    minNode(node) {
        let current = node || this.root;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    max() {
        return this.maxNode();
    }

    maxNode(node) {
        let current = node || this.root;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
}
