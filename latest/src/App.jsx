import { useState } from 'react'

function Counter({ name, onRemove }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>
        {name} <button onClick={onRemove}>Remove</button>
      </h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <hr />
    </div>
  )
}

export default function App() {
  const [counters, setCounters] = useState([
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Pushups' },
  ])
  const [name, setName] = useState('')

  const addCounter = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setCounters(prev => [...prev, { id: Date.now(), name: name.trim() }])
    setName('')
  }

  const removeCounter = (id) => {
    setCounters(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div>
      <h1>Multi-Counter</h1>

      <form onSubmit={addCounter}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New counter name"
        />
        <button type="submit">Add</button>
      </form>

      {counters.map(c => (
        <Counter
          key={c.id}
          name={c.name}
          onRemove={() => removeCounter(c.id)}
        />
      ))}
    </div>
  )
}
