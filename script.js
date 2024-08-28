//style console
console.log("%c Hello World", "font-size:25px; background:red; color:blue");

//warning
console.warn("Oh No!");

//error
console.error("Ohh! Shit");

//info
console.info("This is a info");

// testing
const pera = document.querySelector('p');
console.assert(pera.classList.contains("hero"), "That Is Wrong!");

//clearing
console.clear()

//viewing DOM Elements
const pera1 = document.querySelector('p');
console.dir(pera1);

//Group
console.log("This is outside any group");

console.group("First Group");
console.log("Message 1 in First Group");
console.log("Message 2 in First Group");

console.group("Nested Group in First Group");
console.log("Message 1 in Nested Group");
console.log("Message 2 in Nested Group");
console.groupEnd();

console.log("Back to First Group");
console.groupEnd();

console.log("This is outside any group again");

