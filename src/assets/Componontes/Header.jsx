import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TiShoppingCart } from "react-icons/ti";
// import { SiShopify } from "react-icons/si";
function Header() {
  return (
    <div>
       <Navbar style={{background:'black'}} data-bs-theme="dark">
        <Container>
         <TiShoppingCart className='text-light' style={{fontSize:'40px'}}/>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allproduct">View All Product</Nav.Link>
            <Nav.Link href="/cart">Carts</Nav.Link>
            <Nav.Link href="/wishlist">Whishlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header