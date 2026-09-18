const user ={ 
    username: "Saniya",
    prices: 999,

    welcomeMessage: function() { 
        console.log(`${this.username} , welcome to website`); 
       // console.log(this);
        
    }

}
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();
//console.log(this); //node env mai current contex refer krta hai ek empty obj ko....kyuki global empty hai

// const chai = function () { 
//     let username = "SANIYA"
//     console.log(this);  //node env ke andr kuch value print hoti hai yahi global env mai nhi hoti  
    console.log(this.username); //undefined........aise function ke andr yeeee aise kam nhi krta
// }
const chai = () => { 
    let username = "SANIYA"
    // console.log(this.username);  //undefined
       // console.log(this);//also {}
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 ;   //when iuse return keyword it is named as return keyword
//  }
//  console.log(addTwo(3,4));//7 



//const addTwo = (num1, num2) =>  num1 + num2 ;  // it name as implicit return
 //console.log(addTwo(3,4))  //7

//curly braces likha toh return keyword likhna pdega aur parenthisis likha toh return nhi likhna pdega

// const addTwo = (num1, num2) => {username: "Saniya"}
 
//  console.log(addTwo())///undefined ....bcz is trh obj define nhi kr skte...obj hmesha parenthisis mai likhi jati hai

const addTwo = (num1, num2) => ({username: "Saniya"})
 
//  console.log(addTwo()) //....executed successfiuky bcz of ()...obj only execute using this


//  const myArray = [2,5,3,7,8]
//  myArray.forEach()




 