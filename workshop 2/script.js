// else if statements 
 /* Workshop 2

let password;
//   password = "password"; // inte giltigt
//   password = "pa$sword"; // giltigt
//    password = "p@ssw%rd"; // giltigt
//   password = "pa$$word"; // giltigt
//    password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
//    password = "such-password-much-secure-very-long"; // giltigt


if(password.length >=6 && password.includes ("@", "%")
){console.log('that password is long!');

}else if(password.length >=8 && password.includes ("$")
){console.log('that password is long enough!');

}else if(password.length >=16)
{console.log('Great that a long password!');

}else if(password.length >=12  && password.includes ("-")
){console.log('that password is secret password!');


}else{
console.log('that password is not long enough');
}

const specialChars = [
"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

//set status variabler to inital value false
let specialChar = false 

//  check for any special chars in password
// for each specailchar in specialchars
// does password include specialchar?
// if true, set hasspecialchars to true
for (let i = 0; i < specialChar.length; i++){
const specailchar = specialChars[i]
if(password.includes(specialChar)){
   hasSpecialChar = true
}
}