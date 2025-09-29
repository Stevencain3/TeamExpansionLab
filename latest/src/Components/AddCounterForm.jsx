import { useState } from 'react'

export default function AddCounterForm({ onCreate }) {
  // keep track of whatever the user types in the input box
  const [name, setName] = useState('')

  // simple check: only allow if at least 3 characters are typed
  const valid = name.trim().length >= 3

  // when the form is submitted
  const submit = (e) => {
    e.preventDefault() // stop page reload
    if (!valid) return // do nothing if the name is too short
    onCreate(name.trim()) // tell the parent component to actually create the counter
    setName('') // clear the input box
  }

  return (
    <form className="add-form" onSubmit={submit}>
      {/* label for accessibility */}
      <label htmlFor="counterName">Add a counter</label>
      
      {/* input box where I type the name */}
      <input
        id="counterName"
        type="text"
        placeholder="e.g., Bug Fixes"
        value={name}
        onChange={(e) => setName(e.target.value)} // update state on each keystroke
      />

      {/* button to create the counter */}
      <button type="submit" disabled={!valid}>Create</button>

      {/* tiny helper text under the input */}
      <small className="hint">
        {!valid ? 'Enter ≥ 3 characters' : 'Ready!'}
      </small>
    </form>
  )
}
