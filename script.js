const cpuPick = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
};

const userPick = () => {
  let userChoice = prompt("Enter your choice!");

  return userChoice.toLowerCase();
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

  return roundResult;
};

const startGame = () => {
  let userScore = 0;
  let cpuScore = 0;

  for (let cnt = 0; cnt < 5; cnt++) {
    let roundResult = playRound(userPick(), cpuPick());
    if (roundResult === "You lose!") {
      cpuScore++;
    } else if (roundResult === "You win!") {
      userScore++;
    }
  }

  if (userScore > cpuScore) {
    console.log("You are the official winner!");
  } else if (userScore < cpuScore) {
    console.log("You are the offical loser!");
  } else {
    console.log("It's an official tie!");
  }
};

startGame();
