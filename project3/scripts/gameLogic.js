"use strict";

// I. VARIABLES
const cellWidth = 32;
const cellSpacing = 0;
const totalHealth = 100;
const container = document.querySelector("#gameBlock");
const inventory = document.querySelector("#inven");
const health = document.querySelector("#health").querySelector("p");
const score = document.querySelector("#score").querySelector("p");
const highScore = document.querySelector("#highScore").querySelector("p");
const cells = []; // the HTML elements - our "view"

const prefix = "IGME235Project3-";
const scoreKey = prefix + "highScore"

// faking an enumeration here
const keyboard = Object.freeze({
    SHIFT: 16,
    SPACE: 32,
    LEFT: 65,  // W
    UP: 87,    // A
    RIGHT: 68, // S
    DOWN: 83   // D
});

// this is an enumeration for gameworld levels
const worldTile = Object.freeze({
    FLOOR: 0,
    WALL: 1,
    LOCKED: 2,
    END: 3,
    GROUND: 4
});

// the "grunt" sound that plays when the player attempts to move into a wall or water square
let effectAudio = undefined;

// level data is over in gamedata.js
let currentLevelNumber = 0;
let currentHealth = 100;
let currentScore = 0;
let totalScore = 0;
let totalHighScore;
let currentGameWorld = undefined;   // a 2D array - the grid:  walls, floors, water, etc...
let currentGameObjects = undefined; // a 1D array - stuff that's on top of the grid and can move: monsters, treasure, keys, etc...
let currentInventory = undefined;   // a 1D array - stuff that the player has picked up

// the player - uses ES6 object literal syntax
const player = Object.seal({
    x: -1,
    y: -1,
    element: undefined,
    moveRight() { this.x++; },
    moveDown() { this.y++; },
    moveLeft() { this.x--; },
    moveUp() { this.y--; },
});


// II. INIT code
window.onload = () => {
    const storedHighScore = localStorage.getItem(scoreKey);
    if (storedHighScore) {
        highScore.innerHTML = storedHighScore;
        totalHighScore = storedHighScore;
    }
    else {
        highScore.innerHTML = currentScore;
        totalHighScore = currentScore;
    }

    let btn = document.createElement("button");   // Create a <button> element
    btn.innerHTML = "Start Game";                   // Insert text
    btn.id = "startGame";
    btn.className = "gameButton";
    container.appendChild(btn);

    $("#startGame").click(function () {
        currentLevelNumber += 1;
        nextLevel();
    });
}


// III. FUNCTIONS
// the elements on the screen that won't change - our "view"
function createGridElements(numRows, numCols) {
    const span = document.createElement('span');
    span.className = 'cell';
    for (let row = 0; row < numRows; row++) {
        cells.push([]);
        for (let col = 0; col < numCols; col++) {
            let cell = span.cloneNode();
            cell.style.left = `${col * (cellWidth + cellSpacing)}px`;
            cell.style.top = `${row * (cellWidth + cellSpacing)}px`;
            container.appendChild(cell);
            cells[row][col] = cell;
        }
    }
}

// the elements on the screen that can move and change - also part of the "view"
function loadLevel(levelNum = 1, playerX = 6, playerY = 5) {
    currentGameObjects = []; // clear out the old array
    currentInventory = [];
    const node = document.createElement("span");
    node.className = "gameObject";

    // now initialize our player
    const playerPosition = playerStart["level" + levelNum];
    player.x = playerPosition[0].x;
    player.y = playerPosition[0].y;
    player.element = node.cloneNode(true);
    player.element.classList.add("player");
    container.appendChild(player.element);


    /* let's instantiate our game objects */
    // pull the current level data
    const levelObjects = allGameObjects["level" + levelNum];

    // loop through this level's objects ... 
    for (let obj of levelObjects) {
        const clone = Object.assign({}, obj); 		// clone the object
        clone.element = node.cloneNode(true); 		// clone the element
        clone.element.classList.add(obj.className); // add the className so we see the right image
        currentGameObjects.push(clone);				// add to currentGameObjects array  (so it gets moved onto the map)
        container.appendChild(clone.element);		// add to DOM tree (so we can see it!)
    }
}

/// Draw the grid based on the gamedata arrays
function drawGrid(array) {
    const numCols = array[0].length;
    const numRows = array.length;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const tile = array[row][col];
            const element = cells[row][col];

            // ** can you figure our how to get rid of this switch? Maybe another enumeration, of the tile CSS classes? **
            switch (tile) {
                case worldTile.FLOOR:
                    element.classList.add("floor")
                    break;

                case worldTile.WALL:
                    element.classList.add("wall");
                    break;

                case worldTile.LOCKED:
                    element.classList.add("locked");
                    break;

                case worldTile.END:
                    element.classList.add("end");
                    break;

                case worldTile.GROUND:
                    element.classList.add("ground");
                    break;
            }
        }
    }
}

/// Draw the player and the game objects to the screen
function drawGameObjects(array) {
    // player
    player.element.style.left = `${player.x * (cellWidth + cellSpacing)}px`;
    player.element.style.top = `${player.y * (cellWidth + cellSpacing)}px`;

    // game object
    for (let gameObject of array) {
        gameObject.element.style.left = `${gameObject.x * (cellWidth + cellSpacing)}px`;
        gameObject.element.style.top = `${gameObject.y * (cellWidth + cellSpacing)}px`;
    }

}

/// Player Movement
function movePlayer(e) {
    let nextX;
    let nextY;
    switch (e.keyCode) {
        case keyboard.RIGHT:
            nextX = player.x + 1;
            nextY = player.y;
            if (checkIsLegalMove(nextX, nextY)) player.moveRight();
            break;

        case keyboard.DOWN:
            nextX = player.x;
            nextY = player.y + 1;
            if (checkIsLegalMove(nextX, nextY)) player.moveDown();
            break;

        case keyboard.LEFT:
            nextX = player.x - 1;
            nextY = player.y;
            if (checkIsLegalMove(nextX, nextY)) player.moveLeft();
            break;

        case keyboard.UP:
            nextX = player.x;
            nextY = player.y - 1;
            if (checkIsLegalMove(nextX, nextY)) player.moveUp();
            break;
    }
}
/// Checking if move is allowed
function checkIsLegalMove(nextX, nextY) {
    let nextTile = currentGameWorld[nextY][nextX];

    // If next tile is a wall, locked, or the end
    if (nextTile != worldTile.WALL && nextTile != worldTile.LOCKED && nextTile != worldTile.END) {
        checkCollision(nextX, nextY);
        return true;
    }

    // If the next tile is locked
    else if (nextTile == worldTile.LOCKED) {
        let key;
        for (let obj of currentInventory) {
            if (obj.type == "key") {
                key = obj;
                break;
            }
        }

        // If dont' have key
        if (!key) {
            effectAudio.play();
            return false;
        }

        // If have key
        else {
            currentInventory.splice(currentInventory.indexOf(key.type), 1);
            currentGameWorld[nextY][nextX] = 0;
            inventory.removeChild(inventory.childNodes[findChildNode("key", "#inven")]);
        }
    }

    // If the next tile is the end
    else if (nextTile == worldTile.END) {
        currentLevelNumber += 1;
        if (gameworld["world" + currentLevelNumber]) {
            nextLevel();
        }
        else {
            noNextLevel();
        }
    }

    // If just floor
    else {
        effectAudio.play();
        return false;
    }
}


// IV. EVENTS
function setupEvents() {
    window.onmouseup = (e) => {
        e.preventDefault();
        gridClicked(e);
    };

    window.onkeydown = (e) => {
        //console.log("keydown=" + e.keyCode);
        let enterKey = e.keyCode;

        // If enter key is clicked
        if (enterKey == 13) {
            pickUpItem();
        }
        movePlayer(e);
        drawGameObjects(currentGameObjects);
    };
}

/// Check where on the screen clicked
/*
function gridClicked(e) {
    let rect = container.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;
    let columnWidth = cellWidth + cellSpacing;
    let col = Math.floor(mouseX / columnWidth);
    let row = Math.floor(mouseY / columnWidth);
    let selectedCell = cells[row][col];
    // selectedCell.classList.add('cellSelected');
    console.log(`${col},${row}`);
} */

/// Pick up item when 'enter'
function pickUpItem() {
    let x = player.x;
    let y = player.y;
    const levelObjects = currentGameObjects;
    let picked;
    let li = document.createElement("li");

    // Loops through objects in current level
    for (let obj of levelObjects) {

        // If the item is the same space as the player and not a monster
        if (player.x == obj.x && player.y == obj.y && obj.type != "monster") {

            // If item is chest, add score
            if (obj.type == "chest") {
                currentScore += 10;
            }

            // If item is treasure, add score
            else if (obj.type == "treasure") {
                currentScore += 5;
            }

            if (obj.type != "chest" && obj.type != "treasure") {
                li.innerHTML = obj.type;
                inventory.appendChild(li);
            }

            score.innerHTML = currentScore;
            // console.log(`Picked up: ${obj.type}`);
            // console.log(`${obj.x} , ${obj.y}`);
            picked = obj;
            break;
        }
    }

    // If picked is null
    if (!picked) {
        return;
    }

    currentInventory.push(picked);
    currentGameObjects.splice(currentGameObjects.indexOf(picked), 1);
    container.removeChild(container.childNodes[findChildNode(picked, ".gameObject")]);
}

/// Find the index of the child node within the parent
function findChildNode(child, className) {
    let i = 0;
    let children;
    let childNode;

    // Removing items from the screen
    if (className == ".gameObject") {
        children = document.querySelectorAll(className);
        for (let j = 0; j < children.length; j++) {
            if (children[j].style.cssText == (`left: ${child.x * (cellWidth + cellSpacing)}px; top: ${child.y * (cellWidth + cellSpacing)}px;`) && children[j].classList[1] != "player" && children[j].classList[1] != "monster") {
                childNode = children[j];
                break;
            }
        }
    }

    // Removing items from the inventory list
    else if (className == "#inven") {
        children = document.querySelector(className).childNodes;
        for (let j = 0; j < children.length; j++) {
            if (children[j].innerHTML == child) {
                childNode = children[j];
                break;
            }
        }
    }

    while ((childNode = childNode.previousSibling) != null) {
        i++
    }
    return i;
}

/// Checks for collisions between the player and the monster
function checkCollision(nextX, nextY) {
    for (let obj of currentGameObjects) {
        if (obj.x == nextX && obj.y == nextY && obj.type == "monster") {
            effectAudio.play();
            currentHealth -= 20;
            health.innerHTML = `${currentHealth}/${totalHealth}`;

            if (currentHealth == 0) {
                gameOver();
            }
        }
    }
}

/// Creates and draws the new level
function nextLevel() {
    $('div#gameBlock').empty();

    currentGameWorld = gameworld["world" + currentLevelNumber];
    let numCols = currentGameWorld[0].length;
    let numRows = currentGameWorld.length;
    createGridElements(numRows, numCols);
    drawGrid(currentGameWorld);
    loadLevel(currentLevelNumber);
    drawGameObjects(currentGameObjects);
    effectAudio = document.querySelector("#effectAudio");
    effectAudio.volume = 0.2;
    setupEvents();
    health.innerHTML = `${currentHealth}/${totalHealth}`;
}

function gameOver() {
    $('div#gameBlock').empty();
    currentInventory = [];
    $('#inven').empty();

    if (currentScore > totalHighScore) {
        localStorage.setItem(scoreKey, currentScore);
        totalHighScore = currentScore;
        highScore.innerHTML = totalHighScore;
    }

    currentScore = 0;

    let btn = document.createElement("button");   // Create a <button> element
    btn.innerHTML = "Start Over";                   // Insert text
    btn.id = "startGame";
    btn.className = "gameButton";
    container.appendChild(btn);

    $("#startGame").click(function () {
        currentLevelNumber = 1;
        nextLevel();
    });
}

function noNextLevel() {
    $('div#gameBlock').empty();
    currentInventory = [];
    $('#inven').empty();

    if (currentScore > totalHighScore) {
        localStorage.setItem(scoreKey, currentScore);
        totalHighScore = currentScore;
        highScore.innerHTML = totalHighScore;
    }

    currentScore = 0;

    let p = document.createElement("p");
    p.innerHTML = "More levels to come";
    container.appendChild(p);

    let btn = document.createElement("button");   // Create a <button> element
    btn.innerHTML = "Start Over";                   // Insert text
    btn.id = "startGame";
    btn.className = "gameButton";
    container.appendChild(btn);

    $("#startGame").click(function () {
        currentLevelNumber = 1;
        nextLevel();
    });
}