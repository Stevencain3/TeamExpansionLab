import CounterCard from './CounterCard.jsx'

export default function CounterList({ counters, onInc, onDec, onReset, onDelete }) {
  // if there are no counters yet, show a simple message instead of an empty grid
  if (!counters.length) {
    return <p className="empty">No counters yet — add one above.</p>
  }

  return (
    // grid layout to neatly display all the counter cards
    <section className="grid">
      {counters.map((c) => (
        <CounterCard
          key={c.id}   // React needs a stable key to keep track of each counter
          counter={c}  // pass the whole counter object down
          onInc={onInc}
          onDec={onDec}
          onReset={onReset}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}
