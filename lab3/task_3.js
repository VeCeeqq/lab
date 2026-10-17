'use strict';

function ipToNumber(ip = '127.0.0.1') {
  const parts = ip.split('.');
  let result = 0;

  for (let i = 0; i < parts.length; i++) {
    const byte = Number(parts[i]);
    result += byte << ((3 - i) * 8);
  }

  return result;
}

function ipToNumberReduce(ip = '127.0.0.1') {
  const parts = ip.split('.');

  return parts.reduce((result, part) => {
    return (result << 8) + Number(part);
  }, 0);
}

console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumberReduce('10.0.0.1'));
