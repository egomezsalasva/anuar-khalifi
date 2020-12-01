
import React, { createContext } from 'react'
import { piecesData } from '../data/piecesData'


const PiecesContext = createContext()

const PiecesContextProvider = ({children}) => {

    return (
        <PiecesContext.Provider value={{piecesData}}>
            {children}
        </PiecesContext.Provider>
    )
}
const PiecesContextConsumer = PiecesContext.Consumer

export { PiecesContextProvider, PiecesContextConsumer, PiecesContext }

