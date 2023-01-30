import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getContacts} from '../JS/action/contactActions'
import Contact from './Contact'
import {Header,Segment,Table} from "semantic-ui-react";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state)=>state.contactReducer.contacts)
  const loadContacts = useSelector((state)=>state.contactReducer.loadContacts)
  console.log(contacts)
  useEffect(()=>{
    dispatch(getContacts())
    //eslint-disable-next-line
  },[])
  
  return (
    <div>{loadContacts?(<h2>Loading...</h2>):contacts.lenght===0?(<h2>There is no contacts</h2>):
    (
    <Segment style={{width:"1000px"}}>
        <Header>Registered Users</Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Lastname</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Password</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{contacts.map((el)=><Contact key={el._id} contact={el}/>)}</Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan={5} />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>)
      }
  
    </div>
  )
}

export default ContactList