import { OddsToProbabilityMap, Probability } from "./fate-calculator-core"

const chaosProbabilities: OddsToProbabilityMap[] = [];

// chaos level 1
chaosProbabilities[0] = {
    "impossible": new Probability(-20),
    "noway": new Probability(0),
    "veryunlikely": new Probability(5),
    "unlikely": new Probability(5),
    "somewhatlikely": new Probability(20),
    "5050": new Probability(10),
    "likely": new Probability(25),
    "verylikely": new Probability(45),
    "nearsurething": new Probability(50),
    "asurething": new Probability(55),
    "hastobe": new Probability(80),
}

// chaos level 2
chaosProbabilities[1] = {
    "impossible": new Probability(0),
    "noway": new Probability(5),
    "veryunlikely": new Probability(5),
    "unlikely": new Probability(10),
    "somewhatlikely": new Probability(25),
    "5050": new Probability(15),
    "likely": new Probability(35),
    "verylikely": new Probability(50),
    "nearsurething": new Probability(55),
    "asurething": new Probability(65),
    "hastobe": new Probability(85),
}

export {
    chaosProbabilities
}