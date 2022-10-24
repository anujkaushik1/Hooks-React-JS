import React,{useState} from 'react'

function Us() {
 // variable, setter fun(just like setState) => hrr state le liye function define
    const [count, setCount] = useState(0);  // intital value count ki 0
                                // funtional component mei jabh koe state chaiye toh useState use

    const [obj, setObj] = useState({msg : 'Hello'}); 
  return (
    <div>
        <h1>Current Count {count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>

        <h2>{obj.msg}</h2>

    </div>
  )
}

export default Us