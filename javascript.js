let leftPlayerChoice = "";
let rightPlayerChoice = "";
let leftPlayerScore = 0;
let rightPlayerScore = 0;
let roundCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const leftPlayerImage = document.querySelector(".left-player-image");
    const rightPlayerImage = document.querySelector(".right-player-image");

    leftPlayerImage.innerHTML = "";
    rightPlayerImage.innerHTML = "";

    const leftPlayerScoreText = document.querySelector(".left-player-score");
    const rightPlayerScoreText = document.querySelector(".right-player-score");

    leftPlayerScoreText.textContent = leftPlayerScore;
    rightPlayerScoreText.textContent = rightPlayerScore;

    const btnRock = document.getElementById("btnRock");
    const btnPaper = document.getElementById("btnPaper");
    const btnScissors = document.getElementById("btnScissors");

    btnRock.addEventListener('click', () => {
        leftPlayerChoice = "rock";
        setImage(leftPlayerImage, leftPlayerChoice);
        playRound();
    });

    btnPaper.addEventListener('click', () => {
        leftPlayerChoice = "paper";
        setImage(leftPlayerImage, leftPlayerChoice);
        playRound();
    });

    btnScissors.addEventListener('click', () => {
        leftPlayerChoice = "scissors";
        setImage(leftPlayerImage, leftPlayerChoice);
        playRound();
    });
});


function playRound() {
    roundCount++;

    const lPlayerImage = document.querySelector(".left-player-image");
    const rPlayerImage = document.querySelector(".right-player-image");

    rightPlayerChoice = getComputerChoice();
    setImage(rPlayerImage, rightPlayerChoice);

    lPlayerImage.classList.remove("winner");
    rPlayerImage.classList.remove("winner");

    let result = resolveWinner(leftPlayerChoice, rightPlayerChoice);
    switch (result) {
        case 0:
            break;
        case 1:
            leftPlayerScore++;
            lPlayerImage.classList.add("winner");
            break;
        case 2:
            rightPlayerScore++;
            rPlayerImage.classList.add("winner");
            break;
    }

    updateScores();
    updateRoundCounter(result);
}

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum >= 0.66) {
        return "rock";
    } else if (randomNum < 0.66 && randomNum >= 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function resolveWinner(leftPlayerChoice, rightPlayerChoice) {
    if (leftPlayerChoice == rightPlayerChoice) {
        return 0;
    } else if (leftPlayerChoice === "rock" && rightPlayerChoice === "scissors") {
        return 1;
    } else if (leftPlayerChoice === "rock" && rightPlayerChoice === "paper") {
        return 2;
    } else if (leftPlayerChoice === "scissors" && rightPlayerChoice == "paper") {
        return 1;
    } else if (leftPlayerChoice === "scissors" && rightPlayerChoice === "rock") {
        return 2;
    } else if (leftPlayerChoice === "paper" && rightPlayerChoice === "rock") {
        return 1;
    } else if (leftPlayerChoice === "paper" && rightPlayerChoice === "scissors") {
        return 2;
    }
}

function setImage(playerImage, selection) {
    playerImage.innerHTML = `<img src="images/${selection}.jpg">`;
}

function updateScores() {
    const leftPlayerScoreText = document.querySelector(".left-player-score");
    const rightPlayerScoreText = document.querySelector(".right-player-score");

    leftPlayerScoreText.textContent = leftPlayerScore;
    rightPlayerScoreText.textContent = rightPlayerScore;
}

function updateRoundCounter(result) {
    const roundCounter = document.getElementById("roundCounter");
    roundCounter.textContent = "Rounds: " + roundCount;

    const resultText = document.getElementById("resultText");
    switch (result) {
        case 0:
            resultText.textContent = "Tie!";
            break;
        case 1:
            resultText.textContent = "Left player wins!";
            break;
        case 2:
            resultText.textContent = "Right player wins!";
            break;
    }
}
