import React, { useState } from 'react';

const Input = ({ dropdown, onChange, label, symbols }) => {
  const arrOfSymbols = Object.keys(symbols);
  arrOfSymbols.sort();

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    console.log('Input Value:', inputValue);
    const isNumberRegX = /^\d+$/;
    // Check if the input is empty or not a number
    if (!isNumberRegX.test(inputValue)) {
      // Set the error state
      setError('Please enter a valid number.');
      console.log('Error:', 'Please enter a valid number.');
    } else {
      // If the input is valid, clear the error state
      setError('');
      // Proceed with the provided onChange callback
      onChange(inputValue);
    }
  };

  return (
    // Label of input fields
    <div className="grid grid-cols-2 grid-rows-2">  
      <label htmlFor={label} className="text-primary text-2xl md:text-lg font-quicksand pb-3"> 
        {label}
      </label>
      {(dropdown && (
        // Dropdown list for From & To currencies
        <select name="countries" onChange={(e) => onChange(e.target.value)} className="px-4 py-2 rounded-xl">
        {arrOfSymbols.map((symbol) => (
            <option value={symbol} key={arrOfSymbols.indexOf(symbol)}>
              {symbols[symbol]}
            </option>
        ))}
        </select>
      )) || (
        // Amount input field with error handling
        <div className="flex flex-col justify-between w-6/6 md:w-6/6">
          <input type="number" placeholder="Enter the number you want to convert" className="px-4 py-2 rounded-xl" onInput={handleInputChange} />
          {error && (
            <div className="text-error text-base md:text-xs py-2 -mb-7 font-quicksand">
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
