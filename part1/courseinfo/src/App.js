import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0);

  // setTimeout( ()=> setCounter(counter+1), 1000);
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const Header = (props) => {
    return (<div>
      <h1>{props.course}</h1>
    </div>)
  }

  const Part = props => {
    return (<p>
      {props.part} {props.exercises}
    </p>)
  }

  const Content = props => {
    console.log(props);
    return (
      <>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </>
    )
  }

  const Total = props => {
    return (
      <p>
        Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
      </p>
    )
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      {/* <div>{counter}</div> */}
    </div>
  )
}

export default App