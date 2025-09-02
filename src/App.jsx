import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import SuccessStory from './pages/SuccessStory'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/succes_story"   element={<SuccessStory/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
