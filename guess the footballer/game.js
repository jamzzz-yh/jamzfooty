const playersDatabase = [
    { name: "Cristiano Ronaldo", club: "Al Nassr", position: "Forward", league: "Saudi Pro League", age: 39, nationality: "Portugal", image: "images/ronaldo.jpg", leagueImage: "images/saudi-pro-league.png" },
    { name: "Lionel Messi", club: "Inter Miami", position: "Forward", league: "MLS", age: 37, nationality: "Argentina", image: "images/messi.png", leagueImage: "images/mls.png" },
    { name: "Kevin De Bruyne", club: "Manchester City", position: "Midfielder", league: "Premier League", age: 33, nationality: "Belgium", image: "images/de-bruyne.png", leagueImage: "images/premier-league.webp" },
    { name: "Neymar", club: "Al Hilal", position: "Forward", league: "Saudi Pro League", age: 32, nationality: "Brazil", image: "images/neymar.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Erling Haaland", club: "Manchester City", position: "Forward", league: "Premier League", age: 24, nationality: "Norway", image: "images/haaland.png", leagueImage: "images/premier-league.webp" },
    { name: "Kylian Mbappé", club: "Paris Saint-Germain", position: "Forward", league: "Ligue 1", age: 25, nationality: "France", image: "images/mbappe.png", leagueImage: "images/ligue-1.png" },
    { name: "Mohamed Salah", club: "Liverpool", position: "Forward", league: "Premier League", age: 32, nationality: "Egypt", image: "images/salah.png", leagueImage: "images/premier-league.webp" },
    { name: "Luka Modrić", club: "Real Madrid", position: "Midfielder", league: "La Liga", age: 38, nationality: "Croatia", image: "images/modric.png", leagueImage: "images/la-liga.png" },
    { name: "Robert Lewandowski", club: "Barcelona", position: "Forward", league: "La Liga", age: 35, nationality: "Poland", image: "images/lewandowski.png", leagueImage: "images/la-liga.png" },
    { name: "Karim Benzema", club: "Al Ittihad", position: "Forward", league: "Saudi Pro League", age: 36, nationality: "France", image: "images/benzema.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Harry Kane", club: "Bayern Munich", position: "Forward", league: "Bundesliga", age: 30, nationality: "England", image: "images/kane.png", leagueImage: "images/bundesliga.png" },
    { name: "Virgil van Dijk", club: "Liverpool", position: "Defender", league: "Premier League", age: 33, nationality: "Netherlands", image: "images/van-dijk.png", leagueImage: "images/premier-league.webp" },
    { name: "Sergio Ramos", club: "Al Hilal", position: "Defender", league: "Saudi Pro League", age: 37, nationality: "Spain", image: "images/ramos.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Jan Oblak", club: "Atletico Madrid", position: "Goalkeeper", league: "La Liga", age: 31, nationality: "Slovenia", image: "images/oblak.png", leagueImage: "images/la-liga.png" },
    { name: "Thibaut Courtois", club: "Real Madrid", position: "Goalkeeper", league: "La Liga", age: 31, nationality: "Belgium", image: "images/courtois.png", leagueImage: "images/la-liga.png" },
    { name: "Philippe Coutinho", club: "Aston Villa", position: "Midfielder", league: "Premier League", age: 31, nationality: "Brazil", image: "images/coutinho.png", leagueImage: "images/premier-league.webp" },
    { name: "Jadon Sancho", club: "Manchester United", position: "Forward", league: "Premier League", age: 24, nationality: "England", image: "images/sancho.png", leagueImage: "images/premier-league.webp" },
    { name: "Timo Werner", club: "RB Leipzig", position: "Forward", league: "Bundesliga", age: 28, nationality: "Germany", image: "images/werner.png", leagueImage: "images/bundesliga.png" },
    { name: "Riyad Mahrez", club: "Al Ahli", position: "Forward", league: "Saudi Pro League", age: 33, nationality: "Algeria", image: "images/mahrez.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Jack Grealish", club: "Manchester City", position: "Midfielder", league: "Premier League", age: 28, nationality: "England", image: "images/grealish.png", leagueImage: "images/premier-league.webp" },
    { name: "Frenkie de Jong", club: "Barcelona", position: "Midfielder", league: "La Liga", age: 27, nationality: "Netherlands", image: "images/de-jong.png", leagueImage: "images/la-liga.png" },
    { name: "Gareth Bale", club: "Retired", position: "Forward", league: "La Liga", age: 34, nationality: "Wales", image: "images/bale.png", leagueImage: "images/la-liga.png" },
    { name: "Zlatan Ibrahimović", club: "Retired", position: "Forward", league: "Serie A", age: 43, nationality: "Sweden", image: "images/ibrahimovic.png", leagueImage: "images/serie-a.png" },
    { name: "Paul Pogba", club: "Juventus", position: "Midfielder", league: "Serie A", age: 30, nationality: "France", image: "images/pogba.png", leagueImage: "images/serie-a.png" },
    { name: "Luis Suárez", club: "Grêmio", position: "Forward", league: "Brazilian Serie A", age: 37, nationality: "Uruguay", image: "images/suarez.png", leagueImage: "images/brazilian-serie-a.png" },
    { name: "Edinson Cavani", club: "Valencia", position: "Forward", league: "La Liga", age: 37, nationality: "Uruguay", image: "images/cavani.png", leagueImage: "images/la-liga.png" },
    { name: "João Félix", club: "Atletico Madrid", position: "Forward", league: "La Liga", age: 24, nationality: "Portugal", image: "images/felix.png", leagueImage: "images/la-liga.png" },
    { name: "Christian Pulisic", club: "AC Milan", position: "Forward", league: "Serie A", age: 25, nationality: "USA", image: "images/pulisic.png", leagueImage: "images/serie-a.png" },
    { name: "César Azpilicueta", club: "Atletico Madrid", position: "Defender", league: "La Liga", age: 35, nationality: "Spain", image: "images/azpilicueta.png", leagueImage: "images/la-liga.png" },
    { name: "Mason Mount", club: "Manchester United", position: "Midfielder", league: "Premier League", age: 25, nationality: "England", image: "images/mount.png", leagueImage: "images/premier-league.webp" },
    { name: "Declan Rice", club: "Arsenal", position: "Midfielder", league: "Premier League", age: 24, nationality: "England", image: "images/rice.png", leagueImage: "images/premier-league.webp" },
    { name: "James Maddison", club: "Tottenham Hotspur", position: "Midfielder", league: "Premier League", age: 27, nationality: "England", image: "images/maddison.png", leagueImage: "images/premier-league.webp" },
    { name: "Kai Havertz", club: "Arsenal", position: "Midfielder", league: "Premier League", age: 25, nationality: "Germany", image: "images/havertz.png", leagueImage: "images/premier-league.webp" },
    { name: "Antoine Griezmann", club: "Atletico Madrid", position: "Forward", league: "La Liga", age: 33, nationality: "France", image: "images/griezmann.png", leagueImage: "images/la-liga.png" },
    { name: "David De Gea", club: "Free Agent", position: "Goalkeeper", league: "Free Agent", age: 33, nationality: "Spain", image: "images/de-gea.png", leagueImage: "images/spain.png" },
    { name: "Alisson Becker", club: "Liverpool", position: "Goalkeeper", league: "Premier League", age: 31, nationality: "Brazil", image: "images/alisson.png", leagueImage: "images/premier-league.webp" },
    { name: "Ederson", club: "Manchester City", position: "Goalkeeper", league: "Premier League", age: 30, nationality: "Brazil", image: "images/ederson.png", leagueImage: "images/premier-league.webp" },
    { name: "Manuel Neuer", club: "Bayern Munich", position: "Goalkeeper", league: "Bundesliga", age: 38, nationality: "Germany", image: "images/neuer.png", leagueImage: "images/bundesliga.png" },
    { name: "Gianluigi Donnarumma", club: "Paris Saint-Germain", position: "Goalkeeper", league: "Ligue 1", age: 25, nationality: "Italy", image: "images/donnarumma.png", leagueImage: "images/ligue-1.png" },
    { name: "Marc-André ter Stegen", club: "Barcelona", position: "Goalkeeper", league: "La Liga", age: 32, nationality: "Germany", image: "images/ter-stegen.png", leagueImage: "images/la-liga.png" },
    { name: "Gerard Piqué", club: "Retired", position: "Defender", league: "La Liga", age: 36, nationality: "Spain", image: "images/pique.png", leagueImage: "images/la-liga.png" },
    { name: "Sadio Mané", club: "Al Nassr", position: "Forward", league: "Saudi Pro League", age: 32, nationality: "Senegal", image: "images/mane.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Ciro Immobile", club: "Lazio", position: "Forward", league: "Serie A", age: 34, nationality: "Italy", image: "images/immobile.png", leagueImage: "images/serie-a.png" },
    { name: "Dusan Tadić", club: "Ajax", position: "Forward", league: "Eredivisie", age: 35, nationality: "Serbia", image: "images/tadic.png", leagueImage: "images/eredivisie.png" },
    { name: "Christopher Nkunku", club: "Chelsea", position: "Forward", league: "Premier League", age: 26, nationality: "France", image: "images/nkunku.png", leagueImage: "images/premier-league.webp" },
    { name: "André Onana", club: "Manchester United", position: "Goalkeeper", league: "Premier League", age: 28, nationality: "Cameroon", image: "images/onana.png", leagueImage: "images/premier-league.webp" },
    { name: "Antonio Rudiger", club: "Real Madrid", position: "Defender", league: "La Liga", age: 31, nationality: "Germany", image: "images/rudiger.png", leagueImage: "images/la-liga.png" },
    { name: "Alejandro Garnacho", club: "Manchester United", position: "Forward", league: "Premier League", age: 20, nationality: "Argentina", image: "images/garnacho.png", leagueImage: "images/premier-league.webp" },
    { name: "Jules Koundé", club: "Barcelona", position: "Defender", league: "La Liga", age: 25, nationality: "France", image: "images/kounde.png", leagueImage: "images/la-liga.png" },
    { name: "Pau Torres", club: "Aston Villa", position: "Defender", league: "Premier League", age: 27, nationality: "Spain", image: "images/torres.png", leagueImage: "images/premier-league.webp" },
    { name: "Gabriel Martinelli", club: "Arsenal", position: "Forward", league: "Premier League", age: 23, nationality: "Brazil", image: "images/martinelli.png", leagueImage: "images/premier-league.webp" },
    { name: "Dominik Szoboszlai", club: "Liverpool", position: "Midfielder", league: "Premier League", age: 23, nationality: "Hungary", image: "images/szoboszlai.png", leagueImage: "images/premier-league.webp" },
    { name: "Yassine Bounou", club: "Al Hilal", position: "Goalkeeper", league: "Saudi Pro League", age: 33, nationality: "Morocco", image: "images/bounou.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Milan Skriniar", club: "Paris Saint-Germain", position: "Defender", league: "Ligue 1", age: 29, nationality: "Slovakia", image: "images/skriniar.png", leagueImage: "images/ligue-1.png" },
    { name: "Hakim Ziyech", club: "Al Nassr", position: "Forward", league: "Saudi Pro League", age: 31, nationality: "Morocco", image: "images/ziyech.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Sergi Roberto", club: "Barcelona", position: "Defender", league: "La Liga", age: 32, nationality: "Spain", image: "images/roberto.png", leagueImage: "images/la-liga.png" },
    { name: "Wilfred Ndidi", club: "Leicester City", position: "Midfielder", league: "Championship", age: 27, nationality: "Nigeria", image: "images/ndidi.png", leagueImage: "images/championship.png" },
    { name: "Eduardo Camavinga", club: "Real Madrid", position: "Midfielder", league: "La Liga", age: 21, nationality: "France", image: "images/camavinga.png", leagueImage: "images/la-liga.png" },
    { name: "Nicolas Pépé", club: "Olympique Lyon", position: "Forward", league: "Ligue 1", age: 29, nationality: "Ivory Coast", image: "images/pepe.png", leagueImage: "images/ligue-1.png" },
    { name: "Nuno Mendes", club: "Paris Saint-Germain", position: "Defender", league: "Ligue 1", age: 22, nationality: "Portugal", image: "images/mendes.png", leagueImage: "images/ligue-1.png" },
    { name: "Cengiz Ünder", club: "Olympique Marseille", position: "Forward", league: "Ligue 1", age: 27, nationality: "Turkey", image: "images/under.png", leagueImage: "images/ligue-1.png" },
    { name: "Alexandre Lacazette", club: "Olympique Lyon", position: "Forward", league: "Ligue 1", age: 33, nationality: "France", image: "images/lacazette.png", leagueImage: "images/ligue-1.png" },
    { name: "Franck Kessié", club: "Al Ahli", position: "Midfielder", league: "Saudi Pro League", age: 27, nationality: "Ivory Coast", image: "images/kessie.png", leagueImage: "images/saudi-pro-league.png" },
    { name: "Isco", club: "Union Berlin", position: "Midfielder", league: "Bundesliga", age: 32, nationality: "Spain", image: "images/isco.png", leagueImage: "images/bundesliga.png" },
    { name: "Marcelo", club: "Fluminense", position: "Defender", league: "Brazilian Serie A", age: 36, nationality: "Brazil", image: "images/marcelo.png", leagueImage: "images/brazilian-serie-a.png" },
    { name: "Carlos Vela", club: "LAFC", position: "Forward", league: "MLS", age: 35, nationality: "Mexico", image: "images/vela.png", leagueImage: "images/mls.png" },
    { name: "Carlos Tévez", club: "Retired", position: "Forward", league: "Serie A", age: 40, nationality: "Argentina", image: "images/tevez.png", leagueImage: "images/serie-a.png" },
    { name: "Radja Nainggolan", club: "Retired", position: "Midfielder", league: "Serie A", age: 36, nationality: "Belgium", image: "images/nainggolan.png", leagueImage: "images/serie-a.png" },
    { name: "Adem Ljajić", club: "Retired", position: "Midfielder", league: "Serie A", age: 32, nationality: "Serbia", image: "images/ljajic.png", leagueImage: "images/serie-a.png" }
];

// Game state variables
let targetPlayer;
let attempts = 0;
let score = 0;
let timeElapsed = 0;
let timerInterval;

// Select player and submit guess
const playerSelect = document.getElementById("player-select");
const submitButton = document.getElementById("submit-btn");
const guessGrid = document.getElementById("guess-grid");
const feedbackLabel = document.getElementById("feedback");
const scoreLabel = document.getElementById("score");
const timerLabel = document.getElementById("timer");
const newRoundButton = document.getElementById("new-round-btn");
const resetButton = document.getElementById("reset-btn");

// Wait for DOM content to be fully loaded before populating the dropdown
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');

    // Populate the player select dropdown with player names
    if (playerSelect) {
        playersDatabase.forEach(player => {
            const option = document.createElement("option");
            option.value = player.name; // Set the value to player name
            option.textContent = player.name; // Display player name in the dropdown
            playerSelect.appendChild(option);
        });
    } else {
        console.error("Player dropdown not found.");
    }

    // Log to check the dropdown population
    console.log(playerSelect.innerHTML);
});

// Start a new round (same player)
function startNewRound() {
    attempts = 0;
    feedbackLabel.textContent = '';
    guessGrid.innerHTML = '';
    playerSelect.value = 'Select a player';
    submitButton.disabled = false;
    feedbackLabel.style.color = 'black';
}

// Start a new game
function startNewGame() {
    targetPlayer = playersDatabase[Math.floor(Math.random() * playersDatabase.length)];
    console.log("New Target Player: ", targetPlayer.name); // Log to check if the target player is changing

    attempts = 0;
    score = 0;
    timeElapsed = 0;
    scoreLabel.textContent = `Score: ${score}`;
    feedbackLabel.textContent = '';
    guessGrid.innerHTML = '';
    playerSelect.value = 'Select a player';

    // Start the timer
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeElapsed++;
        timerLabel.textContent = `Time: ${timeElapsed}s`;
    }, 1000);
}

// Submit guess
submitButton.addEventListener("click", submitGuess);

function submitGuess() {
    const guessedPlayerName = playerSelect.value;
    if (!guessedPlayerName || guessedPlayerName === 'Select a player') {
        alert("Please select a player.");
        return;
    }

    const guessedPlayer = playersDatabase.find(player => player.name === guessedPlayerName);
    if (!guessedPlayer) {
        alert("Player not found!");
        return;
    }

    // Increment attempts
    attempts++;

    // Compare guessed player with the target player
    const feedback = comparePlayers(guessedPlayer, targetPlayer);

    // Display guess with feedback
    displayGuess(guessedPlayer, feedback);

    // Update score: Increase score by 1 when round is won
    if (guessedPlayer.name === targetPlayer.name) {
        score++;
    }
    scoreLabel.textContent = `Score: ${score}`;

    // Check for win or max attempts
    if (guessedPlayer.name === targetPlayer.name) {
        clearInterval(timerInterval); // Stop the timer
        submitButton.disabled = true;
        feedbackLabel.textContent = "Correct! You guessed the player!";
        feedbackLabel.style.color = 'green';
    } else if (attempts >= 8) {
        // If max attempts reached, end the game
        clearInterval(timerInterval); // Stop the timer
        submitButton.disabled = true;
        feedbackLabel.textContent = "Game Over! Better luck next time.";
        feedbackLabel.style.color = 'red';
        // Automatically reset the game after a failure
        setTimeout(() => {
            startNewGame();
        }, 2000); // Restart the game after 2 seconds
    }
}

// Compare guessed player with the target player
function comparePlayers(guessedPlayer, targetPlayer) {
    const feedback = [];

    if (guessedPlayer.name === targetPlayer.name) {
        feedback.push(`Name: ✅ ${guessedPlayer.name}`);
    } else {
        feedback.push(`Name: ❌ ${guessedPlayer.name}`);
    }

    if (guessedPlayer.club === targetPlayer.club) {
        feedback.push(`Club: ✅  ${guessedPlayer.club} `);
    } else {
        feedback.push(`Club: ❌ ${guessedPlayer.club} `);
    }

    // Update Position feedback to show the actual position
    if (guessedPlayer.position === targetPlayer.position) {
        feedback.push(`Position: ✅ ${guessedPlayer.position}`);
    } else {
        feedback.push(`Position: ❌ ${guessedPlayer.position} `);
    }

    // League feedback with target league
    if (guessedPlayer.league === targetPlayer.league) {
        feedback.push(`League: ✅ ${guessedPlayer.league}`);
    } else {
        feedback.push(`League: ❌ ${guessedPlayer.league}`);
    }

    return feedback;
}

// Display guess and feedback
function displayGuess(player, feedback) {
    const guessDiv = document.createElement("div");
    guessDiv.classList.add("guess");

    // Use <br> to add line breaks between feedback items
    guessDiv.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="player-image">
        <p>${player.name}</p>
        <p>${feedback.join("<br>")}</p>  <!-- Add line breaks between feedback items -->
    `;

    guessGrid.appendChild(guessDiv);
}

// Start a new round
newRoundButton.addEventListener("click", startNewRound);

// Start a new game
resetButton.addEventListener("click", startNewGame);

// Initialize the game
startNewGame();
