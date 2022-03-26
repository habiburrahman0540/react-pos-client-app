import { Col, Row,Spin } from 'antd';
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
  return <DefaultLayout>
  {loading ? <div className='spinner'>
  <Spin size='large'  />
</div> : error ? <div>{error}</div> :(
    <Row gutter={20}>
      {products.map((item)=>{
        return <Col key={item._id} xs={24} sm={12} md={8} lg={6}>
            <Item item={item} />
        </Col>

      })}
    </Row>)}
</DefaultLayout>
}


export default Home;