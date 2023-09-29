export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    set size(size) {
        if (typeof size !== 'number') {
            throw TypeError('Size must be a number')
        }
        this._size = size;
    }

    get size() {
        return this._size;
    }

    set location(location) {
        if (typeof location !== 'string') {
            throw TypeError('Location must be a string')
        }
        this._location = location;
    }

    get location() {
        return this._location;
    }

    valueOf() {
        return this._size;
    }

    toString() {
        return this._location;
    }
}