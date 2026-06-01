let score = "33"  //o/p number
//let score = "33abc" //o/p NaN
//let score = "null"  //o/p 0
//let score = "Saniya" //o/p NaN

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//o/p NaN => jb value 33abc diya tb NaN aaya

//"33"=> 33
//"33abc" => NaN not a number
//true =>1; false => 0;

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//op trrrrue

// 1 =-> true; 0 => false;
//""=>false  .....it means empty string
// "Saniya" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);  //op 33
console.log(typeof stringNumber);   //op string

// ***************************** Operations *******************************
let value = 3
let negValue = -value
console.log(negValue); 

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "Heloo"
let str2 = "Saniya"
let str3 = str1 + str2
console.log(str3); //op helooSaniya

// console.log("1" + 2);        //op 12
// console.log(1 + "2");        // op 12
// console.log("1" + 2 + 2);    //op 122 => agr string first mai hai toh sbko string treat kiys jayega 
// console.log(1 + 2 + "2");     //op 32 => agr string last  ai hai toh phle jo conversion hai woh ho jayega

console.log(true);  //op true
console.log(+true);   // op 1
// console.log(true+);  //it is not possible---- error aayega
console.log(+""); //op 0


let gameCounter = 100
++gameCounter;
console.log(gameCounter); //op 101