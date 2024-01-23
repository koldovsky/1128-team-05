//Convert a string to an array 
function stringToArray(string){
 return string.split(" ");
}

//DNA to RNA Conversion 
function DNAtoRNA(dna) {
return dna.replace(/T/g, 'U');
}

//Find Maximum and Minimum Values of a List--1 var
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//Smallest value of an array--1 var
function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min(...arr);
  } else if (toReturn === 'index') {
    const minValue = Math.min(...arr);
    return arr.indexOf(minValue);
  } 
}