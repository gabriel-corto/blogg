import { Heart, Trash } from "phosphor-react";

import './style.css'
import { useState } from "react";

interface IComment {
  text: string
  onDeleteComment: () => void  
}

export function Comment({ text, onDeleteComment }: IComment) {
  const [likes, setLikes] = useState(0)

  function handleCreateLike() {
    setLikes((like) => like + 1)
  }
  return(
    <article className="comment">
      <img src="/assets/avatar.png" className="avatar" />

      <div className="comment-content">
        <div className="comment-separator">
          <div className="comment-header">
            <strong>Gabriel Francisco</strong>
          </div>

          <p className="comment-text">{text}</p>

          <strong className="comment-likes" onClick={handleCreateLike}>
            <Heart weight="bold"/>  Likes {likes}
          </strong>
        </div>

        <button className="button-delete-comment" onClick={onDeleteComment}>
          <Trash weight="bold"/>
        </button>
      </div>

      
    </article>
  )
}