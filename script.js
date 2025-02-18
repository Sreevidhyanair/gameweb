const stages = [
    {
        question: "What is the first phase of the Software Development Life Cycle (SDLC)?",
        answer: "Requirement Analysis",
        clue: "Great software starts with understanding the needs!"
    },
    {
        question: "Which software architecture pattern separates concerns into layers like Presentation, Business Logic, and Data Access?",
        answer: "Layered Architecture",
        clue: "Think of it like a well-organized bookshelf, where each section has its purpose!"
    },
    {
        question: "What type of software testing checks individual units or components of a software?",
        answer: "Unit Testing",
        clue: "A tiny but crucial step before the bigger picture comes together!"
    },
    {
        question: "Which Agile principle focuses on customer collaboration over contract negotiation?",
        answer: "Customer Collaboration",
        clue: "Working together builds the best solutions!"
    },
    {
        question: "In Agile team genesis, what is the final stage where teams work efficiently and independently?",
        answer: "Performing",
        clue: "This is where the magic happens!"
    }
];

let currentStage = 0;

function checkAnswer(input) {
    if (input.trim().toLowerCase() === stages[currentStage].answer.toLowerCase()) {
        alert("Correct! " + stages[currentStage].clue);
        currentStage++;
        if (currentStage < stages.length) {
            displayQuestion();
        } else {
            alert("Congratulations! You have completed the treasure hunt!");
        }
    } else {
        alert("Incorrect, try again!");
    }
}

function displayQuestion() {
    document.getElementById("question").innerText = stages[currentStage].question;
}

document.addEventListener("DOMContentLoaded", function() {
    displayQuestion();
    document.getElementById("submit").addEventListener("click", function() {
        let userInput = document.getElementById("answer").value;
        checkAnswer(userInput);
    });
});
