
import './FooterSection.css';
import { Link } from 'react-router-dom';

function FooterSection(){
    return(
        <>
            <footer>
                <div className="container footer-content">
                    <div className="footer-col">
                        <h3>TechyGuide</h3>
                        <p>
                            Empowering the next generation with AI, Robotics, and STEM
                            education.
                        </p>
                        <div className="contact-info">
                            <p><a href="tel:+919114036376"><i className="fas fa-phone-alt"></i> +91 91140 36376</a></p>
                            <p><a href="mailto:reachus@techyguide.in"><i className="fas fa-envelope"></i> reachus@techyguide.in</a></p>
                            <p>
                                <i className="fas fa-map-marker-alt"></i> India - Serving Schools
                                Nationwide
                            </p>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#schools">For Schools</a></li>
                            <li><Link to="/franchise">Franchise</Link></li>
                            <li><a href="#shop">Shop</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Our Offerings</h3>
                        <ul>
                            <li><a href="#">Robotics Products</a></li>
                            <li><a href="#">IoT Solutions</a></li>
                            <li><a href="#">AI Courses</a></li>
                            <li><a href="#">Coding Courses</a></li>
                            <li><a href="#">3D Printing</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-bar">
                    <p>&copy; 2025 TechyGuide Private Limited. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default FooterSection;