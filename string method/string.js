let text = "   aayush rajdev";
console.log(text);
console.log(text.length);

// gives a piece of string 
let slice = text.slice(1 , 6);
console.log(" ",slice);

// consider a negative as zero
let substring = text.substring(-9 , 4);
console.log(" " , substring);

// return a number of character same as second paramtre from starting position
let substr = text.substr( 3, 10);
console.log(" " , substr);

// convert string into array
let arrayy = text.split("");
console.log(arrayy);

// convert string into array 
let array = text.split("$");
console.log(array);

// convert into uppercase
let uppercase = text.toLocaleUpperCase();
console.log(uppercase);

// convert into lowercase
let lowercase = text.toLocaleLowerCase();
console.log(lowercase);

// check whether character includes string or not 
let includes = text.includes("aayush");
console.log(includes);

// gives a character from particular position 
let character = text.charAt(3);
console.log(character);

// removes white spaces
let trim = text.trim();
console.log(trim.length);

// joines two string 
let text1 = "hey";
let joined = text.concat(" ",text1);
console.log(joined);