import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Main from './pages/Main'
import Footer from './Footer'
import Home from './Home'
import Form from './Form'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/formulario" element={<Form />} />
            <Route path="/home/:id" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}
export default App