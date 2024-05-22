/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'

function App() {

  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    setOutputString(prevString => {
      // Append the clicked letter to the output string
      const newString = prevString + letter;

      let finalString = newString.replace(/([A-Z])\1\1+/g, (match) => {
        return '_'.repeat(match.length);
      });

      return finalString;
    });
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div className="App">
      <p className='title'>Assignment: Alphabet Tile Interaction </p>
      <div className="container">
        {alphabet.split('').map((letter, index) => (
          <div key={index} className="tile" onClick={() => handleClick(letter)}>
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString" className='output'>
      <p> OutPut:</p> <p>{outputString}</p>
      </div>
    </div>
  );
}

export default App;
