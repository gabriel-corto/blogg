import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Blogg } from "./components/Blogg";
import { Comment } from "./components/Comment";

import { Pencil } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import './styles/layout.css'

export function App() {

  const [commentText, setCommentText] = useState<string>("")
  const [comments, setComments] = useState<string[]>([])

  function createNewComment(event: FormEvent) {
    event.preventDefault()
    
    if(commentText.length === 0) {
      return
    } else {
      setComments([...comments, commentText])
      setCommentText("")
    }
  }
  function changeCommentValue(event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(event.target.value)
  }
  function deleteComment(comment: string) {
    const commentNotDeleted = comments.filter((commentToDelete) => {
      return commentToDelete !== comment
    })
    setComments(commentNotDeleted)
  }
  return(
    <div className="layout">
      <Header />

      <main className="layout-wrapper">
        <Sidebar />

        <div className="bloggs">
          <Blogg>

            <form action="#" className="form-create-comment" onSubmit={createNewComment}>
              <p>Deixe o seu feedback</p>

              <textarea 
                value={commentText}
                onChange={changeCommentValue}
                placeholder="Escreva um comentário..."/>

              <button type="submit" disabled={commentText.length === 0}>
                <Pencil weight="bold"/> 
                <span>Comentar</span>
              </button>
            </form>

            <div className="comments">
              {comments?.map((comment) => {
                return(
                  <Comment text={comment} key={comment} onDeleteComment={() => deleteComment(comment)}/>
                )
              })}
            </div>
          </Blogg> 
        </div>
      </main>
    </div>
  )
}