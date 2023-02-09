import React  from 'react';
import {Link} from 'react-router-dom';
import {toggleFalse} from "../JS/action/editAction";
import {useDispatch} from "react-redux";
import { Button } from 'semantic-ui-react'
import {editFalse} from "../JS/action/poductEditAction";
import {commandEditFalse} from "../JS/action/commandEditAction";

function Sidebar(props) {
  const dispatch = useDispatch()
  return(
    <div className= "ui sidebar overlay left inverted menu visible ">
    <ul>
      <li className="item link"><Link to="/">
      <Button primary>Home</Button>
      </Link></li>
      <li className="item link"><Link to="/contact_list">
      <Button primary>Contact list</Button>
      </Link></li>
      <li className="item link"><Link to="/add">
    <Button primary onClick={()=>dispatch(toggleFalse())} >Add Contact</Button>
    </Link></li>
      <li className="item link">  <Link to="/product_list">
      <Button primary>Product List</Button>
      </Link></li>
      <li className="item link"><Link to="/addproduct">
      <Button primary onClick={()=>dispatch(editFalse())} >Add Product</Button>
      </Link></li>

      <li className="item link">  <Link to="/command_list">
      <Button primary>Command List</Button>
      </Link></li>
      <li className="item link"><Link to="/addcommand">
      <Button primary onClick={()=>dispatch(commandEditFalse())} >Add Command</Button>
      </Link></li>
    </ul>
    </div>
  );
}

export default Sidebar;