import React, { useContext } from 'react'
import { Route } from 'wouter'
import Home from 'pages/Home'
import { ThemeProvider } from 'styled-components'
import { AppContext } from 'store'

//import { GlobalStyle } from '../GlobalStyle'

function App() {
    const { theme } = useContext(AppContext)

    console.log(theme)
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Route path="/" default component={Home} />
                <Route path="/history" component={Home} />
            </ThemeProvider>
        </div>
    )
}

export default App
