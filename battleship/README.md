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
![Image](https://user-images.githubusercontent.com/72951538/158226223-1cdef784-6ef4-44c4-a4a2-94faced69be1.png)

After an unsuccessful missile shot (a miss):\
![Image](https://user-images.githubusercontent.com/72951538/158226223-1cdef784-6ef4-44c4-a4a2-94faced69be1.png)

After a successful missile shot (a Hit):\
![image](https://user-images.githubusercontent.com/72951538/158226588-16515ac7-1512-4046-885e-eed687335a60.png)

Player wins the game:\
![image](https://user-images.githubusercontent.com/72951538/158226648-f47a2b7b-7da6-4073-8c24-fbcd5d1735df.png)

Player loses the game:\
![image](https://user-images.githubusercontent.com/72951538/158226679-a53c9864-a388-4b8a-bc40-83a429bca2da.png)

## Author

### Georgie Deverill

🐒 [GitHub](https://github.com/gdevv)\
🐒 [LinkedIn](https://www.linkedin.com/in/georgie-deverill-044833121/)

## License

Distributed under the [GNU General Public License version 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
