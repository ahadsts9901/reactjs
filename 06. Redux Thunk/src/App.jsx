import { useState, useCallback, useMemo } from "react"
import UseEffectComp from "./components/UseEffectComp"
import CardSection from "./components/CardSection/CardSection"
import CompA from "./components/CompA"
import CompB from "./components/CompB"
import CompC from "./components/CompC"
import Todo from "./components/Todo"
import Header from "./components/Header/Header"
import Counter from "./Counter"



function App() {
  console.log('APP COMP')
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState([]);
  const [allNumbers, setAllNumbers] = useState([10, 20, 30, 40, 50])

  const addTodoHandler = useCallback(() => {
    setTodos([...todos, "New Todo"])
  }, [todos])

  const displayGreatestNum = useMemo(() => {
    console.log("HEAVY OPERATION ...")
    return Math.max(...allNumbers)
  }, [allNumbers])


  return (
    <>
      <Header />
      {/* <CardSection /> */}
      {/* <CardSection /> */}
      <CardSection />
      {/* <Counter /> */}
      {/* <UseEffectComp /> */}

      {/* <Todo todos={todos} addTodoHandler={addTodoHandler} />
      <p>The current value of toggle is {toggle ? "TRUE" : "FALSE"} </p>
      <h2>The Greatest Number is {displayGreatestNum} </h2>
      <button onClick={()=> setAllNumbers([100,200,300,400,500,600])}>Click To Change Array</button>

      

      <button onClick={() => setToggle(!toggle)}>Click</button> */}


    </>
  )
}

export default App
