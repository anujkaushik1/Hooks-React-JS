import React, {useState, useEffect} from 'react'

function Ue1() {

    const [count, setCount] = useState(0);

    useEffect(() => {   // just like componentDidMount and componentDidUpdate

        // render ke baad chlega and jaise hi state update hogi tbh chlega

        console.log("useEffect");
        document.title = `Button clicked ${count} times`

    })  // optional dependency array
    console.log("render");
  return (
   
    <div>

        <h1>Current Count {count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default Ue1