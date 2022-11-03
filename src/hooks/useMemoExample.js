import React, { useMemo, useState } from "react";

const useMemoExample  = (props) => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)

  const handleClick = (type) => {
    console.log(type)
    switch (type) {
      case "a":
        setA(a + 1)
        break;
      case "b":
        setB(b + 1)
        break;
      case "c":
        setC(c + 1)
        break;
      default:
        return false
    }
  }

  const d = useMemo(() => {
    return a + b
  }, [a, b])

  return (
    <div>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>c: {c}</p>
      <p>d: {d}</p>
      <button onClick={() => handleClick('a')}>a +</button>
      <button onClick={() => handleClick('b')}>b +</button>
      <button onClick={() => handleClick('c')}>c +</button>
    </div>
  )
}
export default useMemoExample;