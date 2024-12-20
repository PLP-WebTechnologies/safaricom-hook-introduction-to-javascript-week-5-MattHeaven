
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Cycling", "Coding"];
let person = { firstName: "Jane", lastName: "Doe" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);


function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    const calcDiv = document.getElementById("calculator");
    calcDiv.innerHTML = `<p>Result: ${result}</p>`;
}


calculator();

function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript learning.`;
}

const greetingMessage = greetUser(name);
console.log(greetingMessage);

const userAge = parseInt(prompt("Enter your age:"));
const voteMessageDiv = document.getElementById("vote-message");

if (userAge >= 18) {
    voteMessageDiv.innerHTML = `<p>You are eligible to vote.</p>`;
} else {
    voteMessageDiv.innerHTML = `<p>You are not eligible to vote.</p>`;
}

const numberList = document.getElementById("number-list");

for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

document.querySelector("h1").textContent = "JavaScript in Action!";
const dynamicContentDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);
