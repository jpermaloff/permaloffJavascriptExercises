// Exercise One
var num = prompt("Enter a Number!", "No number has been entered")
var total = 0;
	for (var i = parseInt(num); i > 0; i-=1) {	
		total = total + i;	
	}
	document.write("Exercise One- The total is: " + total); 
	
	
	
// Exercise Two
document.write("<br> <br>");
var text = "";
do {
	var play = prompt("Do you want to play?", "Enter Yes or No");
	if (play == "yes") {
	var game = prompt("Enter a Word") 
	text = text + game + " "
	}
	}
while (play == "yes");
document.write("Exercise Two- " + text);


// Exercise Three
document.write("<br> <br>");
if (prompt("Would you like to print your name?") == "yes") {
	var name = prompt("Enter your name");
	document.write("Exercise Three- Hello. My name is " + name + "; ");
	var write = "Hello. My name is " + name;
	while(prompt("Would you like to print this again?")== "yes") {
	write = write + "!";
	document.write("<br>");
	document.write(write);
}
} else{}


// Exercise 4
document.write("<br> <br>");
var time = prompt("What time of day is it?", "Enter morning, noon, or evening");
if (time == "morning") {
	document.write("Exercise Four- Since it is morning, you should be eating breakfast. We suggest eggs and toast")
} else if (time == "noon") {
	document.write("Exercise Four- Since it is noon, you should be eating lunch. We suggest a salad")
} else if (time == "evening") {
	document.write("Exercise Four- Since it is evening, you should be eating dinner. We suggest chicken and rice")
}
