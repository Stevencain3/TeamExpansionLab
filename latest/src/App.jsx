import { useEffect, useState } from 'react' 
// useState: lets me store values and update them (like counters and input text)
// useEffect: lets me run code when something changes (I use it here to save to localStorage)

// this is the key I use for localStorage so my counters stay after refresh
const STORAGE_KEY = 'multi-counter-v1'

// reusable component for a counter card
function Counter({ name, count, onInc, onDec, onReset, onRemove }) {
  return (
    <div>
      <h2>
        {name} <button onClick={onRemove}>Remove</button>
      </h2>
      <p>{count}</p>
      <button onClick={onInc}>Increment</button>
      <button onClick={onDec}>Decrement</button>
      <button onClick={onReset}>Reset</button>
      <hr />
    </div>
  )
}

export default function App() {
  // counters is my list of all the counters I make
  // I first try to load them from localStorage
  // if there’s nothing saved yet, I start with two defaults
  const [counters, setCounters] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) return JSON.parse(raw)
    } catch {}
    return [
      { id: 1, name: 'Cups Of Water', count: 2 },
      { id: 2, name: 'Pushups', count: 25 },
    ]
  })

  // this is just for the text box where I type a new counter name
  const [name, setName] = useState('')

  // every time counters change, I overwrite localStorage with the new list
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(counters))
    } catch {}
  }, [counters])

  // add a new counter with whatever I typed in the box
  const addCounter = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setCounters(prev => [...prev, { id: Date.now(), name: name.trim(), count: 0 }])
    setName('')
  }

  // remove one counter by id
  const removeCounter = (id) => {
    setCounters(prev => prev.filter(c => c.id !== id))
  }

  // general helper to update a counter's count in a safe way
  const updateCount = (id, next) => {
    setCounters(prev =>
      prev.map(c => (c.id === id ? { ...c, count: next(c.count) } : c))
    )
  }

  return (
    <div>
      <h1>Multi-Counter</h1>

      {/* form at the top to add new counters */}
      <form onSubmit={addCounter}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New counter name"
        />
        <button type="submit">Add</button>
      </form>

      {/* loop through every counter and show its own card */}
      {counters.map(c => (
        <Counter
          key={c.id}
          name={c.name}
          count={c.count}
          onInc={() => updateCount(c.id, v => v + 1)}
          onDec={() => updateCount(c.id, v => v - 1)}
          onReset={() => updateCount(c.id, () => 0)}
          onRemove={() => removeCounter(c.id)}
        />
      ))}
    </div>
  )
}
