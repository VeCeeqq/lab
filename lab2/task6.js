'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

function average(a, b) {
  return (a + b) / 2;
}

function calculate() {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push(average(square(i), cube(i)));
  }
  return result;
}
