import React,{memo} from 'react'

const CompC = () => {
  console.log("COMP C")
  return (
    <h1> I AM COMP C</h1>
  )
}

export default memo(CompC)