import React, { useState } from 'react';
import Circle from './Circle';

function MortgageCalculator() {
  // State variables for input values and calculated result
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  // Function to calculate mortgage
  const calculateMortgage = () => {
    // Convert input values to numbers
    const loanAmountNum = parseFloat(loanAmount);
    const interestRateNum = parseFloat(interestRate) / 100;
    const loanTermNum = parseFloat(loanTerm) * 12; // Convert loan term from years to months

    // Perform mortgage calculation
    const monthlyInterestRate = interestRateNum / 12; // Monthly interest rate
    const denominator = Math.pow(1 + monthlyInterestRate, loanTermNum) - 1;
    const monthlyPaymentResult =
      (loanAmountNum *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanTermNum))) /
      denominator;

    // Update monthlyPayment state variable with calculated result
    setMonthlyPayment(monthlyPaymentResult.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div className="body container">
      <div className="mortgage-amount container h-96 pt-5 flex">
        {/* Display calculated monthly payment if available */}
        {monthlyPayment && (
          <>
            <div className="flex items-center">
              <h2 className="result text-2xl text-left mx-auto">
                Monthly Payment: ${monthlyPayment}
              </h2>
            </div>
            <div className="flex items-center pl-14">
              <Circle
                mortgagePrice={monthlyPayment}
                mortgage={3000}
                propertyTax={326.51}
              />
            </div>
          </>
        )}
      </div>

      <div className="container">
        {/* Input fields for loan amount, interest rate, and loan term */}
        <input
          type="number"
          className="input"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <input
          type="number"
          className="input"
          placeholder="Interest Rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <input
          type="number"
          className="input"
          placeholder="Loan Term (in years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
        {/* Button to trigger mortgage calculation */}
        <button className="btn" onClick={calculateMortgage}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default MortgageCalculator;
