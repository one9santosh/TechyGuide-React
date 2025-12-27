import g1 from '/src/assets/g1.jpg'
import g2 from '/src/assets/g2.jpg'
import g3 from '/src/assets/g3.jpg'
import g4 from '/src/assets/g4.jpg'
import g5 from '/src/assets/g5.jpg'
import g6 from '/src/assets/g6.jpg'
import './GallerySection.css';

function GallerySection(){
    return(
        <>
            <section className="gallery">
                <div className="container">
                    <div className="section-header center-text">
                        <h2>Our Labs & Events</h2>
                        <p>
                            Explore our state-of-the-art facilities, workshops, and student
                            achievements
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src={g1} alt="Modern STEM Lab Setup" />
                            <div className="overlay">
                                <div className="text">Modern STEM Lab Setup</div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={g2} alt="Student at Robotic Workshop" />
                            <div className="overlay">
                                <div className="text">Student at Robotic Workshop</div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={g3} alt="Hands on Learning Session" />
                            <div className="overlay">
                                <div className="text">Hands on Learning Session</div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={g4} alt="Educational DIY Kit" />
                            <div className="overlay">
                                <div className="text">Educational DIY Kit</div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={g5} alt="AI and Robotic Lab" />
                            <div className="overlay">
                                <div className="text">AI and Robotic Lab</div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={g6} alt="Tinkerfest Competition" />
                            <div className="overlay">
                                <div className="text">Tinkerfest Competition</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GallerySection;