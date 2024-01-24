//1.Messi Goals
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  const messiLaLigaGoals = 30;
const messiCopaDelReyGoals = 10;
const messiChampionsLeagueGoals = 15;
const totalMessiGoals = totalGoals(messiLaLigaGoals, messiCopaDelReyGoals, messiChampionsLeagueGoals);
console.log("Total Messi goals = ", totalMessiGoals);
}
//2.Make negative
function makeNegative(num) {
   if (num > 0) {num = -num;}
    return num;
}
//3. Game Move
function move (position, roll) {
  return position + (roll * 2);  
}
//4. Personalized Message
function greet (name, owner) {
  if (name === owner) 
  {return 'Hello boss';} 
  else {return 'Hello guest';}
}
//5. Keep Hydrated
function litres(time) {
  const litres = Math.floor(time * 0.5);
    return litres;
}
//6. Opposites Attract
function lovefunc(flower1, flower2){
  return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}