const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    describe('#SUM', function() {
        it('2.1 + 3.2 = 5', function () {
            expect(calculateNumber("SUM", 2.1, 3.2)).to.equal(5);
        });
        it('3.1 + 3.2 = 6', function () {
            expect(calculateNumber("SUM", 3.1, 3.2)).to.equal(6);
        });
        it('1.2 + 2.1 = 3', function () {
            expect(calculateNumber("SUM", 1.2, 2.1)).to.equal(3);
        });
        it('1 + 3 = 4', function () {
            expect(calculateNumber("SUM", 1, 3)).to.equal(4);
        });
    });
    describe('#SUBTRACT', function() {
        it('3.2 - 3.2 = 0', function () {
            expect(calculateNumber("SUBTRACT", 3.2, 3.2)).to.equal(0);
        });
        it('3.1 - 1.3 = 2', function () {
            expect(calculateNumber("SUBTRACT", 3.1, 1.3)).to.equal(2);
        });
        it('5.2 - 2.1 = 3', function () {
            expect(calculateNumber("SUBTRACT", 5.2, 2.1)).to.equal(3);
        });
        it('1 - 3 = -2', function () {
            expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
        });
    });
    describe('#DIVIDE', function() {
        it('2.1 / 1.2 = 2', function () {
            expect(calculateNumber("DIVIDE", 2.1, 1.2)).to.equal(2);
        });
        it('3.1 / 3.2 = 1', function () {
            expect(calculateNumber("DIVIDE", 3.1, 3.2)).to.equal(1);
        });
        it('6.2 / 2.1 = 3', function () {
            expect(calculateNumber("DIVIDE", 6.2, 2.1)).to.equal(3);
        });
        it('9 / 3 = 3', function () {
            expect(calculateNumber("DIVIDE", 9, 3)).to.equal(3);
        });
        it('9 / 0 = Error', function () {
            expect(calculateNumber("DIVIDE", 9, 0)).to.equal('Error');
        })
    });
});