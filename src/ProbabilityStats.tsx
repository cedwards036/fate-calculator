import React from 'react';
import './App.css';
import { Odds, OddsToProbabilityMap } from './fate-calculator-core';

type ProbabilityStatsProps = {
    chaosProbabilities: OddsToProbabilityMap[],
    odds: Odds,
    chaos: number
}

function ProbabilityStats({ chaosProbabilities, odds, chaos }: ProbabilityStatsProps) {
    const probability = chaosProbabilities[chaos - 1][odds];
    return (
        <div className="probability-stats row">
            <div className="column">
                <div data-testid="exceptionalYes">{probability.yes > 0 ? probability.exceptionalYes : "N/A"}</div>
                <div>Exceptional Yes</div>
            </div>
            <div className="column">
                <div className="yes-stat" data-testid="yes">{probability.yes}</div>
                <div>Yes</div>
            </div>
            <div className="column">
                <div data-testid="exceptionalNo">{probability.yes < 100 ? probability.exceptionalNo : "N/A"}</div>
                <div>Exceptional No</div>
            </div>
        </div>
    );
}

export default ProbabilityStats;