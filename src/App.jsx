import List from "./List"
import { useRef, useState } from 'react';

function App() {
  const [text, setText]=useState('')

  const inputRef=useRef(null)
  const handleFocus = () => {
      inputRef.current.focus();
  };
let usersArr=[{
  id:111,
  name:'Ivan',
  age:22
},
{
  id:222,
  name:'Pavel',
  age:33
},
{
  id:333,
  name:'Alex',
  age:44
}
]
  return (
    <>
    {text}
    <input 
    ref={inputRef}
    onChange={(e)=>(setText(e.target.value))} value={text}></input>
    <button onClick={(handleFocus)}> focus input</button>
    <List users={usersArr}/>
    </>
  )
}

export default App
