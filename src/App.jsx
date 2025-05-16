import { useState } from "react";
import Welcome from "./Components/Welcome/Welcome";
import Game from "./Components/Game/Game";
import { useGame } from "./Components/Game/GameScoreKeeper";

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  const { resetGame } = useGame();

  const startGame = () => setGameStart(true);

  const restartGame = () => {
    resetGame();
    setGameStart(false);
  };

  return (
    <>
      <h1>Whack A Mole</h1>
      {!gameStart && <Welcome startGame={startGame} />}
      {gameStart && <Game restartGame={restartGame} />}
    </>
  );
}
