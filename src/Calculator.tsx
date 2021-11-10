import React, { useState } from 'react';
import './App.css';
import ChaosCounter from './ChaosCounter';
import { Odds, OddsToProbabilityMap } from './fate-calculator-core';
import OddsSelector from './OddsSelector';
import ProbabilityStats from './ProbabilityStats';

type CalculatorProps = {
    chaosProbabilities: OddsToProbabilityMap[]
}

function Calculator({ chaosProbabilities }: CalculatorProps) {
    const [chaos, setChaos] = useState(1);
    const [odds, setOdds] = useState<Odds>('impossible');

    return (
        <div className="calculator-wrapper">
            <div className="calculator column">
                <h1>Fate Calculator</h1>
                <ProbabilityStats chaosProbabilities={chaosProbabilities} odds={odds} chaos={chaos} />
                <ChaosCounter chaos={chaos} maxChaos={chaosProbabilities.length} setChaos={setChaos} />
                <OddsSelector odds={odds} setOdds={setOdds} />
            </div>
        </div>
    );
}

export default Calculator;