import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {
    console.log("COMP IS RENDER")
    const [state,setState] = useState(false)
    const [fetchData,setFetchData] = useState(false)

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    // case 1:
    useEffect(()=>{
        console.log("API Hit !!!")
    },[fetchData])

    const clickHandler = ()=>{
        console.log(name)
    }
  return (
    <>
        <h1>Learning use Effect </h1>
        <button onClick={()=>setState(!state)}>click to change state</button>
        <button onClick={()=>setFetchData(!fetchData)}>Click to Fetch Data Again !</button>
       
            <div>
                <label htmlFor="name">Name</label>
                <input value={name} type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder='Enter Your Email' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" placeholder='Enter Your Password' />
            </div>
            <button onClick={clickHandler}>Click</button>
       
    </>
  )
}

export default UseEffectComp