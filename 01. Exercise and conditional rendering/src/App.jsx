import { useState } from "react"
import CompA from "./components/CompA"
import CompB from "./components/CompB"
import CompC from "./components/CompC"
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering"

function App() {
  const [newTitle,setNewTitle] = useState("")
  const titleHandler = (title)=>{
    setNewTitle(title)
  }

  return (
    <>
     <CompA titleHandler={titleHandler}/>
     <CompB title={newTitle}  />
     <ConditionalRendering />
    </>
  )
}

export default App
