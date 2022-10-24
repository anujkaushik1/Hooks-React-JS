import React, {useState, useEffect} from 'react'

function Ue3() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {     

        console.log("useEffect");
        document.title = `Button clicked ${count} times`

    }, [count]) // jaise hi count ki state change hogi tbhi useEffect chlega vrna nai chlgea  
    console.log("render");
  return (
   
    <div>

        <h1>Current Count {count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input type="text" value={text} onChange = {(e) => setText(e.target.value)}/>
    </div>
  )
}

export default Ue3