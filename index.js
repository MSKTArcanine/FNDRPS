//funct select RPS
let winner;
let choiceList = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    let computerChose = Math.floor(Math.random()*3);
    console.log(computerChose);
    return choiceList[computerChose];
}

//player function
function getPlayerChoice(){
    do{playerChose = prompt("RPS ?")
console.log(playerChose)}
    while(!playerCheck(playerChose))
    return playerChose;
}
function playerCheck(str){
    switch (str){
        case "Rock":
            case "Paper":
                case "Scissors":return true;
                break;
        default:return false;
    }
}
//Funct playround
function playRound(playerSelection, computerSelection){
    //Player win : R > S; S > P; P > R
    switch(playerSelection){
        case "Rock":if(computerSelection == "Scissors"){winner = "P"; return console.log("P Win")};
        break;
        case "Paper":if(computerSelection == "Rock"){winner = "P"; return console.log("P Win")};
        break;
        case "Scissors":if(computerSelection == "Paper"){winner = "P"; return console.log("P Win")};
        break;
    }
    //Computer win : pareil
    switch(computerSelection){
        case "Rock":if(playerSelection == "Scissors"){ winner = "C"; return console.log("C Win")};
        break;
        case "Paper":if(playerSelection == "Rock"){ winner = "C"; return console.log("C Win")};
        break;
        case "Scissors":if(playerSelection == "Paper"){ winner = "C"; return console.log("C Win")};
        break;
    }
    winner = null;
    return console.log(`${playerSelection} vs ${computerSelection} : TIE !`)
}
//Round :
//game :
function game(){
    let compScore = 0;
    let playerScore = 0;
    let count = 0;
    
    while(count<5){
        let computerChose = getComputerChoice();
        let playerChose = getPlayerChoice();
        playRound(playerChose, computerChose);
        console.log("winner = " + winner);
        if(winner == "C") compScore += 1;
        if(winner == "P") playerScore += 1;
        count++;
    }
    console.log("C" + compScore);
    console.log("P" + playerScore)
}
game();