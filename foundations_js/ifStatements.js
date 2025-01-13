//hour 
//if hour is between 6am and 12am  say good morning 
//if hour is between 12pm and 6pm say good afternoon
//otherwise say good evening 

let hour = 20 ;

if( hour >= 6 && hour < 12)
    console.log("Good morning sir !");

else if (hour >= 12 && hour <  18)
     console.log("Good Afternoon sir!");
   
else
    console.log("Good evening Sir!");
  
   //grading system 
   //if below 100 and 90 say u have scored an A congratulations  
   //if below 90 and 70 say u have scored a B  you passed!! .
   //if below 70 and 50 say u have scored a c , its above avarage 
   //otherwise  its a fail try plz retake .  
   
   let grade = 57;

   if (grade >= 90 &&  grade === 100)
     console.log("congratulations u scored an A !");
   else if (grade >= 70 && grade < 90)
     console.log("You Passed , u scored a B");  
   else if (grade >= 50 && grade < 70)
    console.log("Above avarage , u scored a C");
   else
      console.log("You failed ,Plz retake the test");
