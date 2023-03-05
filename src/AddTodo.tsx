import React,{useState} from 'react'
import { useDispatch } from './TodosProvider';


let nextId = 4;
const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, settext] = useState("")
  return (
    <div>
    <input type="text" name='newText' value={text} onChange={(e)=> settext(e.target.value)} />
    <button onClick={()=> dispatch({
        type:"add", id:nextId++, text
    })} >Add</button>
    </div>
  )
}

export default AddTodo