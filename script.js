alert("Hallo plese press OK ");
var name = prompt("Please enter your name","Here");
// var fullmarks = parseInt(prompt("please enter full marks","Here"));
var fullmarks = 500 ;
var sub1 = parseInt(prompt("Please enter your subject one marks","Here"));
var sub2 = parseInt(prompt("Please enter your subject two marks","Here"));
var sub3 = parseInt(prompt("Please enter your subject three marks","Here"));
var sub4 = parseInt(prompt("Please enter your subject four marks","Here"));
var sub5 = parseInt(prompt("Please enter your subject five marks","Here"));


// var name = prompt("Please enter your name","Here");
// var sub1 = prompt("Please enter your subject one marks","Here");
// var sub2 = prompt("Please enter your subject two marks","Here");
// var sub3 = prompt("Please enter your subject three marks","Here");
// var sub4 = prompt("Please enter your subject four marks","Here");
// var sub5 = prompt("Please enter your subject five marks","Here");


var plussub = sub1 + sub2 + sub3 + sub4 + sub5 ;
var percentage = plussub / fullmarks * 100 ;

document.write(" Thank you Mr/Mrs " + name +  " For Coming ");
document.write("<br>");
document.write(" Your Percentage is: " ); 
document.write("<br>");
document.write(percentage + " % "); 

if ( percentage <= 100 && percentage >= 90 ) 
 {
    document.write("<br>");
    document.write("Congratualtion your grade is 'A'");
 }

 if ( percentage < 90 && percentage >= 80 ) 
 {
    document.write("<br>");
    document.write("Congratualtion your grade is B");
 }

 if ( percentage < 80 && percentage >= 70 ) 
 {
    document.write("<br>");
    document.write("Congratualtion your grade is C");
 }

  if ( percentage < 70 && percentage >= 60 ) 
 {
    document.write("<br>");
    document.write("Congratualtion your grade is D");
 }

 else {
     document.write("<br>");
    document.write("Sorry you are FAIL"); 
 }


// var x = prompt("Enter")
// if (x === "some")
// {
//     alert("you guess it right");
// }

// else {
//     alert("ponka");
// }




