let yourArray = ["a", 2, true, "c", null, { name: "john" }]

let myArray = ["a", "b", "c", "d"];
myArray[1] = "anything we want";
console.log(myArray);

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);

  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);

console.log(arr);

function htmlColorNames(arr) {
arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

function forecast(arr) {
return arr.slice(2, 4);
  return arr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
      newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));