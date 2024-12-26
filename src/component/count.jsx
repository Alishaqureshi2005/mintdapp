import { useState } from "react"
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Count = () => {
    let[count, setCount]=useState(1)
    const location = useLocation();
    
    const getColors = () => {
        switch(location.pathname) {
            case '/page3':
                return { border: 'blue-500', text: 'blue-500' };
            default:
                return { border: 'white', text: 'white' };
        }
    }
    
    const { border, text } = getColors();
    
    return (
        <div className={`border-2 w-20 h-10 justify-between border-${border} text-${text} px-4 py-2 rounded-full flex items-center gap-2`}>
            <span>{count}</span>
            <div className="flex flex-col">
                <button onClick={()=>setCount(++count)}><FaCaretUp/></button>
                <button onClick={()=>setCount(count>1?count-1:1)}><FaCaretDown/></button>
            </div>
        </div>
    )
}

export default Count