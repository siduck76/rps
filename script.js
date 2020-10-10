// array for rock paper and scissors 
var rpsArr = ["paper","rock","scis"];

// func to return random elements from rps array 
function computerPlay(){
return  rpsArr[Math.floor(Math.random() * 3 )];
}

// counter for the scores 
let userScore = 0 , pcScore = 0 ;

//take input  and calculate the scores 
function playRound(){
         let user = prompt( " enter any of rps  "); 
             user = user.toLowerCase();
     let pc = computerPlay() ; 
         pc = pc.toLowerCase(); 

  if(user == "rock" && pc == "scis") { alert("you won! , rock beats scis");  userScore++; }
  else if(user == "rock" && pc == "paper"){alert("you lost! , paper beats rock");  pcScore++; }
  else if(user == "scis" && pc == "paper"){alert("you won! , scis beats paper"); userScore++; }
  else if(user == "scis" && pc == "rock"){alert("you lost! , rock beats scis");  pcScore++; }
  else if(user == "paper" && pc == "scis"){alert("you lost! , scis beats paper");  pcScore++; }
  else if(user == "paper" && pc == "rock"){ alert("you won! ,  paper beats rock"); userScore++; }

} 

// print results 
function result() {
alert("so the results are  " + "user : " + userScore + " pc :" + pcScore ); 
(pcScore > userScore)?alert("sorry u lose :v") : alert("you won!");
}
 

// loop to play 5 rounds 
function game(){
  for(let i = 0 ; i < 5 ; i++) {
     
    playRound();
  }
   result();
}

game();
