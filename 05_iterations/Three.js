//for of

 const arr = [1, 2, 3, 4, 5]
 for (const num of arr) {
    console.log(num);
 }

 const greetings = "Hello World!"
 for (const greet of greetings) {
    console.log(`Each char is ${greet}`);  
 }

 //maps
 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United state of india")
 map.set('FR', "France")
 map.set('IN', "India")
//map not print duplicate
//map are unique for their values

//console.log(map);

// for (const key of map) {  //it gives op in one array
//     console.log(key);   
// }

for (const [key, value] of map) {  //use this for destructuring of array
    console.log(key, ':-', value);   
}

const myObject = { 
   'game1': 'NFS',
   'game2': 'Spiderman'
}
// for (const key of myObject) {
//    console.log(key, ':-', value);//TypeError: myObject is not iterable
   
// }
