import { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import { useContext } from 'react'
import { StoreContext } from './Context/StoreContext'
import AdminLayout from './layout/AdminLayout'
import Add from './pages/AdminPages/Add/Add'
import List from './pages/AdminPages/List/List'
import Orders from './pages/AdminPages/Orders/Orders'
import { Navigate } from 'react-router-dom'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  const {token,role} = useContext(StoreContext);

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        {role !== "admin" && <Navbar setShowLogin={setShowLogin}/>}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>

        {token && role === "admin" ?(
            <Route path='/admin' element={<AdminLayout />}>
              <Route path='add' element={<Add />} />
              <Route path='list' element={<List />} />
              <Route path='orders' element={<Orders />} />
            </Route>
          ) : (
            <Route path="/admin/*" element={<Navigate to="/" />} />
          )}
      </Routes>
      </div>
      {role !== "admin" && <Footer />}
    </>
  )
}

export default App
