export function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    }
    if (item === undefined) {
        return 'UNDEFINED';
    }
    if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

export class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}