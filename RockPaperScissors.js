//____________________________
//Program   : RockPaperScissors.js
//Author    : Ben Morgan
//Date      : 6/12/2014
//Purpose   : Create rock/paper/scissors game.
//Updated   : 
//Last Run  :   
//____________________________

var userScore = 0;
var computerScore = 0;
var winner = "";

function rockPaperScissors() {
    //get and display user choice
    var userChoice = ""; 
    //blank choice display initially
    document.getElementById("uChoiceDisplay").innerHTML = userChoice;
    
    //get latest value
    if (document.getElementById("uC1").checked)
    {
        userChoice = document.getElementById("uC1").value;
    }
    else if (document.getElementById("uC2").checked)
    {
        userChoice = document.getElementById("uC2").value;
    }
    else if (document.getElementById("uC3").checked)
    {
        userChoice = document.getElementById("uC3").value;
    }
    else
    {
        confirm("Please make a choice.");
        return -1;
    }
    //display new value
    document.getElementById("uChoiceDisplay").innerHTML = userChoice;
    
    //get computer choice
    var randNum = Math.random();
    var computerChoice;

    if (randNum < 0.34)
    {
        computerChoice = "ROCK";
    }
    else if (randNum >= 0.34 && randNum < 0.67)
    {
        computerChoice = "PAPER";
    }
    else
    {
        computerChoice = "SCISSORS";
    }
    
    //display computer choice
    document.getElementById("cChoiceDisplay").innerHTML = computerChoice;
    
    //calculate and display winner
    winner = compare(userChoice, computerChoice);
    document.getElementById("winnerDisplay").innerHTML = winner;
    
    //update score
    if (winner === "USER")
    {
        userScore += 1;
        document.getElementById("uScoreDisplay").innerHTML = userScore;
    }
    else if (winner === "COMPUTER")
    {
        computerScore += 1;
        document.getElementById("cScoreDisplay").innerHTML = computerScore;
    }
};

function compare (uChoice, cChoice) {
    if (uChoice === cChoice)
    {
        return "TIE";
    }
    else if (uChoice === "ROCK")
    {
        if (cChoice === "SCISSORS")
        {
            return "USER";
        }
        else 
        {
            return "COMPUTER";
        }
    }
    else if (uChoice === "PAPER")
    {
        if (cChoice === "ROCK")
        {
            return "USER";
        }
        else 
        {
            return "COMPUTER";
        }
    }
    else if (uChoice === "SCISSORS")
    {
        if (cChoice === "ROCK")
        {
            return "COMPUTER";
        }
        else 
        {
            return "USER";
        }
    }

};

function reset () {
    userScore = 0;
    computerScore = 0;
    document.getElementById("uScoreDisplay").innerHTML = userScore;
    document.getElementById("cScoreDisplay").innerHTML = computerScore;
};