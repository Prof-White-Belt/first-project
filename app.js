// I need to create a an array with my suits that will be strings
const suits = ["Diamond", "Club", "Heart", "Spade"];
// I have to assign images to each suit in an object
const suitImages = {
    "Diamond": "img/diamond.png",
    "Club": "img/club.png",
    "Heart": "img/heart.png",
    "Spade": "img/spade.png"
};
// I need to create a variable to hold the shuffled cards
// and another variable to hold the randomly selected suit
// They are empty because they will be filled later
let shuffledCards = [];
let randomSuit = "";

// Start game when the "Start Game" button is clicked
document.getElementById('startButton').addEventListener('click', startGame);

// I need a function to start the game
function startGame() {
    // Hide instructions with using display none
    // and show the game page using display flex
    document.getElementById('instructionsPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'flex';  // Show the game page

    // Show the cards container after starting the game
    // the card container is the div that holds the cards
    document.getElementById('cardsContainer').style.display = 'flex';  // Show cards

    // Initialize the cards with images
    // and I have to prevent the user from clicking on the cards before shuffling
    document.querySelectorAll('.card').forEach((card, index) => {
        card.innerHTML = `<img src="${suitImages[suits[index]]}" alt="${suits[index]}" class="card-image">`;
        card.style.pointerEvents = 'none';  // Disable card clicks initially
        card.classList.remove('correct', 'incorrect');  // Reset any previous state
    });
}

// Shuffle cards using the math.random function to randomize the order of the suits array
// This function will be called when the user clicks the shuffle button
// and it will reset the cards to their initial state
// This function will randomize the order of the suits array
function shuffleCards() {
    shuffledCards = [...suits];  // Copy of the suits array
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];  // Swap elements
    }
    return shuffledCards;  // Return shuffled suits
}

// Randomly select a suit and return it
function getRandomSuit() {
    const randomIndex = Math.floor(Math.random() * suits.length);
    randomSuit = suits[randomIndex];  // Store the randomly selected suit
    return randomSuit;  // Return the selected suit for display
}

// Shuffle the cards and replace the suits with question marks
// when the "Shuffle" button is clicked
// This function will be called when the user clicks the shuffle button
// and it will reset the cards to their initial state
// and start the shuffle animation
// and display the message to find the randomly selected suit
document.getElementById('shuffleButton').addEventListener('click', function() {
    // Reset card colors before starting the shuffle
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('correct', 'incorrect');  // Remove the green and red highlights after
    });

    // Initially add the shuffling class to start the animation
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('shuffling');  // Trigger animation
    });

    // Reset the cards after the shuffle
    setTimeout(() => {
        // Reset the cards after shuffle animation ends
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('shuffling');
            card.innerHTML = "?";  // Set the cards to display text "?"
            card.style.pointerEvents = 'auto';  // Enable card clicks after shuffle
        });

        shuffledCards = shuffleCards();  // Shuffle the cards

        // Randomly select a suit and display the message
        const suitToFind = getRandomSuit();
        document.getElementById('message').innerText = `Find the ${suitToFind}!`;

        // After the shuffle, position the cards back to fixed spots
        setTimeout(() => {
            updateCardPositions();
        }, 500);  // Delay to match shuffle animation duration
    }, 1000);  // Set the timeout to match the animation duration
});

// Function to update card positions based on shuffled order
function updateCardPositions() {
    document.querySelectorAll('.card').forEach((card, index) => {
        setCardPosition(card, index);  
    });

    // Enable card clicks for guessing
    document.querySelectorAll('.card').forEach((card, index) => {
        card.addEventListener('click', function() {
            guessCard(index);
        });
    });
}

// Function to set the position of each card (example: positioning them in a row)
function setCardPosition(card, index) {
    const cardPositions = [0, 1, 2, 3];  // Example positions (you can customize)
    const randomPos = cardPositions[index];
    const randomX = randomPos * 120;  // Spread cards across the horizontal axis

    card.style.transition = "transform 0.5s ease";  // Smooth transition
    card.style.transform = `translateX(${randomX}px)`;  // Move card to its new position
}

// Handle card selection and check if the guess is correct
function guessCard(index) {
    const selectedCardSuit = shuffledCards[index];

    // Check if the clicked card matches the randomly selected suit
    if (selectedCardSuit === randomSuit) {
        document.querySelectorAll('.card')[index].classList.add('correct');  // Turn the card green for correct guess
        document.querySelectorAll('.card')[index].classList.remove('incorrect');  // Ensure it doesn't have the red class
        document.getElementById('message').innerText = "You got lucky!";  // Correct message
    } else {
        document.querySelectorAll('.card')[index].classList.add('incorrect');  // Turn the card red for incorrect guess
        document.querySelectorAll('.card')[index].classList.remove('correct');  // Ensure it doesn't have the green class
        document.getElementById('message').innerText = "Haha! Wrong!!";  // Incorrect message
    }

    // After the selection, reveal the suits of all the cards
    revealSuits();

    // After selection, disable further clicks
    document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = 'none');
}

// Reveal suits after the player selects a card
function revealSuits() {
    document.querySelectorAll('.card').forEach((card, index) => {
        card.innerHTML = `<img src="${suitImages[shuffledCards[index]]}" alt="${shuffledCards[index]}" class="card-image">`;
    });
}
