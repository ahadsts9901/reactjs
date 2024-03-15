import React from 'react'
import Functional from './components/Functional'
import Class from './components/Class'

const App = () => {
  return (
    <>
      <Functional message="I am functional" />
      <Class message="I am class" />
    </>
  )
}

export default App