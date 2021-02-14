import { useState } from 'react'
import { darkTheme, lightTheme } from 'store/initialState'
import { useLocalStorage } from 'hooks/useLocalStorage'

const useInitialState = () => {
  const [theme, setTheme] = useLocalStorage('theme', darkTheme)
  const [isDarkModeActive, setIsDarkModeActive] = useLocalStorage(
    'isDarkModeActive',
    true
  )

  const activateDarkMode = () => {
    setTheme(darkTheme)
    setIsDarkModeActive(true)
  }

  const disableDarkMode = () => {
    setTheme(lightTheme)
    setIsDarkModeActive(false)
  }

  return {
    theme,
    isDarkModeActive,
    activateDarkMode,
    disableDarkMode,
  }
}

export default useInitialState
