import tkinter as tk
from tkinter import messagebox, ttk
import random

# Sample database of footballers (for simplicity, you can expand this list)
players_database = [
    {"name": "Cristiano Ronaldo", "club": "Al Nassr", "position": "Forward", "league": "Saudi Pro League"},
    {"name": "Lionel Messi", "club": "Inter Miami", "position": "Forward", "league": "MLS"},
    {"name": "Kevin De Bruyne", "club": "Manchester City", "position": "Midfielder", "league": "Premier League"},
    {"name": "Neymar", "club": "Al Hilal", "position": "Forward", "league": "Saudi Pro League"},
    {"name": "Erling Haaland", "club": "Manchester City", "position": "Forward", "league": "Premier League"},
    {"name": "Kylian Mbappé", "club": "Paris Saint-Germain", "position": "Forward", "league": "Ligue 1"},
    {"name": "Mohamed Salah", "club": "Liverpool", "position": "Forward", "league": "Premier League"},
    {"name": "Luka Modrić", "club": "Real Madrid", "position": "Midfielder", "league": "La Liga"}
    # You can add more players here
]


class FootdleGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Footdle Game")

        # Randomly select a player as the target (correct answer)
        self.target_player = random.choice(players_database)
        self.attempts = 0

        # Setup UI components
        self.setup_ui()

    def setup_ui(self):
        # Game instructions
        self.instructions_label = tk.Label(self.root, text="Guess the Footballer! Type their name below.",
                                           font=("Helvetica", 14))
        self.instructions_label.pack(pady=10)

        # Combobox for selecting guesses from available players
        self.player_names = [player["name"] for player in players_database]
        self.combobox = ttk.Combobox(self.root, values=self.player_names, width=50, state="normal")
        self.combobox.set("Select a player")
        self.combobox.pack(pady=10)

        # Submit button
        self.submit_button = tk.Button(self.root, text="Submit Guess", command=self.submit_guess,
                                       font=("Helvetica", 12))
        self.submit_button.pack(pady=10)

        # Feedback label to show result
        self.feedback_label = tk.Label(self.root, text="", font=("Helvetica", 12))
        self.feedback_label.pack(pady=10)

        # Reset button
        self.reset_button = tk.Button(self.root, text="Reset Game", command=self.reset_game, font=("Helvetica", 12))
        self.reset_button.pack(pady=10)

    def submit_guess(self):
        self.attempts += 1
        guess = self.combobox.get()

        if guess.lower() == self.target_player["name"].lower():
            self.feedback_label.config(
                text=f"Correct! {guess} was the correct player.\nYou guessed it in {self.attempts} attempts.",
                fg="green")
            self.submit_button.config(state="disabled")  # Disable submit button after correct guess
        else:
            feedback = self.get_feedback(guess)
            self.feedback_label.config(text=feedback, fg="orange")

    def get_feedback(self, guess):
        # Find the player in the database
        guessed_player = next((player for player in players_database if player["name"].lower() == guess.lower()), None)

        if not guessed_player:
            return "Player not found in the database."

        # Check matches for club, position, and league
        feedback = []
        if guessed_player["club"].lower() == self.target_player["club"].lower():
            feedback.append("Club: ✅")
        else:
            feedback.append(f"Club: ❌ {guessed_player['club']}")

        if guessed_player["position"].lower() == self.target_player["position"].lower():
            feedback.append("Position: ✅")
        else:
            feedback.append(f"Position: ❌ {guessed_player['position']}")

        if guessed_player["league"].lower() == self.target_player["league"].lower():
            feedback.append("League: ✅")
        else:
            feedback.append(f"League: ❌ {guessed_player['league']}")

        return "\n".join(feedback)

    def reset_game(self):
        # Reset the game state
        self.target_player = random.choice(players_database)
        self.attempts = 0
        self.combobox.set("Select a player")
        self.feedback_label.config(text="")
        self.submit_button.config(state="normal")  # Enable the submit button again


# Setup Tkinter window
root = tk.Tk()
game = FootdleGame(root)
root.mainloop()
