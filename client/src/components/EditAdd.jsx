import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editContact,postContact } from '../JS/action/contactActions'
import { Link } from 'react-router-dom'


const EditAdd = () => {
  const dispatch = useDispatch();
  const [user , setUser] = useState({name:'', lastName:'',email:'',password:''})
  const userReducer = useSelector(state=>state.contactReducer.user)

  const edit = useSelector(state=>state.editReducer.edit)

  useEffect(()=>{
      edit? setUser(userReducer) : setUser({name:'',lastName:'',email:'',password:''})
  },[userReducer , edit])

  const handleContact = ()=>{
      if(!edit){
          dispatch(postContact(user))
      }else{
          dispatch(editContact(userReducer._id,user))
      }
  }

  const handleChange = (e)=>{
      e.preventDefault();
      setUser({...user,[e.target.name] : e.target.value})
  }

return (
  <Form style={{ maxWidth: 500}}>
  <Form.Field>
    <label>Name</label>
    <input placeholder='Name'value={user.name} name='name'  onChange={handleChange} />
  </Form.Field>
  <Form.Field>
    <label>Last name</label>
    <input placeholder='lastName' value={user.lastName} name='lastName'  onChange={handleChange}/>
  </Form.Field>
  <Form.Field>
    <label>Email</label>
    <input placeholder='Email' value={user.email} name='email'  onChange={handleChange}/>
  </Form.Field>
  <Form.Field>
    <label>Password</label>
    <input placeholder='Password' value={user.password} name='password'  onChange={handleChange}/>
  </Form.Field>
  <Link to="/contact_list"> <Button onClick={handleContact}> {edit ? "Edit" : "Save"} </Button></Link>
</Form>
)
}

export default EditAdd