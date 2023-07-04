const choices = ["rock ", "paper ", "scissors "];

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = checkResult(playerChoice, computerChoice);

    document.getElementById("result ").innerHTML = result.message;
    document.getElementById("computer-choice ").innerHTML = `Computer chose: ${computerChoice}`;

    document.querySelectorAll(".choice ").forEach((choice) => {
        choice.classList.remove("selected ");
    });

    const playerChoiceEl = document.querySelector(`.${playerChoice}`);
    playerChoiceEl.classList.add("selected ");

    const computerChoiceEl = document.querySelector(`.${computerChoice}`);
    computerChoiceEl.classList.add("selected ");
}

function checkResult(playerChoice, computerChoice) {
    if (playerChoice.trim() === computerChoice.trim()) {
        return {
            message: "It 's a tie!",
            result: "tie"
        };
    }

    if (
        (playerChoice.trim() === "rock" && computerChoice.trim() === "scissors") ||
        (playerChoice.trim() === "paper" && computerChoice.trim() === "rock") ||
        (playerChoice.trim() === "scissors" && computerChoice.trim() === "paper")
    ) {
        return {
            message: "You win!",
            result: "win"
        };
    }

    return {
        message: "You lose!",
        result: "lose"
    };
}
