
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual("130.44");
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle zero interest", function(){
  const values = {
    amount: 1,
    years: 1,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual("0.08");
});

it("should handle zero as number of years", function(){
  const values = {
    amount: 1,
    years: 0,
    rate: 1
  }
  expect(calculateMonthlyPayment(values)).toEqual("1.00");
});
//etc
