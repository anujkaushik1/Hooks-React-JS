import React, { useState, useEffect } from "react";

function Infinite() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("useEffect");
    document.title = `Button clicked ${count} times`;
    setCount(1000);  // isme infinite loop nai lgega ( jaise hi doosri baar ayega dekhlega ki 1000 hi thi becuase numerical value hai yeh)
  });

  console.log("render");
  return (
    <div>
      <h1>Current Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Infinite;
