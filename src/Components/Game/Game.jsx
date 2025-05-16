import { useGame } from "./GameScoreKeeper";
import "./Game.css";

export default function Game() {
  const { field, score, whackMole, time, resetGame } = useGame();

  return (
    <>
      <div className="scoreboard">
        <button>Score: {score}</button>
        <button>Time: {time}</button>
        <button onClick={resetGame}>Restart</button>
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
