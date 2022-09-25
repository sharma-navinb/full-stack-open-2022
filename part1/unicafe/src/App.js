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

  const StatisticLine = ({text,value}) => {
    return(
      <tr><td>{text}</td><td>{value}</td></tr>
    )

  }

  const Statistics = ({good, bad, neutral}) =>{
    if(good === 0 && bad === 0 && neutral === 0){
      return(<div>
        <p>No feedback given</p>
      </div>)
    }
    return(<table><tbody>
      <StatisticLine text="Good" value ={good} />
      <StatisticLine text="Neutral" value ={neutral} />
      <StatisticLine text="Bad" value ={bad} />
      <StatisticLine text="All" value ={good + bad + neutral} />
      <StatisticLine text="Average" value ={(good - bad)/(good + bad + neutral)} />
      <StatisticLine text="Positive" value ={(good/(good + bad + neutral)*100)} />
      </tbody></table>)
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleBad} text="Bad" />
      <Button onClick={handleNeutral} text="Neutral" />
      <h2>Statistics</h2>
      <Statistics good = {good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App