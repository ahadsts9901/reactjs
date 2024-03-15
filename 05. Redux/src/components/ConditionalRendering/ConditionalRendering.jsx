import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [isUserOnline,setIsUserOnline] = useState(false);

    const userStatusHandler = ()=>{
        setIsUserOnline(!isUserOnline)
    }
  return (
    <>
        <button onClick={userStatusHandler}>Click to {!isUserOnline ? "Online" : "Offline"}</button>
        <p>Current Status:- User is {isUserOnline ? "Online" : "Offline"} .</p>
    </>
  )
}

export default ConditionalRendering