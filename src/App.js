import Hdr from './Header';

const App = () => {
  const course = 'Half Stack application development x'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]

  // function Header(props) {
  //   return (
  //     <h1>{props.course}</h1>
  //   )
  // }

  function Content(props) {
    debugger;
    return (
      <div>
        <p>
          {props.part1} {props.exercises1}
        </p>
        <p>
          {props.part2} {props.exercises2}
        </p>
        <p>
          {props.part3} {props.exercises3}
        </p>
      </div>
    );
  }

  function Total({ total }) {
    return (
      <p>Number of exercises {total}</p>
    );
  }

  return (
    <div>
      <Hdr course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}


export default App