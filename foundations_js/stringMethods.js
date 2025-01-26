// string methods 

let phrase = "i love sushi,and my name is fort!... i turned 21"

console.log(phrase.charAt(0)); //charAt method shows the characters by use of index
console.log(phrase.charAt(1));
console.log(phrase.charAt(2));
console.log(phrase.charAt(3));
console.log(phrase.charAt(4));
console.log(phrase.charAt(5));

console.log("                ");//spacing
console.log(phrase.indexOf("f")); // indexOf shows  the first occurence of character f and its index  location
console.log(phrase.indexOf("s"));
console.log(phrase.lastIndexOf("s"));//lastIndexOf shows the last occurence of a character index location
console.log(phrase.indexOf("2"));

console.log("                ");//spacing
console.log(phrase.length);//getting the length of the phrase
console.log("                ");//spacing

// using functions 
let userName = "  abdulraman";
console.log(userName);
 userName =userName.trim();// removes the spaces
 console.log(userName);
 console.log("                ");//spacing

let nickName = "cute zwane";
   nickName = nickName.toUpperCase();
   console.log(nickName);
   console.log("                 ");//spacing 


let childName = "BABY";
 childName =childName.toLowerCase();
 console.log(childName);
 console.log("                 ");//spacing 

 let popularName = "fort"
  popularName = popularName.replaceAll("f", "b");//replace method 
  console.log(popularName);
  console.log("hello world ")