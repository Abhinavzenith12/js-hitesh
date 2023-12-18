const accountId = 12
let accountEmail = "abhinavrajan620@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed as it is declared as const

accountEmail = "ar619@gmail.com"
accountPassword = "2145"
accountCity = "Kolkata"

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
prefer not to use var
because of issue in block scope and functional scope.
scope is area under curly braces. ex.- if(a>b){this is scope}
*/