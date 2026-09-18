const codding = ["js", "ruby", "java", "python","cpp"]
//forEach koi value return nhi krta na console na return

// const values = codding.forEach((item) => {
//     //console.log(item); 
//     return value
// });
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9]

//const newnums = myNums.filter( (num)=> num > 4)  //advance of forEach
//console.log(newnums);

// const newnums = myNums.filter( (num)=> {
//     return num > 4
// } )


const newnums = []

myNums.forEach( (num)=> { 
    if(num > 4){
      newnums.push(num)
    }
})
console.log(newnums);


const books = [ 
    { title: 'Book One',genre: 'fiction',publish: 1981,
        edition: 2004 },
    { title: 'Book Two',genre: 'Non-fiction',publish: 1992,
        edition: 2008 },
    { title: 'Book Three',genre: 'History',publish: 1999,
        edition: 2007 },
    { title: 'Book Four',genre: 'Non-fiction',publish: 1989,
        edition: 2010 },
    { title: 'Book Five',genre: 'History',publish: 2009,
        edition: 2014 },
    { title: 'Book Six',genre: 'fiction',publish: 1987,
        edition: 2010 },
];

// let userBooks =books.filter( (bk) => bk.genre ==='History')
// userBooks = books.filter( (bk) => {return bk.publish >= 2000})//scope aaya isliye return keyword k use krna pdta
//  console.log(userBooks);

let userBooks =books.filter( (bk) => bk.genre ==='History')
userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})
 console.log(userBooks);
 