export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    set code(code) {
        if (typeof code !== 'string') {
            throw TypeError('Code must be a string');
        }
        this._code = code;
    }

    get code() {
        return this._code;
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

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    } 
}