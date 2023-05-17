const rollDef = [ 
    [],
    [   "none",   "none",   "none",   "none","bg-dark",   "none",   "none",   "none",   "none"],
    [   "none",   "none","bg-dark",   "none",   "none",   "none","bg-dark",   "none",   "none"],
    [   "none",   "none","bg-dark",   "none","bg-dark",   "none","bg-dark",   "none",   "none"],
    ["bg-dark",   "none","bg-dark",   "none",   "none",   "none","bg-dark",   "none","bg-dark"],
    ["bg-dark",   "none","bg-dark",   "none","bg-dark",   "none","bg-dark",   "none","bg-dark"],
    ["bg-dark",   "none","bg-dark","bg-dark",   "none","bg-dark","bg-dark",   "none","bg-dark"]
]

function getRollValue() {
    const numberOfSides = 6;
    return Math.floor(Math.random()*numberOfSides)+1;
}

function playerTurn(player) {
    var roll = getRollValue();
    for (var i=0; i<9; i++) {
        circle=document.querySelectorAll(".player"+player+ " .rounded-circle")[i]
        if (rollDef[roll][i]==="bg-dark") {
            circle.classList.add("bg-dark");
        }
        else {
            circle.classList.remove("bg-dark");
        }
    }
    return roll;
}

function updateWinner(player1,player2) {
    if (player1 > player2) {
        document.querySelector(".results h1").innerHTML = "<strong>Player <span class='winner'>1</span> is the Winner!</strong>"
        document.querySelector(".player1 p").style.color="#EA5455";
        document.querySelector(".player2 p").style.color="";
    }
    else if (player1 < player2) {
        document.querySelector(".results h1").innerHTML = "<strong>Player <span class='winner'>2</span> is the Winner!</strong>"
        document.querySelector(".player1 p").style.color="";
        document.querySelector(".player2 p").style.color="#EA5455";
    }
    else {
        document.querySelector(".results h1").innerHTML = "<strong>It's a tie!</strong>"
        document.querySelector(".player1 p").style.color="";
        document.querySelector(".player2 p").style.color="";
    }
}

function playGame() {
    player1Roll = playerTurn(1);
    player2Roll = playerTurn(2);
    updateWinner(player1Roll,player2Roll)
}

player1Roll = playerTurn(1);
player2Roll = playerTurn(2);
// playGame()