//Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//Find Maximum and Minimum Values of a List--1 var
var min = function (list) {
  let min = list[0];
  let minIndex = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
      minIndex = i;
    }
  }
  return list[minIndex];
};
var max = function (list) {
  let max = list[0];
  let maxIndex = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
      maxIndex = i;
    }
  }
  return list[maxIndex];
};

// Find Maximum and Minimum Values of a List--2 var
var min = function (list) {
  return list[list.indexOf(Math.min(...list))];
};
var max = function (list) {
  return list[list.indexOf(Math.max(...list))];
};

//Smallest value of an array--1 var
function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

//поглиблені задачки
//A wolf in sheep's clothing
function warnTheSheep(queue) {
  let sheepSequence = [queue.length];
  let amount = queue.length;
  for (let i = 0; i < queue.length; i++) {
    sheepSequence[i] = amount--;
  }
  let positionOfWolf = sheepSequence[queue.indexOf("wolf")];
  return positionOfWolf === 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${positionOfWolf - 1}! You are about to be eaten by a wolf!`;
}

//A wolf in sheep's clothing--2
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
const queue = ["sheep", "sheep", "sheep", "wolf", "sheep"];
warnTheSheep(queue);

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

//Додаткові задачки по JS, щоб формувати навички, якщо маєте час і бажання 🙂
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
