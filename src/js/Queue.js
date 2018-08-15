import LinkedList from './LinkedList';

export default class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(data) {
        this.list.pushBack(data);
        return this;
    }

    dequeue() {
        if (this.list.empty()) {
            return -1;
        }

        const node = this.list.head;
        this.list.pop();
        return node;
    }

    empty() {
        return this.list.empty();
    }

    size() {
        return this.list.length;
    }
}
