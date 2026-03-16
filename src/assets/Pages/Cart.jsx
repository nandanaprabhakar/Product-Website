import { Container, Row, Col, Table, Button, Card, Image } from "react-bootstrap";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Empty cart test
    // Uncomment to test with products
    /*
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      image: "https://tse1.mm.bing.net/th/id/OIP.DObKS2fqjFTZe2EoaAqU-AHaFD?rs=1&pid=ImgDetMain&o=7&rm=3",
      quantity: 1,
      price: 100,
    },
    {
      id: 8,
      title: "Dior J'adore",
      image: "https://tse2.mm.bing.net/th/id/OIP.uhAot_J_eTIpeCoEalykxQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      quantity: 1,
      price: 90,
    },
    */
  ]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <Row>
        {/* ===== LEFT SIDE: TABLE ===== */}
        <Col md={8}>
          <h4 className="mb-3">Products Details</h4>
          <Table bordered hover className="shadow-sm">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center fw-semibold">
                    NO DATA
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.image} alt="" width="50" />
                    </td>
                    <td>
                      <Button size="sm" variant="secondary">-</Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button size="sm" variant="secondary">+</Button>
                    </td>
                    <td>${item.price}</td>
                    <td className="text-center">
                      <i className="bi bi-trash fs-5 text-dark" role="button"></i>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>

          {/* ===== CART EMPTY IMAGE & MESSAGE BELOW TABLE ===== */}
          {cartItems.length === 0 && (
            <Row className="align-items-center mt-4">
              <Col md={6}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                  alt="Empty Cart"
                  fluid
                />
              </Col>
              <Col md={6} className="text-center">
                <h3>Your Cart is Empty</h3>
                <p>Looks like you haven't added anything yet. Start shopping now!</p>
                <Button variant="primary">Shop More</Button>
              </Col>
            </Row>
          )}
        </Col>

        {/* ===== RIGHT SIDE: CART SUMMARY ===== */}
        <Col md={4}>
          <Card className="shadow-sm text-center p-4">
            <h4 className="mb-4">Cart Summary</h4>
            <h3 className="mb-4">Total : $ {total}</h3>
            <Button variant="success" disabled={cartItems.length === 0}>
              Buy Now
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart