import React from 'react'
import { Table,Button,Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact,getContact } from '../JS/action/contactActions'
import { toggleTrue } from '../JS/action/editAction'

const Contact = ({contact}) => {
  const dispatch =useDispatch()
  return (
    <Table.Row>
        <Table.Cell>{contact.name}</Table.Cell>
        <Table.Cell>{contact.lastName}</Table.Cell>
        <Table.Cell>{contact.email}</Table.Cell>
        <Table.Cell>{contact.password}</Table.Cell>
        <Table.Cell>
        <Link to={`/edit/${contact._id}`} >
          <Button  size="mini" icon onClick={()=>{dispatch(getContact(contact._id)); dispatch(toggleTrue())} }>
            <Icon name="edit" />
          </Button></Link>
          <Button  color="red" size="mini" icon onClick={()=>dispatch(deleteContact(contact._id))}>
            <Icon name="delete" />
          </Button>
        </Table.Cell>
      </Table.Row>

  )
}

export default Contact