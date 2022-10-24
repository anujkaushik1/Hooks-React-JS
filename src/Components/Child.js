import React from 'react'

// jabh bhi parent rerender toh uske child bhi rerender hote hai
function Child() {
  console.log('child called');

  return (
    <div>Child</div>
  )
}

export default Child