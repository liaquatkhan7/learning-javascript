alert(" Quiz ");
var a;
var b;
var c;
var d;
var capital = prompt("what is the name of capital of Pakistan " , "Type your answer here");
if (capital == "islamabad") {
    alert("correct answer");
    a = 1;
}

else {
    alert("Wrong answer! Right answer is 'islamabad' ");
    a = 0;
}

var bird = prompt("What is the national bird of Pakistan " , "Type your answer here");
if (bird == "chakoor"){
    alert("Correct");
    b = 1;
}

else if (bird == "partridge") {
    alert("Correct");
    b = 1;
} 

else if (bird == "Chukar") {
    alert("Correct");
    b =1;
}

else {
    alert("wrong answer! Right answer is 'chakoor' ");
    b = 0;
}

var animal = prompt("What is the national animal of Pakistan "," Type your answer here");
if ( animal == "markhor") {
    alert("Correct");
    c = 1;
}

else if ( animal == "Markhor") {
    alert("Correct");
    c = 1; 
}

else {
    alert("Wrong Answer! Right answer is Markhor" );
    c = 0;
}

var sports = prompt("What is the national sports of Pakistan "," Type your answer here");

if (sports == "hokey") {
    alert("Correct");
    d = 1;
}

else {
    alert("Wrong Answer! Right answer is hokey")
    d = 0;
}


var e = a + b + c + d;
document.write("Your Score is  " + e );


