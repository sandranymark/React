
import { Routes, Route } from 'react-router-dom'
import ProductPage from "./pages/productPage/ProductPage"
import LandingPage from "./pages/landingPage/landingPage"
import MyAccount from './pages/myAccount/MyAccount'
import './App.css'
import CheckoutPage from './pages/checkoutPage/CheckoutPage'



function App() {
  return (

    <>

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/logo" element={<LandingPage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />

      </Routes>

    </>

  )
}

export default App