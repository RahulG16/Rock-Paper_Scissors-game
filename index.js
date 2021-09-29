let userScore = 0;
let computerScore = 0;
let drawNumber = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const body_tag = document.querySelector("body");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissor_div = document.querySelector("#s");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

// r = rock, p = paper, s = scissor

function getComputerChoice() {
  let choice = ["r", "p", "s"];
  let randomNum = Math.floor(Math.random() * 3);
  return choice[randomNum];
}

// function to change letter to its corresponding meaning
function covertToWord(letter) {
  if (letter == "r") {
    return "Rock";
  } else if (letter == "p") {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function userWins(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  drawNumber = 0;

  result_div.innerHTML = `${covertToWord(
    userChoice
  )}${smallUserWord} beats ${covertToWord(
    computerChoice
  )}${smallCompWord}. You win! 🔥`;

  document.getElementById(userChoice).classList.add("green-glow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
}

function computerWins(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  drawNumber = 0;

  result_div.innerHTML = `${covertToWord(
    computerChoice
  )}${smallCompWord} beats ${covertToWord(
    userChoice
  )}${smallUserWord}. Computer wins 🧠`;

  document.getElementById(userChoice).classList.add("red-glow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
}

function draw(userChoice, computerChoice) {
  drawNumber == 0
    ? (result_div.innerHTML = `${covertToWord(
        userChoice
      )}${smallUserWord} equals ${covertToWord(
        computerChoice
      )}${smallCompWord}. It's a draw`)
    : (result_div.innerHTML = `${covertToWord(
        userChoice
      )}${smallUserWord} equals ${covertToWord(
        computerChoice
      )}${smallCompWord}. It's a draw again`);

  drawNumber++;
  document.getElementById(userChoice).classList.add("grey-glow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 500);
}

function game(userChoice) {
  let computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      userWins(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      computerWins(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }

  console.log(userScore, computerScore);

  if (userScore === 10 || computerScore === 10) {
    gameEnds();
    userScore = 0;
    computerScore = 0;

    setTimeout(() => {
      body_tag.style.backgroundColor = "rgb(29, 17, 29)";
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_div.innerHTML = "Let's Play Again";
    }, 5000);
  }
}

function gameEnds() {
  if (userScore == 10) {
    body_tag.style.backgroundColor = "rgb(28, 117, 28)";
    result_div.innerHTML = `You win!! 🥳🔥`;
  } else if (computerScore == 10) {
    body_tag.style.backgroundColor = "rgb(172, 20, 20)";
    result_div.innerHTML = `Computer Wins`;
  } else {
    result_div.innerHTML = `No one Wins`;
  }
}

// adding event listeners to each action
rock_div.addEventListener("click", function () {
  game("r");
});

paper_div.addEventListener("click", function () {
  game("p");
});

scissor_div.addEventListener("click", function () {
  game("s");
});
