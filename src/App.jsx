import { useState } from "react";
import Welcome from "./Components/Welcome/Welcome";
import Game from "./Components/Game/Game";

export default function App() {
  const [gameStart, setGameStart] = useState(false);

  const startGame = () => setGameStart(true);

  const restartGame = () => setGameStart(false);

  return (
    <>
      <h1>Whack A Mole</h1>
      {!gameStart && <Welcome startGame={startGame} />}
      {gameStart && <Game restartGame={restartGame} />}
    </>
  );
}
