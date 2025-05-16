import { useGame } from "./GameScoreKeeper";
import "./Game.css";

export default function Game({ restartGame }) {
  const { field, score, whackMole } = useGame();

  return (
    <>
      <div className="scoreboard">
        <button>Score: {score}</button>
        <button>Timer</button>
        <button onClick={restartGame}>Restart</button>
      </div>

      <div className="field">
        {field.map((mole, index) => (
          <div
            key={index}
            className={`hole ${mole ? "mole" : ""}`}
            onClick={mole ? whackMole : undefined}
          ></div>
        ))}
      </div>
    </>
  );
}
