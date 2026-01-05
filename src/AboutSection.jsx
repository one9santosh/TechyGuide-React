import './AboutSection.css';
import { Link } from 'react-router-dom';

function AboutSection(){
    return(
        <>
            <section className="about">
                <div className="container">
                    <div className="section-header center-text">
                        <h2>India’s Leading STEM, AI & Robotics Education Partner</h2>
                        <p className="lead-text">TechyGuide is India's leading EdTech company dedicated to empowering students and educators with cutting-edge AI, Robotics, and STEM education solutions.</p>
                        <p>TechyGuide provides hands-on learning solutions for students and educators, including AI & Robotics labs, STEM Labs India, STEM DIY kits, virtual courses, and workshops, delivering world-class Robotics Education India and AI Labs India programs. Our mission is to equip students with 21st-century skills, nurturing innovators, problem-solvers, and future technology leaders. <a href="https://www.techyguide.in/about/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline', textDecoration: 'underline', fontWeight: 700, color: 'var(--primary-color)' }}>Learn More About TechyGuide</a></p>
                    </div>
                </div>
            </section>
            <section className="stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Schools Served</p>
                        </div>
                        <div className="stat-item">
                            <h3>50K+</h3>
                            <p>Students Trained</p>
                        </div>
                        <div className="stat-item">
                            <h3>200+</h3>
                            <p>Labs Established</p>
                        </div>
                    </div>
                    <div className="stats-footer">
                        <p>The Best STEM Platform for Students & Educators</p>
                        <small>
                            Comprehensive learning solutions combining hands-on DIY kits with interactive virtual courses.
                            <Link
                                to="/impact-program"
                                style={{ display: 'inline', textDecoration: 'underline', fontWeight: 700, color: 'var(--accent-color)' }}
                            >
                                Partner Your School
                            </Link>
                        </small>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutSection