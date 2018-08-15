import LinkedList from './LinkedList';

export default class Stack {
    constructor() {
        this.top = null;
        this.list = new LinkedList();
    }

    push(data) {
        this.top = this.list.push(data).head;
        return this;
    }

    pop() {
        if (this.list.empty()) {
            return -1;
        }

        const data = this.top;
        this.top = this.list.pop().head;
        return data;
    }

    peek() {
        return this.top;
    }

    empty() {
        return this.list.empty();
    }

    size() {
        return this.list.length;
    }
}
