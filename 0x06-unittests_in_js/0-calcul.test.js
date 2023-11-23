const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calulateNumber", function () {
    it('2 + 4 = 6', function () {
        assert.equal(calculateNumber(2, 4), 6);
    });
    it('1.1 + 7.1 = 8', function () {
        assert.equal(calculateNumber(1.1, 7.1), 8);
    });
    it('2.5 + 4.5 = 8', function () {
        assert.equal(calculateNumber(2.5, 4.5), 8);
    });
    it('1.7 + 4.6 = 7', function () {
        assert.equal(calculateNumber(1.7, 4.6), 7);
    });
    it('1.2 + 4.3 = 5', function () {
        assert.equal(calculateNumber(1.2, 4.3), 5);
    });
    it('9.2 + 4.3 = 13', function () {
        assert.equal(calculateNumber(9.2, 4.3), 13);
    });
    it('2.5 + 4.8 = 8', function () {
        assert.equal(calculateNumber(2.5, 4.8), 8);
    });
})