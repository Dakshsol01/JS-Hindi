const accountId = 12234
let accountEmail = "daksh@google.com"
var accountPw = "12345"
accountCity = "Udaipur"

// accountId = 3 // This is not allowed
console.log(accountId);

accountEmail = "ds@ds.com"
accountPw = "21212121"
accountCity = "Jaipur"

/*
Please DO NOT use var
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPw, accountCity]);