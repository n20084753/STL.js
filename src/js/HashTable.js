import { defaultToString, ValuePair } from './util';
import LinkedList from './LinkedList';

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
            if (this.table[hash] == null) {
                this.table[hash] = new LinkedList();
            }
            this.table[hash].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    get(key) {
        const list = this.table[this.hashCode(key)];
        if (list != null && !list.empty()) {
            let current = list.head;
            while (current != null) {
                if (current.data.key === key) {
                    return current.data.value;
                }

                current = current.next;
            }
        }
        return undefined;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const list = this.table[hash];
        if (list != null && !list.empty()) {
            let current = list.head;
            while (current != null) {
                if (current.data.key === key) {
                    list.remove(current.data);
                    if (list.empty()) {
                        delete this.table[hash];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    size() {
        const keys = Object.keys(this.table);
        return keys.reduce((acc, list) => {
            return acc + list.length;
        }, 0);
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
            const list = this.table[keys[i]];
            let current = list.head;
            const listArr = [];
            while (current) {
                listArr.push(current.data.toString());
                current = current.next;
            }
            result.push(`{${keys[i]} => (${listArr.join(' -> ')})}`);
        }
        return result.join(',');
    }
}
