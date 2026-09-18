function sayMyName(){ 
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("Y");
    console.log("A");
}
//sayMyName()


// function addTwoNumbers(number1 , number2){ 
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(3, 7)  //op 7
// addTwoNumbers(3,"4")  //op 34
// addTwoNumbers(3,"a")   //op 3a

// const result = addTwoNumbers(3,5)
// console.log("Result:", result);


function addTwoNumbers(number1 , number2){ 
    //  let result = number1 + number2
    //  return result

    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log("Result:", result);


function loginUserMessage(username){ 
    if(username === undefined){ //(!username.........both are same condition)
       console.log("Please enter a username");
       return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Saniya"));
//console.log(loginUserMessage(""));.........just loged in
//console.log(loginUserMessage()); ....undefined just loggedin

function calculatecartPrice(...num1){ 
    return num1
}
console.log(calculatecartPrice(200, 400,500,2000));

const user = { 
    username:"hitesh",
    price: 199
}
function handleObject(anyobject){ 
    console.log(`any:name is ${anyobject.username} and price is ${anyobject.price}`); 
}
//handleObject(user);
//or
handleObject({ 
    username: "Sam",
    price: 399
})

const mynewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){ 
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));