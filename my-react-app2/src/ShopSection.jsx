import { useState } from 'react';
import DIYKIT from '/src/assets/diy-kits.jpg'
import VirtualLearningImage from '/src/assets/virtual-learning.jpg'
import StemWorkShopImage from '/src/assets/stem-workshop-students.jpg'
import './ShopSection.css';

function ShopSection(){
    const [activeTab, setActiveTab] = useState('diy-kits');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return(
        <>
            <section className="tab-section">
                <div className="container"  id="shop">
                    
                    <div className="tab-header">
                        <button 
                            className={`tab-link ${activeTab === 'diy-kits' ? 'active' : ''}`} 
                            onClick={() => openTab('diy-kits')}
                        >
                            DIY Educational Kits
                        </button>
                        <button 
                            className={`tab-link ${activeTab === 'virtual-courses' ? 'active' : ''}`} 
                            onClick={() => openTab('virtual-courses')}
                        >
                            Virtual Learning Courses
                        </button>
                        <button 
                            className={`tab-link ${activeTab === 'stem-workshops' ? 'active' : ''}`} 
                            onClick={() => openTab('stem-workshops')}
                        >
                            STEM Workshop for Students
                        </button>
                    </div>

                    <div id="diy-kits" className="tab-content" style={{display: activeTab === 'diy-kits' ? 'block' : 'none'}}>
                        <div className="tab-grid">
                            <div className="tab-text">
                                <h2 style={{color: '#003366'}}>DIY Educational Kits</h2>
                                <p className="tab-desc">Hands-on learning kits designed to bring STEM concepts to life through practical experience.</p>
                                
                                <ul className="tab-list">
                                    <li>
                                        <strong>Robotics DIY Kit</strong>
                                        <p>Build and program your own robots with Arduino</p>
                                    </li>
                                    <li>
                                        <strong>IoT & Electronics Kit</strong>
                                        <p>Create smart devices with sensors and circuits</p>
                                    </li>
                                    <li>
                                        <strong>3D Printing & Maker Kit</strong>
                                        <p>Design and prototype with 3D printing tools</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-image">
                                <img src={DIYKIT} alt="DIY Electronics Kit" />
                            </div>
                        </div>
                    </div>

                    <div id="virtual-courses" className="tab-content" style={{display: activeTab === 'virtual-courses' ? 'block' : 'none'}}>
                        <div className="tab-grid">
                            <div className="tab-text">
                                <h2 style={{color: '#F09A2D'}}>Virtual Learning Courses</h2>
                                <p className="tab-desc">Interactive online courses that bring expert instruction directly to your students.</p>
                                
                                <ul className="tab-list">
                                    <li>
                                        <strong>Interactive Online Classes</strong>
                                        <p>Live sessions with expert instructors</p>
                                    </li>
                                    <li>
                                        <strong>Coding & Programming</strong>
                                        <p>Learn to code with hands-on projects</p>
                                    </li>
                                    <li>
                                        <strong>Collaborative Learning</strong>
                                        <p>Team-based STEM challenges and activities</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-image">
                                <img src={VirtualLearningImage} alt="Virtual Learning" />
                            </div>
                        </div>
                    </div>

                    <div id="stem-workshops" className="tab-content" style={{display: activeTab === 'stem-workshops' ? 'block' : 'none'}}>
                        <div className="tab-grid">
                            <div className="tab-text">
                                <h2 style={{color: '#8A2BE2'}}>STEM Workshop for Students</h2>
                                <p className="tab-desc">Engaging hands-on workshops designed to inspire and educate students through interactive STEM activities.</p>
                                
                                <ul className="tab-list">
                                    <li>
                                        <strong>Interactive Learning Sessions</strong>
                                        <p>Collaborative workshops with real-world problem solving</p>
                                    </li>
                                    <li>
                                        <strong>Hands-On Project Building</strong>
                                        <p>Build and create with guided STEM projects</p>
                                    </li>
                                    <li>
                                        <strong>Innovation & Presentation Skills</strong>
                                        <p>Develop confidence through project showcases</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-image">
                                <img src={StemWorkShopImage} alt="STEM Workshop" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ShopSection;