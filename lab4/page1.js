class THashStorage {
    constructor() {
        this.storage = {};
    }

    Reset() {
        this.storage = {};
    }

    AddValue(key, value) {
        this.storage[key] = value;
    }

    GetValue(key) {
        return this.storage[key] || undefined;
    }

    DeleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        }
        return false;
    }

    GetKeys() {
        return Object.keys(this.storage);
    }
}

let Storage = new THashStorage();
