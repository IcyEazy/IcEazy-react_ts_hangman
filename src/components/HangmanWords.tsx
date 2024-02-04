// import React from "react";
import "../styles.css";

interface HangmanWordsProps {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

function HangmanWords({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordsProps) {
  return (
    <div className="lettersContainer">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letter" key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWords;
