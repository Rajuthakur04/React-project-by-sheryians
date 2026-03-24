import React from 'react'
import "./app.scss"
import Dock from './Component/Dock'
import Nav from './Component/Nav'
import MacWindow from './Component/windows/MacWindow'

const App = () => {
  return (
   <main>
    <MacWindow/>
    <Nav/>
    <Dock/>
   </main>
  )
}

export default App
