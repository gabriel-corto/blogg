import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { ThemeContextProvider } from './context/theme/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={routes}/> 
    </ThemeContextProvider>
  </React.StrictMode>,
)
