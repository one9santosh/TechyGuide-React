import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from './Header.jsx'
import HeroSection from './HeroSection'
import ImpactProgram from './ImpactProgram.jsx'
import IBoT from './productPages/I-BoT.jsx'
import FranchisePage from './FranchisePage.jsx'
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
import AIRoboticsLabCBSE from './ForschoolsPages/AI-RoboticLabCBSE.jsx'
import AIRoboticLabICSE from './ForschoolsPages/AI-RoboticLabICSE.jsx'
import StemTinkeringLab from './ForschoolsPages/StemTinkeringLab.jsx'
import CompositeSkillLab from './ForschoolsPages/CompositeSkillLab.jsx'
import WorkshopPage from './ForschoolsPages/WorkshopPage.jsx'
import CoursesPage from './coursesPage.jsx'
import ShopPage from './ShopPage.jsx'
import CheckOutPage from './CheckOutPage.jsx'
import PrivacyPolicyPage from './privacyPolicypage.jsx'
import TeBoT from './productPages/TeBoT.jsx'

function App() {
  const [count, setCount] = useState(0)

 return (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/impact-program" element={<ImpactProgram />} />
      <Route path="/i-bot" element={<IBoTPage />} />
      <Route path="/tebot" element={<TeBoTPage />} />
      <Route path="/ai-roboticslab-cbse" element={<AIRoboticsLabCBSEPage />} />
      <Route path="/ai-roboticslab-icse" element={<AIRoboticLabICSEPage />} />
      <Route path="/schools/stem-tinkering-lab" element={<StemTinkeringLabPage />} />
      <Route path="/schools/composite-skill-lab" element={<CompositeSkillLabPage />} />
      <Route path="/schools/workshop" element={<WorkshopPageWrapper />} />
      <Route path="/franchise" element={<FranchisePageWrapper />} />
      <Route path="/courses" element={<CoursesPageWrapper />} />
      <Route path="/shop" element={<ShopPageWrapper />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPageWrapper />} />
    </Routes>
    <ScrollToTop/>
    <WhatsAppButton/>
  </>
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

function TeBoTPage() {
  return (
    <>
      <TeBoT />
      <FooterSection />
    </>
  );
}

function FranchisePageWrapper() {
  return (
    <>
      <FranchisePage />
      <FooterSection />
    </>
  );
}

function AIRoboticsLabCBSEPage() {
  return (
    <>
      <AIRoboticsLabCBSE />
      <FooterSection />
    </>
  );
}

function AIRoboticLabICSEPage() {
  return (
    <>
      <AIRoboticLabICSE />
      <FooterSection />
    </>
  );
}

function StemTinkeringLabPage() {
  return (
    <>
      <StemTinkeringLab />
      <FooterSection />
    </>
  );
}

function CompositeSkillLabPage() {
  return (
    <>
      <CompositeSkillLab />
      <FooterSection />
    </>
  );
}

function WorkshopPageWrapper() {
  return (
    <>
      <WorkshopPage />
      <FooterSection />
    </>
  );
}

function CoursesPageWrapper() {
  return (
    <>
      <CoursesPage />
      <FooterSection />
    </>
  );
}

function ShopPageWrapper() {
  return (
    <>
      <ShopPage />
      <FooterSection />
    </>
  );
}

function PrivacyPolicyPageWrapper() {
  return (
    <>
      <PrivacyPolicyPage />
      <FooterSection />
    </>
  );
}

export default App
