"use strict";

function inc(n) {
  return n + 1;
}

function incObj(num) {
  num.n = num.n + 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b });

const obj = { n: 5 };
incObj(obj);
console.dir(obj);