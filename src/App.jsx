import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from './Header.jsx'
import HeroSection from './HeroSection'
import ImpactProgram from './ImpactProgram.jsx'
import IBoT from './productPages/I-BoT.jsx'
import AboutSection from './AboutSection'
import ShopSection from './ShopSection'
import SchoolSection from './SchoolSection'
import CollaborationSection from './CollaborationSection'
import FranchiseSection from './FranchiseSection'
import RobothroneSection from './RobothroneSection.jsx'
import GallerySection from './GallerySection.jsx'
import CommunitySection from './CommunitySection.jsx'
import FooterSection from './FooterSection.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impact-program" element={<ImpactProgram />} />
        <Route path="/i-bot" element={<IBoTPage />} />
      </Routes>
      <ScrollToTop/>
      <WhatsAppButton/>
    </Router>
  )
}

function HomePage() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ShopSection/>
    <SchoolSection/>
    <CollaborationSection/>
    <FranchiseSection/>
    <RobothroneSection/>
    <GallerySection/>
    <CommunitySection/>
    <FooterSection/>
    </>
  )
}

function IBoTPage() {
  return (
    <>
      <IBoT />
      <FooterSection />
    </>
  );
}

export default App
