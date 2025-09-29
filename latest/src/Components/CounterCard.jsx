export default function CounterCard({ counter, onInc, onDec, onReset, onDelete }) {
  const step = 1
  return (
    <div className="card">
      <div className="card-head">
        <h2 title={counter.name}>{counter.name}</h2>
        <button className="delete" onClick={() => onDelete(counter.id)} aria-label="Delete counter">✕</button>
      </div>

      <div className="value">{counter.value}</div>

      <div className="actions">
        <button onClick={() => onInc(counter.id, step)}>+{step}</button>
        <button onClick={() => onDec(counter.id, step)}>-{step}</button>
        <button onClick={() => onReset(counter.id)}>Reset</button>
      </div>
    </div>
  )
}