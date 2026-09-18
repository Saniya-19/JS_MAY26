const codding = ["js", "ruby", "java", "python","cpp"]
// codding.forEach(function (val) { 
//     console.log(val);
//})
    //OR
// codding.forEach( (item)=> { 
//    console.log(item);
   
// })
   //OR

// function printMe(item) { 
//     console.log(item);   
// }
// codding.forEach(printMe);
    //OR
// codding.forEach ( (item, index, arr)=> { 
//   console.log(item, index, arr);
  
// })



const myCoding = [ 
    { 
        languageName: "Javascript",
        languageFileName: "JS"
    },
     { 
        languageName: "Java",
        languageFileName: "Java"
    },
     { 
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item)=> { 
    console.log(item.languageName);
    
})