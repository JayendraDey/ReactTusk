import React, { useState } from 'react'

export const TodoApp = () => {
  const [todo, setTodo] = useState([])
  const [inp, setInp] = useState("")


  const handleAddTodo = (e)=>{
    e.preventDefault()
    if(inp.length !== 0){
      setTodo((prev)=> {
        return [
          ...prev , {inp , id : Date.now()}
        ]
      })
    }else{
     alert('⚠️ Please enter a task before adding it.');
      
    }
   setInp("")
  

  }
  return (
    <div>
        <input type="text" value={inp} name="" onChange={(e)=> setInp(e.target.value) }  id="" />
        <button onClick={handleAddTodo}>Add Todo</button>

        
        <ul>
          {
            todo?.map((item)=>{
             
              return (
                 <li  key={item.id}>{item.inp}</li>
              )
              
            })
          }
        </ul>


    </div>
  )
}














