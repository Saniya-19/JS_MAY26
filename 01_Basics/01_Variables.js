const accountId = 190555
let accountEmail = "saniyagmail.com" 
var accountPassward = "12345"  //prefer not to use of var..bcz of the issue of block scope and functional scope//
accountCity = "Jaipur"

let accountState;  //aisa likha toh valu undefined aati 

//accountId = 2 -->Not allowed
accountEmail = "himu@.com"
accountPassward = "13553"
accountCity ="bengluru"
console.log(accountId);

console.table([accountId,accountEmail,accountPassward,accountCity , accountState]);  //agr sare eksath likne ho toh


