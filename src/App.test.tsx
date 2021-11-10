import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';
import { OddsToProbabilityMap, Probability } from './fate-calculator-core';

const testChaosProbabilities: OddsToProbabilityMap[] = [
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
  },
  {
    impossible: new Probability(0),
    noWay: new Probability(5),
    veryUnlikely: new Probability(10),
    unlikely: new Probability(15),
    somewhatLikely: new Probability(45),
    fiftyFifty: new Probability(15),
    likely: new Probability(50),
    veryLikely: new Probability(65),
    nearSureThing: new Probability(75),
    aSureThing: new Probability(80),
    hasToBe: new Probability(150),
  }
]

class Elements {
  static get chaosNumber(): HTMLElement {
    return screen.getByTestId('chaos-number');
  }

  static get incrChaosNumber(): HTMLElement {
    return screen.getByRole('button', { name: 'Increment Chaos level' });
  }

  static get decrChaosNumber(): HTMLElement {
    return screen.getByRole('button', { name: 'Decrement Chaos level' });
  }

  static get oddsSelector(): HTMLElement {
    return screen.getByLabelText('Odds');
  }

  static get exceptionalYesStat(): HTMLElement {
    return screen.getByTestId('exceptionalYes');
  }

  static get yesStat(): HTMLElement {
    return screen.getByTestId('yes');
  }

  static get exceptionalNoStat(): HTMLElement {
    return screen.getByTestId('exceptionalNo');
  }
}

beforeEach(() => {
  render(<Calculator chaosProbabilities={testChaosProbabilities} />);
})

test('chaos initializes to 1', () => {
  expect(Elements.chaosNumber).toHaveTextContent('1');
});

test('Increment chaos button adds 1 to chaos', () => {
  Elements.incrChaosNumber.click();
  expect(Elements.chaosNumber).toHaveTextContent('2');
});

test('Increment chaos button is disabled if chaos number is maximal', () => {
  Elements.incrChaosNumber.click();
  Elements.incrChaosNumber.click();
  expect(Elements.chaosNumber).toHaveTextContent('3');
  expect(Elements.incrChaosNumber).toBeDisabled();
});

test('Decrement chaos button subtracts 1 from chaos', () => {
  Elements.incrChaosNumber.click();
  Elements.incrChaosNumber.click();
  Elements.decrChaosNumber.click();
  expect(Elements.chaosNumber).toHaveTextContent('2');
});

test('Decrement chaos button is disabled if chaos number is 1', () => {
  expect(Elements.decrChaosNumber).toBeDisabled();
  Elements.incrChaosNumber.click();
  Elements.decrChaosNumber.click();
  expect(Elements.decrChaosNumber).toBeDisabled();
});

test('Odds selector initializes to "impossible"', () => {
  expect(Elements.oddsSelector).toHaveValue('impossible');
});

test('Stats initialize to chaos level 0 with "impossible" odds', () => {
  expect(Elements.exceptionalYesStat).toHaveTextContent('N/A');
  expect(Elements.yesStat).toHaveTextContent('-20');
  expect(Elements.exceptionalNoStat).toHaveTextContent('77');
});

test('Selecting a specific chaos level and odds value updates the stats based on the input data', () => {
  Elements.incrChaosNumber.click();
  userEvent.selectOptions(Elements.oddsSelector, "somewhatLikely")
  expect(Elements.exceptionalYesStat).toHaveTextContent('5');
  expect(Elements.yesStat).toHaveTextContent('25');
  expect(Elements.exceptionalNoStat).toHaveTextContent('86');
});

test('Exceptional stats are set to N/A if output is impossible', () => {
  Elements.incrChaosNumber.click();
  Elements.incrChaosNumber.click();
  userEvent.selectOptions(Elements.oddsSelector, "hasToBe")
  expect(Elements.exceptionalYesStat).toHaveTextContent('30');
  expect(Elements.yesStat).toHaveTextContent('150');
  expect(Elements.exceptionalNoStat).toHaveTextContent('N/A');
});
