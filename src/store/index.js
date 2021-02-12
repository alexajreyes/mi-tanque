import React from 'react'
import useInitialState from 'hooks/useInitialState'

export const AppContext = React.createContext({})

const AppProvider = ({ children }) => {
    const initialState = useInitialState()
    console.log(initialState)

    return (
        <AppContext.Provider value={initialState}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
