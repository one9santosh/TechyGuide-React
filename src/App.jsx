import { useState, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from './Header.jsx'
import HeroSection from './HeroSection'
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

// Lazy load pages
const ImpactProgram = lazy(() => import('./ImpactProgram.jsx'))
const AIRoboticsLabCBSE = lazy(() => import('./ForschoolsPages/AI-RoboticLabCBSE.jsx'))
const AIRoboticLabICSE = lazy(() => import('./ForschoolsPages/AI-RoboticLabICSE.jsx'))
const StemTinkeringLab = lazy(() => import('./ForschoolsPages/StemTinkeringLab.jsx'))
const StemLab = lazy(() => import('./ForschoolsPages/StemLab.jsx'))
const CompositeSkillLab = lazy(() => import('./ForschoolsPages/CompositeSkillLab.jsx'))
const WorkshopPage = lazy(() => import('./ForschoolsPages/WorkshopPage.jsx'))
const CoursesPage = lazy(() => import('./coursesPage.jsx'))
const ShopPage = lazy(() => import('./ShopPage.jsx'))
const FranchisePage = lazy(() => import('./FranchisePage.jsx'))
const CheckOutPage = lazy(() => import('./CheckOutPage.jsx'))
const PrivacyPolicyPage = lazy(() => import('./privacyPolicypage.jsx'))
const IBoT = lazy(() => import('./productPages/I-BoT.jsx'))
const TeBoT = lazy(() => import('./productPages/TeBoT.jsx'))
const EBlox = lazy(() => import('./productPages/E-Blox.jsx'))
const EAddOnKit = lazy(() => import('./productPages/AddOnKit.jsx'))

// Loading fallback component
const LoadingFallback = () => <div style={{ padding: '40px', textAlign: 'center', fontSize: '18px' }}>Loading...</div>

function App() {
  const [count, setCount] = useState(0)

 return (
  <>
    <Header/>
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impact-program" element={<ImpactProgram />} />
        <Route path="/i-bot" element={<IBoT />} />
        <Route path="/tebot" element={<TeBoT />} />
        <Route path="/e-blox" element={<EBlox />} />
        <Route path="/add-on-kits" element={<EAddOnKit />} />
        <Route path="/ai-roboticslab-cbse" element={<AIRoboticsLabCBSE />} />
        <Route path="/ai-roboticslab-icse" element={<AIRoboticLabICSE />} />
        <Route path="/schools/stem-lab" element={<StemLab />} />
        <Route path="/schools/stem-tinkering-lab" element={<StemTinkeringLab />} />
        <Route path="/schools/composite-skill-lab" element={<CompositeSkillLab />} />
        <Route path="/schools/workshop" element={<WorkshopPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Suspense>
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

function EBloxPage() {
  return (
    <>
      <EBlox />
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

function StemLabPage() {
  return (
    <>
      <StemLab />
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

function EAddOnKitPage() {
  return (
    <>
      <EAddOnKit />
      <FooterSection />
    </>
  );
}

export default App
