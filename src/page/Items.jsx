import { Table,Space, Modal, Form, Input, Select, message } from 'antd';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"
import React, { useEffect, useState } from 'react'
import DefaultLayout from "../component/DefaultLayout"
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import {ProductListActions} from "../redux/actions/ProductAction"
import {Spin } from 'antd';
import axios from 'axios';

const Items = () => {
  const [modelOpen,setModelOpen] = useState(false);
  const dispatch =useDispatch();
  const ProductList = useSelector(state=>state.productList);
  const {products,loading,error} =ProductList;
  const navigate = useNavigate();
  const [editItems,setEditItems] = useState(null);
  useEffect(()=>{
      dispatch(ProductListActions())
  },[dispatch])
  const onFinishHandler =(e)=>{
    if(editItems === null){
      try{
        axios.post("/api/products/add-product",e).then((response)=>{
            message.success("Product added successfully.")
            dispatch(ProductListActions())
            setModelOpen(false)
            navigate("/items");
        })
    }catch(error){
        message.error("Something is wrong.")
    }
    }else{
      try{
        axios.put("/api/products/edit-product",{...e,productId:editItems._id}).then((response)=>{
            message.success("Product Edited successfully.")
            dispatch(ProductListActions())
            setModelOpen(false)
            navigate("/items");
            setEditItems(null)
        })
    }catch(error){
        message.error("Something is wrong.")
    }
    }
      
  }
  const deleteHandler =(record)=>{
     try {
         axios.post("/api/products/delete-product",{productId:record._id}).then((response)=>{
          message.success("Product Deleted successfully.")
          dispatch(ProductListActions(response.data))
          navigate("/items");
        })
     } catch (error) {
      message.error("Something is wrong.")
     }
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render:(image,record)=><img src={image} alt="" height={50} width={50} style={{borderRadius:'10px'}}/>
    
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      
    },
    {
      title: 'Action',
      dataIndex:"_id",
      render:(_id,record)=><Space>
          <EditOutlined onClick={()=>{
            setEditItems(record)
            setModelOpen(true)
            }} style={{ fontSize: '16px', color: '#006E7A' }}/>
          <span style={{ fontSize: '16px', color: '#C1C1C1' }} > || </span>
          <DeleteOutlined onClick={()=>deleteHandler(record)} style={{ fontSize: '16px', color: '#C00C09' }}/>
      </Space>
      
    },
  ];
  return (
    <DefaultLayout>
      <div className='d-flex justify-content-between align-items-center'>
           <div>All Products</div>
           <button onClick={()=>setModelOpen(true)} className='cart_button'>Add New Product</button>
      </div>
         
         {loading ? <div className='spinner'>
        <Spin size='large'  />
      </div> : error ? <div>{error}</div> :(
        <Table columns={columns} dataSource={products}/>
      )
      }
      {modelOpen &&  <Modal onCancel={()=>{
        setEditItems(null)
        setModelOpen(false)}} visible={modelOpen} title={`${editItems !==null ? "Edit Product": "Add New Product"}`} footer={false } >
        <Form initialValues={editItems}  layout='vertical' onFinish={onFinishHandler}>
            <Form.Item name="name" label="Product Name">
              <Input/>
            </Form.Item>
            <Form.Item name="image" label="Image Url">
              <Input/>
            </Form.Item>
            <Form.Item name="price" label="Price">
              <Input/>
            </Form.Item>
            <Form.Item name="stock" label="Quantity">
              <Input/>
            </Form.Item>
            <Form.Item name="category" label="Category">
              <Select>
                  <Select.Option value="fruits" >Fruits</Select.Option>
                  <Select.Option value="vegetables" >Vegetables</Select.Option>
                  <Select.Option value="meat" >Meat</Select.Option>
              </Select>
            </Form.Item>
            <div className='d-flex justify-content-end'>

              <button className='cart_button' type='submit'>
                {editItems !==null ? "Update Product":"Save Product"}
               
                </button>
            </div>
        </Form>
        </Modal> }
       
    </DefaultLayout>
   
    
  )
}

export default Items