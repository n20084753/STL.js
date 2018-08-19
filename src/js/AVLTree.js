import BinarySearchTree from './BinarySearchTree';
import { Node } from './util';

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5,
};

export default class AVLTree extends BinarySearchTree {
    constructor() {
        super();
        this.root = null;
    }

    getHeight(node) {
        if (node == null) return -1;
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    getBalanceFactor(node) {
        const heightDifference = this.getHeight(node.left) - this.getHeight(node.right);
        switch (heightDifference) {
        case -2:
            return BalanceFactor.UNBALANCED_RIGHT;

        case -1:
            return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;

        case 1:
            return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;

        case 2:
            return BalanceFactor.UNBALANCED_LEFT;

        default:
            return BalanceFactor.BALANCED;
        }
    }

    rotateLL(node) {
        const temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    }

    rotateRR(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
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
        this.root = this.insertNode(this.root, key);
    }

    insertNode(node, key) {
        if (node == null) {
            return new Node(key);
        }
        if (node.key > key) {
            node.left = this.insertNode(node.left, key);
        } else if (node.key < key) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }

        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (node.left.key > key) {
                node = this.rotateLL(node);
            } else {
                return this.rotateLR(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (node.right.key < key) {
                node = this.rotateRR(node);
            } else {
                return this.rotateRL(node);
            }
        }
        return node;
    }

    removeNode(node, key) {
        node = super.removeNode(node, key);

        if (node == null) {
            return node; // No need to balance
        }

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if (balanceFactorLeft === BalanceFactor.BALANCED 
                || balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotateLL(node);
            }
            if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotateLR(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if (balanceFactorRight === BalanceFactor.BALANCED
                || balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotateRR(node);
            }
            if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotateRL(node);
            }
        }
        return node;
    }
}
