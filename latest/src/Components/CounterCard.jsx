export default function CounterCard({ counter, onInc, onDec, onReset, onDelete }) {
  // how much we change the counter by (right now always 1, but easy to tweak later)
  const step = 1

  return (
    <div className="card">
      <div className="card-head">
        {/* show the counter’s name, and if it’s long you can hover to see the full title */}
        <h2 title={counter.name}>{counter.name}</h2>

        {/* small delete button in the corner to remove this counter */}
        <button 
          className="delete" 
          onClick={() => onDelete(counter.id)} 
          aria-label="Delete counter"
        >
          ✕
        </button>
      </div>

      {/* big number display so it’s easy to see the current value */}
      <div className="value">{counter.value}</div>

      {/* row of buttons to control the counter */}
      <div className="actions">
        <button onClick={() => onInc(counter.id, step)}>+{step}</button>
        <button onClick={() => onDec(counter.id, step)}>-{step}</button>
        <button onClick={() => onReset(counter.id)}>Reset</button>
      </div>
    </div>
  )
}
