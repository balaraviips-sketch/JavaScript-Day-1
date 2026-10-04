//Basic Functions

// 1
function hello() {
    console.log("Hello Everyone");
}
hello();

// 2
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

// 3
function navi() {
    console.log("Siva Prasad Reddy");
}
navi();

// 4
function message() {
    console.log("Good Morning");
    console.log("Have a Nice Day");
    console.log("Keep Learning JavaScript");
}
message();

// 5
function numbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
numbers();

// 6
function check() {
    let age = 20;

    if (age >= 18) {
        console.log("Condition is true");
    }
}
check();

// 7
function details() {
    console.log("Name: Siva Prasad Reddy");
    console.log("Qualification: B.Tech CSE");
    console.log("Role: Software Developer");
}
details();

// 8
function company() {
    console.log("Company: Stackly");
}
company();

// 9
function welcomeUser() {
    console.log("Welcome User");
}
welcomeUser();
welcomeUser();
welcomeUser();

// 10
function first() {
    console.log("This is first function");
}

function second() {
    console.log("This is second function");
}

first();
second();



//Parameters & Arguements
// 11
function display(value) {
    console.log(value);
}
display("Hello JavaScript");

// 12
function show(a, b) {
    console.log(a);
    console.log(b);
}
show(10, 20);

// 13
function add1(a, b) {
    console.log(a + b);
}
add1(10, 20);

// 14
function sub1(a, b) {
    console.log(a - b);
}
sub1(20, 10);

// 15
function multiply1(a, b) {
    console.log(a * b);
}
multiply1(10, 5);

// 16
function divide1(a, b) {
    console.log(a / b);
}
divide1(20, 5);

// 17
function student1(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
student1("Siva", 22);

// 18
function employee1(name, role, salary) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Salary:", salary);
}
employee1("Siva", "Developer", 30000);

// 19
function four(a, b, c, d) {
    console.log(a, b, c, d);
}
four(10, 20, 30, 40);

// 20
function six(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
six(10, 20, 30, 40, 50, 60);


//Default Parameters
// 21
function student(name, department = "CSE", cgpa) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}

student("Siva", undefined, 8.5);

// 22
function user(name, age = 18) {
    console.log("Name:", name);
    console.log("Age:", age);
}

user("Siva");

// 23
function employee(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employee("Siva");

// 24
function form(name, department, cgpa, disability = "no") {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
    console.log("Disability:", disability);
}

form("Siva", "CSE", 8.5);
form("Rahul", "ECE", 8.0, "yes");

// 25
function college(name, department, year = 4) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Year:", year);
}

college("Siva", "CSE");


//Return
// 26
function add2(a, b) {
    return a + b;
}

console.log(add2(10, 20));


// 27
function sub2(a, b) {
    return a - b;
}

console.log(sub2(20, 10));


// 28
function multiply2(a, b) {
    return a * b;
}

console.log(multiply2(10, 5));


// 29
function divide1(a, b) {
    return a / b;
}

console.log(divide1(20, 5));


// 30
function salary() {
    return 40000;
}

let mySalary = salary();
console.log(mySalary);


// 31
function employeeSalary(salary) {
    return salary;
}

console.log(employeeSalary(30000));


// 32
function personName() {
    return "Siva Prasad Reddy";
}

let name = personName();
console.log(name);


// 33
function result(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(result(70));
console.log(result(30));


// 34
function discountValue(price, discount) {
    return discount;
}

console.log(discountValue(1000, 100));


// 35
function calculate(a, b) {
    return a + b;
}

function display1(value) {
    console.log("Result:", value);
}

let resultValue = calculate(10, 20);
display1(resultValue);


//Outerscope
// 36
let city = "Kasi";

function showCity() {
    console.log(city);
}

showCity();


// 37
let person = {
    name: "Ravi",
    designation: "Full Stack Developer"
};

function showPerson() {
    console.log(person.name);
    console.log(person.designation);
}

showPerson();


// 38
let salaryAmount = 30000;

function addBonus() {
    let bonus = 5000;
    console.log(salaryAmount + bonus);
}

addBonus();


// 39
let employeeDetails = {
    name: "Ravikumar",
    role: "Full Stack Developer",
    salary: 40000
};

function showEmployee() {
    console.log(employeeDetails.name);
    console.log(employeeDetails.role);
    console.log(employeeDetails.salary);
}

showEmployee();


// 40
let msg = "Hello JavaScript";

function firstFunction() {
    console.log(msg);
}

function secondFunction() {
    console.log(msg);
}

firstFunction();
secondFunction();


//Named, Anonymous & Arrow functions
// 41
function displayName(name) {
    console.log(name);
}

displayName("Ravi");


// 42
let greet = function() {
    console.log("Hello Everyone");
};

greet();


// 43
let shows = (name) => {
    console.log(name);
};

shows("ravi");


// 44
let addition = (a, b) => {
    return a + b;
};

console.log(addition(10, 20));


// 45

// Named function
function namedAdd(a, b) {
    return a + b;
}

// Anonymous function
let anonymousAdd = function(a, b) {
    return a + b;
};

// Arrow function
let arrowAdd = (a, b) => {
    return a + b;
};

console.log(namedAdd(10, 20));
console.log(anonymousAdd(10, 20));
console.log(arrowAdd(10, 20));


//IIFE
// 46
(function() {
    console.log("Hello JavaScript");
})();


// 47
(function(name) {
    console.log("Hello " + name);
})("Siva");


// 48 
(function(product, discount) {
    console.log("Special Offer!");
    console.log(product + " is available with " + discount + "% discount.");
})("Laptop", 20);


//Callback & Higher-Order Functions
// 49
function add3(callback, a, b) {
    let result = a + b;

    console.log("Addition:", result);

    callback(a, b);
}

function callbackFunction(a, b) {
    console.log("Callback executed");
}

add3(callbackFunction, 10, 20);


// 50
function add(callback, a, b) {
    let result = a + b;

    console.log("Addition:", result);

    callback(a, b);
}

function sub(a, b) {
    let result = a - b;

    console.log("Subtraction:", result);
}

add(sub, 20, 10);