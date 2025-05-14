import HighScores from "../HighScores/HighScores";
import "./Welcome.css";

export default function Welcome({ startGame }) {
  return (
    <div className="welcome">
      <p>Welcome to Whack A Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={startGame}>Play</button>
      <HighScores />
    </div>
  );
}
