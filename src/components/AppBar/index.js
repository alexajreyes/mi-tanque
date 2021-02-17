import React, { useContext } from 'react'
//Import icons
import { ReactComponent as LogoIcon } from 'assets/logo.svg'
import { FaSun as LightModeIcon } from 'react-icons/fa'
import { FaMoon as DarkModeIcon } from 'react-icons/fa'

import { AppContext } from 'store'

//Import components
import Typography from 'components/Typography'
import { Header, Logo } from './styles'

export default function AppBar() {
  const { isDarkModeActive, disableDarkMode, activateDarkMode } = useContext(
    AppContext
  )

  return (
    <Header>
      <Logo>
        <LogoIcon />
        <Typography variant="title" value="Mi tanque" />
      </Logo>

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
