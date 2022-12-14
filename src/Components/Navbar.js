import React, {useContext} from 'react'
import context from './Context'  // linking component with global store

function Navbar() { 
  const theme = useContext(context);
  console.log('navbar called');
  return (
    <div className={theme ? "dark" : "light"}>Navbar</div>
  )
}

export default Navbar