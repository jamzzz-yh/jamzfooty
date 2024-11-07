import tkinter as tk
from tkinter import ttk, messagebox
import random
import time

# Extensive database of footballers (real or mock data)
players_database = [
    {"name": "Cristiano Ronaldo", "club": "Al Nassr", "position": "Forward", "league": "Saudi Pro League", "age": 39,
     "nationality": "Portugal", "value": 100},
    {"name": "Lionel Messi", "club": "Inter Miami", "position": "Forward", "league": "MLS", "age": 37,
     "nationality": "Argentina", "value": 110},
    {"name": "Kevin De Bruyne", "club": "Manchester City", "position": "Midfielder", "league": "Premier League",
     "age": 33, "nationality": "Belgium", "value": 85},
    {"name": "Neymar", "club": "Al Hilal", "position": "Forward", "league": "Saudi Pro League", "age": 32,
     "nationality": "Brazil", "value": 90},
    {"name": "Erling Haaland", "club": "Manchester City", "position": "Forward", "league": "Premier League", "age": 24,
     "nationality": "Norway", "value": 95},
    {"name": "Kylian Mbappé", "club": "Paris Saint-Germain", "position": "Forward", "league": "Ligue 1", "age": 25,
     "nationality": "France", "value": 105},
    {"name": "Mohamed Salah", "club": "Liverpool", "position": "Forward", "league": "Premier League", "age": 32,
     "nationality": "Egypt", "value": 80},
    {"name": "Luka Modrić", "club": "Real Madrid", "position": "Midfielder", "league": "La Liga", "age": 38,
     "nationality": "Croatia", "value": 70}
    # Expand with more players...
]


class FootdleGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Guess the Footballer Game")
        self.max_attempts = 6  # Set max attempts for guesses
        self.attempts = 0
        self.score = 0
        self.start_time = time.time()

        # Initialize data
        self.target_player = random.choice(players_database)

        # Setup UI components
        self.setup_ui()

    def setup_ui(self):
        # Header
        self.header_label = tk.Label(self.root, text="Guess the Footballer!", font=("Helvetica", 20))
        self.header_label.pack(pady=20)

        # Instructions Label
        self.instructions_label = tk.Label(self.root, text="Guess the player. You have 6 attempts!",
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

        # Feedback Grid (to display guesses and their results)
        self.grid_frame = tk.Frame(self.root)
        self.grid_frame.pack(pady=20)
        self.grid_labels = []
        for i in range(self.max_attempts):
            row = []
            for j in range(4):  # 4 columns: Name, Club, Position, League
                label = tk.Label(self.grid_frame, text=" ", width=15, height=2, relief="solid", anchor="center",
                                 font=("Helvetica", 10))
                label.grid(row=i, column=j)
                row.append(label)
            self.grid_labels.append(row)

        # Feedback Label
        self.feedback_label = tk.Label(self.root, text="", font=("Helvetica", 12))
        self.feedback_label.pack(pady=10)

        # Score and Timer
        self.score_label = tk.Label(self.root, text=f"Score: {self.score}", font=("Helvetica", 12))
        self.score_label.pack(pady=10)

        self.timer_label = tk.Label(self.root, text="Time: 0s", font=("Helvetica", 12))
        self.timer_label.pack(pady=10)

        # Reset Button
        self.reset_button = tk.Button(self.root, text="Reset Game", command=self.reset_game, font=("Helvetica", 12))
        self.reset_button.pack(pady=10)

    def update_timer(self):
        elapsed_time = int(time.time() - self.start_time)
        self.timer_label.config(text=f"Time: {elapsed_time}s")

    def submit_guess(self):
        # Get the selected guess from combobox
        guess = self.combobox.get()
        if not guess:
            messagebox.showwarning("Input Error", "Please select a player!")
            return

        # Check if the guess is correct
        self.attempts += 1
        guessed_player = next((player for player in players_database if player["name"].lower() == guess.lower()), None)
        if not guessed_player:
            messagebox.showwarning("Player Not Found", "This player is not in the database.")
            return

        feedback = self.get_feedback(guessed_player)

        # Update grid with the guess and feedback
        self.update_grid(guess, feedback)

        # Check if the guess is correct
        if guessed_player["name"].lower() == self.target_player["name"].lower():
            self.feedback_label.config(text=f"Correct! {guess} is the correct player.", fg="green")
            self.submit_button.config(state="disabled")  # Disable submit button after correct guess
            self.update_score(100)  # Add points for correct guess
        else:
            self.feedback_label.config(text=f"Try again! Attempt {self.attempts}/{self.max_attempts}", fg="orange")

        if self.attempts >= self.max_attempts and guessed_player["name"].lower() != self.target_player["name"].lower():
            self.feedback_label.config(
                text=f"You've run out of attempts! The correct player was {self.target_player['name']}.", fg="red")
            self.submit_button.config(state="disabled")
            self.update_score(-50)  # Penalize for wrong guesses

    def get_feedback(self, guessed_player):
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

    def update_grid(self, guess, feedback):
        # Update the grid with the guess and feedback
        row = self.attempts - 1
        guessed_player = next(player for player in players_database if player["name"].lower() == guess.lower())

        # Player Name Column
        self.grid_labels[row][0].config(text=guessed_player["name"])
        # Club Column
        self.grid_labels[row][1].config(text=guessed_player["club"])
        # Position Column
        self.grid_labels[row][2].config(text=guessed_player["position"])
        # League Column
        self.grid_labels[row][3].config(text=guessed_player["league"])

        # Change colors based on feedback
        for i, feedback_text in enumerate(feedback.split("\n")):
            if "✅" in feedback_text:
                self.grid_labels[row][i].config(bg="lightgreen")
            elif "❌" in feedback_text:
                self.grid_labels[row][i].config(bg="lightcoral")

    def update_score(self, points):
        self.score += points
        self.score_label.config(text=f"Score: {self.score}")

    def reset_game(self):
        # Reset the game state
        self.target_player = random.choice(players_database)
        self.attempts = 0
        self.score = 0
        self.start_time = time.time()
        self.combobox.set("Select a player")
        self.feedback_label.config(text="")
        self.submit_button.config(state="normal")  # Enable the submit button again
        # Clear the grid
        for row in self.grid_labels:
            for label in row:
                label.config(text=" ", bg="white")
        self.update_score(0)


# Setup Tkinter window
root = tk.Tk()
game = FootdleGame(root)


# Timer update loop
def update_timer():
    game.update_timer()
    root.after(1000, update_timer)


update_timer()  # Start the timer

root.mainloop()

