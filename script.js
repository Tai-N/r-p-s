const cpuPicks = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
};

const userPicks = () => {
  const userBtns = document.querySelector(".user-btns");

  userBtns.addEventListener("click", (e) => {
    debugger;
    if (e.target.matches(".r-btn")) {
      playRound("rock", cpuPicks());
    } else if (e.target.textContent === "Paper") {
      playRound("paper", cpuPicks());
    } else if (e.target.textContent === "Scissors") {
      playRound("scissors", cpuPicks());
    } else {
    }
  });
};

const playRound = (userChoice, cpuChoice) => {
  let combinedChoices = userChoice + cpuChoice;
  let roundResult = "";

  switch (combinedChoices) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("It's a tie!");
      roundResult = "It's a tie!";
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("You lose!");
      roundResult = "You lose!";
      break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("You win!");
      roundResult = "You win!";
      break;
    default:
      break;
  }

  scoresUpdate(roundResult);
};

const scoresUpdate = (roundResult) => {
  let userScoreBox = document.getElementById("user-score-box");
  let cpuScoreBox = document.getElementById("cpu-score-box");

  let userScore = 0;
  let cpuScore = 0;

  if (roundResult === "You lose!") {
    cpuScore++;
  } else if (roundResult === "You win!") {
    userScore++;
  }

  userScoreBox.textContent = userScore;
  cpuScoreBox.textContent = cpuScoreBox;

  if (userScore === 5) {
    console.log("You are the official winner!");
  } else if (cpuScore === 5) {
    console.log("You are the offical loser!");
  }
};

userPicks();
