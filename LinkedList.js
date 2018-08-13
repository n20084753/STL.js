class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    _addOneItemToHead(item) {
        const node = { item };
        node.next = this.head;
        this.head = node;
        if (this.tail === null) {
            this.tail = this.head;
        }
        this.length++;
    }

    _addOneItemToTail(item) {
        const node = { item , next: null};

        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length++;
    }

    /**
     * Add new nodes to the head
     * @param {any} data      
     */
    addToHead(...data) {
        data.forEach(item => this._addOneItemToHead(item));
        return this;
    }

    /**
     * Add new nodes to the tail
     * @param {any} data
     */
    addToTail(...data) {
        data.forEach(item => this._addOneItemToTail(item));
        return this;
    }

    /**
     * Remove the node from the head
     */
    removeFromHead() {
        if (this.head === null) {
            return this;
        }
        
        const nextNode = this.head.next;
        delete this.head;
        this.head = nextNode;

        if (this.head === null) {
            this.tail = null;
        }
        
        this.length--;
        return this;
    }

    removeFromTail() {
        if (this.tail === null) {
            return this;
        }

        if (this.length === 1) {
            delete this.head;
            this.head = this.tail = null;
        }
    }
}

const list = new LinkedList();
list.addToTail(10, 20, 30)
    .addToHead(5, 6)
    .removeFromHead()
    .removeFromHead();
