//1 Messi Goals 
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  const totalGoals = Number(laLigaGoals) + Number(copaDelReyGoals) + Number(championsLeagueGoals);
  return totalGoals;
}
// 2 Make negative
function makeNegative(num) {
 if(num > 0) {
   num = -num;
 }
 return num;
} 
// Terminal game move function 
function move (position, roll) {
  return position = position + (2 * roll);
} 
//Personalized Message
function greet (name, owner) {
  if(name === owner){
    return 'Hello boss';
  }
  else {
     return 'Hello guest';
  }  
} 
// Keep Hydrated
function litres(time) {
 const litres = Math.floor(time * 0.5); 
  return litres;
} 

// Opposites Attract
function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  } else if(flower2 % 2 === 0 && flower1 % 2 === 1) {
    return true;
  }
  else {
    return false;
  }
}