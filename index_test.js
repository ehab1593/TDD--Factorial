var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if the output of 5! is 120', () => {

      //Setup
      const inputNumber= 5
      const expected = 120;
      //Exercise
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expected);
    })

    it('tests if the output of 3! is 6', () => {

       //Setup
      const inputNumber= 3
      const expected = 6;
      //Exercise
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expected);
      
    })

    it('tests whether an input of 0 returns 1', () => {

        //Setup
      const inputNumber= 0
      const expected = 1;
      //Exercise
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expected);

    });
  });
});
