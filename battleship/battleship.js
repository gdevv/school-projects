const fs = require("fs");
const rls = require("readline-sync");

// Read file contents from map.txt
const mapFileContents = fs.readFileSync("map.txt", "utf-8");

// Transfer contents of map.txt into an array
const arrOneDimensional = mapFileContents.split("\r\n");

// Where ships are located on the grid
let arrShipLocations = [];

for (j = 0; j < arrOneDimensional.length; j++) {
  // Converts array of strings to array of numbers
  let arrTwoDimensional = arrOneDimensional[j].split(",").map(Number);
  arrShipLocations.push(arrTwoDimensional);
}

// Where the user sent missiles so far
const arrBattleRecord = [
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
  ["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"],
];

// How many missiles
let numMisslesLeft = 30;

// How many ship hits they got so far
let numHits = 0;

const arrLettersUpper = [
  "A ",
  "B ",
  "C ",
  "D ",
  "E ",
  "F ",
  "G ",
  "H ",
  "I ",
  "J ",
];
console.log("\u001b[" + 31 + "m" + "LET'S PLAY BATTLESHIP!!!!" + "\u001b[0m\n");

console.log(
  "\u001b[" +
    35 +
    "m" +
    "You have " +
    numMisslesLeft +
    " missiles to fire to sink all five ships\n" +
    "\u001b[1m"
);

printBoard(arrBattleRecord);
console.log("");

// While this is true, play the game
while (numMisslesLeft > 0) {
  // Get user input
  let currentCoords = rls.question(
    "\u001b[" + 33 + "m" + "Choose your target (Ex. A1): " + "\u001b[1m"
  );
  // Call function to convert currentCoords
  let convertedCoords = convertCoords(currentCoords);

  // Convert coords (1 variable) into 2
  const convertedCol = convertedCoords[0];
  const convertedRow = convertedCoords[1];

  // Check if an attempt is a hit or not
  if (checkForHit(convertedRow, convertedCol)) {
    numHits++;
    console.log("\n\u001b[" + 32 + "m" + "HIT!!! 😃" + "\u001b[0m\n");
  } else {
    console.log("\n\u001b[" + 31 + "m" + "MISS 😫" + "\u001b[0m\n");
  }
  // Check if they sunk all the ships
  if (sunkAllShips()) {
    printBoard(arrBattleRecord);
    console.log(
      "\u001b[" + 32 + "m" + "\nYOU SANK MY ENTIRE FLEET!" + "\u001b[0m"
    );
    console.log(
      "\u001b[" + 32 + "m" + "\nYou won, congratulations!" + "\u001b[0m"
    );
    break;
  }

  // Reduce the number of missles
  numMisslesLeft--;
  console.log(
    "\u001b[" +
      35 +
      "m" +
      "You have " +
      numMisslesLeft +
      " missiles remaining" +
      "\u001b[1m\n"
  );
  // Call printBoard function to print updated battleRecord
  printBoard(arrBattleRecord);
  console.log("");
}

if (numMisslesLeft == 0) {
  console.log(
    "\n\u001b[" + 31 + "m" + "You have",
    numMisslesLeft,
    "missiles remaining" + "\u001b[0m\n"
  );
  console.log("\n\u001b[" + 31 + "m" + "GAME OVER." + "\u001b[0m\n");
  console.log(
    "\n\u001b[" + 31 + "m" + "You had",
    numHits,
    "of 17 hits, but didn't sink all the ships." + "\u001b[0m\n"
  );
  console.log(
    "\n\u001b[" + 31 + "m" + "Better luck next time." + "\u001b[0m\n"
  );
}

// FUNCTIONS

function convertCoords(coords) {
  // Split coords into col, row
  let col = coords[0].toUpperCase(); // a --> A
  let row = parseInt(coords[1]) - 1; // Index for row needs to be shifted down one --> board rows start with 1
  const arrLettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  // Convert column letter to index
  let colIndex;
  for (i = 0; i < arrLettersUpper.length; i++) {
    let currentLetter = arrLettersUpper[i];
    if (col == currentLetter) {
      colIndex = i;
      break;
    }
  }
  return [colIndex, row];
}

function printBoard(board) {
  // Prints the letter row at the top of the board for the user to see
  console.log("  " + arrLettersUpper.join(" "));
  for (i = 0; i < board.length; i++) {
    // Prints the row number on the side of the board for the user to see
    let rowNumber = i + 1;
    let row = board[i].join(" ");
    let rowMessage = rowNumber + " " + row;
    console.log(rowMessage);
  }
}

function checkForHit(row, col) {
  let didHit = false;
  if (arrShipLocations[row][col] == 1) {
    // Update battlemap to show hit
    didHit = true;
    arrBattleRecord[row][col] = "💥";
  } else {
    arrBattleRecord[row][col] = "🚫";
  }
  return didHit;
}

function sunkAllShips() {
  let allSunk = false;
  // There are 17 1's or "ships" to sink
  if (numHits == 17) {
    allSunk = true;
  }
  return allSunk;
}
