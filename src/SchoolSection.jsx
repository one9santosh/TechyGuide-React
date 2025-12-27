import { useState } from 'react';
import AILab from '/src/assets/ai-robotics-lab.jpg'
import StemImage from '/src/assets/stem-tinkering-lab.jpg'
import LabViewImage from '/src/assets/lab view.jpg'
import StemWorkshopImage from '/src/assets/stem-workshop-training.jpg'
import './SchoolSection.css';

function SchoolSection() {
  const [activeTab, setActiveTab] = useState('ai-lab');

  const openSchoolTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section  className="schools-section">
        <div className="container" id="schools">
          <div className="section-header center-text">
            <h2>
              What Do We Do for{' '}
              <span style={{color: '#f09a2d'}}>Educational Institutions</span>
            </h2>
            <p className="section-sub">
              Comprehensive solutions to transform your school into a hub of
              innovation and technology
            </p>
          </div>

          <div className="school-tab-header">
            <button
              className={`school-tab-link ${activeTab === 'ai-lab' ? 'active' : ''}`}
              onClick={() => openSchoolTab('ai-lab')}
            >
              AI & Robotics Lab
            </button>
            <button
              className={`school-tab-link ${activeTab === 'tinkering-lab' ? 'active' : ''}`}
              onClick={() => openSchoolTab('tinkering-lab')}
            >
              STEM Tinkering Lab
            </button>
            <button
              className={`school-tab-link ${activeTab === 'atl-lab' ? 'active' : ''}`}
              onClick={() => openSchoolTab('atl-lab')}
            >
              ATL Lab
            </button>
            <button
              className={`school-tab-link ${activeTab === 'stem-workshop-school' ? 'active' : ''}`}
              onClick={() => openSchoolTab('stem-workshop-school')}
            >
              STEM Workshop
            </button>
          </div>

          <div className="school-content-box">
            <div id="ai-lab" className="school-tab-content" style={{display: activeTab === 'ai-lab' ? 'block' : 'none'}}>
              <div className="tab-grid">
                <div className="tab-text">
                  <h3>AI & Robotics Lab</h3>
                  <p className="school-desc">
                    Advanced laboratory equipped with cutting-edge technology
                    for hands-on learning in artificial intelligence and
                    robotics.
                  </p>
                  <ul className="school-list">
                    <li>Robotics kits and AI programming tools</li>
                    <li>Automation systems for practical learning</li>
                    <li>Machine learning and computer vision modules</li>
                    <li>Real-time project development environment</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={AILab} alt="AI Lab" />
                </div>
              </div>
            </div>

            <div id="tinkering-lab" className="school-tab-content" style={{display: activeTab === 'tinkering-lab' ? 'block' : 'none'}}>
              <div className="tab-grid">
                <div className="tab-text">
                  <h3>STEM Tinkering Lab</h3>
                  <p className="school-desc">
                    A creative maker space designed to inspire innovation
                    through hands-on exploration of STEM concepts.
                  </p>
                  <ul className="school-list">
                    <li>Modular workstations for collaborative projects</li>
                    <li>Prototyping tools and equipment</li>
                    <li>Real-world project-based learning</li>
                    <li>Creative problem-solving environment</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img
                    src={StemImage}
                    alt="Tinkering Lab"
                  />
                </div>
              </div>
            </div>

            <div id="atl-lab" className="school-tab-content" style={{display: activeTab === 'atl-lab' ? 'block' : 'none'}}>
              <div className="tab-grid">
                <div className="tab-text">
                  <h3>ATL Lab</h3>
                  <p className="school-desc">
                    Government-compliant Atal Tinkering Lab setup following NITI
                    Aayog guidelines for innovation and technology.
                  </p>
                  <ul className="school-list">
                    <li>3D printers and scanning equipment</li>
                    <li>Electronics workbenches and components</li>
                    <li>Robotics modules and sensors</li>
                    <li>IoT devices and connectivity solutions</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={LabViewImage} alt="ATL Lab" />
                </div>
              </div>
            </div>

            <div id="stem-workshop-school" className="school-tab-content" style={{display: activeTab === 'stem-workshop-school' ? 'block' : 'none'}}>
              <div className="tab-grid">
                <div className="tab-text">
                  <h3>STEM Workshop</h3>
                  <p className="school-desc">
                    Comprehensive training programs designed for educators and
                    students to enhance STEM skills and knowledge.
                  </p>
                  <ul className="school-list">
                    <li>Curriculum integration strategies</li>
                    <li>Hands-on skill development sessions</li>
                    <li>Certification in emerging technologies</li>
                    <li>Professional development for educators</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img
                    src={StemWorkshopImage}
                    alt="STEM Workshop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SchoolSection;
