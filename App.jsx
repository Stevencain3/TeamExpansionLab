import { useState } from "react";
import CounterDisplay from "./CounterDisplay.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}>
      <h1>My First React Counter</h1>

      <CounterDisplay count={count} />

      {count < 0 && <p style={{ color: "red" }}>Careful! Negative count!</p>}

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
