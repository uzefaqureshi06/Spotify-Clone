import { createContext, useRef } from "react";

 export const PlayerContext =createContext()

const PlayerContextProvider =(props) =>{

    const audioRef =useRef()
    const contextValue={
audioRef
    }
    return(
        <PlayerContext.Provider value={contextValue}>
{props.childeren}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider