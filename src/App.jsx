import './App.css'
import Header from './assets/Componontes/Header'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './assets/Pages/LandingPage'
import AllProducts from './assets/Pages/AllProducts'
import ViewProduct from './assets/Pages/ViewProduct'
import Footer from './assets/Componontes/Footer'
import PageNotFound from './assets/Pages/PageNotFound'
import Cart from './assets/Pages/Cart'
import Wishlist from './assets/Pages/Wishlist'
function App() {
  

  return (
    <>
     <Header/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/allproduct' element={<AllProducts/>}/>
    <Route path='/view/:id' element={<ViewProduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
