export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addOneItemToHead(data) {
        const node = { data };
        node.next = this.head;
        this.head = node;
        if (this.tail === null) {
            this.tail = this.head;
        }
        this.length = this.length + 1;
    }

    addOneItemToTail(data) {
        const node = { data, next: null };

        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length = this.length + 1;
    }

    begin() {
        return this.head;
    }

    end() {
        return this.tail;
    }

    /**
     * Checks if the list is empty
     */
    empty() {
        return this.length === 0;
    }

    /**
     * Add new nodes to the head
     * @param {any} data
     */
    push(...data) {
        data.forEach(item => this.addOneItemToHead(item));
        return this;
    }

    /**
     * Add new nodes to the tail
     * @param {any} data
     */
    pushBack(...data) {
        data.forEach(item => this.addOneItemToTail(item));
        return this;
    }

    /**
     * Remove the node from the head
     */
    pop() {
        if (this.head === null) {
            return this;
        }

        const nextNode = this.head.next;
        delete this.head;
        this.head = nextNode;

        if (this.head === null) {
            this.tail = null;
        }

        this.length = this.length - 1;
        return this;
    }

    /**
     * Remove the node from the tail
     */
    popBack() {
        if (this.tail === null) {
            return this;
        }

        if (this.length === 1) {
            delete this.head;
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            delete this.tail;
            current.next = null;
            this.tail = current;
        }

        this.length = this.length - 1;
        return this;
    }

    /**
     * Find element in the list
     * @param {any} check
     */
    find(check) {
        let current = this.head;

        while (current) {
            if (typeof check === 'function') {
                if (check(current)) {
                    return current;
                }
            } else if (current.data === check) {
                return current;
            }

            current = current.next;
        }

        return -1;
    }

    reverse() {
        let prevNode = null;
        let nextNode = null;
        let currNode = this.head;

        this.tail = this.head;
        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head = prevNode;

        return this;
    }
}
