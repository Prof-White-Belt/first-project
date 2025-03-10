// First i need to create a variable for my 4 cards, they will be suits. "Diamond " "Heart" "Spade" "Club"
// I then need and array for all my cards/suits (my data structure)
// its like putting all 4 cards in a box. a box that will not change but the cards inside will
// I need to display all of the cards on the screen for the player
// I need to shuffle the array of cards
// I will use the Fisher-Yates shuffle algorithm to shuffle the cards
// i will then ask the player to reveal one of the 4 suits
// the option will always be the same 4 suits
// I will then check if the players guess is correct
// if the player is correct, they win
// if the player is incorrect, they lose
// I will then display the result of the game
// I will then ask the player if they want to play again
// If the player wants to play again, I will reset the game
// If the player does not want to play again, I will end the game
// 



    let suits = ['Diamond', 'Heart', 'Spade', 'Club']; // The suits
    let selectedSuit = null; // Variable to store the randomly selected suit
    let currentCards = ['Card 1', 'Card 2', 'Card 3', 'Card 4']; // Cards for after shuffle
    let playerGuess = null; // Store the player's guess
  
    document.getElementById("startGameButton").addEventListener("click", startGame);
    document.getElementById("submitGuess").addEventListener("click", checkGuess);
    document.getElementById("playAgainButton").addEventListener("click", startGame);
    document.getElementById("endGameButton").addEventListener("click", endGame);
  
    function startGame() {
      // Hide instructions and the start button
      document.querySelector('.instructions').style.display = 'none';
      document.getElementById("startGameButton").style.display = 'none';
      
      // Show the suits again on the cards before shuffling
      document.querySelectorAll('.card').forEach((card, index) => {
        card.textContent = suits[index]; // Set the card text back to suits (Diamond, Heart, etc.)
        card.style.backgroundColor = ''; // Reset the background color to default
      });
  
      // Shuffle the cards
      shuffleCards();
      
      // Show the shuffled cards face down (gray background)
      document.querySelectorAll('.card').forEach(card => card.style.backgroundColor = '#ccc');
      
      // Randomly select a suit
      selectedSuit = suits[Math.floor(Math.random() * suits.length)];
      
      // Update the question to prompt for finding the randomly selected suit
      document.querySelector('.question').textContent = 'Find the ' + selectedSuit + '!';
      
      // Enable the player to select a card
      document.querySelectorAll('.option').forEach((option, index) => {
        option.addEventListener('click', function() {
          playerGuess = `Card ${index + 1}`;
          document.getElementById('submitGuess').disabled = false;
        });
      });
    }
  
    function shuffleCards() {
      currentCards = currentCards.sort(() => Math.random() - 0.5);
      document.querySelectorAll('.card').forEach((card, index) => {
        card.textContent = currentCards[index]; // Change the card's text to "Card 1", "Card 2", etc.
      });
    }
  
    function checkGuess() {
      if (playerGuess === `Card ${suits.indexOf(selectedSuit) + 1}`) {
        document.getElementById('feedbackMessage').textContent = 'You got lucky!';
      } else {
        document.getElementById('feedbackMessage').textContent = 'Haha! Wrong!!';
      }
      showReplayOptions();
    }
  
    function showReplayOptions() {
      document.getElementById("playAgainButton").style.display = 'inline-block';
      document.getElementById("endGameButton").style.display = 'inline-block';
    }
  
    function endGame() {
      alert("Thanks for playing!");
      window.location.reload(); // Reload the page to restart
    }
    ;
  function shuffleCards() {
    // Add shuffle class to all cards to trigger animation
    document.querySelectorAll('.card').forEach(card => {
      card.classList.add('shuffle');
    });
  
    // After animation duration, shuffle the cards and update their content
    setTimeout(() => {
      // Shuffle the card order
      currentCards = currentCards.sort(() => Math.random() - 0.5);
  
      // Update the text of the cards after shuffle
      document.querySelectorAll('.card').forEach((card, index) => {
        card.textContent = currentCards[index];
      });
  
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('shuffle');
      });
    }, 500); // Match this time with the animation duration (0.5s)
  }
  