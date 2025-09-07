import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HairDressing from './pages/HairDressing'
import NailCare from './pages/NailCare'
import Dreadlocks from './pages/Dreadlocks'
import TrenchCoats from './pages/TrenchCoats'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Order from './pages/Order'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/hairdressing" element={
              <ProtectedRoute>
                <Layout>
                  <HairDressing />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/nailcare" element={
              <ProtectedRoute>
                <Layout>
                  <NailCare />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/dreadlocks" element={
              <ProtectedRoute>
                <Layout>
                  <Dreadlocks />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/coats" element={
              <ProtectedRoute>
                <Layout>
                  <TrenchCoats />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/booking" element={
              <ProtectedRoute>
                <Layout>
                  <Booking />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/contact" element={
              <ProtectedRoute>
                <Layout>
                  <Contact />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/about" element={
              <ProtectedRoute>
                <Layout>
                  <About />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/cart" element={
              <ProtectedRoute>
                <Layout>
                  <Cart />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/order" element={
              <ProtectedRoute>
                <Layout>
                  <Order />
                </Layout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App