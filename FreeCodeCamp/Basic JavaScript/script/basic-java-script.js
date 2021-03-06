// 1 task. Try creating one of each type of comment.

// First task
/*
First task
 */

// 2 task. Use the var keyword to create a variable called myName.

var myName;

// 3 task. Assign the value 7 to variable a.

var a;
a = 7;

// 4 task. Assign the contents of a to variable b.

var b;
b = a;

// 5 task. Define a variable a with var and initialize it to a value of 9.

var a = 9;

// 6 task. Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

var a;
a = 5;
var b;
b = 10;
var c;
c = "I am a"

a = a + 1;
b = b + 5;
c = c + " String!";

// 7 task. Modify the existing declarations and assignments so their names use camelCase. Do not create any new variables.

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 8 task. Change the 0 so that sum will equal 20. (var sum = 10 + 0)

var sum = 10 + 10;

// 9 task. Change the 0 so the difference is 12. (var difference = 45 - 0;)

var difference = 45 - 33;

// 10 task. Change the 0 so that product will equal 80. (var product = 8 * 0)

var product = 8 * 10;

// 11 task. Change the 0 so that the quotient is equal to 2. (var quotient = 66 / 0)

var quotient = 66 / 33;

// 12 task. Change the code to use the ++ operator on myVar. (myVar = myVar + 1)

var myVar = 87;
myVar++;

// 13 task. Change the code to use the -- operator on myVar. (myVar = myVar - 1)

var myVar = 11;
myVar--;

// 14 Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).

var myDecimal = 5.7;

// 15 task. Change the 0.0 so that product will equal 5.0. (var product = 2.0 * 0.0)

var product = 2.0 * 2.5;

// 16 task. Change the 0.0 so that quotient will equal to 2.2. (var quotient = 0.0 / 2.0)

var quotient = 4.4 / 2.0

// 17 task. Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.

var remainder = 11 % 3;

// 18 task. Convert the assignments for a, b, and c to use the += operator.
var a = 3;
var b = 17;
var c = 12;

/* a = a + 12;
b = 9 + b;
c = c + 7; */

a += 12;
b += 9;
c += 7;

// 19 task. Convert the assignments for a, b, and c to use the -= operator.

var a = 11;
var b = 9;
var c = 3;

/* a = a - 6;
b = b - 15;
c = c - 1; */

a -= 6;
b -= 15;
c -= 1;

// 20 task. Convert the assignments for a, b, and c to use the *= operator.

var a = 5;
var b = 12;
var c = 4.6;

/* a = a * 5;
b = 3 * b;
c = c * 10; */

a *= 5;
b *= 3;
c *= 10;

// 21 task. Convert the assignments for a, b, and c to use the /= operator.

var a = 48;
var b = 108;
var c = 33;

/* a = a / 12;
b = b / 4;
c = c / 11; */

a /= 12;
b /= 4;
c /= 11;

// 22 task. Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.

var myFirstName = 'Pavel';
var myLastName = 'Zheleznyak';

// 23 task. Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
//I am a "double quoted" string inside "double quotes".

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 24 task. Change the provided string to a string with single quotes at the beginning and end and no escape characters.
// var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 25 task. Assign the following three lines of text into the single variable myStr using escape sequences.

/* FirstLine
	\SecondLine
ThirdLine */

var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

// 26 task. Build myStr from the strings 'This is the start.' and 'This is the end.' using the + operator. Be sure to include a space between the two strings.

var myStr = 'This is the start. ' + 'This is the end.';

// 27 task. Build myStr over several lines by concatenating these two strings: 'This is the first sentence.' and 'This is the second sentence.' using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

var myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.'

// 28 task. Set myName to a string equal to your name and build myStr with myName between the strings 'My name is' and 'and I am well!'

var myName = 'Pavel';
var myStr = 'My name is ' + myName + 'and I am well!';

// 29 task. Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

var someAdjective = 'cool';
var myStr = "Learning to code is ";
myStr += someAdjective;

// 30 task. Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.

var lastNameLength = 0;
var lastName = "Lovelace";
// lastNameLength = lastName;

lastNameLength = lastName.length;

// 31 task. Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

var firstLetterOfLastName = "";
var lastName = "Lovelace";
// firstLetterOfLastName = lastName;

firstLetterOfLastName = lastName[0];

// 32 task. Correct the assignment to myStr so it contains the string value of 'Hello World' using the approach shown in the example above.

var myStr = "Jello World";
//myStr[0] = "H";
myStr = "Hello World";

// 33 task. Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

var lastName = "Lovelace";
//var thirdLetterOfLastName = lastName;
var thirdLetterOfLastName = lastName[2];//33

// 34 task. Use bracket notation to find the last character in the lastName variable.

var lastName = "Lovelace";
//var lastLetterOfLastName = lastName;
var lastLetterOfLastName = lastName[lastName.length - 1];

// 35 task. Use bracket notation to find the second-to-last character in the lastName string.

var lastName = "Lovelace";
//var secondToLastLetterOfLastName = lastName; 
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 36 task. Use bracket notation to find the second-to-last character in the lastName string.

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
//var wordBlanks = "";
var wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

//37 task. Modify the new array myArray so that it contains both a string and a number(in that order).

var myArray = ['Pavel', 19];

//38 task. Create a nested array called myArray.

//var myArray = [];
var myArray = [['Pavel']];

//39 task. Create a variable called myData and set it to equal the first value of myArray using bracket notation.

var myArray = [50, 60, 70];
var myData = myArray[0];

//40 task. Modify the data stored at index 0 of myArray to a value of 45.

var myArray = [18, 64, 99];
myArray[0] = 45;

//41 task. Using bracket notation select an element from myArray such that myData is equal to 8.

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];

//42 task. Push ["dog", 3] onto the end of the myArray variable.

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//43 task. Use the .pop() function to remove the last item from myArray, assigning the popped off value to removedFromMyArray.

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

//44 task. Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();


//45 task. Add ["Paul",35] to the beginning of the myArray variable using unshift().

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//46 task. There should be at least 5 sub-arrays in the list.

var myList = [["Candy", 10], ["Sausage", 11], ["Eggs", 12], ["Orange", 13], ["Ice cream", 15]];

//47 task. Create a function called reusableFunction which prints the string Hi World to the dev console. Call the function.

function reusableFunction() {
	console.log("Hi World");
}
reusableFunction();

//48 task. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console. Call the function with two numbers as arguments.

function functionWithArgs(firstParam, secondParam) {
	console.log(firstParam + secondParam);
}
functionWithArgs(3, 4);

//49 task. Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10. Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

var myGlobal = 10;

function fun1() {
	oopsGlobal = 5;
}

function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

//50 task. The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
	var myVar;
	console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

//51 task. Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

var outerWear = "T-Shirt";

function myOutfit() {
	var outerWear = "sweater";
	return outerWear;
}

myOutfit();

//52 task. Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
	return num * 5;
}

//53 task. Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

var sum = 0;

function addThree() {
	sum = sum + 3;
}

function addFive() {
	sum = sum + 5;
}

addThree();
addFive();

//54 task. Call the processArg function with an argument of 7 and assign its return value to the variable processed.

var processed = 0;

function processArg(num) {
	return (num + 3) / 5;
}

processed = processArg(7);

//55 task. Add the number to the end of the array, then remove the first element of the array. The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
	arr.push(item);
	var newArr = arr.shift();
	return newArr;
}

var testArr = [1, 2, 3, 4, 5];

//56 task. Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {

	return true;

}

//57 task. Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return 'Yes, that was true';
	}
	return 'No, that was false';
}

//58 task. Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
}

testEqual(10);

//59 task. Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7

function testStrict(val) {
	if (val === 7) {
		return "Equal";
	}
	return "Not Equal";
}

testStrict(10);

//60 task. The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

function compareEquality(a, b) {
	if (a == b) {
		return "Equal";
	}
	return "Not Equal";
}

compareEquality(10, "10");

//61 task. Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99

function testNotEqual(val) {
	if (val != 99) {
		return "Not Equal";
	}
	return "Equal";
}

testNotEqual(10);

//62 task. Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

function testStrictNotEqual(val) {
	if (val !== 17) {
		return "Not Equal";
	}
	return "Equal";
}

testStrictNotEqual(10);

//63 task. Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	}

	if (val > 10) {
		return "Over 10";
	}

	return "10 or Under";
}

testGreaterThan(10);

//64 task. Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
	if (val >= 20) {
		return "20 or Over";
	}

	if (val >= 10) {
		return "10 or Over";
	}

	return "Less than 10";
}

testGreaterOrEqual(10);

//65 task. Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
	if (val < 25) {
		return "Under 25";
	}

	if (val < 55) {
		return "Under 55";
	}

	return "55 or Over";
}

testLessThan(10);

//66 task. Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
	if (val <= 12) {
		return "Smaller Than or Equal to 12";
	}

	if (val <= 24) {
		return "Smaller Than or Equal to 24";
	}

	return "More Than 24";
}

testLessOrEqual(10);

//67 task. Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

function testLogicalAnd(val) {

	if (val <= 50 && val >= 25) {
		return "Yes";
	}

	return "No";
}

testLogicalAnd(10);

//68 task. Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {

	if (val < 10 || val > 20) {
		return "Outside";
	}

	return "Inside";
}

testLogicalOr(15);

//69 task. Combine the if statements into a single if/else statement.

function testElse(val) {
	var result = "";

	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or Smaller";
	}

	return result;
}

testElse(4);

//70 task. Convert the logic to use else if statements.

function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) {
		return "Smaller than 5";
	} else {
		return "Between 5 and 10";
	}
}

testElseIf(7);

//71 task. Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
	if (val < 5) {
		return "Less than 5";
	} if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
	}
}

orderMyLogic(7);

//72 task. Write chained if/else if statements to fulfill the following conditions:
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {

	if (num < 5) {
		return 'Tiny';
	} else if (num < 10) {
		return 'Small';
	} else if (num < 15) {
		return 'Medium';
	} else if (num < 20) {
		return 'Large';
	} else if (num >= 5) {
		return 'Huge';
	}

	return "Change Me";

}

testSize(7);

//73 task. Golf CodePassed

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else if (strokes >= par + 3) {
		return names[6];
	}
	return "Change Me";

}

golfScore(5, 4);

//74 task. Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
	var answer = "";
	switch (val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
	}

	return answer;
}

caseInSwitch(1);

//75 task. Adding a Default Option in Switch Statements

function switchOfStuff(val) {
	var answer = "";

	switch (val) {
		case 'a':
			answer = "apple";
			break;
		case 'b':
			answer = "bird";
			break;
		case 'c':
			answer = "cat";
			break;
		default:
			answer = "stuff";
			break;
	}

	return answer;
}

switchOfStuff(1);

//76 task. Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
	var answer = "";

	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}

	return answer;
}

sequentialSizes(1);

//77 task. Replacing If Else Chains with Switch

function chainToSwitch(val) {
	var answer = "";
	// Only change code below this line
	switch (val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The Answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much!";
			break;
		case 7:
			answer = "Ate Nine";
			break;
	}


	return answer;
}

chainToSwitch(7);

//78 task. Returning Boolean Values from Functions

function isLess(a, b) {

	return a < b;

}

isLess(10, 15);

//79 task. Return Early Pattern for Functions

// Setup
function abTest(a, b) {

	if (a < 0 || b < 0) {
		return undefined;
	}

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// 80 task. Counting Cards

var count = 0;

function cc(card) {

	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--;
			break;
		default:
			count = count;
			break;
	}
	if (count > 0) {
		return count + ' ' + 'Bet';
	} else if (count <= 0) {
		return count + ' ' + 'Hold';
	}
	return "Change Me";

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//81 task. Build JavaScript Objects

var myDog = {

	name: 'Jeck',
	legs: 4,
	tails: 1,
	friends: ['Pit', 'Alpha']

};

//82 task. Accessing Object Properties with Dot Notation

var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//83 task. Accessing Object Properties with Bracket Notation

var testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};

var entreeValue = testObj['an entree'];
var drinkValue = testObj['the drink'];

//84 task. Accessing Object Properties with Variables

var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

//85 task. Updating Object Properties

var myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

//86 task. Add New Properties to a JavaScript Object

var myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'woof';

//87 task. Delete Properties from a JavaScript Object

var myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"],
	"bark": "woof"
};

delete myDog.tails

//88 task. Using Objects for Lookups

function phoneticLookup(val) {
	var result = "";

	const lookup = {
		alpha: "Adams",
		bravo: "Boston",
		charlie: "Chicago",
		delta: "Denver",
		echo: "Easy",
		foxtrot: "Frank",
	};

	var value = val;
	result = lookup[value];

	return result;
}

phoneticLookup("charlie");

//89 task. Testing Objects for Properties

function checkObj(obj, checkProp) {

	if (obj.hasOwnProperty(checkProp)) {
		return obj[checkProp];
	}
	return "Not Found";

}

//90 task. Manipulating Complex Objects

var myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": true
	},
	{
		"artist": "Michael Jackson",
		"title": "Thriller",
		"release_year": 1982,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": false
	}
];

//91 task. Accessing Nested Objects

var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

var gloveBoxContents = myStorage.car.inside["glove box"];

//92 task. Accessing Nested Arrays

var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = myPlants[1].list[1]

//93 task. Record Collection

// Setup
var recordCollection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name']
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette']
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: []
	},
	5439: {
		albumTitle: 'ABBA Gold'
	}
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
	if (prop === "tracks" && value !== "") {
		if ("tracks" in records[id]) {
			records[id]["tracks"].push(value);
		} else {
			records[id]["tracks"] = [];
			records[id]["tracks"].push(value);
		}

	} else if (prop !== "tracks" && value !== "") {
		records[id][prop] = value;
	} else if (value === "") {
		delete records[id][prop];
	}
	return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//94 task. Iterate with JavaScript While Loops

var myArray = [];
var i = 5;
while (i >= 0) {
	myArray.push(i);
	i--;
}

//95 task. Iterate with JavaScript For Loops

var myArray = [];
for (var i = 1; i <= 5; i++) {
	myArray.push(i);
}

//96 task. Iterate Odd Numbers With a For Loop

var myArray = [];
for (var i = 1; i < 10; i += 2) {
	myArray.push(i);
}

//97 task. Count Backwards With a For Loop

var myArray = [];
for (var i = 9; i > 0; i -= 2) {
	myArray.push(i);
}

//98 task. Iterate Through an Array with a For Loop

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
	total += myArr[i];
}

//99 task. Nesting For Loops

function multiplyAll(arr) {
	var product = 1;

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product *= arr[i][j];
		}
	}

	return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//100 task. Iterate with JavaScript Do...While Loops

var myArray = [];
var i = 10;
do {
	myArray.push(i);
	i++;
}
while (i < 11)

//101 task. Replace Loops using Recursion

function sum(arr, n) {

	if (n <= 0) {
		return 0;
	} else {
		return sum(arr, n - 1) + arr[n - 1];
	}

}

//102 task. Profile Lookup

var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Laine",
		"number": "0543236543",
		"likes": ["Pizza", "Coding", "Brownie Points"]
	},
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "0994372684",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	},
	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "0487345643",
		"likes": ["Intriguing Cases", "Violin"]
	},
	{
		"firstName": "Kristian",
		"lastName": "Vos",
		"number": "unknown",
		"likes": ["JavaScript", "Gaming", "Foxes"]
	}
];


function lookUpProfile(name, prop) {

	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i]['firstName'] == name && contacts[i].hasOwnProperty(prop)) {
			return contacts[i][prop];
		} else if (contacts[i]['firstName'] == name && !contacts[i].hasOwnProperty(prop)) {
			return 'No such property';
		}
	}

	for (let i = 0; i < contacts.length; i++) {

		if (contacts[i]['firstName'] !== name) {
			return 'No such contact';
		}
	}


}

lookUpProfile("Akira", "likes");

// 103 task. Generate Random Fractions with JavaScript

function randomFraction() {

	return Math.random();

}

// 104 task. Generate Random Whole Numbers with JavaScript

function randomWholeNum() {

	return Math.floor(Math.random() * 10);

}

// 105 task. Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {

	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// 106 task. Use the parseInt Function

function convertToInteger(str) {

	return parseInt(str);

}

convertToInteger("56");

// 107 task. Use the parseInt Function with a Radix

function convertToInteger(str) {

	return parseInt(str, 2);

}

convertToInteger("10011");

// 108 task. Use the Conditional (Ternary) Operator

function checkEqual(a, b) {

	return a == b ? 'Equal' : 'Not Equal';

}

checkEqual(1, 2);

// 109 task. Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
	return (num > 0) ? "positive"
		: (num < 0) ? "negative"
			: "zero";
}

checkSign(10);

// 110 task. Use Recursion to Create a Countdown

function countdown(n) {
	if (n < 1) {
		return [];
	} else {
		const countArray = countdown(n - 1);
		countArray.unshift(n);
		return countArray;
	}
}

// 111 task. Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
	if (endNum - startNum === 0) {
		return [startNum];
	} else {
		const countArray = rangeOfNumbers(startNum, endNum - 1);
		countArray.push(endNum);
		return countArray;
	}
};

console.log(rangeOfNumbers(7, 12))



function highAndLow(numbers) {
	let newArraynumbers = numbers.split(' ').filter((item) => item !== ' ').map((item) => +item);
	let maxNumber = Math.max.apply(null, newArraynumbers)
	let minNumber = Math.min.apply(null, newArraynumbers)

	return `${maxNumber} ${minNumber}`
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")






