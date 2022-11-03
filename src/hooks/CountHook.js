import React, { useState } from "react";

function CountHook () {
  const [count, setCount] = useState(0)
  const [teacher, setTeacher] = useState({ name: 'teacher', age: 20})

  const handleUpdate = () => {
    setTeacher(() => {
      return {
        ...teacher,
        name: 'teacher-yyf',
      }
    })
  }
  
  return (
    <div className="count-hook">
      <p>hook</p>
      <p>{ count }</p>
      <div onClick={ () => setCount(count + 1)}>
        <button>count加一</button>
      </div>
      <br />
      <p>{ teacher.name }</p>
      <p>{ teacher.age }</p>
      <button onClick={ handleUpdate }>变更</button>
    </div>
  )
}

export default CountHook;