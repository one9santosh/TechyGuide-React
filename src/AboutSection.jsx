import './AboutSection.css';

function AboutSection(){
    return(
        <>
            <section className="about">
                <div className="container">
                    <div className="section-header center-text">
                        <h2>Transforming Education Through Innovation</h2>
                        <p className="lead-text">TechyGuide is India's leading EdTech company dedicated to empowering students and educators with cutting-edge AI, Robotics, and STEM education solutions.</p>
                        <p>We believe in learning by doing, and our hands-on approach prepares students for the challenges of tomorrow. From comprehensive lab setups to DIY kits and virtual courses, we provide everything schools need to nurture the next generation of innovators, problem-solvers, and technology leaders.</p>
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
                        <small>Comprehensive learning solutions combining hands-on DIY kits with interactive virtual courses</small>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutSection