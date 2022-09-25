import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1);
  }

  const handleBad = () => {
    setBad(bad+1);
  }

  const handleNeutral = () => {
    setNeutral(neutral+1);
  }

  const Button = ({onClick, text}) => {
    return(
      <button onClick={onClick}>{text}</button>
    )
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleBad} text="Bad" />
      <Button onClick={handleNeutral} text="Neutral" />
      <h2>Statistics</h2>
      <p>Good : {good}</p>
      <p>Bad : {bad}</p>
      <p>Neutral : {neutral}</p>
      <p>All : {good + bad + neutral}</p>
      <p>Average : {(good - bad)/(good + bad + neutral)}</p>
      <p>Positive : {(good/(good + bad + neutral))*100} %</p>
    </div>
  )
}

export default App