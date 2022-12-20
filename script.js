let nButtons = 2;
let randomNumber;
let nClicks = 0;

function startGame() {
    //modify the number of buttons
    if (document.getElementById('numberButtons').value > 1) {
        nButtons = document.getElementById('numberButtons').value
    }
    //remove the start section
    document.getElementById('startSection').remove();
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
//calculate the a random number
    return Math.floor(Math.random() * max);
}

function verifyWinnerButton(elementId) {
    //increase number of clicks
    ++nClicks;
    if (randomNumber == elementId && nClicks == 1) {
        //verify if the button that was chosed was the correct button
        //display the result
        document.getElementById(elementId).style.backgroundColor="green";
        document.getElementById('header').innerHTML += `
<div id="result">
    <center>
        <div>
            YOU WIN!
        </div>
        <button type="button" class="btn btn-success btn-lg" onclick="restartGame()">
            Restart Game
        </button>
        <br>
        <br>
        <button type="button" class="btn btn-primary btn-sm" onclick="changeButtons()">
            Change Number of Buttons
        </button>
    </center>
</div>
`;
    } else if (randomNumber != elementId && nClicks == 1) {
        document.getElementById(elementId).style.backgroundColor="red";
        document.getElementById('header').innerHTML += `
<div id="result">
    <center>
        <div>
            YOU LOSE!
        </div>
        <button type="button" class="btn btn-danger btn-lg" onclick="restartGame()">
            Restart Game
        </button>
        <br>
        <br>
        <button type="button" class="btn btn-primary btn-sm" onclick="changeButtons()">
            Change Number of Buttons
        </button>
    </center>
</div>
`;
    }
}

function restartGame() {
//restart the game with the same number of buttons and with another random button
    for (let del = 0; del < nButtons; ++del) {
        document.getElementById('gameButtons').remove();
    }
    document.getElementById('result').remove();
    loadButtons();
    randomNumber = getRandomNumber(nButtons);
    nClicks = 0;
}

function changeButtons() {
//reset the game and isplay the input number of buttons and the start game button
    for (let del = 0; del < nButtons; ++del) {
        document.getElementById('gameButtons').remove();
    }
    document.getElementById('result').remove();
    document.getElementById('playGame').innerHTML += `
<center>
    <div id="startSection">
        <div>
            Number of buttons:
            <input type="number" id="numberButtons" min="2">
        </div>
        <br>
        <button type="button" class="btn btn-primary btn-lg" onclick="startGame()">
            Start Game
        </button>
    </div>
<center>
`;
    randomNumber = getRandomNumber(nButtons);
    nButtons = 2;
    nClicks = 0;
}