import React from 'react'
import { useState } from 'react'
import "./result.css"

export default function Result({noOfCorrect, restartGame}){
  const [back, setback] = useState(false)
  
  return (
    <div className={`${'finalPage'}`}>
      <p>Final Result</p>
      <p className="aboveButton2">{noOfCorrect} of out 5 question - ({(noOfCorrect/5)*100}%)</p>
      <button onClick={restartGame}>Resart Game</button>
    </div>
  )
}
