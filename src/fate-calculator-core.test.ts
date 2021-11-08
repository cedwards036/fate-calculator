import { Probability } from "./fate-calculator-core";

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