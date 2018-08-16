import { defaultToString, ValuePair } from './util';

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        if (this.hasKey(this.toStrFn(key))) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    clear() {
        this.table = {};
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    keyValues() {
        return Object.values(this.table);
    }

    forEach(callBackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callBackFn(valuePairs[i].key, valuePairs[i].value);

            if (result === false) {
                break;
            }
        }
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        const valuePairs = this.keyValues();
        const result = [];
        for (let i = 0; i < valuePairs.length; i++) {
            result.push(`${valuePairs[i].toString()}`);
        }
        return result.join(',');
    }
}
