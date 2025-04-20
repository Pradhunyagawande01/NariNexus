import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Events from './pages/Events'
import Resources from './pages/Resources'
import Stories from './pages/Stories'
import Contact from './pages/Contact'
import Team from './pages/Team'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
 
    </div>
  )
}

export default App
