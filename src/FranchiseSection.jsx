import './FranchiseSection.css';

function FranchiseSection(){
    return(
        <>
            <section  className="franchise">
                <div className="container" id="franchise">
                    <div className="franchise-header">
                        <h2>Our Franchise</h2>
                        <p>
                            Partner with us to bring quality STEM education to your region. We
                            offer comprehensive support and proven business models.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-chart-line"></i>
                            <h3>Proven Business Model</h3>
                            <p>Established framework with tested strategies for success</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-chalkboard-teacher"></i>
                            <h3>Complete Training & Support</h3>
                            <p>Ongoing guidance from setup to operations</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-bullhorn"></i>
                            <h3>Marketing & Brand Support</h3>
                            <p>Access to our established brand and marketing materials</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-map-marked-alt"></i>
                            <h3>Exclusive Territory Rights</h3>
                            <p>Protected geographical areas for your franchise</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FranchiseSection;