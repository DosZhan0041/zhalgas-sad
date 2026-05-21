import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Attestation from './pages/Attestation'
import Admission from './pages/Admission'
// import Groups from './pages/Groups'
// import ForParents from './pages/ForParents'
// import Documents from './pages/Documents'
// import Menu from './pages/Menu'
// import UsefulInfo from './pages/UsefulInfo'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/attestation" element={<Attestation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/groups" element={<Groups />} /> */}
        {/* <Route path="/parents" element={<ForParents />} /> */}
        {/* <Route path="/documents" element={<Documents />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/useful" element={<UsefulInfo />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
