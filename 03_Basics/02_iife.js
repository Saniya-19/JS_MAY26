//Immediately Invoked Function Expressions (IIFE)
//jaise hee file stat  ho waise hee data base k  connec tion start ho jaye ...mtlb immmediately file run krne ko use krte hai
//function ke andr global variable koi prblm na kre....jo function mai declare kr rhe hai woh global scope se pollute ho jata hai so
//global scope se pollution nhi chiye isliye use krre

(function chai(){ 
    //NAMED IIFE
    console.log(`DB CONECTED`);
 
})();


( () => {
console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    //UNNAMED IIFE
    
console.log(`DB CONNECTED TWO ${name}`);
})('SANIYAA')  ///