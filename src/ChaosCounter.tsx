import React from 'react';
import './App.css';

type ChaosCounterProps = {
    chaos: number,
    setChaos: (value: number) => void
}

function ChaosCounter({ chaos, setChaos }: ChaosCounterProps) {

    function incrementChaos(): void {
        setChaos(chaos + 1);
    }

    function decrementChaos(): void {
        setChaos(chaos - 1);
    }

    return (
        <div className="chaos-counter">
            <div>{chaos}</div>
            <div>Chaos</div>
        </div>
    );
}

export default ChaosCounter;