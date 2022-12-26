function getComputerChoice() {
    /*Math.floor(Math.random() * (max - min + 1)) + min*/
    let num = Math.floor(Math.random() * 3) + 1
    let choice = "this doesnt work";
    
    switch (num) {
        case 1:
            choice = "Rock";
            break;
        
        case 2:
            choice = "Paper";
            break;

        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

function playRound(computerSelection, playerSelection) {
    const comNum = numberConverter(computerSelection);
    const playerNum = numberConverter(playerSelection);

    if (comNum - playerNum == 0) {
        return "Draw";
    }
    else if (comNum - playerNum == 1 || comNum - playerNum == -2) {
        return "Loss";
    } else {
        return "Won";
    }
}

function numberConverter(sign) {
    let num;
    sign = sign.toLowerCase();
    switch (sign) {
        case "rock":
            num = 1;
            break;

        case "paper":
            num = 2;
            break;

        case "scissors":
            num = 3;
            break;
    }
    return num;
}

function finalMessage(roundsWon) {
    if (roundsWon.Won > roundsWon.Loss) {
        return "Great job, you won!";
    }
    return "Wow, you need to improve, the computer beat you";
}


function countAdd(message) {
    switch (message) {
        case "Draw":
            roundsWon.Draw += 1;
            break;

        case "Won":
            roundsWon.Won += 1;
            break;

        case "Loss":
            roundsWon.Loss += 1;
            break;
    }
}

function getType(classes) {
    classes = Array.from(classes)
    classes.map(single => single.toLowerCase());
    const re = ["button", "paper"];
    if (classes.includes("rock")) return "rock";
    else if (classes.includes("paper")) return "paper";
    else if (classes.includes("scissors")) return "scissors";
}

function update() {
    let results = document.querySelectorAll(".score");
    let classList;
    results.forEach(result => {
        classList = result.classList;
        classList = Array.from(classList);
        classList.map(single => single.toLowerCase());
        if (classList.includes("draw")) {
            result.textContent = `Draws: ${roundsWon.Draw}`;
        } else if (classList.includes("wins")) {
            result.textContent = `Wins: ${roundsWon.Won}`;
        } else if (classList.includes("losses")) {
            result.textContent = `Losses: ${roundsWon.Loss}`;
        }
    })
}

function game(e) {
    const results = document.querySelector(".results");

    if (roundsWon.Won >= 5 || roundsWon.Loss >= 5) {
        results.textContent = finalMessage(roundsWon);
        return;
    }

    let computerSelection = getComputerChoice();
    let playerSelection = getType(this.classList);
    resultMesage = playRound(computerSelection, playerSelection);

    results.textContent = `${resultMesage}`;
    countAdd(resultMesage);
    update();

    if (roundsWon.Won >= 5 || roundsWon.Loss >= 5) {
        results.textContent = finalMessage(roundsWon);
    }
}

let roundsWon = {Draw:0, Won:0, Loss:0};

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", game));


