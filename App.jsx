import { useState } from "react";
import CounterDisplay from "./CounterDisplay.jsx";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Counter App</h1>

      {/* Use child component */}
      <CounterDisplay count={count} />

      {/* Buttons */}
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* Conditional rendering */}
      {count < 0 && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Careful! Negative count!
        </p>
      )}
    </div>
  );
}

