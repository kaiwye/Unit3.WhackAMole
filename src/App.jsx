import Welcome from "./Components/Welcome/Welcome";
import Game from "./Components/Game/Game";
import { useGame } from "./Components/Game/GameScoreKeeper";

export default function App() {
  const { playing, startGame } = useGame();

  return (
    <>
      <h1>Whack A Mole</h1>
      {!playing && <Welcome startGame={startGame} />}
      {playing && <Game />}
    </>
  );
}
