// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find Maximum and Minimum Values of a List--1 var
const min = (list) => Math.min(...list);

const max = (list) => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Smallest value of an array
function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

//поглиблені задачки
//A wolf in sheep's clothing
function warnTheSheep(queue) {
  const queueRev = queue.reverse();
  if (queueRev.indexOf("wolf") === 0) {
    return "Pls go away and stop eating my sheep";
  }
  return (
    "Oi! Sheep number " +
    queueRev.indexOf("wolf") +
    "! You are about to be eaten by a wolf!"
  );
}

// Beginner - Lost Without a Map--1 var
const resultArray = [];
function maps(x) {
  x.forEach((element) => {
    resultArray.push(element * 2);
  });
}

//Beginner - Lost Without a Map--2 var
const x = [1, 2, 3];
function maps(x) {
  return x.map((element) => element * 2);
}

// Find the first non-consecutive number
function firstNonConsecutive(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return null;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 !== arr[i - 1]) {
      let firstNonConsecutiveValue = arr[i];
      return firstNonConsecutiveValue;
    }
  }
  return null;
}

//Додаткові задачки по JS
function doubleInteger(i) {
  return i * 2;
}
//
function century(year) {
  return Math.ceil(year / 100);
}
//
function makeNegative(num) {
  return num < 0 ? num : num * -1;
}
//
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}
//
function otherAngle(a, b) {
  return 180 - a - b;
}
//
 let otherAngle = (a, b) => 180 - a - b;
//
let twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);
//
let nthEven = (n) => n * 2 - 2;
//
function past(h, m, s) {
  let answer = 0;
  answer = h * 3600000 + m * 60000 + s * 1000;
  return answer;
}
//
let past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000;
//
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}


