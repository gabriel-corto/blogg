import { createContext, ReactNode, useState } from "react";

type ITheme = "light" | "dark"
interface ThemeContextProps {
  theme: ITheme 
  toggleTheme: () => void 
}

interface ThemeContextProviderProps {
  children: ReactNode
}
export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeContextProvider({ children } : ThemeContextProviderProps) {

  const STORAGE_THEME_KEY = "theme"

  const [theme, setTheme] = useState<ITheme>(() => {
    const storedTheme = localStorage.getItem(STORAGE_THEME_KEY)
    return( storedTheme as ITheme ) || "light"
  })


  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem(STORAGE_THEME_KEY, newTheme)
  }
  return(
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}