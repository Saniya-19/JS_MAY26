const myArr = [0,1,2,3,4,5] //js k array resizable hota hai....isme diff type ke data types same bracket mai likh skte jaise booleant int string.....aur ek array ke andr multiple array bhi ho skte hai


const myArr2 = new Array(1,2,3,4)
const myHeros = ["shaktiman","naagra"]
// console.log(myArr[1]);

//Array Methods
// myArr.push(6)  //array mai value add krta push
// console.log(myArr);

// myArr.pop()      // pop array ki last value ko delet kr deta hai

 
// myArr.unshift(9)   //array ke starting mai value add krta hai
// myArr.shift()  //jo 9 add hua usko remove kiye shift se
// console.log(myArr.includes(9)); //op false ktuki present nhi hai
// console.log(myArr.indexOf(9)); //op -1 kyuki present nhi hai
// console.log(myArr.indexOf(2)); //op 2 is the value at index 2


// const newArr = myArr.join() // join se array combine hua hai aur string mai bhi convert hua hai
// console.log(myArr); //op [0.1.2,3,4,5]
// console.log(newArr); //op 0,1,2,3,4,5
// console.log(typeof newArr);

//slice , splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);  // iska output aaya [1,2]

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// console.log(myn2); // iska op aaya [1,2,3]
// console.log("C", myArr);
//slice original operation ko manipulate nhi krta aur splice krta hai....mtlb slice se original operation mai change nhi aata aur splice se aata hai

const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)   //push method se array ke andr array aata hai...2 array merge nhi hoete
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// isko aisa likhe kyuki flash ki value acces krni thi aur woh push se arary ke andr thi ...so 3 aary mai 1 postion pe flash aise tha

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //concate ek hee array mai sbko print krata hai


//spread operator...ye chizo ko spread krta hai
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //work as concate method but this one is more better

const another_array = [1,2,3, [4,5,6], 7,[4,5]]
const real_another_array =another_array.flat(Infinity)
// flat se arrayu ke andr array ko single array mai convert krta hai...isme pucha jata hai kitni depth tk krna hai mtlb no. dena hota hai
console.log(real_another_array);


console.log(Array.isArray("Saniyaa")); // op false
console.log(Array.from("Saniyaa")); //['S','a','n','i','y','a','a']
console.log(Array.from({name: "hitesh"})); //op is []...mtlb yaha woh confuse ho jata ki keys ko array bnana hai ya pairs ko


let score1  = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2, score3));//written new element from set of elements



