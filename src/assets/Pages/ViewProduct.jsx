import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../../redux/slices/wishlistSlice'
function Viewproducts() {

//1 get products id from the url
  const {id} = useParams()
  console.log(id); //params = {id: '13'}


  const dispatch=useDispatch()


  //2 define url
const baseUrl = `https://dummyjson.com/products/${id}`

//5 create a state for holding products
const [products,setProducts]= useState({})

//3 define a function fetch data from the url
const getData =async ()=>{
   const response = await fetch(baseUrl)
   console.log(response);
   const productData=await response.json()
   console.log(productData); //product data as object
   setProducts(productData)
   
}

//4 call the api function
useEffect(()=>{
  getData()
},[])



  return (
    <div>
        <Row>
          <Col>
   <img src={products.thumbnail} alt="" />
          </Col>
           <Col className='p-5 text-center'>
              <h1>{products.title}</h1>
              <h2>{products.price}</h2>
              <p>{products.description}</p>
              <Row>
                <Col><Button>Add To Cart</Button></Col>
                <Col>
                <Link to={'/wishlist'}>
              <Button onClick={()=>dispatch(addToWishlist(products))} style={{backgroundColor:'black',border:'black'}}>Add to Wishlist</Button>
                </Link>
                </Col>
              </Row>
          </Col>
        </Row>
    </div>
  )
}

export default Viewproducts