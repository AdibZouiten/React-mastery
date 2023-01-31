import React from 'react'

function Events() {
  function Event() {
    console.log('this event is fired');
  }
  function shoot(msg,event) {
    console.log(event);
    alert(msg);
  }
  return (
    <div>
      <button onClick={Event}>log</button>
      <button onClick={(event) => shoot("Goal!",event)}>Take the shot!</button>

    </div>
  )
}

export default Events