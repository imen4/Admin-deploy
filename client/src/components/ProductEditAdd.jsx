import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editProduct,postProduct } from '../JS/action/productActions'
import { Link } from 'react-router-dom'


const ProductEditAdd = () => {
  const dispatch = useDispatch();
  const [product , setProduct] = useState({name:'',price:'',image:'',description:''})
  const productReducer = useSelector(state=>state.productReducer.product)

  const edit = useSelector(state=>state.editProductReducer.edit)

  useEffect(()=>{
      edit? setProduct(productReducer) : setProduct({name:'',price:'',image:'',description:''})
  },[productReducer , edit])

  const handleProduct = ()=>{
      if(!edit){
          dispatch(postProduct(product))
      }else{
          dispatch(editProduct(productReducer._id,product))
      }
  }

  const handleChange = (e)=>{
      e.preventDefault();
      setProduct({...product,[e.target.name] : e.target.value})
  }

return (
  <Form style={{ maxWidth: 500}}>
  <Form.Field>
    <label>Name</label>
    <input placeholder='Name'value={product.name} name='name'  onChange={handleChange} />
  </Form.Field>
  <Form.Field>
    <label>Price</label>
    <input placeholder='Price' value={product.price} name='price'  onChange={handleChange}/>
  </Form.Field>
  <Form.Field>
    <label>Image</label>
    <input placeholder='Image' value={product.image} name='image'  onChange={handleChange}/>
  </Form.Field>
  <Link to="/product_list"> <Button onClick={handleProduct}> {edit ? "Edit" : "Save"} </Button></Link>
</Form>
)
}

export default ProductEditAdd