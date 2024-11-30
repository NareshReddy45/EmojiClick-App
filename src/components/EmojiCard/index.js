import './index.css'

function EmojiCard({emoji, onClickEmoji}) {
  const handleClick = () => {
    onClickEmoji(emoji.id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={handleClick}>
        <img
          src={emoji.emojiUrl}
          alt={emoji.emojiName}
          className="emoji-image"
        />
      </button>
    </li>
  )
}

export default EmojiCard
