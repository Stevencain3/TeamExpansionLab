export default function Header({ total, onResetAll }) {
  return (
    <header className="header">
      <h1>Multi-Counter Dashboard</h1>
      <div className="total">
        <span>Total:</span>
        <strong>{total}</strong>
        <button className="reset-all" onClick={onResetAll}>Reset All</button>
      </div>
    </header>
  )
}