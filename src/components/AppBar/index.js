import React, { useContext } from 'react'
//Import icons
import { ReactComponent as Logo } from 'assets/logo.svg'
import { FaSun as LightModeIcon } from 'react-icons/fa'
import { FaMoon as DarkModeIcon } from 'react-icons/fa'

import { AppContext } from 'store'

//Import components
import Typography from 'components/Typography'
import { Header } from './styles'

export default function AppBar() {
  const { isDarkModeActive, disableDarkMode, activateDarkMode } = useContext(
    AppContext
  )

  return (
    <Header>
      <Logo />

      <Typography variant="title" value="Mi tanque" />

      {isDarkModeActive ? (
        <LightModeIcon
          onClick={disableDarkMode}
          size={30}
          color={isDarkModeActive ? '#fff' : '#142850'}
        />
      ) : (
        <DarkModeIcon
          onClick={activateDarkMode}
          size={30}
          color={isDarkModeActive ? '#fff' : '#142850'}
        />
      )}
    </Header>
  )
}
