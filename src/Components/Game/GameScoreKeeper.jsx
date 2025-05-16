import { createContext, useState, useContext, useEffect, useRef } from "react";

const GameContext = createContext();

const numHoles = 9;
const timeLimit = 15;

export default function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [time, setTime] = useState(timeLimit);
  const timer = useRef();

  useEffect(() => {
    if (time === 0) stopGame();
  }, [time]);

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  function makeField(initialField = []) {
    const newField = Array(numHoles).fill(false);
    let mole = Math.floor(Math.random() * numHoles);
    while (initialField[mole]) {
      mole = Math.floor(Math.random() * numHoles);
    }
    newField[mole] = true;
    return newField;
  }

  const whackMole = () => {
    setField(makeField(field));
    setScore(score + 1);
  };

  const startGame = () => {
    clearInterval(timer.current);
    setScore(0);
    setTime(timeLimit);
    setField(makeField());
    setPlaying(true);
    timer.current = setInterval(() => setTime((time) => time - 1), 1000);
  };

  const stopGame = () => {
    setHighScores((initial) => {
      const newScore = [...initial, score].sort((a, b) => b - a).slice(0, 5);
      return newScore;
    });
    setPlaying(false);
    clearInterval(timer.current);
    setTime(timeLimit);
  };

  const resetGame = () => {
    setHighScores((initial) => {
      const newScore = [...initial, score].sort((a, b) => b - a).slice(0, 5);
      return newScore;
    });
    startGame();
  };

  return (
    <GameContext.Provider
      value={{
        field,
        score,
        whackMole,
        resetGame,
        playing,
        setPlaying,
        highScores,
        startGame,
        stopGame,
        time,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
};
