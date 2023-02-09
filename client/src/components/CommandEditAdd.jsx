import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editCommand,postCommand } from '../JS/action/commandAction'
import { Link } from 'react-router-dom'


const CommandEditAdd = () => {
  const dispatch = useDispatch();
  const [command , setCommand] = useState({name:'', price:''})
  const commandReducer = useSelector(state=>state.commandReducer.command)

  const edit = useSelector(state=>state.editCommandReducer.edit)

  useEffect(()=>{
      edit? setCommand(commandReducer) : setCommand({name:'',price:''})
  },[commandReducer , edit])

  const handleContact = ()=>{
      if(!edit){
          dispatch(postCommand(command))
      }else{
          dispatch(editCommand(commandReducer._id,command))
      }
  }

  const handleChange = (e)=>{
      e.preventDefault();
      setCommand({...command,[e.target.name] : e.target.value})
  }

return (
  <Form style={{ maxWidth: 500}}>
  <Form.Field>
    <label>Name</label>
    <input placeholder='Name'value={command.name} name='name'  onChange={handleChange} />
  </Form.Field>
  <Form.Field>
    <label>Price</label>
    <input placeholder='lastName' value={command.price} name='price'  onChange={handleChange}/>
  </Form.Field>
  
  <Link to="/command_list"> <Button onClick={handleContact}> {edit ? "Edit" : "Save"} </Button></Link>
</Form>
)
}

export default CommandEditAdd