// var c = 300
// let a = 300

// if (true) { 
// let a = 10
// const b = 20
//console.log("Inner:",a);

//var c = 30.... c=30 aise rhega toh bhi execute hoga
//scope mai gglobal scope ki value block scope mai reh skti hai pr block scope ki global scope mai
//}

//console.log(a);
//console.log(b);
//console.log(c);
// function one(){ 
//     const username = "hitesh"

//     function two(){ 
//         const website = "youtube"
//         console.log(username);
//     }
//     //console.log(website);
//    // two()
    
// }
//one()

if (true) { 
    const username = "hitesh"
    if(username === "hitesh") { 
        const website = "youtube"
       // console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//+++++++++++++++++ interesting +++++++++++++++++++
console.log(addone(5))
function addone(num) { 
    return num + 1
}

addTwo(5)
const addTwo = function(num){ 
    return num + 2
}



