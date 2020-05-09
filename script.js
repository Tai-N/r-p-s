let userScore = 0;
let cpuScore = 0;
let userScoreBox = document.getElementById("user-score-box");
let cpuScoreBox = document.getElementById("cpu-score-box");

const rockBtn = document.getElementById("r-btn");
const paperBtn = document.getElementById("p-btn");
const scissorsBtn = document.getElementById("s-btn");

const gameMssg = document.getElementById("game-mssg");

const cpuPicks = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
};

const listenForUserPicks = () => {
  rockBtn.addEventListener("click", () => {
    playRound("rock", cpuPicks());
  });
  paperBtn.addEventListener("click", () => {
    playRound("paper", cpuPicks());
  });
  scissorsBtn.addEventListener("click", () => {
    playRound("scissors", cpuPicks());
  });
};

const playRound = (userChoice, cpuChoice) => {
  let combinedChoices = userChoice + cpuChoice;
  let roundResult = "";

  switch (combinedChoices) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      roundResult = "It's a tie!";
      gameMssg.textContent = roundResult;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      roundResult = "You lose!";
      gameMssg.textContent = roundResult;
      break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      roundResult = "You win!";
      gameMssg.textContent = roundResult;
      break;
    default:
      break;
  }

  updateScores(roundResult);
};

const updateScores = (roundResult) => {
  if (roundResult === "You lose!") {
    cpuScore++;
  } else if (roundResult === "You win!") {
    userScore++;
  }

  userScoreBox.textContent = userScore;
  cpuScoreBox.textContent = cpuScore;

  if (userScore === 5) {
    gameMssg.textContent = "You are the official winner!";
    disableBtns(); } else if (cpuScore === 5) {
    gameMssg.textContent = "You are the official loser!";
    disableBtns();
  }
};

const resetGame = () => {
  userScore = 0;
  cpuScore = 0;
  userScoreBox.textContent = userScore;
  cpuScoreBox.textContent = cpuScore;
  gameMssg.textContent = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
};

const disableBtns = () => {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
};

listenForUserPicks();
