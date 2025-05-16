import { createContext, useState, useContext } from "react";

const GameContext = createContext();

const numHoles = 9;

export default function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(true);

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
    if (!playing) return;
    setScore((s) => s + 1);
    setField((initial) => makeField(initial));
  };

  const resetGame = () => {
    setScore(0);
    setField(makeField());
    setPlaying(true);
  };

  return (
    <GameContext.Provider
      value={{ field, score, whackMole, resetGame, playing, setPlaying }}
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
