import { useState } from 'react';
import { Link } from 'react-router-dom';
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
              Comprehensive solutions to transform your school into a hub of innovation and technology. Hands-On Learning for AI, Robotics & STEM.
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
                    <li>Advanced labs equipped for AI programming, robotics, automation, and machine learning.</li>
                    <li>Practical project development environment .</li>
                    <li>Teacher training included. </li>
                  </ul>
                  <div>
                    <Link
                      to="/ai-roboticslab-icse"
                      style={{ textDecoration: 'underline', fontWeight: 700, color: 'var(--accent-color)' }}
                    >
                      Explore AI Labs
                    </Link>
                  </div>
                </div>
                <div className="tab-image">
                  <img src={AILab} alt="AI and Robotics Lab for schools in India" />
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
                    <li>Tinkering labs for coding, electronics, and maker activities </li>
                    <li>Encourages creative problem-solving and innovation.</li>
                  </ul>
                  <div>
                    <Link
                      to="/ai-roboticslab-cbse"
                      style={{ textDecoration: 'underline', fontWeight: 700, color: 'var(--accent-color)' }}
                    >
                      Explore STEM Labs
                    </Link>
                  </div>
                </div>
                <div className="tab-image">
                  <img
                    src={StemImage}
                    alt="Students at STEM Tinkering Lab building circuits"
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
