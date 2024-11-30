import {useState} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

function EmojiGame({emojisList}) {
  const [clickedEmojis, setClickedEmojis] = useState([])
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isWon, setIsWon] = useState(false)
  const [repeatedClick, setRepeatedClick] = useState(false)

  const onClickEmoji = id => {
    if (clickedEmojis.includes(id)) {
      setRepeatedClick(true)
      setIsGameOver(true)
    } else {
      const newClickedEmojis = [...clickedEmojis, id]
      setClickedEmojis(newClickedEmojis)
      setScore(newClickedEmojis.length)

      if (newClickedEmojis.length === emojisList.length) {
        setIsGameOver(true)
        setIsWon(true)
      }
    }
  }

  const onPlayAgain = () => {
    setClickedEmojis([])
    setTopScore(prevTopScore => Math.max(prevTopScore, score))
    setScore(0)
    setIsGameOver(false)
    setIsWon(false)
    setRepeatedClick(false)
  }

  return (
    <div className="emoji-game">
      {!isGameOver && <NavBar score={score} topScore={topScore} />}
      {!isGameOver ? (
        <ul className="emoji-game-container">
          {emojisList
            .sort(() => Math.random() - 0.5)
            .map(emoji => (
              <EmojiCard
                key={emoji.id}
                emoji={emoji}
                onClickEmoji={onClickEmoji}
              />
            ))}
        </ul>
      ) : (
        <WinOrLoseCard
          isWon={isWon}
          score={score}
          onPlayAgain={onPlayAgain}
          repeatedClick={repeatedClick}
        />
      )}
    </div>
  )
}

export default EmojiGame
