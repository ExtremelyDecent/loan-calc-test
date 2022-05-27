window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = '20000';
  document.getElementById("loan-years").value = '15';
  document.getElementById("loan-rate").value = '5';
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
 
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const interestRate = values.rate / 12;
  const numOfPayment = values.years * 12;
  let monthlyPayment;
  if (numOfPayment === 0){
    
    monthlyPayment = Math.floor(principal*100)/100;
    return (monthlyPayment.toFixed(2));
  }
  else if (interestRate === 0){
    monthlyPayment=Math.floor(((principal/(numOfPayment))*100))/100;
    return(monthlyPayment.toFixed(2));
  }
  else{
    monthlyPayment = Math.floor((principal * interestRate/100)/(1-(1+interestRate/100)**(-1*numOfPayment))*100)/100
    return(monthlyPayment.toFixed(2));
  }  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = `$${monthly}`;
}
