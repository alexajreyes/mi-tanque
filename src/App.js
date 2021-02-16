import React, { useContext } from 'react'
import { Route } from 'wouter'
import Home from 'pages/Home'
import TankSearch from 'pages/TankSearch'
import { ThemeProvider } from 'styled-components'
import { AppContext } from 'store'

import { GlobalStyle } from 'styles/globalStyles'
import AppBar from 'components/AppBar'

function App() {
    const { theme } = useContext(AppContext)

    console.log(theme)
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AppBar />
                <Route path="/" default component={Home} />
                <Route path="/tanques" default component={TankSearch} />
                <Route path="/history" component={Home} />
            </ThemeProvider>
        </div>
    )
}

export default App
