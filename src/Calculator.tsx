import React, { useState } from 'react';
import './App.css';
import ChaosCounter from './ChaosCounter';
import { OddsToProbabilityMap } from './fate-calculator-core';

type CalculatorProps = {
    chaosProbabilities: OddsToProbabilityMap[]
}

function Calculator({ chaosProbabilities }: CalculatorProps) {
    const [chaos, setChaos] = useState(1);

    return (
        <div className="calculator-wrapper">
            <div className="calculator">
                <h1>Fate Calculator</h1>
                <ChaosCounter chaos={chaos} setChaos={setChaos} />
            </div>
        </div>
    );
}

export default Calculator;