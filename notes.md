## How is Hangman played IRL?

1. Draw the starting point
2. Pick a word -> A list of possible words, save one of them into a variable
3. Draw dashes -> 1 dash for each letter in the word
    a. For loop?
4. Guess Time
    a. Give an input -> Letter
    b. Check if the letter is in the string
        a. If its in the string, replace dash with the ltter
        b. If not in the string, draw the next step
        c. No matter, keep track of guesses user did
            a. Dont let same guess more than 1
4. Game Ends
    a. If they guess the whole word-> game ends-> you win
    b. if the full body drawn, game ends, you lose
