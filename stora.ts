interface Item<T> {
    [key: string]: T;
}

abstract class LocalStorage<T> {
    protected items: Item<T>;
    constructor() {
        this.items = {};
    }
    abstract length(): number;
    abstract key(index: number): T;
    abstract getItem(key: string): T;
    abstract setItem(key: string, value: T): void;
    abstract removeItem(key: string): void;
    abstract clear(): void;
}

class SuperStorage extends LocalStorage<string> {
    constructor() {
        super();
    }
    public key();
}
