let counter = 0;
let user, pc;
let themeLight = true;
// scores counter
let userScore = 0,
    pcScore = 0;

// play game 
function playRound() {
    pc = computerPlay();
    if (user == pc) {
        userScore++;
        pcScore++;
    } else if (user == "rock" && pc == "scis") {
        userScore++;
    } else if (user == "rock" && pc == "paper") {
        pcScore++;
    } else if (user == "scis" && pc == "paper") {
        userScore++;
    } else if (user == "scis" && pc == "rock") {
        pcScore++;
    } else if (user == "paper" && pc == "scis") {
        pcScore++;
    } else if (user == "paper" && pc == "rock") {
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
        if (counter == 5) {
            //  result();
            // counter = 0;
            //pcScore = 0;
            //userScore = 0;
            liveScores();
            finalshit();
        }
    });
});

// array for rock paper and scissors
var rpsArr = ["paper", "rock", "scis"];


function computerPlay() {
    return rpsArr[Math.floor(Math.random() * 3)];
}

// selects divs for live score
const userbruh = document.querySelector('.bruhUser');
const pcbruh = document.querySelector('.bruhbot');
const resultsbruh = document.querySelector('.winner');
// show scores live 
function liveScores() {
    userbruh.textContent = userScore;
    pcbruh.textContent = pcScore;
}

function finalshit() {
    if (pcScore > userScore) resultsbruh.textContent = "sorry u lose :v";

    else if (pcScore == userScore) resultsbruh.textContent = "its a draw";

    else {
        resultsbruh.textContent = "you won!";
    }
}

function playAgain() {
    pcScore = 0;
    userScore = 0;
    counter = 0;
    resultsbruh.textContent = "results";
    liveScores();

}

function changeTheme() {

    if (themeLight) {

        document.body.style.backgroundColor = "#181818";
        document.querySelector(".heading").style.cssText = ' background-color: #181818; color : white;';

        document.querySelector(".result").style.cssText = 'background-color: #181818; color : white;  border:1px solid #F5F5F5;';
        document.querySelector(".item").style.cssText = 'background-color: #181818; color : white;';
        document.querySelector(".winner").style.cssText = 'background-color: #181818; color : white;';
        var btnColor = document.querySelectorAll(".item");
        btnColor.forEach((btnColor) => {
            btnColor.style.cssText = 'background-color: #181818; color:#F5F5F5 ; border:2px solid #F5F5F5;';
        })

        var scores = document.querySelectorAll('#scores');
        scores.forEach((scores) => {
            scores.style.cssText = 'background-color: #181818; color:#F5F5F5 ; border:1px solid #F5F5F5;';
        })
        themeLight = false;

    } else {

        themeLight = true;
        changeThemee();
    }
}

function changeThemee() {
    document.body.style.backgroundColor = "#F5F5F5";
    document.querySelector(".heading").style.cssText = 'color : #181818;';
    document.querySelector("#scores").style.cssText = 'color : #181818;';
    document.querySelector(".result").style.cssText = 'color : #181818;';
    document.querySelector(".item").style.cssText = 'color : #181818;';
    document.querySelector(".winner").style.cssText = 'color : #181818;';

}