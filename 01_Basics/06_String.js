const name ="Saniya"
const repoCount = 50

console.log(name + repoCount + "value");// this  ethod is not that much appropriate
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);//better aaproach to write

const gameName = new String ('Saniyauaua')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)//substring mai -ve value nhi de skte op nhi aata
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="       hiteshhh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sanuu'));

console.log(gameName.split('-'));//string thi saniya-uau-a.....isko seprate krke op mila saniya,uau,a







