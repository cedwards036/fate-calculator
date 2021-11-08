import React from 'react';
import Calculator from './Calculator';
import { chaosProbabilities } from './probability-data';

function App() {
  return (
    <div className="App">
      <Calculator chaosProbabilities={chaosProbabilities} />
    </div>
  );
}

export default App;
