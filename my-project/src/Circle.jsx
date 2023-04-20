import React, { useState, useEffect } from 'react';

function Circle({ mortgagePrice, mortgage, propertyTax }) {
  const mortgagePercentage = (mortgage / mortgagePrice) * 100;
  const propertyTaxPercentage = (propertyTax / mortgagePrice) * 100;

  const [size, setSize] = useState(mortgagePercentage);
  const [fill, setFill] = useState(
    `conic-gradient(#f6ad55 ${mortgagePercentage}%, #4299e1 ${mortgagePercentage}% ${propertyTaxPercentage}%)`
  );
  const [showValue, setShowValue] = useState(false);
  const [value, setValue] = useState(mortgage);

  useEffect(() => {
    updateCircleValues();
  }, [mortgage, propertyTax, mortgagePrice]);

  function updateCircleValues() {
    const mortgagePercentage = (mortgage / mortgagePrice) * 100;
    const propertyTaxPercentage = (propertyTax / mortgagePrice) * 100;
    setSize(mortgagePercentage);
    setFill(
      `conic-gradient(#f6ad55 ${mortgagePercentage}%, #4299e1 ${mortgagePercentage}% ${propertyTaxPercentage}%)`
    );
  }

  function handleMouseEnter(isMortgage) {
    setShowValue(true);
    setValue(isMortgage ? mortgage : propertyTax);
  }

  function handleMouseLeave() {
    setShowValue(false);
  }

  return (
    <div className="relative w-64 h-64">
      <div
        className="absolute inset-0 rounded-full bg-transparent border-4 border-gray-200"
        style={{ background: fill }}
      >
        <div
          className="w-full h-full"
          onMouseEnter={() => handleMouseEnter(true)}
          onMouseLeave={handleMouseLeave}
          style={{ clipPath: `inset(0 50% 0 0 round 50%)` }}
        ></div>
        <div
          className="w-full h-full"
          onMouseEnter={() => handleMouseEnter(false)}
          onMouseLeave={handleMouseLeave}
          style={{ clipPath: `inset(0 0 0 50% round 50%)` }}
        ></div>
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl text-f6ad55">${value}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Circle;
