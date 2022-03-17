# 🚢 battleship

## Table of Contents

[About](#about)\
[Installation](#installation)\
[Documentation](#documentation)\
[Author](#author)\
[License](#license)

## About

### Overview

For our final assignment in Software Development, we were tasked with creating a program in JavaScript that replicates the functionality of the game Battleship. 

### Requirements

* On application start, ensure your code reads the contents of the provided ship grid
  into a two-dimensional array.
* Zeros (0) indicate empty water, while (1) indicates part of a ship exists at that location.
* Ensure that the ship map remains invisible to the user during game-play.
* Create a second map (the targeting map) to be displayed to the user each turn,
  and will be used to show the targeting results of the current game turn by turn.
* Ensure the initial display of the targeting map will be blank except for the row and column indicators (Columns A, B, C, Rows 1, 2, 3, etc.).
* Allow the user to have 30 turns to sink all of the ships.
* Prompt the user to enter a map coordinate (ex. A2, F5, B10) representing the missile location.
* Notify the user whether their attempt was a hit or miss.
* Update the targeting map to show the latest missile result.
* Display a message indicating the current missile count.
* Ensure only valid targeting coordinates are entered.

## Installation

Install dependencies.

```
npm install
```

Run the program.

```
node battleship
```

## Documentation

Beginning of a new game, prior to any missile shots:\
<img width="800px" src="https://user-images.githubusercontent.com/72951538/158712245-e316c4d5-1bfe-44ae-b41c-994a61565128.png" >


After an unsuccessful missile shot (a miss):\
<img width="800px" src="https://user-images.githubusercontent.com/72951538/158712302-59144453-d809-448a-9b05-d729d1de237b.png" >

After a successful missile shot (a Hit):\
<img width="800px" src="https://user-images.githubusercontent.com/72951538/158712322-c86bafc8-fadb-4125-aba6-c3891c4e0ee0.png" >

## Author

### Georgie Deverill

🐒 [GitHub](https://github.com/gdevv)\
🐒 [LinkedIn](https://www.linkedin.com/in/georgie-deverill-044833121/)

## License

Distributed under the [GNU General Public License version 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
