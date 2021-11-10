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

interface OddsToProbabilityMap {
    impossible: Probability,
    noWay: Probability,
    veryUnlikely: Probability,
    unlikely: Probability,
    somewhatLikely: Probability,
    fiftyFifty: Probability,
    likely: Probability,
    veryLikely: Probability,
    nearSureThing: Probability,
    aSureThing: Probability,
    hasToBe: Probability,
}

type Odds = keyof OddsToProbabilityMap;

function parseProbabilityJson(json: Record<string, number>[]): OddsToProbabilityMap[] {
    return json.map(obj => {
        return {
            impossible: new Probability(obj['impossible']),
            noWay: new Probability(obj['noWay']),
            veryUnlikely: new Probability(obj['veryUnlikely']),
            unlikely: new Probability(obj['unlikely']),
            somewhatLikely: new Probability(obj['somewhatLikely']),
            fiftyFifty: new Probability(obj['fiftyFifty']),
            likely: new Probability(obj['likely']),
            veryLikely: new Probability(obj['veryLikely']),
            nearSureThing: new Probability(obj['nearSureThing']),
            aSureThing: new Probability(obj['aSureThing']),
            hasToBe: new Probability(obj['hasToBe'])
        }
    });
}

export {
    Probability,
    parseProbabilityJson
}

export type {
    OddsToProbabilityMap,
    Odds
}
