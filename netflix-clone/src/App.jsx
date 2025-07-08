import React from 'react'
import Nav from './component/Nav'
import Trends from './component/Trends'
import Reasons from './component/Reasons'

const App = ()=> {
  return (
    <div className="bg-black  text-white">
      <Nav />
      <Trends />
      <Reasons />
    </div>
  )
}

export default App
