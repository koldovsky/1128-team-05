// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find Maximum and Minimum Values of a List--1 var

const min = (list) => Math.min(...list);

const max = (list) => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Smallest value of an array

function min(arr, toReturn) {
  if (toReturn === "index") {
    return arr.indexOf(Math.min(...arr));
  }
  return Math.min(...arr);
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

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

// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  return x.map((n) => n * 2);
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  let consecutiveYes = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) !== 1) {
      consecutiveYes = false;
      return arr[i + 1];
    }
  }
  if (consecutiveYes == true) return null;
}
