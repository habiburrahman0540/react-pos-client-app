import { Col, Row } from 'antd';
import React,{useEffect,useState} from 'react'
import DefaultLayout from '../component/DefaultLayout'
import axios from "axios"
import Item from '../component/Item';

const Home = () => {
  const [items,setItems] = useState([]);
  const getItems =()=>{
    axios.get("/api/items").then(res=>{
      setItems(res.data)
    }).catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    getItems()
  },[])
  return (
  <DefaultLayout>
      <Row gutter={20}>
        {items.map((item)=>{
          return <Col xs={24} sm={12} md={8} lg={6}><Item item={item} key={item._id}/></Col>
        })}
      </Row>
  </DefaultLayout>
  )
}

export default Home;