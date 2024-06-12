import React, { useState } from 'react';
import './Calculator.css'; // Optional: for adding styles

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');



  const handleClick = (value) => {
    setInput(input + value);
  };



  const handleClear = () => {
    setInput('');
    setResult('');
  };



  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Using eval for simplicity; consider a safer evaluation method in production
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        
        <button onClick={handleClear}>C</button>
        
        <button onClick={() => handleClick('0')}>0</button>
        
        <button onClick={handleCalculate}>=</button>
        
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
