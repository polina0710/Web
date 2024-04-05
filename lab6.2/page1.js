class TLocalStorage {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    Reset() {
        localStorage.setItem(this.storageKey, JSON.stringify({}));
    }

    AddValue(key, value) {
        const storage = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        alert(this.storageKey);
        console.log("hello");
        storage[key] = value;
        localStorage.setItem(this.storageKey, JSON.stringify(storage));
    }

    GetValue(key) {
        const storage = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        return storage[key] || undefined;
    }

    DeleteValue(key) {
        const storage = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        if (key in storage) {
            delete storage[key];
            localStorage.setItem(this.storageKey, JSON.stringify(storage));
            return true;
        }
        return false;
    }

    GetKeys() {
        const storage = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        console.log("Hello");
        console.log(this.storageKey);
        return Object.keys(storage);
    }
}
