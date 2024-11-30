import './index.css'

function WinOrLoseCard({isWon, score, onPlayAgain}) {
  const resultImageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-lose-card">
      <div className="result-container">
        <div className="result-details">
          <h1 className="result-heading">{isWon ? 'You Won!' : 'You Lose!'}</h1>
          {isWon && <p className="best-score">Best Score</p>}
          {isWon && <p className="score-details">12/12</p>}
          {!isWon && (
            <p className="score-text">
              Score
              <span className="span-color">
                {score}/{12}
              </span>
            </p>
          )}
          <button
            className="play-again-button"
            onClick={onPlayAgain}
            type="button"
          >
            Play Again
          </button>
        </div>
        <img src={resultImageUrl} alt="win or lose" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
