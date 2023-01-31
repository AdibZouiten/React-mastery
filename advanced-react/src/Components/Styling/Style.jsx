import React from 'react'
import './Style.css'
function Style() {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <div>
            <h1 style={{color: "red"}}>Hello Style!</h1>
            <h1 style={myStyle}>Hello Style!</h1>
            <p>Add a little style!</p>
        </div>
    )
}

export default Style