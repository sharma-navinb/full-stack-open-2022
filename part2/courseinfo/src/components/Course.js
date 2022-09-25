import React from "react";

const Header = (props) => {
    return (<>
      <h1>{props.course}</h1>
    </>)
  }
  
  const Part = (props) => {
    return (<p>
      {props.name} {props.exercises}
    </p>)
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </div>
    )
  }
  
  const Total = props => {
    const sum = props.total.reduce(
      (previousValue, currentValue) => previousValue + currentValue.exercises,
      0,
    );
    console.log(sum);
      return (
       <>
        <h3> Total of {sum} exercises</h3>
       </>
      )
    }
  
  const Course = ({ course }) => {
    return (<>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts}/>
    </>)
  }
export default Course