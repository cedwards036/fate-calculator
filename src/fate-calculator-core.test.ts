import { OddsToProbabilityMap, parseProbabilityJson, Probability } from "./fate-calculator-core";

describe("Probability", () => {
    it("autocalculates the exceptional yes probability as 1/5 of the yes probability", () => {
        const prob = new Probability(35);
        expect(prob.exceptionalYes).toEqual(7);
    })
    it("rounds the exceptional yes probability as to the nearest integer", () => {
        const prob1 = new Probability(58);
        expect(prob1.exceptionalYes).toEqual(12);
        const prob2 = new Probability(16);
        expect(prob2.exceptionalYes).toEqual(3);
    })
    it("autocalculates the exceptional no probability as 1/5 of the no probability", () => {
        const prob = new Probability(35);
        expect(prob.exceptionalNo).toEqual(88);
    })
    it("rounds the exceptional no probability as to the nearest integer", () => {
        const prob1 = new Probability(58);
        expect(prob1.exceptionalNo).toEqual(93);
        const prob2 = new Probability(16);
        expect(prob2.exceptionalNo).toEqual(84);
    })
})

describe("parseProbabilityJson", () => {
    it("parses the probability json data into an array of OddsToProbabilityMaps", () => {
        const testJsonData = [
            {
                "impossible": -20,
                "noWay": 0,
                "veryUnlikely": 5,
                "unlikely": 5,
                "somewhatLikely": 20,
                "fiftyFifty": 10,
                "likely": 25,
                "veryLikely": 45,
                "nearSureThing": 50,
                "aSureThing": 55,
                "hasToBe": 80
            },
            {
                "impossible": 0,
                "noWay": 5,
                "veryUnlikely": 5,
                "unlikely": 10,
                "somewhatLikely": 25,
                "fiftyFifty": 15,
                "likely": 35,
                "veryLikely": 50,
                "nearSureThing": 55,
                "aSureThing": 65,
                "hasToBe": 85
            }
        ];

        const expected: OddsToProbabilityMap[] = [
            {
                impossible: new Probability(-20),
                noWay: new Probability(0),
                veryUnlikely: new Probability(5),
                unlikely: new Probability(5),
                somewhatLikely: new Probability(20),
                fiftyFifty: new Probability(10),
                likely: new Probability(25),
                veryLikely: new Probability(45),
                nearSureThing: new Probability(50),
                aSureThing: new Probability(55),
                hasToBe: new Probability(80),
            },
            {
                impossible: new Probability(0),
                noWay: new Probability(5),
                veryUnlikely: new Probability(5),
                unlikely: new Probability(10),
                somewhatLikely: new Probability(25),
                fiftyFifty: new Probability(15),
                likely: new Probability(35),
                veryLikely: new Probability(50),
                nearSureThing: new Probability(55),
                aSureThing: new Probability(65),
                hasToBe: new Probability(85),
            }
        ];
        expect(parseProbabilityJson(testJsonData)).toEqual(expected);
    });
});