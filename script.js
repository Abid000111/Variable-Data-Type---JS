console.log("The journy of Java Script is start.");

var fullName = "Abid Shahrier";
console.log(fullName);

const dateOfBirth = 2001;
console.log(dateOfBirth);

let price = 100;
console.log(price);

console.log((500 + 100) * 2);

let x = null;
let y = undefined;
console.log(x, y);

let isFollow = true;
console.log(isFollow);

let isUnfollow = false;
console.log(isUnfollow);

let owner;
console.log(owner);

let b;
b = 555;
console.log(b);

{
	let Class = 5;
	console.log(Class);
}

{
	let Class = 10;
	console.log(Class);
}
console.log(typeof fullName);

let kjk = BigInt("123");
let hgh = Symbol("Hello");
console.log(kjk, hgh);
console.log(typeof kjk, hgh);

const student = {
	Name: "Tamim Ahmed",
	age: 18,
	Class: 11
};
student["Name"] = "Abid Shahrier";
student["age"] = student["age"] + 5;
console.log(student);
console.log(typeof student);
console.log(student["Name"]);
console.log(student.Name);
console.log(student["age"]);
console.log(student["Class"]);

student["age"] = student["age"] + 2;
student["Name"] = "Iqbal Hasan";
console.log(student.Name);
console.log(student.age);
console.log(student.Class);
