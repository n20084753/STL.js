export default class Stack {
    constructor() {
        this.list = [];
    }

    push(data) {        
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    peek() {
        return this.list[this.list.length - 1];
    }

    empty() {
        return this.list.length === 0;
    }

    size() {
        return this.list.length;
    }
}
