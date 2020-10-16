let counter = 0;
let user, pc;

// scores
let userScore = 0,
  pcScore = 0;

// play game 
function playRound() {
  pc = computerPlay();
  if(user == pc) {
    userScore++;
    pcScore++;
  } else if(user == "rock" && pc == "scis") {
    userScore++;
  } else if(user == "rock" && pc == "paper") {
    pcScore++;
  } else if(user == "scis" && pc == "paper") {
    userScore++;
  } else if(user == "scis" && pc == "rock") {
    pcScore++;
  } else if(user == "paper" && pc == "scis") {
    pcScore++;
  } else if(user == "paper" && pc == "rock") {
    userScore++;
  }
}


const items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('click', () => {
    counter++;
    user = item.id;
    playRound();
    computerPlay();
    liveScores();
    if(counter == 3) {
      result();
      counter = 0;
      pcScore = 0;
      userScore = 0;
      liveScores();
    }
  });
});

// array for rock paper and scissors
var rpsArr = ["paper", "rock", "scis"];


function computerPlay() {
  return rpsArr[Math.floor(Math.random() * 3)];
}

// result 

function result() {
  alert("so the results are  " + "user : " + userScore + " pc :" + pcScore);
  if(pcScore == userScore) alert("its a draw");
  else {
    pcScore > userScore ? alert("sorry u lose :v") : alert("you won!");
  }
}

// selects divs for live score
const userbruh = document.querySelector('.bruhUser');
const pcbruh = document.querySelector('.bruhbot');

// show scores live 
function liveScores() {
  userbruh.textContent = userScore;
  pcbruh.textContent = pcScore;
}