import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emoji
    const onClickEmojiItem = () => {
      onClickEmoji(id)
    }
    return (
      <li className="emoji-item" onClick={onClickEmojiItem}>
        <button>
          <img
            key={id}
            src={emojiUrl}
            alt={emojiName}
            className="emoji-image"
          />
        </button>
      </li>
    )
  }
}

export default EmojiCard
