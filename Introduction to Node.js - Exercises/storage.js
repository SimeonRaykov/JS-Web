const fs = require('fs');
let storage = {};

function put(key, value) {
    if (typeof key === 'string') {
        if (!storage.hasOwnProperty(key)) {
            storage[key] = value;
        } else {
            throw new Error(Key + " already exists in the storage");
        }

    } else {
        throw new Error(Key + " should be string");
    }
}

function get(key) {
    if (typeof key === 'string') {
        if (storage.hasOwnProperty(key)) {
            return storage[key];
        } else {
            throw new Error(Key + "does not exist in the storage");
        }

    } else {
        throw new Error(Key + " should be string");
    }
}

function getAll() {
    if (Object.keys(storage).length === 0) {
        throw new Error("Storage is empty");
    } else {
        return storage;
    }
}

function update(key, value) {
    if (typeof key === 'string') {
        if (storage.hasOwnProperty(key)) {
            storage[key] = value;
        } else {
            throw new Error(Key + "does not exist in the storage");
        }

    } else {
        throw new Error(Key + " should be string");
    }
}

function deleteX(key) {
    if (!typeof key === 'string') {
        throw new error(Key + " should be string");
    } else {
        if (storage.hasOwnProperty(key)) {
            delete storage[key];
        } else {
            throw new Error(key + " does not exist in the storage");
        }
    }
}

function clear() {
    storage = {};
}

function save() {
    fs.writeFileSync("storage.json", JSON.stringify(storage));
}

function load() {
    if (fs.existsSync("storage.json")) {
        let data = fs.readFileSync("storage.json");
        storage = JSON.parse(data);
    }
}

module.exports = {
    put,
    get,
    getAll,
    update,
    deleteX,
    clear,
    save,
    load
}