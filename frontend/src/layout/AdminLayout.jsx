import Navbar from '../components/Navbar/Navbar' // Admin Navbar
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => (
  <div className='admin-app'>
    <Navbar />
    <hr />
    <div className="app-content">
      <Sidebar />
      <Outlet /> {/* This renders Add, List, or Orders */}
    </div>
  </div>
)
export default AdminLayout;