import React from 'react';
import './App.css';
import { OddsToProbabilityMap } from './fate-calculator-core';

type CalculatorProps = {
    chaosProbabilities: OddsToProbabilityMap[]
}

function Calculator({ chaosProbabilities }: CalculatorProps) {
    return (
        <div className="calculator-wrapper">
            <div className="calculator">
                <h1>Fate Calculator</h1>
            </div>
        </div>
    );
}

export default Calculator;