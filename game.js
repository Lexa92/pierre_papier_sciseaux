let playerScore = 0;
let computerScore = 0;

// Fonction pour obtenir le choix aléatoire de l'ordinateur
function getComputerChoice() {
  const choices = ["Pierre", "Papier", "Ciseaux"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Fonction pour jouer un tour
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (
    (playerSelection === "pierre" && computerSelection === "Ciseaux") ||
    (playerSelection === "papier" && computerSelection === "Pierre") ||
    (playerSelection === "ciseaux" && computerSelection === "Papier")
  ) {
    playerScore++;
    displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (computerSelection === "Pierre" && playerSelection === "ciseaux") ||
    (computerSelection === "Papier" && playerSelection === "Pierre") ||
    (computerSelection === "Ciseaux" && playerSelection === "Papier")
  ) {
    computerScore++;
    displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    displayResult("It's a tie!");
  }

  updateScore();
  checkWinner();
}

// Fonction pour afficher les résultats dans le div dédié
function displayResult(result) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.textContent = result;
}

// Fonction pour mettre à jour le score affiché
function updateScore() {
    const playerScoreDiv = document.getElementById("player-score");
    const computerScoreDiv = document.getElementById("computer-score");
  
    playerScoreDiv.textContent = `Joueur: ${playerScore}`;
    computerScoreDiv.textContent = `Ordinateur: ${computerScore}`;
  }

// Fonction pour vérifier le gagnant
function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "Joueur" : "Ordinateur";
    displayResult(`Le gagnant est ${winner} !`);
    disableButtons(); // Désactiver les boutons après la fin du jeu
    addRestartButton(); // Ajouter le bouton pour recommencer
  }
}

// Fonction pour désactiver les boutons à la fin du jeu
function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Fonction pour ajouter un bouton de recommencement
function addRestartButton() {
  const recommencerDiv = document.getElementById("recommencer");
  const restartButton = document.createElement("button");
  restartButton.textContent = "Recommencer";
  restartButton.addEventListener("click", recommencer);
  recommencerDiv.appendChild(restartButton);
}

// Fonction pour recommencer le jeu
function recommencer() {
  playerScore = 0;
  computerScore = 0;
  const scoreDiv = document.querySelector("#results div");
  if (scoreDiv) {
    scoreDiv.remove(); // Supprime le score affiché
  }
  updateScore();//çà me met à jour les scores
  displayResult(""); // Efface les résultats précédents
  enableButtons(); // Réactive les boutons
  const restartButton = document.querySelector("#recommencer button");
  if (restartButton) {
    restartButton.remove(); // Supprime le bouton de recommencement
  }
}

// Fonction pour activer les boutons
function enableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = false;
  });
}
// Event listener pour le bouton de recommencement
//const restartButton = document.getElementById("restart-btn");
//restartButton.addEventListener("click", recommencer);

// Event listeners pour chaque bouton
document.getElementById("rock").addEventListener("click", () => playRound("pierre"));
document.getElementById("paper").addEventListener("click", () => playRound("papier"));
document.getElementById("scissors").addEventListener("click", () => playRound("ciseaux"));
document.getElementById("recommencer").addEventListener("click", recommencer);
