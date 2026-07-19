//singleton object......made by constructor
//object.create...constructor method


//object literals
const mySym= Symbol("key1")


const jsUser = {
    name: "SANIYA",
    "Full name": "Saniya Lanjewar",    //if key and values both are string then it will only acess by [] notby dot
    //mySYm: "Key1",//......is not a way to define symbol it will not give error but its type of is not symbol
    [mySym]: "myKey1",
    age: 21,
    location: "Nagpur",
    email: "saniya@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full name"]);
console.log(jsUser[mySym]);

jsUser.email = "saniya@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "saaniya@microsoft.com"
console.log(jsUser);


jsUser.greeting = function(){ 
    console.log("hello js user");
}
    
jsUser.greetingTwo = function(){ 
    console.log(`Hello JS User,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());







