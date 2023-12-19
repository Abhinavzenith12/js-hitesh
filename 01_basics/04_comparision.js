// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true - The reason is that an equality check == and comparisions >,<,>=
// <= work differently. Comparisions convert null to a number, treating it as 0. 
// Thats why null >= 0 is giving true and null > 0 is false.

// === triple equals also checks for the data type

console.log("2" === 2); // it will give false