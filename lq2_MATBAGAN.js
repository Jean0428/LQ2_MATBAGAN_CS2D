// Asking for the user to prompt inputs
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

// to print the name based on 1/4 of the age
function nameIterations(userName, iterations) {
    for (let i = 0; i < iterations; i++) {
        console.log(userName + " Iteration: " + (i + 1));
    }
}

// Conditional statement to detect the course
switch (course) {
    case "BSCS":
        // to check the class role for BSCS
        if (classRole === "Officer") {
            alert("You are an Officer in BSCS");
            nameIterations(name, Math.floor(age / 4));
        } else if (classRole === "Student") {
            alert("You are a Student in BSCS");
            nameIterations(name, Math.floor(age / 4));
        } else if (classRole === "Teacher") {
            alert("You are a Teacher in BSCS");
            nameIterations(name, Math.floor(age / 4));
        } else {
            // Fallback code 
            alert("You have an undefined role in BSCS");
            nameIterations(name, Math.floor(age / 4));
        }
        break;

    case "BSM":
        // to check the class role for BSM
        if (classRole === "Officer") {
            alert("You are an Officer in BSM");
            nameIterations(name, Math.floor(age / 4));
        } else if (classRole === "Student") {
            alert("You are a Student in BSM");
            nameIterations(name, Math.floor(age / 4));
        } else if (classRole === "Teacher") {
            alert("You are a Teacher in BSM");
            nameIterations(name, Math.floor(age / 4));
        } else {
            // Fallback code 
            alert("You have an undefined role in BSM");
            nameIterations(name, Math.floor(age / 4));
        }
        break;

    case "BAEL":
        // to check the class role for BAEL
        if (classRole === "Officer") {
            alert("You are an Officer in BAEL");
            nameIterations(name, Math.floor(age / 4));
        } else if (classRole === "Student") {
            alert("You are a Student in BAEL");
            nameIterations(name, Math.floor(age / 4));
        } else if (classRole === "Teacher") {
            alert("You are a Teacher in BAEL");
            nameIterations(name, Math.floor(age / 4));
        } else {
            // Fallback code
            alert("You have an undefined role in BAEL");
            nameIterations(name, Math.floor(age / 4));
        }
        break;

    default:
        // A Fallback code
        alert("Invalid course! Please choose from BSCS, BSM, or BAEL.");
}