var calculator = require("../app/calculator");
var assert = require("chai").assert;

describe("add", () => {
  function makeTest(a, b, expected, testFunctionName) {
    it(`${testFunctionName}(${a},${b}) should result in ${expected}`, () => {
      assert.equal(calculator[testFunctionName](a, b), expected);
    });
  }

  console.log(`Testing: add(5, 2) expected result 7 (PASS)`);
  makeTest(5, 2, 7, "add");
  console.log(`Testing: add(5, 2) expected result 8 (FAIL)`);
  makeTest(5, 2, 8, "add");

  console.log(`Testing: sub(5, 2) expected result 3 (PASS)`);
  makeTest(5, 2, 3, "sub");
  console.log(`Testing: sub(5,2) expected result 5 (FAIL)`);
  makeTest(5, 2, 5, "sub");

  console.log(`Testing: mul(5, 2) expected result 10 (PASS)`);
  makeTest(5, 2, 10, "mul");
  console.log(`Testing: mul(5,2) expected result 12 (FAIL)`);
  makeTest(5, 2, 12, "mul");

  console.log(`Testing: div(10, 2) expected result 5 (PASS)`);
  makeTest(10, 2, 5, "div");
  console.log(`Testing: div(10,2) expected result 2 (FAIL)`);
  makeTest(10, 2, 2, "div");

});