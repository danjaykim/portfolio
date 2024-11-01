import { createContext, useState } from 'react'

export const DarkModeContext = createContext()

export default function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode((prevState) => !prevState)
    }
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? 'dark' : ''}>{children}</div>
        </DarkModeContext.Provider>
    )
}
