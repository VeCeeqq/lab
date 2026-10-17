"use strict";

const array = [
  true, "hello", 5, 12, -200, false, false,
  "word", 3.14, null, undefined, {}, []
];

const types = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0
};

for (const element of array) {
  const type = typeof element;
  types[type] = types[type] + 1;
}

console.dir(types);



const types2 = {};

for (const element of array) {
  const type = typeof element;

  if (types2[type] === undefined) {
    types2[type] = 0;
  }

  types2[type] = types2[type] + 1;
}

console.dir(types2);
