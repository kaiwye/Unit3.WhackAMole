import { useGame } from "../Game/GameScoreKeeper";
import "./Highscores.css";

export default function HighScores() {
  const { highScores } = useGame();

  return (
    <div className="highscores">
      <h2>High Scores</h2>
      {highScores.length === 0 ? (
        <ul>
          <li>None yet. You can set the next highscore!</li>
        </ul>
      ) : (
        <ol>
          {highScores.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
