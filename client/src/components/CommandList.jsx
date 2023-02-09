import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getCommands} from '../JS/action/commandAction'
import Command from './Command'
import {Header,Segment,Table} from "semantic-ui-react";

const CommandList = () => {
  const dispatch = useDispatch();
  const commands = useSelector((state)=>state.commandReducer.commands)
  const loadCommands = useSelector((state)=>state.commandReducer.loadCommands)
  console.log(commands)
  useEffect(()=>{
    dispatch(getCommands())
    //eslint-disable-next-line
  },[])
  
  return (
    <div>{loadCommands?(<h2>Loading...</h2>):commands.lenght===0?(<h2>There is no commands</h2>):
    (
    <Segment style={{width:"1000px"}}>
        <Header>Registered Commands</Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{commands.map((el)=><Command key={el._id} command={el}/>)}</Table.Body>

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

export default CommandList