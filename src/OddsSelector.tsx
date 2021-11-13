import React from 'react';
import './App.css';
import { Odds } from './fate-calculator-core';

type OddsSelectorProps = {
    odds: Odds,
    setOdds: (value: Odds) => void
}

function OddsSelector({ odds, setOdds }: OddsSelectorProps) {
    return (
        <div className="column odds-selector-wrapper">
            <select id="odds-selector" value={odds} onChange={e => setOdds(e.target.value as Odds)}>
                <option value="impossible">Impossible</option>
                <option value="noWay">No Way</option>
                <option value="veryUnlikely">Very Unlikely</option>
                <option value="unlikely">Unlikely</option>
                <option value="fiftyFifty">50/50</option>
                <option value="somewhatLikely">Somewhat Likely</option>
                <option value="likely">Likely</option>
                <option value="veryLikely">Very Likely</option>
                <option value="nearSureThing">Near Sure Thing</option>
                <option value="aSureThing">A Sure Thing</option>
                <option value="hasToBe">Has to Be</option>
            </select>
            <label htmlFor="odds-selector">Odds</label>
        </div>
    );
}

export default OddsSelector;