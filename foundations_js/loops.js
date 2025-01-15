//loops in javascript 
//for loops 
// a loop that counts to ten 
for ( let i = 0 ; i <= 10; i++ ){
    console.log(i);
}
console.log("             ")//spacing out 


// for loop that counts even numbers
for (let i = 2; i <= 20 ; i+=2){
    console.log(i);
}
console.log("        ")//spacing out


//for loop countdown for new years 
for (let j = 10 ; j > 0; j--){
    console.log(j);

}
console.log("happy new year!")
console.log("        ")//spacing out

//use of break and continue in for loops 
for ( let i = 0 ; i <= 10; i++ ){
    if(i ==7){
        continue;
        
    }
    else{
        console.log(i);
    }   

}
console.log("         ")

for ( let i = 0 ; i <= 10; i++ ){
    if(i ==7){
        break;
        
    }
    else{
        console.log(i);
    }   

}