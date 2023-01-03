let nButtons = 2;
let randomNumber;
let nClicks = 0;

function startGame() {
    //modify the number of buttons
    if (document.getElementById('numberButtons').value > 1) {
        nButtons = document.getElementById('numberButtons').value
    }
    //remove the start section
    document.getElementById('startSection').style.display= "none";
    //generate random number
    randomNumber = getRandomNumber(nButtons);
    loadButtons();
}

function loadButtons() {
    for (let i = 0; i < nButtons; ++i) {
        //display the game buttons
        document.getElementById('playGame').innerHTML += `
<div id="gameButtons">
    <center>
        <br>
        <div id="${i}">
            <button type="button" class="btn p-4 btn-warning" onclick="verifyWinnerButton(${i})"> 
                ? 
            </button>
        </div>
    <center>
</div>
`;
    }
}

function getRandomNumber(max) {
//calculate the random number
    return Math.floor(Math.random() * max);
}

function verifyWinnerButton(elementId) {
    //increase number of clicks
    ++nClicks;
    if (randomNumber == elementId && nClicks == 1) {
        //verify if the button that was chosed was the correct button
        //display the result
        document.getElementById(elementId).style.backgroundColor="green";
        document.getElementById('resultWin').style.display= "";
    } else if (randomNumber != elementId && nClicks == 1) {
        document.getElementById(elementId).style.backgroundColor="red";
        document.getElementById('resultLose').style.display= ""; 
    }
    //display restart game buttons
    document.getElementById('restartGameButton').style.display= "";
    document.getElementById('changeNumberButton').style.display= "";
}

function restartGame() {
//restart the game with the same number of buttons and with another random button
    for (let del = 0; del < nButtons; ++del) {
        document.getElementById('gameButtons').remove();
    }
    document.getElementById('resultWin').style.display= "none";
    document.getElementById('resultLose').style.display= "none";
    document.getElementById('restartGameButton').style.display= "none";
    document.getElementById('changeNumberButton').style.display= "none";
    randomNumber = getRandomNumber(nButtons);
    loadButtons();
    nClicks = 0;
}

function changeButtons() {
//reset the game and isplay the input number of buttons and the start game button
    for (let del = 0; del < nButtons; ++del) {
        document.getElementById('gameButtons').remove();
    }
    document.getElementById('resultWin').style.display= "none";
    document.getElementById('resultLose').style.display= "none";
    document.getElementById('restartGameButton').style.display= "none";
    document.getElementById('changeNumberButton').style.display= "none";
    document.getElementById('startSection').style.display= "";
    nButtons = 2;
    nClicks = 0;
}