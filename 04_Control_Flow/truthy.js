//agr true and false khud se assume krna ho toh

//const userEmail = "saniya@.ai"//if smtg in string then true
//const userEmail = ""//......if ntg in string then false
//const userEmail = []    //got user email

// if (userEmail) {
//     console.log("Got user Email");
// }else{ 
//     console.log("Don't have user Email");  
// }
//Falsy values....false, 0, -0, BigInt 0n, "", null, undefined, NaN
//except from this all are truthy values
//truthy values...."0", "false", " ", [], {}, function(){}, 

// const userEmail = []
// if (userEmail.length === 0) {   //to check array
//     console.log("Array is Empty");   
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {   ///to heck object
//     console.log("Object is empty");   
// }

//false == 0 =>true
//false =="" =>true
//0 == "" => true

//Nullish Coalescing Operator (??).....its specifically for null nd undefined

let val1;
//val1 =5 ?? 10   //op 5
//val1 = nul ?? 10     //op 10
//val1 = undefined ?? 15  //op undefined
//val1 = null ?? 10 ?? 15  //jo first value milti hai wahi assign hoti hai

console.log(val1);//op 5

//nullish and terniary both are diff
//Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");





