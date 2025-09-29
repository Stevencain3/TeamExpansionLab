import CounterCard from './CounterCard.jsx'


export default function CounterList({ counters, onInc, onDec, onReset, onDelete }) {
  if (!counters.length) {
    return <p className="empty">No counters yet — add one above.</p>
  }

  return (
    <section className="grid">
      {counters.map((c) => (
        <CounterCard
          key={c.id}                 // stable key
          counter={c}
          onInc={onInc}
          onDec={onDec}
          onReset={onReset}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}