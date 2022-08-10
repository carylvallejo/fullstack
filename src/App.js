const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
} 

const Content = (props) => {
  const part = props.course.parts.map(value => {
    return (
      <div>
        <p>{value.name} {value.exercises}</p>
      </div>
    )
  })
  return part
};


const Total = (props) => {
  console.log(props)
  let total = 0;
  const part = props.course.parts.map(value => {
    total = total + value.exercises
    console.log(total)
  })
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
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

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App