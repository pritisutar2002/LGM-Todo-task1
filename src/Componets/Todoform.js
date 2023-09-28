import React , {useState} from 'react'

export default function Todoform(props) {

//   state 
  const [input , setInput]=useState('');


 const handleChange = e =>{
    setInput(e.target.value)
 }

  const handleSubmit =(e)=>{
    e.preventDefault();
    props.addTask({
        id:Math.floor(Math.random()*1000000),
        text:input,
        iscomplete :false
    })
    setInput('')
  }

  return <form>
   <input type='text' placeholder='Add a todo' onChange={handleChange} className='todo-input' value={input} name='text'/>
   <button type='submit' onClick={handleSubmit} className='todo-btn'>Add Todo</button>

  </form>
}
