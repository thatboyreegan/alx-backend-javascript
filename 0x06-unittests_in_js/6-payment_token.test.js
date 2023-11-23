const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI(true)', (done) => {
        getPaymentTokenFromAPI(true)
          .then((res) => {
            expect(res).to.deep.equal({data: 'Successful response from the API'})
            done();
          });
    });
    it('getPaymentTokenFromApi(false)', () => {
        expect(getPaymentTokenFromAPI(false)).to.be.undefined;
    });
});