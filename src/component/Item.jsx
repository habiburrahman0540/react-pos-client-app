import React from 'react'
import Card from "./UI/Card"
import "../resources/item.css"
import { useDispatch } from 'react-redux'
const Item = ({item}) => {
  const dispatch = useDispatch();
  const addToCartHandler =()=>{
      dispatch({
        type:"ADD_TO_CART",
        payload:{...item,quantity:1}
      })
  }
  return (
    <Card>
        <h4 className='item_name'>{item.name}</h4>
        <img className='item_img' src={item.image} alt={item.name} width='100%' height="200" />
        <h4 className='item_price'>${item.price}</h4>
        <h6 className=''>Stock on hand : {item.stock}</h6>
        <button className='cart_button' onClick={()=>addToCartHandler()}>Add to Cart</button>
    </Card>
  )
}

export default Item