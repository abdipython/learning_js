// constructors = a special method for defining the properties and methods of an object
// script for students admission

function Student(firstName,secondName,admissionNo,age){
    this.firstName = firstName;
    this.secondName = secondName;
    this.admissionNo = admissionNo;
    this.age = age;
    this.admit = function(){console.log(`${firstName},You are succesfully admitted to the school  `)}
}
 const Student1 = new Student("Abdul","Fort",6751,23);
 const Student2 = new Student("Zwane","cutie",4116,20);

 Student2.admit();
 Student1.admit();

