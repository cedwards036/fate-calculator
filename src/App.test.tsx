import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';
import { Probability } from './fate-calculator-core';

const testChaosProbabilities = [
  {
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
  },
  {
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
  },
  {
    "impossible": new Probability(0),
    "noway": new Probability(5),
    "veryunlikely": new Probability(10),
    "unlikely": new Probability(15),
    "somewhatlikely": new Probability(45),
    "5050": new Probability(15),
    "likely": new Probability(50),
    "verylikely": new Probability(65),
    "nearsurething": new Probability(75),
    "asurething": new Probability(80),
    "hastobe": new Probability(90),
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
