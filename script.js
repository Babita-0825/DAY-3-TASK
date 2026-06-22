// task 1- Employee information system Requirements

// let employee = {
//     name: prompt("Enter Employee Name"),
//     age: Number(prompt("Enter Employee Age")),
//     department: prompt("Enter Employee Department"),
//     salary: Number(prompt("Enter Employee Salary"))
// };

// console.log(employee);

// if (employee.salary > 30000) {
//     console.log("Eligible for Bonus");
// } else {
//     console.log("Not Eligible");
// }

// task 2- Supermarket Billing Requirments

// let price = Number(prompt("Enter Product Price"));
// let qauntity = Number(prompt("Enter Quantity"));

// let total = price * quantity;

// if (total > 5000) {
//     total = total - (total * 10 / 100);
// }

// console.log("Final Amount:", total);

// Student Result Portal Requirement

// let marks = Number(prompt("Enter Marks"));

// if (marks >= 90) {
//     console.log("Grade A");
// }
// else if (marks >= 75) {
//     console.log("Grade B");
// }
// else if (marks >= 50) {
//     console.log("Grade C");
// }
// else {
//     console.log("Fail");
// }

// task 4 - Bank ATM Eligiblity Requirements

let balance = Number(prompt("Enter Account Balance"));
let withdrawalAmount = Number(prompt("Enter Withdrawal Amount"));

if (withdrawalAmount <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

// task 5- Login Validation Requirements

let username = "admin";
let password = "12345";

let user = prompt("Enter Username");
let pass = prompt("Enter Password");

if (user === username && pass === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// task 6- Online Food Order Requirements

let foods = ["Pizza", "Burger", "Pasta", "Sandwich", "Noodles", "Dosa", "Biryani", "Ice Cream"];

console.log("First Item:", foods[0]);
console.log("Last Item:", foods[foods.length - 1]);
console.log("Total Items:", foods.length);

for (let item of foods) {
    console.log(item);
}

// task 7- Company Employee Directory Requirements

let employee = {
    name: "Sunaina",
    age: 25,
    department: "MERN",
    salary: 40000,
    experience: 1
};

for (let key in employee) {
    console.log(key, ":", employee[key]);
}


// task 8 - Traffic Signal System Requirments

let trafficlight = prompt("Enter Signal Color");

switch (trafficlight) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// task 9- Age Category Checker Requirements

let age = Number(prompt("Enter Your Age"));

if (age <= 12) {
    console.log("Child");
}
else if (age <= 19) {
    console.log("Teenager");
}
else if (age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}


// task 10- Empployee Attendance Requirements

let name = prompt("Enter Employee Name");
let attendance = prompt("Enter Attendance");

console.log(`Welcome ${name}`);
console.log(attendance === "Present" ? "Attendance: Present" : "Attendance: Absent");