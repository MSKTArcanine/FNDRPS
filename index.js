//funct select RPS
let player;
let computer;
let winner;
let playerScore = 0;
let computerScore = 0;
let choiceList = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    let computerChose = Math.floor(Math.random()*3);
    console.log(computerChose);
    computer = choiceList[computerChose];
    return choiceList[computerChose];
}
//Funct playround
function playRound(btnPlayerChose, computerSelection){
    //Player win : R > S; S > P; P > R
    switch(btnPlayerChose){
        case "Rock":if(computerSelection == "Scissors"){winner = "Player"; winnerFx(winner); playerScore+=1;writeScore(winner);return console.log("P Win")};
        break;
        case "Paper":if(computerSelection == "Rock"){winner = "Player"; winnerFx(winner); playerScore+=1;writeScore(winner);return console.log("P Win")};
        break;
        case "Scissors":if(computerSelection == "Paper"){winner = "Player"; winnerFx(winner); playerScore+=1;writeScore(winner); return console.log("P Win")};
        break;
    }
    //Computer win : pareil
    switch(computerSelection){
        case "Rock":if(btnPlayerChose == "Scissors"){ winner = "Computer"; winnerFx(winner); computerScore+=1;writeScore(winner);return console.log("C Win")};
        break;
        case "Paper":if(btnPlayerChose == "Rock"){ winner = "Computer"; winnerFx(winner);computerScore+=1;writeScore(winner); return console.log("C Win")};
        break;
        case "Scissors":if(btnPlayerChose == "Paper"){ winner = "Computer"; winnerFx(winner);computerScore+=1;writeScore(winner); return console.log("C Win")};
        break;
    }
    winner = null; winnerFx(winner);
    return console.log(`${btnPlayerChose} vs ${computerSelection} : TIE !`)
}
const buttonRock = document.getElementById("btnRock");
buttonRock.addEventListener("click",function(){playRound("Rock", getComputerChoice());player = "Rock";writeResult(player,computer)});
const buttonPaper = document.getElementById("btnPaper");
buttonPaper.addEventListener("click",function(){playRound("Paper", getComputerChoice());player = "Paper";writeResult(player,computer)});
const buttonScissors = document.getElementById("btnScissors");
buttonScissors.addEventListener("click",function(){playRound("Scissors", getComputerChoice());player = "Scissors";writeResult(player,computer)});

function winnerFx(w){
    const para = document.createElement("p");
    if(document.getElementById("d3").childNodes.length > 0)
    document.getElementById("d3").removeChild(document.getElementById("d3").childNodes[0]);
    para.textContent = (w)? w + " win !":"It's a tie !";
    para.style.fontSize = "200%";
    document.getElementById("d3").appendChild(para);
}
function writeResult(player,computer){
    const para = document.createElement("p");
    if(document.getElementById("d1").childNodes.length > 0)
    document.getElementById("d1").removeChild(document.getElementById("d1").childNodes[0]);
    para.textContent = `${player} VS ${computer}`;
    para.style.fontSize = "200%";
    document.getElementById("d1").appendChild(para);
}
function writeScore(w){
    if(w == "Player")
    document.getElementById("d2a").querySelector("p").childNodes[0].textContent = "Player score : "+ playerScore;
    if(w == "Computer")
    document.getElementById("d2b").querySelector("p").childNodes[0].textContent = "Computer score : "+computerScore;
}