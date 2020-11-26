
import React, { createContext, useState } from 'react'


const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    // Color Themeing
        const [contextTheme, setContextTheme] = useState({ mode: "dark" })
        const [themeColorToggle, setThemeColorToggle] = useState(false)
        const themeColorToggleHandler = () => {
            if(themeColorToggle === false){
                setContextTheme({ mode: "light"})
            } else {
                setContextTheme({ mode: "dark"})
            }
            setThemeColorToggle(!themeColorToggle)
        }
    // 

    return (
        <ThemeContext.Provider value={{
            contextTheme,
            themeColorToggleHandler
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
const ThemeCtxConsumer = ThemeContext.Consumer

export { ThemeContextProvider, ThemeCtxConsumer, ThemeContext }

