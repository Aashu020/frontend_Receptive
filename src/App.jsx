import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import SuccessStory from './pages/SuccessStory'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import UAE from './pages/Countries.jsx/UAE'
import Usa from './pages/Countries.jsx/Usa'
import UK from './pages/Countries.jsx/UK';
import Canada from './pages/Countries.jsx/Canada';
import Europe from './pages/Countries.jsx/Europe';
import Australia from './pages/Countries.jsx/Australia';
import Singapore from './pages/Countries.jsx/Singapore';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/country/uae" element={<UAE/>}/>
        <Route path="/country/usa" element={<Usa/>}/>
        <Route path="/country/uk" element={<UK/>}/>
        <Route path="/country/canada" element={<Canada/>}/>
        <Route path="/country/europe" element={<Europe/>}/>
        <Route path="/country/australia" element={<Australia/>}/>
        <Route path="/country/singapore" element={<Singapore/>}/>
        <Route path="/succes_story"   element={<SuccessStory/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
