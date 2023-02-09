import React from 'react'
import { Table,Button,Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCommand,getCommand } from '../JS/action/commandAction'
import { commandEditTrue } from '../JS/action/commandEditAction'

const Command = ({command}) => {
  const dispatch =useDispatch()
  return (
    <Table.Row>
        <Table.Cell>{command.name}</Table.Cell>
        <Table.Cell>{command.price}</Table.Cell>
        <Table.Cell>
        <Link to={`/editcommand/${command._id}`} >
          <Button  size="mini" icon onClick={()=>{dispatch(getCommand(command._id)); dispatch(commandEditTrue())} }>
            <Icon name="edit" />
          </Button></Link>
          <Button  color="red" size="mini" icon onClick={()=>dispatch(deleteCommand(command._id))}>
            <Icon name="delete" />
          </Button>
        </Table.Cell>
      </Table.Row>

  )
}

export default Command