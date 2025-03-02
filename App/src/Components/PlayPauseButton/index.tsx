import { useState } from "react";
import { LuPlay } from "react-icons/lu";
import { LuPause } from "react-icons/lu";
import "./PlayPause.scss"

export const PlayPauseButton = ({className}:{className:string})=>{

    const [isPaused, setIsPaused] = useState(true)

    function handleClick() {
        //Toggle button
        setIsPaused(!isPaused)
    }

    return(
        <button onClick={()=>handleClick()} 
        className={`${className} bg-transparent border-0 component-button`}>
            {
                isPaused?
                <LuPlay className="text-white fs-1 component-playbutton"/>
                :
                <LuPause className="text-white fs-1 component-pausebutton"/>
            }
        </button>
    )
}