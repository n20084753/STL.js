export default class Set {
    constructor() {
        this.values = {};
        this.length = 0;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.values, element);
    }

    add(element) {
        if (!this.has(element)) {
            this.values[element] = element;
            this.length = this.length + 1;
            return true;
        }

        return false;
    }

    remove(element) {
        if (this.has(element)) {
            delete this.values[element];
            this.length = this.length - 1;
            return true;
        }

        return false;
    }

    clear() {
        this.values = {};
    }

    empty() {
        return (this.length === 0);
    }

    toArray() {
        return Object.values(this.values);
    }

    union(newSet) {
        const unionSet = new Set();
        this.toArray().forEach(element => unionSet.add(element));
        newSet.toArray().forEach(element => unionSet.add(element));
        return unionSet;
    }

    intersection(newSet) {
        const intersectionSet = new Set();

        let largeSetValues = this.toArray();
        let smallSetValues = newSet.toArray();
        if (this.length < newSet.length) {
            largeSetValues = newSet.toArray();
            smallSetValues = this.toArray();
        }

        smallSetValues.forEach((element) => {
            if (largeSetValues.includes(element)) {
                intersectionSet.add(element);
            }
        });

        return intersectionSet;
    }

    difference(newSet) {
        const differenceSet = new Set();
        this.toArray().forEach((element) => {
            if (!newSet.has(element)) {
                differenceSet.add(element);
            }
        });

        return differenceSet;
    }

    isSubset(newSet) {
        if (this.length > newSet.length) {
            return false;
        }
        let isSubset = true;
        this.toArray().forEach((element) => {
            if (!newSet.has(element)) {
                isSubset = false;
            }
        });

        return isSubset;
    }
}
