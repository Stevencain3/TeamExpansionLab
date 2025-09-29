export default function Header({ total, onResetAll }) {
  return (
    <header className="header">
      {/* title for the app */}
      <h1>Multi-Counter Dashboard</h1>

      {/* section that shows the combined total of all counters */}
      <div className="total">
        <span>Total:</span>
        <strong>{total}</strong> {/* number comes from props, not its own state */}
        
        {/* button that resets every counter back to zero at once */}
        <button className="reset-all" onClick={onResetAll}>
          Reset All
        </button>
      </div>
    </header>
  )
}