export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw TypeError('Name must be a string');
        }
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set code(code) {
        if (typeof code !== 'string') {
            throw TypeError('code must be a string');
        }
        this._code = code;
    }
    get code() {
        return this._code;
    }

    get [Symbol.toStringTag]() {
        return this._code;
    }
}