//if statement

// const temperature = 41

// if(temperature < 50){
//     console.log("less than 50");
// }else{
// console.log("temp is greater than 50");
// }



if(2 == "2"){ 
    //console.log("executed");//gives o/p
    
}
if(2 === "2"){ 
    console.log("executed");//not gives o/p
    
}
//if(false){ 
   //if ye condition false hai toh scope ke andr k code execute nhi hoga
//}
// <,>, <=, >=, ==, !=, ===(it also check data type bcz it is strict), !== ..........comparisions 

// const score = 200
// if(score < 100) { 
//     const power = "fly"
//     console.log(`User power:  ${power}`);
    
// }
//  console.log(`User power:  ${power}`);..............power not define error bcz it is out of scope and power is inside the scope only


// const balance = 1000
// //if(balance > 500) console.log("test"), console.log("test2");........not a good practice to write

// if (balance < 500) {
//     console.log("Less than 500");
    
// }else if (balance < 750){ 
//     console.log("Less than 750"); 
// }else if(balance < 900){ 
//       console.log("Less than 900"); 
// }else{ 
//     console.log("Less than 1200");
    
// }

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (UserloggedIn && debitCard && 2==2) {
    console.log("Allow to buy Courses");
}
if (loggedInFromGoogle || loggedInFromEmail){ 
    console.log("User Logged in");
    
}