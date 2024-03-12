import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import CartModal from './components/CartModal'
import NotFound from './components/NotFound'
import { ToastContainer } from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'
import Details from './components/Details'
function App() {
  

  return (
    <>
    <Navbar/>
    <ToastContainer/>
    <main>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Cart" exact element={<Cart/>}/>
        
        <Route path="Details/:id" element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    
    </>
  )
}

export default App
