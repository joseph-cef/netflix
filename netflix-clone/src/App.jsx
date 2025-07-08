import React from 'react'
import Nav from './component/Nav'
import Trends from './component/Trends'
import Reasons from './component/Reasons'
import Questions from './component/Questions'

const App = ()=> {
  return (
    <div className="bg-black  text-white">
      <Nav />
      <Trends />
      <Reasons />
      <Questions />
    </div>
  )
}

export default App
