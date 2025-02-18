function checkAnswer(stageNumber, correctAnswer) {
    const answerInput = document.getElementById(`answer${stageNumber}`);
    const resultDiv = document.getElementById(`result${stageNumber}`);
    const userAnswer = answerInput.value.trim();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        resultDiv.textContent = "Correct!";
        resultDiv.classList.add("correct");
        resultDiv.classList.remove("incorrect");

        // Show the next stage
        const currentStage = document.getElementById(`stage${stageNumber}`);
        currentStage.classList.add("hidden");

        if (stageNumber < 5) {
            const nextStage = document.getElementById(`stage${stageNumber + 1}`);
            nextStage.classList.remove("hidden");
        } else {
            document.getElementById("congratulations").classList.remove("hidden");
        }

    } else {
        resultDiv.textContent = "Incorrect. Try again!";
        resultDiv.classList.add("incorrect");
        resultDiv.classList.remove("correct");
    }
}
