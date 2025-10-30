import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function ViewProduct() {
  //1. Get product id from the url
  const{id}=useParams()
  

  console.log(id);//params={id:'13'}
  //5.create a stete for holding products
  const [product,setProducts]=useState({})
  //2. Define url
    const baseUrl = `https://dummyjson.com/products/${id}`
    //3.define a function fetch data from the url
    const getData=async ()=>{
      const response=await fetch(baseUrl)
      console.log(response);
      const productData=await response.json()
      console.log(productData); //product data as object
      setProducts(productData)
    }
    //4.call the API function
    useEffect(()=>{
      getData()
    })
  return (
    <div>
      <Row className='p-5 text-center bg-dark text-white'>
        <Col className='mt-5'>
        <img src={product.thumbnail} alt="" />
        </Col>
        <Col className='mt-5'>
        <h1>{product.title}</h1>
        <h1>{product.price}</h1>
        <p>{product.description}</p>
       
        <Row style={{width:'400px',marginLeft:'140px'}}>
          <Col>
             <Button style={{backgroundColor:'black',border:'black'}}>Add to Card</Button>
        </Col>
       <Col>
             <Button style={{backgroundColor:'black',border:'black'}}>Add to Card</Button>
        </Col>
        </Row>
         </Col>
      </Row>
    </div>
  )
}

export default ViewProduct