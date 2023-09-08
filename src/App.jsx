import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
   function handleClick(){
    alert('button clicked')
   }
   const handleClick2 = () =>{
    alert('button 2 clicked')
   }
   const addToFive = (num) =>{
    alert(num + 3)
   }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me first</button>
      <button onClick={handleClick2}>Click me second</button>
      <button onClick={()=>{alert('third clicked')}}>Click me third</button>
      <button onClick={()=>addToFive(7)}>Click me fourth</button>
      
    </>
  )
}

export default App
