import React from 'react'
import { useSelector } from 'react-redux';
import DefaultLayout from '../component/DefaultLayout'
import {Table} from "antd";
import {useDispatch} from "react-redux"
import {DeleteOutlined,PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'
const CartPage = () => {
  const dispatch = useDispatch();
  const quantityIncraseHandler =(record)=>{
    dispatch({
      type:"UPDATE_CART",
      payload:{...record,quantity:record.quantity +1}
    })
  }
  const quantityDecreaseHandler =record=>{
      if(record.quantity !== 1){
        dispatch({
          type:"UPDATE_CART",
          payload:{...record,quantity:record.quantity +-1}
        })
      }
  }
  const {cartItems} = useSelector(state=>state.CartItemsReducer);
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (image,record)=><img src={image} alt="" height="60" width="60"/>
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {title:'Quantity',
  dataIndex:'_id',
  render:(_id,record)=><div>
      <PlusCircleOutlined style={{color:'#006E7A'}} className="mx-2" onClick={()=>quantityIncraseHandler(record)}/>
     <span>{record.quantity}</span> 
      <MinusCircleOutlined style={{color:'#006E7A'}} className="mx-2" onClick={()=>quantityDecreaseHandler(record)}/>
  </div>  
  },
    {title:'Actions',
    dataIndex:'_id',
    render:(_id,record)=><DeleteOutlined style={{ fontSize: '16px', color: '#C00607'}} onClick={()=>dispatch({type:"DELETE_CART_ITEM",payload:record})}  />
    },
  ];
  return (
    <DefaultLayout>
        <h1>Cart</h1>
        <Table dataSource={cartItems} columns={columns} bordered/>;
    </DefaultLayout>
  )
}

export default CartPage