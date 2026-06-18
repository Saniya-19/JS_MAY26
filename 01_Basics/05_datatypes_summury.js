 // Primitive ...they are call by value
 // 7 types : String,Number, Boolean, Null, Undefined , Symbol ,BigInt

   const score = 100
   const scoreValue = 100.3

   const isLoggedIn = false
   const outsideTemp = null
   let userEmail;

   const id = Symbol('123')
   const anotherId = Symbol('123')
   console.log(id === anotherId);//op false bcz value same hai pr symbol is for uniquevalue
   
  const bigNumber = 123456789098765432n
 //Reference(Non primitive)....call by reference
 //Array, object,Functions

const heros = ["Shaktiman","naagraj","doga"];
let myObj = { 
    name: "Saniya",
    age : 21,

}

const myFunction = function(){ 
    console.log("Hello world");
}

console.log(typeof bigNumber); // op Undefined
console.log(typeof outsideTemp);// op object .....is a data type
console.log(typeof myFunction);// funvction...ya phir object function
//sare non premitive k data type object hee aata hai typeof krne pe



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(Primitive) ....koi bhi value ki yaha copy milegi and heap memory(non-premitive) .......koi bhi value k yaha referce milega

let myYoutubename = "SaniyaLanjewar"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername); //chaiaurcode
console.log(myYoutubename); //op saniyalanjewar

let userOne = { 
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

