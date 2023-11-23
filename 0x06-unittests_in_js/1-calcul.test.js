const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    describe('#SUM', function() {
        it('2.1 + 3.2 = 5', function () {
            assert.equal(calculateNumber("SUM", 2.1, 3.2), 5)
        });
        it('3.1 + 3.2 = 6', function () {
            assert.equal(calculateNumber("SUM", 3.1, 3.2), 6)
        });
        it('1.2 + 2.1 = 3', function () {
            assert.equal(calculateNumber("SUM", 1.2, 2.1), 3)
        });
        it('1 + 3 = 4', function () {
            assert.equal(calculateNumber("SUM", 1, 3), 4)
        });
    });
    describe('#SUBTRACT', function() {
        it('3.2 - 3.2 = 0', function () {
            assert.equal(calculateNumber("SUBTRACT", 3.2, 3.2), 0)
        });
        it('3.1 - 1.3 = 2', function () {
            assert.equal(calculateNumber("SUBTRACT", 3.1, 1.3), 2)
        });
        it('5.2 - 2.1 = 3', function () {
            assert.equal(calculateNumber("SUBTRACT", 5.2, 2.1), 3)
        });
        it('1 - 3 = -2', function () {
            assert.equal(calculateNumber("SUBTRACT", 1, 3), -2)
        });
    });
    describe('#DIVIDE', function() {
        it('2.1 / 1.2 = 2', function () {
            assert.equal(calculateNumber("DIVIDE", 2.1, 1.2), 2)
        });
        it('3.1 / 3.2 = 1', function () {
            assert.equal(calculateNumber("DIVIDE", 3.1, 3.2), 1)
        });
        it('6.2 / 2.1 = 3', function () {
            assert.equal(calculateNumber("DIVIDE", 6.2, 2.1), 3)
        });
        it('9 / 3 = 3', function () {
            assert.equal(calculateNumber("DIVIDE", 9, 3), 3)
        });
        it('9 / 0 = Error', function () {
            assert.equal(calculateNumber("DIVIDE", 9, 0), 'Error')
        })
    });
});