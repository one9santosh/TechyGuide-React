import React, { useEffect, useRef } from 'react';
import './I-BoT.css';
import heroBg from '../assets/ProductI-BoTImages/hero-I-BOT.jpg';
import mainBoard from '../assets/ProductI-BoTImages/main board.png';
import kitImage from '../assets/ProductI-BoTImages/kit.jpg';
import homeAutomation from '../assets/ProductI-BoTImages/home automation.jpg';
import plantMonitor from '../assets/ProductI-BoTImages/plant monitor.jpg';
import smokeDetection from '../assets/ProductI-BoTImages/smoke detection.jpg';

function IBoT() {
    const rootRef = useRef(null);
    const testimonialsRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        // Smooth scroll for anchor links (scoped to this page only)
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target && root.contains(target)) {
                e.preventDefault();
                const selector = target.getAttribute('href');
                const element = selector ? root.querySelector(selector) : null;
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        root.addEventListener('click', handleAnchorClick);

        // Intersection Observer for fade-in animations (scoped)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        const elements = root.querySelectorAll('.feature-item, .tech-card, .project-card, .testimonial-card');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        // Auto-scroll projects and testimonials with true circular infinite loop
        const projectsContainer = projectsRef.current;
        const testimonialsContainer = testimonialsRef.current;
        
        let stopFns = [];

        // True infinite circular scroll with dynamic measurement and proper cleanup
        const createAutoScroll = (container, pixelsPerSecond = 30) => {
            if (!container) return null;

            let lastTimestamp = 0;
            let animationId = null;
            let stopped = false;

            const scroll = (timestamp) => {
                if (stopped) return;
                if (!lastTimestamp) lastTimestamp = timestamp;
                const delta = timestamp - lastTimestamp;
                lastTimestamp = timestamp;

                // Smooth increment based on time
                const increment = (pixelsPerSecond / 1000) * delta;
                container.scrollLeft += increment;

                // Measure half of the total content width (first set width)
                const singleSetWidth = container.scrollWidth / 2;
                if (container.scrollLeft >= singleSetWidth) {
                    container.scrollLeft -= singleSetWidth;
                }

                animationId = requestAnimationFrame(scroll);
            };

            animationId = requestAnimationFrame(scroll);

            // Return a stopper to cleanup correctly
            return () => {
                stopped = true;
                if (animationId) cancelAnimationFrame(animationId);
            };
        };
        
        // Start scrolling after delay
        const timeoutId = setTimeout(() => {
            if (projectsContainer) {
                const stop = createAutoScroll(projectsContainer, 50);
                if (stop) stopFns.push(stop);
            }

            if (testimonialsContainer) {
                const stop = createAutoScroll(testimonialsContainer, 45);
                if (stop) stopFns.push(stop);
            }
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
            stopFns.forEach(stop => stop());
            root.removeEventListener('click', handleAnchorClick);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="ibot-page" ref={rootRef}>
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content fade-in">
                    <h1 className="brand-name">I-Bot Kit</h1>
                    <p className="hero-desc">
                        TechIoT is a super fun Robotics & IoT learning kit that helps kids aged 7-14 learn
                        about Robotics, IoT and other development projects. The kit allows Kids to create a
                        learning ecosystem that allows children to learn, innovate and grow by creating
                        exciting real-world application-based DIY projects.
                    </p>
                    <a href="#introduction" className="btn btn-orange">Learn More</a>
                </div>
                <div className="hero-bottom-fade"></div>
            </section>

            {/* Introduction Section */}
            <section className="intro-section" id="introduction">
                <div className="intro-container">
                    <h2>Introduction to I-BoT Kit</h2>
                    <p className="intro-tagline">Watch how students are learning and building amazing projects with I-BoT</p>
                    <div className="video-container">
                        <iframe 
                            className="intro-video"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="I-BoT Kit Introduction"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section" id="features">
                <h2>Why I-BoT is the Best Choice</h2>
                <div className="features-container">
                    {/* Feature 1 */}
                    <div className="feature-item feature-left feature-bg-1">
                        <div className="feature-image">
                            <img src={mainBoard} alt="ESP32 Board" />
                        </div>
                        <div className="feature-content">
                            <h3>Powerful Microcontroller</h3>
                            <p>
                                The I-BoT kit is powered by ESP32 Chip with 4MB memory and built-in WiFi connectivity.
                                This allows students to build IoT projects that communicate over the internet.
                            </p>
                            <ul className="feature-points">
                                <li>✓ Built-in WiFi Module</li>
                                <li>✓ 4MB Memory Capacity</li>
                                <li>✓ Low Power Consumption</li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-item feature-right feature-bg-2">
                        <div className="feature-content">
                            <h3>Home Automation Projects</h3>
                            <p>
                                Build real-world home automation systems with the I-BoT kit. Control lights, security systems,
                                and appliances using voice commands and mobile apps.
                            </p>
                            <ul className="feature-points">
                                <li>✓ Smart Lighting Control</li>
                                <li>✓ Security Integration</li>
                                <li>✓ Mobile App Control</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <img src={homeAutomation} alt="Home Automation" />
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-item feature-left feature-bg-3">
                        <div className="feature-image">
                            <img src={plantMonitor} alt="Plant Monitoring" />
                        </div>
                        <div className="feature-content">
                            <h3>IoT Monitoring Systems</h3>
                            <p>
                                Create advanced monitoring systems for plants, weather, air quality, and more.
                                Students learn real-world IoT applications that solve everyday problems.
                            </p>
                            <ul className="feature-points">
                                <li>✓ Real-time Monitoring</li>
                                <li>✓ Data Analytics</li>
                                <li>✓ Cloud Integration</li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-item feature-right feature-bg-4">
                        <div className="feature-content">
                            <h3>Advanced Robotics</h3>
                            <p>
                                The ESP32 can control multiple motors, servos, and sensors simultaneously,
                                making it perfect for building robotic systems including humanoid robots and robotic arms.
                            </p>
                            <ul className="feature-points">
                                <li>✓ Multi-Motor Control</li>
                                <li>✓ Sensor Integration</li>
                                <li>✓ AI & Machine Learning Ready</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <img src={smokeDetection} alt="Robotics" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Kit Details Section */}
            <section className="kit-section" id="kit-details">
                <h2>Complete I-BoT Kit Contents</h2>
                <div className="kit-container">
                    <div className="kit-image">
                        <img src={kitImage} alt="I-BoT Kit Contents" />
                    </div>
                    <div className="kit-info">
                        <h3>Everything You Need to Get Started</h3>
                        <p>
                            The I-BoT kit includes 29 essential components designed to teach robotics and IoT concepts
                            from beginner to advanced levels.
                        </p>
                        <div className="kit-components">
                            <div className="component-column">
                                <h4>Controllers & Boards</h4>
                                <ul>
                                    <li>TechIoT ESP32 Board</li>
                                    <li>2-Channel Relay Module</li>
                                    <li>I2C OLED Display</li>
                                    <li>LCD Display</li>
                                </ul>
                            </div>
                            <div className="component-column">
                                <h4>Sensors & Actuators</h4>
                                <ul>
                                    <li>PIR Motion Sensor</li>
                                    <li>Ultrasonic Sensor</li>
                                    <li>IR Sensor</li>
                                    <li>Temperature & Humidity (DHT11)</li>
                                    <li>Pressure Sensor (BMP180)</li>
                                </ul>
                            </div>
                            <div className="component-column">
                                <h4>Motors & Mechanics</h4>
                                <ul>
                                    <li>BO Motors with Wheels</li>
                                    <li>Servo Motors</li>
                                    <li>Motor Driver Module</li>
                                    <li>Water Pump Module</li>
                                </ul>
                            </div>
                            <div className="component-column">
                                <h4>Power & Connectivity</h4>
                                <ul>
                                    <li>12V Rechargeable Battery</li>
                                    <li>Battery Charger</li>
                                    <li>JST Connectors</li>
                                    <li>Built-in WiFi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="technology-section" id="technology">
                <h2>Technologies Covered in I-BoT</h2>
                <p className="section-intro">Master multiple STEM domains with a single platform</p>
                <div className="tech-grid">
                    <div className="tech-card">
                        <div className="tech-icon">🤖</div>
                        <h3>Robotics</h3>
                        <p>Build autonomous robots, robotic arms, humanoids, and learn motor control, sensor integration, and path planning algorithms.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">📡</div>
                        <h3>IoT (Internet of Things)</h3>
                        <p>Create connected devices, home automation systems, and learn WiFi communication, cloud integration, and data transmission.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">💻</div>
                        <h3>Coding & Programming</h3>
                        <p>Master C++ and Arduino IDE with hands-on projects. Learn loops, conditionals, functions, and debugging techniques.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">🧠</div>
                        <h3>Artificial Intelligence</h3>
                        <p>Explore AI basics with gesture recognition, voice control, and machine learning concepts for intelligent robotics.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">⚙️</div>
                        <h3>Electronics & Hardware</h3>
                        <p>Understand circuits, sensors, actuators, and how hardware components work together to create intelligent systems.</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">🌐</div>
                        <h3>Networking & Connectivity</h3>
                        <p>Learn WiFi protocols, Blynk IoT platform, cloud services, and how devices communicate in real-time.</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section" id="projects">
                <h2>80+ Amazing Projects</h2>
                <p className="section-intro">From Home Automation to Advanced Robotics</p>
                <div className="projects-scroll" ref={projectsRef}>
                    <div className="project-card">
                        <img src={homeAutomation} alt="Home Automation" />
                        <h4>Home Automation</h4>
                        <p>Smart lighting, security, and appliance control</p>
                    </div>
                    <div className="project-card">
                        <img src={plantMonitor} alt="Plant Monitoring" />
                        <h4>Plant Monitoring</h4>
                        <p>Automated irrigation and growth tracking</p>
                    </div>
                    <div className="project-card">
                        <img src={smokeDetection} alt="Robotics" />
                        <h4>Robotics</h4>
                        <p>Line followers, obstacle avoiders, humanoids</p>
                    </div>
                    <div className="project-card">
                        <img src={mainBoard} alt="IoT Systems" />
                        <h4>IoT Systems</h4>
                        <p>Weather monitoring, traffic control, parking</p>
                    </div>
                    <div className="project-card">
                        <img src={kitImage} alt="Smart Devices" />
                        <h4>Smart Devices</h4>
                        <p>Digital scales, sanitizer dispensers, alarms</p>
                    </div>
                    {/* Duplicate cards for infinite scroll effect */}
                    <div className="project-card">
                        <img src={homeAutomation} alt="Home Automation" />
                        <h4>Home Automation</h4>
                        <p>Smart lighting, security, and appliance control</p>
                    </div>
                    <div className="project-card">
                        <img src={plantMonitor} alt="Plant Monitoring" />
                        <h4>Plant Monitoring</h4>
                        <p>Automated irrigation and growth tracking</p>
                    </div>
                    <div className="project-card">
                        <img src={smokeDetection} alt="Robotics" />
                        <h4>Robotics</h4>
                        <p>Line followers, obstacle avoiders, humanoids</p>
                    </div>
                    <div className="project-card">
                        <img src={mainBoard} alt="IoT Systems" />
                        <h4>IoT Systems</h4>
                        <p>Weather monitoring, traffic control, parking</p>
                    </div>
                    <div className="project-card">
                        <img src={kitImage} alt="Smart Devices" />
                        <h4>Smart Devices</h4>
                        <p>Digital scales, sanitizer dispensers, alarms</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section" id="testimonials">
                <h2>What Schools & Students Say</h2>
                <div className="testimonials-scroll" ref={testimonialsRef}>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "I-BoT has transformed our robotics lab. Students are engaged and learning real-world skills!"
                        </p>
                        <p className="testimonial-author">- Mr. Sharma, School Principal</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "The variety of projects keeps students motivated. From beginners to advanced, there's always something new to learn."
                        </p>
                        <p className="testimonial-author">- Ms. Priya, Teacher</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "Building a humanoid robot was my dream, and I-BoT made it possible. Amazing kit!"
                        </p>
                        <p className="testimonial-author">- Arjun, Grade 9 Student</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "The documentation is clear, components are reliable, and support is excellent. Highly recommended!"
                        </p>
                        <p className="testimonial-author">- Ms. Anjali, School Director</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "I-BoT sparked my interest in IoT. I've already built 5 different smart home projects!"
                        </p>
                        <p className="testimonial-author">- Ravi, Grade 8 Student</p>
                    </div>
                    {/* Duplicate cards for infinite scroll effect */}
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "I-BoT has transformed our robotics lab. Students are engaged and learning real-world skills!"
                        </p>
                        <p className="testimonial-author">- Mr. Sharma, School Principal</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "The variety of projects keeps students motivated. From beginners to advanced, there's always something new to learn."
                        </p>
                        <p className="testimonial-author">- Ms. Priya, Teacher</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "Building a humanoid robot was my dream, and I-BoT made it possible. Amazing kit!"
                        </p>
                        <p className="testimonial-author">- Arjun, Grade 9 Student</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "The documentation is clear, components are reliable, and support is excellent. Highly recommended!"
                        </p>
                        <p className="testimonial-author">- Ms. Anjali, School Director</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">
                            "I-BoT sparked my interest in IoT. I've already built 5 different smart home projects!"
                        </p>
                        <p className="testimonial-author">- Ravi, Grade 8 Student</p>
                    </div>
                </div>
            </section>

            {/* CTA Form Section */}
            <section className="form-section" id="interest-form">
                <div className="form-container">
                    <h2>Get I-Bot Lab for Your School Today! 📬</h2>
                    <p>Join 500+ schools using I-Bot to transform student learning</p>
                    <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <input type="text" placeholder="School Name" required />
                            <input type="text" placeholder="Contact Person Name" required />
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="Email Address" required />
                            <input type="tel" placeholder="Phone Number" required />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="City/Location" required />
                            <select required>
                                <option value="">Select Grade Level</option>
                                <option value="primary">Primary (Classes 3-5)</option>
                                <option value="middle">Middle School (Classes 6-8)</option>
                                <option value="secondary">Secondary (Classes 9-12)</option>
                            </select>
                        </div>
                        <textarea placeholder="Tell us about your school and students..." rows="3" required></textarea>
                        <button type="submit" className="form-btn">📧 Send Inquiry Now</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default IBoT;
