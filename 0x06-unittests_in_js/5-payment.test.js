const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");
const sinon = require("sinon");

describe('Tests for sendPaymentRequestToAPI', () => {
    const dummy = sinon.createSandbox();

    beforeEach(() => {
        dummy.spy(console, "log");
    });

    afterEach(() => {
        dummy.restore();
    });

    it('sendPaymentRequestToAPI(100, 20)', () => {
        sendPaymentRequestToApi(100,20);

        expect(console.log.calledOnce).to.be.true;
        expect(console.log.firstCall.args[0]).to.equal("The total is: 120");
    });

    it('sendPaymentRequestToAPI(10, 10)', () => {
        sendPaymentRequestToApi(10 ,10);

        expect(console.log.calledOnce).to.be.true;
        expect(console.log.firstCall.args[0]).to.equal("The total is: 20");
    });
});