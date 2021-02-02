GENERAL COMMANDS---
window.prompt()//it returns input from the user
document.write() //writes stuff in the document
document.getElementById() // grabs html elements by id
alert("");
var phrase="that's a phrase"; // a variable stores data
var age=23;
var gpa=3.1;
var boolean=true;
var flaws=null; //no value
var description=undefined; //the value hasnt been defined

STRING METHODS---
phrase.length // length of the string inside phrase
phrase.toUpperCase() // maiuscolo
phrase.charAt(1) //gives u the character in that index
phrase.indexOf("r")// gives u the index
phrase.endsWith()//it tells me if the string ends with that 
phrase.include("strings", text,boolean)// it tells me if strings is included

NUMBER METHODS---
Math.abs(age) // it returns the absolute value of the number
Math.max(age,2) // it returns the biggest number
Math.min(age,2)
Math.round(age)// it rounds decimal numbers
Math.random() //returns random numbers

ARRAYS, FUNCTIONS ETC_---
var phrase= [] // thats an array
function sayHi(name, age){ // THATS a fucntion
	document.write("Hola"); 
}
sayHi("jOE", 23); // this is how u call a function