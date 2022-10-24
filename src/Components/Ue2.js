import React, {useState, useEffect} from 'react'

function Ue2() {

    const [count, setCount] = useState(0);

    useEffect(() => {     // only componentDidMount jaisa -> sbse pehle render, useeffect => state change hone pr nai chlega yeh

        console.log("useEffect");
        document.title = `Button clicked ${count} times`

    }, [])  // optional dependency array
    console.log("render");
  return (
   
    <div>

        <h1>Current Count {count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default Ue2