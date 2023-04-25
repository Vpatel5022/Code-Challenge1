import React, { useState } from 'react';
import './App.css';

function FizzBuzz() {
  const [num, setNum] = useState('');
  const [fizz, setFizz] = useState('Fizz');
  const [buzz, setBuzz] = useState('Buzz');
  const [fizzDivisor, setFizzDivisor] = useState('3');
  const [buzzDivisor, setBuzzDivisor] = useState('5');
  const [output, setOutput] = useState([]);

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  const handleFizzChange = (event) => {
    setFizz(event.target.value);
  };

  const handleBuzzChange = (event) => {
    setBuzz(event.target.value);
  };

  const handleFizzDivisorChange = (event) => {
    setFizzDivisor(event.target.value);
  };

  const handleBuzzDivisorChange = (event) => {
    setBuzzDivisor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOutput = [];
    for (let i = 0; i <= num; i++) {
      let outputString = '';
      if (i % fizzDivisor === 0) {
        outputString += fizz;
      }
      if (i % buzzDivisor === 0) {
        outputString += buzz;
      }
      if (outputString === '') {
        outputString = i;
      }
      newOutput.push(outputString);
    }
    setOutput(newOutput);
  };

  return (
    <div className="container">
      <h2>FizzBuzz</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input type="number" value={num} onChange={handleChange} />
        </label>
        <br />
        <label>
          Fizz substitute:
          <input type="text" value={fizz} onChange={handleFizzChange} />
        </label>
        <br />
        <label>
          Buzz substitute:
          <input type="text" value={buzz} onChange={handleBuzzChange} />
        </label>
        <br />
        <label>
          Fizz divisor:
          <input type="number" value={fizzDivisor} onChange={handleFizzDivisorChange} />
        </label>
        <br />
        <label>
          Buzz divisor:
          <input type="number" value={buzzDivisor} onChange={handleBuzzDivisorChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {output.join(', ')}
      </div>
    </div>
  );
}

export default FizzBuzz;
