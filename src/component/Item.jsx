import React from 'react'
import Card from "./UI/Card"
import "../resources/item.css"
import { Button } from 'antd'
const Item = ({item}) => {
  return (
    <Card>
        <h4 className='item_name'>{item.name}</h4>
        <img className='item_img' src={item.image} alt={item.name} width='100%' height="200" />
        <h4 className='item_price'>${item.price}</h4>
        <button className='cart_button'>Add to Cart</button>
    </Card>
  )
}

export default Item