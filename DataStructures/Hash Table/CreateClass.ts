class HashTable<V> {
    private table: [string, V][][];
    private size: number;

    constructor(size: number = 5) {
        this.size = size;
        this.table = new Array(size);

        for (let i = 0; i < size; i++) {
            this.table[i] = [];
        }
    }

    private hash(key: string): number {
        let total = 0;

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % this.size;
    }

    set(key: string, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key: string): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return undefined;
    }
}