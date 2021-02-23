import { darkTheme, lightTheme } from 'store/initialState'
import { useLocalStorage } from 'hooks/useLocalStorage'

const useInitialState = () => {
  const [theme, setTheme] = useLocalStorage('theme', darkTheme)
  const [isDarkModeActive, setIsDarkModeActive] = useLocalStorage(
    'isDarkModeActive',
    true
  )
  //Estado que guarda el tanque seleccionado
  const [defaultTank, setDefaultTank] = useLocalStorage('defaultTank', {})

  const activateDarkMode = () => {
    setTheme(darkTheme)
    setIsDarkModeActive(true)
  }

  const disableDarkMode = () => {
    setTheme(lightTheme)
    setIsDarkModeActive(false)
  }

  const addTankForDefault = ({ tank }) => {
    setDefaultTank(tank)
  }

  return {
    theme,
    isDarkModeActive,
    activateDarkMode,
    disableDarkMode,
    addTankForDefault,
    defaultTank,
  }
}

export default useInitialState
