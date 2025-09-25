const result = document.querySelector(".result-message");
const yourScore = document.querySelector(".your-score span");
const machineScore = document.querySelector(".machine-score span");

const playHuman = (humanChoice) => {
    console.log("Humano escolheu:", humanChoice);
    const machineChoice = playMachine(); // agora retorna
    playTheGame(humanChoice, machineChoice); // passa os dois
}

const playMachine = () => {
    const machineChoice = ["rock", "paper", "scissors"];
    const randomNumber = numeroAleatorio();
    const choice = machineChoice[randomNumber];
    console.log("Máquina escolheu:", choice);
    return choice; // importante retornar!
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 3); // 0, 1 ou 2
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        console.log("Empate!");
        result.innerHTML = "Empate!";
    } else if (
        (human === "rock" && machine === "scissors") ||
        (human === "paper" && machine === "rock") ||
        (human === "scissors" && machine === "paper")
    ) {
        console.log("Você ganhou!");
        result.innerHTML = "Você ganhou!";
        yourScore.innerHTML = parseInt(yourScore.innerHTML) + 1;

    } else {
        console.log("Alexa ganhou!");
        result.innerHTML = "Alexa ganhou!";
        machineScore.innerHTML = parseInt(machineScore.innerHTML) + 1;
    }
}