import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function LandingPage() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://static.vecteezy.com/system/resources/previews/053/103/398/non_2x/a-3d-realistic-banner-for-makeup-products-like-lipstick-mascara-brush-eyeliner-foundation-cream-with-reflection-elegant-design-in-black-gold-tones-with-bokeh-perfect-for-cosmetic-ads-not-ai-free-vector.jpg" width={'100%'} height={'700px'} alt="" />
        <Carousel.Caption>
          <h2>Luxury Cosmetics</h2>
          <p>The best foundation you can wear is healthy, glowing skin—the makeup is just for fun.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="https://cdna.artstation.com/p/assets/images/images/065/517/250/large/farhat-zubair-received-1025016295331014.jpg?1690553532" width={'100%'} height={'700px'} alt="" />
        <Carousel.Caption>
             <h2>Luxury Cosmetics</h2>
          <p>A sprinkle of shimmer and a touch of rose gold—because every day deserves a little luxury.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://cdn.vectorstock.com/i/500p/81/68/luxury-lipstick-gloss-banner-vector-30118168.jpg" width={'100%'} height={'700px'} alt="" />
        <Carousel.Caption>
          <h2>Luxury Cosmetics</h2>
          <p>Treat your makeup like jewelry for the face; every product is a tiny treasure.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default LandingPage