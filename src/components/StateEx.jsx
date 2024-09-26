import React from 'react'
import { useState } from 'react'

export default function StateEx() {
    const[index, setIndex] = useState(0);// index is a state variable and setIndex is the setter function. The [ and ] syntax here is called array destructuring
    
    function handleClick()
    {
        setIndex(index+1);
    }
    return(
        <>
        <button onClick={handleClick}>
            Next

        </button>
        </>
    )
}
