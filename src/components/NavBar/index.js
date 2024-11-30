import './index.css'

function NavBar({score, topScore, isGameOver}) {
  return (
    <nav className="nav-bar">
      <div className="nav-link1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div className="nav-link2">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
