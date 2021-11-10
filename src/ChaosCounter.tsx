import React from 'react';
import './App.css';

type ChaosCounterProps = {
    chaos: number,
    maxChaos: number,
    setChaos: (value: number) => void
}

function ChaosCounter({ chaos, maxChaos, setChaos }: ChaosCounterProps) {

    function incrementChaos(): void {
        setChaos(chaos + 1);
    }

    function decrementChaos(): void {
        setChaos(chaos - 1);
    }

    const incrButtonIsDisabled = chaos === maxChaos;
    const decrButtonIsDisabled = chaos === 1;

    return (
        <div className="chaos-counter column">
            <div className="row">
                <button aria-label="Decrement Chaos level" className="chaos-arrow" onClick={decrementChaos} disabled={decrButtonIsDisabled}>&#9664;</button>
                <div className="chaos-number" data-testid="chaos-number">{chaos}</div>
                <button aria-label="Increment Chaos level" className="chaos-arrow" onClick={incrementChaos} disabled={incrButtonIsDisabled}>&#9654;</button>
            </div>
            <div>Chaos</div>
        </div>
    );
}

export default ChaosCounter;