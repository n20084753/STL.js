import { defaultToString, ValuePair } from './util';

export default class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hashCode(key) {
        if (typeof key === 'number') {
            return key;
        }

        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i);
        }
        return hash % 1013;
    }

    put(key, value) {
        if (key != null && value != null) {
            const hash = this.hashCode(key);
            this.table[hash] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    size() {
        const keys = Object.keys(this.table);
        return keys.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        const keys = Object.keys(this.table);
        const result = [];
        for (let i = 0; i < keys.length; i++) {
            result.push(`{${keys[i]} => ${this.table[keys[i]].toString()}}`);
        }
        return result.join(',');
    }
}
