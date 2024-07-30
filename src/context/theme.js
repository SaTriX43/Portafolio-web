import React, {createContext, useState} from "react";

const ThemeContext = createContext()

function ThemeProvider({children}) {

  let [theme , setTheme] = useState('dark')

  function handleChangeTheme () {
    if(theme === 'dark') {
      theme = 'light'
      document.body.classList.remove('dark-mode')
    }else {
      theme = 'dark'
      document.body.classList.add('dark-mode')
    }

    setTheme(theme)
    console.log(`cambiando tema a ${theme}`)
  }

  return(
    <ThemeContext.Provider value={{handleChangeTheme , theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext , ThemeProvider}