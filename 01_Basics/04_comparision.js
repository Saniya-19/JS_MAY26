// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);  // yaha data types dono ke diff hai pr ans true aara so it is not a good thing so make sure that for comparision data type should be same
console.log("02" > 1);

console.log(null > 0);  //op false
console.log(null == 0);  //op false
console.log(null >= 0);  //op true
// NOTE=> the reson is that an equality check == and comparisions>< >= <=work differently.
//Comparisions convert null to a Number,treating it as 0.
//thats why(3)null>=0 is true and (1) null>0 is false.


console.log(undefined == 0);  // idhr 3 bhi value false hai
console.log(undefined > 0);
console.log(undefined < 0);
//JS mai equal aur comparision 2 alg alg chize hai
// === strict check....data type bhi check krta hai

console.log("2"==2); // ye true ho jata
console.log("2"===2); // pr yaha nhi hota yeh data type vgre check krta
























