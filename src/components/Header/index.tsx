
import { DotsNine, House, MoonStars, NotePencil, Pencil, Sun, TagSimple, UsersThree } from 'phosphor-react'
import { useTheme } from '../../hooks/useTheme'
import { useLayoutEffect } from 'react'

import './style.css'
import { Link } from 'react-router-dom'
export function Header() {

  const { theme, toggleTheme } = useTheme()

  useLayoutEffect(() => {
    theme === "light" 
    ? document.body.setAttribute("class", theme)
    : document.body.setAttribute("class", theme)
  })

  return(
    <header className="header">
      <h1 className="logo">
        Blo<span>gg</span> 
      </h1>

      <nav className='navbar'>
        <ul className='menu'>
          <li>
            <Link to="/">
              <House weight='bold'/>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <NotePencil weight='bold'/>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <DotsNine weight='bold'/>
              <span>Categorias</span>
            </a>
          </li>
          <li>
            <a href="#">
              <TagSimple weight='bold'/>
              <span>Tags</span>
            </a>
          </li>
          <li>
            <a href="#">
              <UsersThree weight='bold'/>
              <span>Others</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="navbar-container-button">

        <button className='button-toggleTheme' title={theme === "light" ? "Dark Mode" : "Light Mode"} onClick={() => toggleTheme()}>
          { theme === "light" ? <MoonStars weight='bold'/> : <Sun weight='bold'/>  }
        </button>

        <button className='blogg-button-creator' title='Create New Blogg'>
          <Pencil weight='bold'/>
          <span>Create new</span>
        </button>
      </div>
    </header>
  )
}