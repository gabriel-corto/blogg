import { ArrowSquareDownLeft, MapPin } from "phosphor-react";

import './style.css'
export function Sidebar() {
  return(
    <div className="sidebar">
      <header className="sidebar-header" />
      <article className="sidebar-user-info">
        <img src="/assets/avatar.png" className="avatar" />

        <div className="sidebar-content">
          <strong>Gabriel Corto</strong>
          <span>  
            <MapPin weight="bold"/> 
            Luanda- Angola
          </span>
        </div>
      </article>

      <div className="separator" />

      <footer className="sidebar-footer">
        <a href="#">
          <ArrowSquareDownLeft weight="bold"/>
          <span>Terminar Sessão</span>
        </a>
      </footer>
    </div>
  )
}