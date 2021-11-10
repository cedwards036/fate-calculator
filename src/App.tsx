import React from 'react';
import Calculator from './Calculator';
import rawProbabilityData from './probability-data.json';
import { parseProbabilityJson } from './fate-calculator-core';

function App() {
  return (
    <div className="App">
      <Calculator chaosProbabilities={parseProbabilityJson(rawProbabilityData)} />
    </div>
  );
}

export default App;
