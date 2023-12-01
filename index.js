//funct select RPS
let winner;
let choiceList = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    let computerChose = Math.floor(Math.random()*3);
    console.log(computerChose);
    return choiceList[computerChose];
}
//Funct playround
function playRound(btnPlayerChose, computerSelection){
    //Player win : R > S; S > P; P > R
    switch(btnPlayerChose){
        case "Rock":if(computerSelection == "Scissors"){winner = "P"; winnerFx(winner); return console.log("P Win")};
        break;
        case "Paper":if(computerSelection == "Rock"){winner = "P"; winnerFx(winner); return console.log("P Win")};
        break;
        case "Scissors":if(computerSelection == "Paper"){winner = "P"; winnerFx(winner); return console.log("P Win")};
        break;
    }
    //Computer win : pareil
    switch(computerSelection){
        case "Rock":if(btnPlayerChose == "Scissors"){ winner = "C"; winnerFx(winner); return console.log("C Win")};
        break;
        case "Paper":if(btnPlayerChose == "Rock"){ winner = "C"; winnerFx(winner); return console.log("C Win")};
        break;
        case "Scissors":if(btnPlayerChose == "Paper"){ winner = "C"; winnerFx(winner); return console.log("C Win")};
        break;
    }
    winner = null; winnerFx(winner);
    return console.log(`${btnPlayerChose} vs ${computerSelection} : TIE !`)
}
const buttonRock = document.getElementById("btnRock");
buttonRock.addEventListener("click",function(){playRound("Rock", getComputerChoice())});
const buttonPaper = document.getElementById("btnPaper");
buttonPaper.addEventListener("click",function(){playRound("Paper", getComputerChoice())});
const buttonScissors = document.getElementById("btnScissors");
buttonScissors.addEventListener("click",function(){playRound("Scissors", getComputerChoice())});

function winnerFx(w){
    const para = document.createElement("p");
    if(document.getElementById("d3").childNodes.length > 0)
    document.getElementById("d3").removeChild(document.getElementById("d3").childNodes[0]);
    para.textContent = w;
    document.getElementById("d3").appendChild(para);
}