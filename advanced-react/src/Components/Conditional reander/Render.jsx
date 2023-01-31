import React from 'react'
import Style from '../Styling/Style';
import Events from './../Events/Events';
function Render() {
    const Render = false
    return (
        <div>
            {Render ? <Events/>: <Style/>}
        </div>
    )
}

export default Render