import Dice from "./Dice";
import "./index.css";
import "./style.css";
import "./Dice.css";

export default function App() {
  return (
    <div className="boxMother">
      <Dice sides={6} />
      <Dice sides={6} />
    </div>
  );
}
