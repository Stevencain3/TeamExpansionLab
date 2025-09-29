import { useState } from 'react'

export default function AddCounterForm({ onCreate }) {
  const [name, setName] = useState('')

  const valid = name.trim().length >= 3

  const submit = (e) => {
    e.preventDefault()
    if (!valid) return
    onCreate(name.trim())
    setName('')
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <label htmlFor="counterName">Add a counter</label>
      <input
        id="counterName"
        type="text"
        placeholder="e.g., Bug Fixes"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={!valid}>Create</button>
      <small className="hint">{!valid ? 'Enter ≥ 3 characters' : 'Ready!'}</small>
    </form>
  )
}