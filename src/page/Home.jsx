import { Col, Row } from 'antd';
import React,{useEffect} from 'react'
import DefaultLayout from '../component/DefaultLayout'
import Item from '../component/Item';
import {useSelector,useDispatch} from "react-redux"
import {ProductListActions} from "../redux/actions/ProductAction"
const Home = () => {
  const ProductList = useSelector(state=>state.productList);
  const {loading,products,error} = ProductList;
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(ProductListActions())
 
  },[dispatch])
  return loading ? <div>Loading....</div>:
  error?<div>{error}</div>: (
  <DefaultLayout>
      <Row gutter={20}>
        {products.map((item)=>{
          return <Col xs={24} sm={12} md={8} lg={6} key={item._id}>
              <Item item={item}/>
          </Col>

        })}
      </Row>
  </DefaultLayout>
  )
}

export default Home;