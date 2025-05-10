import React, { useState } from 'react'

const FuntionalCounter = () => {
    const [num , setnum] = useState(0)


  return (
    <div>
        <h2>Number :  {num}</h2>
        <div><button onClick={()=> setnum(num+1)}>Increment</button > <button onClick={()=> setnum(num-1)}>Decrement</button></div >

    </div>
  )
}

export default FuntionalCounter


