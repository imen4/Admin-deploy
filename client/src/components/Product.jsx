import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteProduct, getProduct } from '../JS/action/productActions';
import { editTrue } from '../JS/action/poductEditAction';

const Product = ({product}) => {
  const dispatch = useDispatch()
  return (
    <Card style={{ maxWidth: 200, margin: "10px" }}>
    <Card.Content>
      <Image
        floated='right'
        size='small'
        src={product.image}
      />
      <Card.Header>{product.name}</Card.Header>
      <Card.Meta> {product.price} </Card.Meta>
      <Card.Description>
        {product.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Link to={`/editproduct/${product._id}`}>
        <Button basic color='green' onClick={()=>{dispatch(getProduct(product._id)); dispatch(editTrue())} }>
          Edit
        </Button></Link>
        <Button basic color='red' onClick={()=>dispatch(deleteProduct(product._id))}>
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
  )
}

export default Product