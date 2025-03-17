## First-project

Project Description 

My game is "Guess the Card"
This game will consist of 1 player against a computer. 
The player will always be the the one interacting as the guesser 
The computer will be the dealer who reveals 4 suited cards, the dealer will shuffle the cards and ask the player to find the position of a suit. 


## WIREFRAMES
### Landing
![img](./images/Screenshot%202025-03-11%20at%2010.02.06 AM.png)

### Game start
![img] (<img/Screenshot 2025-03-17 at 8.44.29 AM.png>)

### Game lose
![img] (<img/Screenshot 2025-03-17 at 8.44.42 AM.png>)
### Game win
![img] (<img/Screenshot 2025-03-17 at 8.44.35 AM.png>)


## USER STORIES 

MVP
- AAU, the first thing I would like to see a set of instructions explaining the rules
- As a user, I need all of the suits displayed properly in front of me (Diamonds, Clubs, Hearts, Spade)
- As a user, I would then want a start game button that I can click
- As a user, I want to see the cards shuffled faced down in front of me after clicking start game
- As a user, I need the random shuffle funtion to work properly so I only have a 25% chance of selecting the right card each turn. 
- As a user, I need to see the 4 cards displayed face down in front of me
- As a user, I need the dealer to ask me  which suit at random to find within the 4 faced down cards
- As a user, I need to be able to select any of the 4 face down cards
- As a user, I would like a "submit answer" button that recognizes my selected choice
- As a user, I need the faced down card I selected to reveal its suit 
- As a user, I need my game to recoginze if my guess was correct and if it was wrong
- As a user, I would like the game to recoginze when it is over and offer me to try again or reset
- As a user, I want to be told good job or try again after my selection



## Stretch Goal
- AAP, I want to see a cool shuffle animation 
- AAP, I would want to see a scoredboard and a time clock 
- AAP, I would like to increase the difficulty by adding numbers in addition the suits. 
- AAP, I would like to start with "X" amount of credits and earn credits with every win. ie. bet 100 credits to win 100 more credits. If credits reach 500 I win the game. If credits reach 0 I lose. 


## PSEUDOCODE
```js
// First i need to create a variable for my 4 cards, they will be suits. "Diamond " "Heart" "Spade" "Club"

// I will then need to create a variable for the selected suit

// I will then need to create a variable for the current cards

// I will then need to create a variable for the player's guess

//  I will then need to create a function to start the game

// I will use the Fisher-Yates shuffle algorithm to shuffle the cards

// I will then need to create a function to check the player's guess

// I will need to check if the player's guess is correct or incorrect

// I will need to display a message to the player based on their guess

// If the player's guess is correct, I will display a message saying "You got lucky!"

// If the player's guess is incorrect, I will display a message saying "Haha! Wrong!!"

// I will then need to create a function to show the replay options

// If the player wants to play again, I will reset the game

// I need to create a function to reset the game
```


## TIMELINE

| TUESDAY   | COMPLETE PROPOSAL       |
|-----------|-------------------------|
| WEDNESDAY | WORK ON MY HTML         |
| THUSDAY   | WORK ON JAVA SCRIPT     |
| FRIDAY    | WORK ON CSS             |
| SATURDAY  | COMBINE IT ALL TOGETHER |
| SUNDAY    | DEBUG. FINAL CHECKS     |