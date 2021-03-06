// 1 task. Use an Array to Store a Collection of Data

let yourArray = ['string', 19, false, [1, 9], { a: 1, b: 5 }];

// 2 task. Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
myArray[1] = 'index = 1'
console.log(myArray);

// 3 task. Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
	// Only change code below this line
	arr.unshift('I', 2, 'three')
	arr.push(7, 'VIII', 9)
	// Only change code above this line
	return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// 4 task. Remove Items from an Array with pop() and shift()

function popShift(arr) {
	let popped = arr.pop(); // Change this line
	let shifted = arr.shift(); // Change this line
	return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// 5 task. Remove Items Using splice()

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4)
console.log(arr);

// 6 task. Add Items Using splice()

function htmlColorNames(arr) {
	// Only change code below this line
	arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
	// Only change code above this line
	return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// 7 task. Copy Array Items Using slice()

function forecast(arr) {
	const newArray = arr.slice(2, 4)
	return newArray;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// 8 task. Copy an Array with the Spread Operator

function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		// Only change code below this line
		newArr.push([...arr])
		// Only change code above this line
		num--;
	}
	return newArr;
}

console.log(copyMachine([true, false, true], 2));

// 9 task. Combine Arrays with the Spread Operator

function spreadOut() {
	let fragment = ['to', 'code'];
	let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
	return sentence;
}

console.log(spreadOut());

// 10 task. Check For The Presence of an Element With indexOf()Passed

function quickCheck(arr, elem) {
	if (arr.indexOf(elem) != -1) {
		return true;
	} else {
		return false;
	}
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 11 task. Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(elem) == -1) {
			newArr.push(arr[i]);
		}
	}
	// Only change code above this line
	return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// 12 task. Create complex multi-dimensional arrays

let myNestedArray = [
	// Only change code below this line
	['unshift', ['deep', ['deeper', ['deepest', 'lol']]], false, 1, 2, 3, 'complex', 'nested'],
	['loop', 'shift', 6, 7, 1000, 'method'],
	['concat', false, true, 'spread', 'array'],
	['mutate', 1327.98, 'splice', 'slice', 'push'],
	['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
	// Only change code above this line
];

// 13 task. Add Key-Value Pairs to JavaScript Objects

let foods = {
	apples: 25,
	oranges: 32,
	plums: 28
};

foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;

console.log(foods);

// 14 task. Modify an Object Nested Within an Object

let userActivity = {
	id: 23894201352,
	date: 'January 1, 2017',
	data: {
		totalUsers: 51,
		online: 42
	}
};

userActivity['data']['online'] = 45

console.log(userActivity);

// 15 task. Access Property Names with Bracket Notation

let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
};

function checkInventory(scannedItem) {

	return foods[scannedItem];

}

console.log(checkInventory("apples"));

// 16 task. Use the delete Keyword to Remove Object Properties

let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

// 17 task. Check if an Object has a Property

let users = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function isEveryoneHere(userObj) {

	if (userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')) {
		return true;
	} else return false;

}

console.log(isEveryoneHere(users));

// 18 task. Iterate Through the Keys of an Object with a for...in Statement

function countOnline(usersObj) {

	let count = 0;
	for (let user in usersObj) {
		if (usersObj[user].online == true) {
			count++;
		}
	}
	return count;
}

// 19 task. Generate an Array of All Object Keys with Object.keys()

let users = {
	Alan: {
		age: 27,
		online: false
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: false
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function getArrayOfUsers(obj) {

	return Object.keys(obj);

}

console.log(getArrayOfUsers(users));

// 20 task. Modify an Array Stored in an Object

let user = {
	name: 'Kenneth',
	age: 28,
	data: {
		username: 'kennethCodesAllDay',
		joinDate: 'March 26, 2016',
		organization: 'freeCodeCamp',
		friends: [
			'Sam',
			'Kira',
			'Tomo'
		],
		location: {
			city: 'San Francisco',
			state: 'CA',
			country: 'USA'
		}
	}
};

function addFriend(userObj, friend) {

	userObj.data.friends.push(friend);
	return userObj.data.friends;

}

console.log(addFriend(user, 'Pete'));