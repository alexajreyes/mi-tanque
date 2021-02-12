import { useState } from 'react'
import { darkTheme, lightTheme } from 'store/initialState'

const useInitialState = () => {
    const [theme, setTheme] = useState(darkTheme)

    const activateDarkMode = () => {
        setTheme(darkTheme)
    }

    const disableDarkMode = () => {
        setTheme(lightTheme)
    }

    return {
        theme,
        activateDarkMode,
        disableDarkMode,
    }
}

export default useInitialState
