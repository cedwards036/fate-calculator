class Probability {
    readonly yes: number;

    constructor(yesValue: number) {
        this.yes = yesValue;
    }

    get exceptionalYes(): number {
        return Math.round(this.yes / 5);
    }

    get exceptionalNo(): number {
        const noProbability = 100 - this.yes;
        return Math.round(100 - (noProbability / 5) + 1);
    }
}

type Odds = "impossible" | "noway" | "veryunlikely" | "unlikely" | "somewhatlikely"
    | "5050" | "likely" | "verylikely" | "nearsurething" | "asurething" | "hastobe";

type OddsToProbabilityMap = Record<Odds, Probability>

export {
    Probability,
}

export type {
    Odds,
    OddsToProbabilityMap
}
