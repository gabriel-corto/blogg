
import { ReactNode } from 'react'
import './style.css'


interface BloggProps {
  name?: string 
  location?: string
  title?: string
  text?: string
  children?: ReactNode
}

export function Blogg({ children, name, location, title, text }: BloggProps) {
  return(
    <div className='blogg'>
      <div className="blogg-header">
        <div className="blogg-user-info">
          <figure>
            <img src="/assets/avatar.png" className="avatar" />
          </figure>

          <p>
            <strong>{name}</strong>
            <span>{location}</span>
          </p>
        </div>

        <p className='DatePusblish'>há 1h</p>
      </div>

      <div className="blogg-content">
        <strong className="title">{title}</strong>
        <p className="blogg-text">{text}</p>

        <div className="links">
          <a href="#">#React</a>
          <a href="#">#Typescript</a>
        </div>
      </div>

      {children}
    </div>
  )
}