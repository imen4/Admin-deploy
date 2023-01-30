import React , {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {getProducts} from "../JS/action/productActions";
import Product from './Product';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.productReducer.products)
    const loadProducts = useSelector((state)=>state.productReducer.loadProducts)
  
    console.log("products" , products )
   
    useEffect(()=>{
      dispatch(getProducts())
      //eslint-disable-next-line
    },[])
    return (
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {loadProducts ? (
          <h2>loading........</h2>
        ):products.length === 0 ? (<h2>there is no product</h2>)
        :products.map((el)=> <Product product={el} key={el._id} />)}
      </div>
    )
}

export default ProductList