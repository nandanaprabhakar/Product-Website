import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useSearchParams } from 'react-router-dom';

function DisplayProduct() {
    //1. Define url
    const baseUrl = 'https://dummyjson.com/products'

    //4 create a state for holding products
    const [products,setProducts]=useState([])

    //2. define a function fetch data from the url
    const getData = async () =>{
        const response = await fetch(baseUrl)
        console.log(response);
        const productData=await response.json()
        console.log(productData.products); //ARRAY OF products
        setProducts(productData.products)
        
        
    }
    //3 call the API function
    useEffect(()=>{
        getData(),[]
    })
  return (
 <div>
    
    <section className='bg-dark'>
        <h1 className='text-center p-5 text-light'>All products</h1>
        <br />
        <Row className='p-2'>
            {
                products.length>0?
                products.map((item)=>(
<Col className='m-3'>
        <Link to={`/view/${item.id}`} style={{textDecoration:'none'}}>
<Card style={{ width: '18rem', marginLeft:'20px' }}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{item.title} </Card.Title>
        <Card.Text style={{textAlign:'center'}}>
         {item.price}
        </Card.Text>
        <Button variant="dark" style={{marginLeft:'80px'}}>Buy Now</Button>
      </Card.Body>
    </Card>
    </Link>
    </Col>
                ))
                :"Empty"
            }
            
</Row>
    </section>
 </div>
  )
}

export default DisplayProduct