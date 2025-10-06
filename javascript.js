let leftPlayerChoice = "";

document.addEventListener('DOMContentLoaded', () => {
    const leftPlayerImage = document.querySelector(".left-player-image");
    const rightPlayerImage = document.querySelector(".right-player-image");

    leftPlayerImage.innerHTML = "";
    rightPlayerImage.innerHTML = "";

    const btnRock = document.getElementById("btnRock");
    const btnPaper = document.getElementById("btnPaper");
    const btnScissors = document.getElementById("btnScissors");

    btnRock.addEventListener('click', () => {
        leftPlayerChoice = "rock"
        setImage(leftPlayerImage, leftPlayerChoice);
    });

    btnPaper.addEventListener('click', () => {
        leftPlayerChoice = "paper"
        setImage(leftPlayerImage, leftPlayerChoice);
    });

    btnScissors.addEventListener('click', () => {
        leftPlayerChoice = "scissors"
        setImage(leftPlayerImage, leftPlayerChoice);
    });
});

function setImage(playerImage, selection) {
    playerImage.innerHTML = `<img src="images/${selection}.jpg">`;
}