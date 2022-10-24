import React,{useState} from 'react'

function Us() {
 // variable, setter fun(just like setState) => hrr state le liye function define
    const [count, setCount] = useState(0);  // intital value count ki 0

  return (
    <div>
        <h1>Current Count {count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>

    </div>
  )
}

export default Us