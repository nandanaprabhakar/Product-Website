import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Button, CardText } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
 
function Wishlist() {
    const[products,setProducts]=useState([])
    const wishlistarray=useSelector((state)=>state.wishlist)
    console.log(wishlistarray);
    useEffect(()=>{
        setProducts(wishlistarray.items)
    },[])
  return (
    <div>

   
      <div className="container mt-4">
        <Row className="g-4">   
             {
                products.length>0?
                products.map(item=>(
                     <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow-sm border-0">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.images}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold text-truncate ">
                       {item.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ height: "50px", overflow: "hidden" }}>
                        {item.description}
                      </Card.Text>
                     <div className="price-rating">
                        <span className="price">{item.price}</span>
                        <span className="rating">⭐{item.rating}</span>
                      </div>
                    </Card.Body>
                  </Link>

                  <div className="text-center mb-3">
                    <Button variant="warning">Buy Now</Button>
                  </div>
                </Card>
              </Col>
                ))
                :
                  <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-700">
      <p className="text-center w-24 h-24 text-red-500 mb-6 text-3xl" >❤️</p>
      <h2 className=" text-center text-2xl font-semibold">YOUR WISHLIST WAS EMPTY</h2>
      <p className="text-center mt-2 text-sm text-gray-500">Start adding products you love!</p>
      <a
        href="/products"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View All Products
      </a>
    </div>
             }
       
      </Row>
      </div>
    
    


    </div>
  )
}

export default Wishlist