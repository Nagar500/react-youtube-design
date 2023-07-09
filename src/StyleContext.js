import React, {createContext} from 'react'

export const StyleContext = createContext()

export const StyleProvider = ({children})=>{
    const [isStyle, setIsStyle] = React.useState(false)

    const handleToggle = ()=>{
        setIsStyle(!isStyle)
    }
    return(
        <StyleContext.Provider value={{isStyle, handleToggle}}>
            {children}
        </StyleContext.Provider>
    )
}