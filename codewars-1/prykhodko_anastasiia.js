// Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Return Negative
function makeNegative(num) {
// Grasshopper - Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Return Negative
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

// Game Move
function move(position, roll) {
  let newPosition = 0;
  newPosition = position + roll * 2;
  return newPosition;
}

// Personalized Message
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// Keep Hydrated
function litres(time) {
  let amountOfWater = 0;
  amountOfWater = Math.floor(time * 0.5);
  return amountOfWater;
}

// Opposites Attract
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

