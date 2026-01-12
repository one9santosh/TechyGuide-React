import { useEffect } from 'react';
import './TeBoT.css';
import robotImage from '../assets/ProductTeBoTImages/7.png';
import reusableIcon from '../assets/ProductTeBoTImages/robot_2582246.png';
import safetyIcon from '../assets/ProductTeBoTImages/robotics_12775607.png';
import warrantyIcon from '../assets/ProductTeBoTImages/robot_3558910.png';
import componentsImage from '../assets/ProductTeBoTImages/robotics_1434292.png';
import project1 from '../assets/ProductTeBoTImages/robotics_12775607.png';
import project2 from '../assets/ProductTeBoTImages/robot_3558910.png';
import project3 from '../assets/ProductTeBoTImages/robot_4512237.png';
import project4 from '../assets/ProductTeBoTImages/robot_2582246.png';

function TeBoT() {
    useEffect(() => {
        console.log('TeBoT page loaded successfully');
        
        // Get main elements
        const root = document.getElementById('tebot-root');
        const projectsContainer = document.getElementById('projects-scroll');
        const heroImage = document.querySelector('.tebot-page-root .image-section img');
        const heroTitle = document.querySelector('.tebot-page-root .info-section h1');
        const heroButton = document.querySelector('.tebot-page-root .btn-secondary');

        // Enhanced smooth scrolling function
        function smoothScrollTo(element, duration = 1000) {
            const targetPosition = element.offsetTop - 20;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            requestAnimationFrame(animation);
        }

        // Hero section interactions with no zoom effects
        if (heroImage) {
            heroImage.addEventListener('mouseenter', function() {
                this.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))';
            });
            
            heroImage.addEventListener('mouseleave', function() {
                this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
            });
            
            heroImage.addEventListener('click', function() {
                this.style.filter = 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))';
                setTimeout(() => {
                    this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
                }, 300);
            });
        }
        
        if (heroTitle) {
            heroTitle.addEventListener('mouseenter', function() {
                this.style.color = '#00d4ff';
                this.style.textShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
            });
            
            heroTitle.addEventListener('mouseleave', function() {
                this.style.color = 'rgb(255, 153, 0)';
                this.style.textShadow = 'none';
            });
        }
        
        if (heroButton) {
            const handleButtonClick = function(e) {
                e.preventDefault();
                this.style.transform = 'translateY(-1px)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-2px)';
                    const introSection = document.getElementById('introduction');
                    if (introSection) {
                        smoothScrollTo(introSection, 1200);
                    }
                }, 150);
            };
            heroButton.addEventListener('click', handleButtonClick);
        }

        // Enhanced smooth scroll for anchor links
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target && root && root.contains(target)) {
                e.preventDefault();
                const selector = target.getAttribute('href');
                const element = selector ? document.querySelector(selector) : null;
                if (element) {
                    smoothScrollTo(element, 1000);
                }
            }
        };

        if (root) {
            root.addEventListener('click', handleAnchorClick);
        }

        // Enhanced Intersection Observer for smoother fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Apply enhanced fade-in animation to elements
        const elements = document.querySelectorAll('.tebot-page-root .feature-item, .tebot-page-root .tech-card, .tebot-page-root .project-card');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        // Enhanced auto-scroll function with smoother animation
        const createAutoScroll = (container, pixelsPerSecond = 30) => {
            if (!container) return null;

            let lastTimestamp = 0;
            let animationId = null;
            let stopped = false;
            let isPaused = false;

            container.addEventListener('mouseenter', () => isPaused = true);
            container.addEventListener('mouseleave', () => isPaused = false);
            container.addEventListener('touchstart', () => isPaused = true);
            container.addEventListener('touchend', () => isPaused = false);

            const scroll = (timestamp) => {
                if (stopped) return;

                if (!lastTimestamp) lastTimestamp = timestamp;
                const delta = timestamp - lastTimestamp;
                lastTimestamp = timestamp;

                if (!isPaused) {
                    const increment = (pixelsPerSecond / 1000) * delta;
                    container.scrollLeft += increment;

                    const singleSetWidth = container.scrollWidth / 2;
                    if (container.scrollLeft >= singleSetWidth) {
                        container.scrollLeft -= singleSetWidth;
                    }
                }

                animationId = requestAnimationFrame(scroll);
            };

            animationId = requestAnimationFrame(scroll);

            return () => {
                stopped = true;
                if (animationId) cancelAnimationFrame(animationId);
            };
        };

        // Start enhanced auto-scroll for projects after delay
        let stopFns = [];
        
        setTimeout(() => {
            if (projectsContainer) {
                const stopProjects = createAutoScroll(projectsContainer, 100);
                if (stopProjects) stopFns.push(stopProjects);
            }
        }, 2000);

        // Enhanced form submission handler
        const form = document.getElementById('inquiry-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach((input, index) => {
                    setTimeout(() => {
                        if (!input.value.trim()) {
                            input.style.borderColor = '#ff4444';
                            input.style.boxShadow = '0 0 10px rgba(255, 68, 68, 0.3)';
                            isValid = false;
                        } else {
                            input.style.borderColor = '#4caf50';
                            input.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.3)';
                            setTimeout(() => {
                                input.style.borderColor = '#e0e0e0';
                                input.style.boxShadow = 'none';
                            }, 1000);
                        }
                    }, index * 50);
                });
                
                setTimeout(() => {
                    if (isValid) {
                        const button = form.querySelector('.form-btn');
                        const originalText = button.textContent;
                        button.style.transform = 'translateY(-1px)';
                        setTimeout(() => {
                            button.textContent = '✅ Inquiry Sent!';
                            button.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
                            button.style.transform = 'translateY(-2px)';
                        }, 150);
                        
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.style.background = 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)';
                            form.reset();
                        }, 3000);
                    } else {
                        form.style.animation = 'shake 0.5s ease-in-out';
                        setTimeout(() => {
                            form.style.animation = '';
                        }, 500);
                    }
                }, inputs.length * 50 + 100);
            });
        }

        // Enhanced loading animation for content
        const contentLayout = document.querySelector('.tebot-page-root .content-layout');
        if (contentLayout) {
            contentLayout.style.opacity = '0';
            contentLayout.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                contentLayout.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                contentLayout.style.opacity = '1';
                contentLayout.style.transform = 'translateY(-40px)';
            }, 300);
        }

        // Enhanced keyboard navigation
        const handleKeyDown = function(e) {
            if (e.key === 'Enter' && e.target === heroButton) {
                heroButton.click();
            }
            
            if (e.key.toLowerCase() === 'r' && heroImage) {
                heroImage.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
                heroImage.style.transform = 'rotate(360deg)';
                setTimeout(() => {
                    heroImage.style.transform = 'rotate(0deg)';
                    setTimeout(() => {
                        heroImage.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, 1000);
                }, 1000);
            }
        };
        
        document.addEventListener('keydown', handleKeyDown);

        // Enhanced touch support for mobile without zoom
        if (heroImage && 'ontouchstart' in window) {
            heroImage.addEventListener('touchstart', function() {
                this.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))';
            });
            
            heroImage.addEventListener('touchend', function() {
                this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
            });
        }

        // Cleanup function
        return () => {
            stopFns.forEach(stop => stop());
            if (root) {
                root.removeEventListener('click', handleAnchorClick);
            }
            document.removeEventListener('keydown', handleKeyDown);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="tebot-page-root">
            <div className="background-container">
                <main className="content-layout">
                    <div className="image-section">
                        <img src={robotImage} alt="TEBOT Robot" />
                    </div>
                    <div className="info-section">
                        <h1>TeBOT Kit</h1>
                        <h2>An ultimate robotics kit for young innovators with 50+ projects</h2>
                        <button className="btn-secondary">Explore Features</button>
                    </div>
                </main>
            </div>

            <div className="ibot-page" id="tebot-root">

                <section className="intro-section" id="introduction">
                    <div className="intro-container">
                        <h2>Introduction to TeBOT Advance Kit</h2>
                        <p className="intro-tagline">Watch how students are learning and building 50+ amazing projects with TeBOT</p>
                        <div className="video-container">
                            <iframe
                                className="intro-video"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="TeBOT Kit Introduction"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </section>

                <section className="features-section" id="features">
                    <h2>Why TeBOT is the Best Choice</h2>
                    <div className="features-container">
                        <div className="feature-item feature-left feature-bg-1">
                            <div className="feature-image">
                                <img src={reusableIcon} alt="Reusable Icon" />
                            </div>
                            <div className="feature-content">
                                <h3>Reusable Design</h3>
                                <p>The TeBOT kit is designed for endless innovation. Use, rebuild, and innovate - again and again to master robotics concepts.</p>
                                <ul className="feature-points">
                                    <li>✓ Durable Components</li>
                                    <li>✓ Multi-Project Integration</li>
                                    <li>✓ Easy Handling</li>
                                </ul>
                            </div>
                        </div>

                        <div className="feature-item feature-right feature-bg-2">
                            <div className="feature-content">
                                <h3>Certified Child Safe</h3>
                                <p>Safety is our priority. The kit uses low voltage and non-toxic materials, making it perfectly classroom-safe for students.</p>
                                <ul className="feature-points">
                                    <li>✓ Low Voltage System</li>
                                    <li>✓ Non-toxic Materials</li>
                                    <li>✓ Short Circuit Protected</li>
                                </ul>
                            </div>
                            <div className="feature-image">
                                <img src={safetyIcon} alt="Safety Icon" />
                            </div>
                        </div>

                        <div className="feature-item feature-left feature-bg-3">
                            <div className="feature-image">
                                <img src={warrantyIcon} alt="Warranty Icon" />
                            </div>
                            <div className="feature-content">
                                <h3>Guaranteed Reliability</h3>
                                <p>Every TeBOT Advance Kit comes with a standard 1-year manufacturing warranty on the Microcontroller for long-term use.</p>
                                <ul className="feature-points">
                                    <li>✓ 1-Year Microcontroller Warranty</li>
                                    <li>✓ Professional Support</li>
                                    <li>✓ Quality Circuitry</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="kit-section" id="kit-details">
                    <h2>TeBOT Kit Contents</h2>
                    <div className="kit-container">
                        <div className="kit-image">
                            <img src={componentsImage} alt="TeBOT Components" />
                        </div>
                        <div className="kit-info">
                            <h3>Everything You Need for Your Projects</h3>
                            <p>This kit includes a comprehensive set of high-quality components for robotics and IoT innovation:</p>
                            
                            <div className="kit-components">
                                <div className="component-column">
                                    <h4>Controllers & Power</h4>
                                    <ul>
                                        <li>IoT Board x1</li>
                                        <li>Mini USB Cable x1</li>
                                        <li>Rechargeable Battery Jack x1</li>
                                        <li>Wire and Plug x1</li>
                                        <li>1 Channel Relay Module x1</li>
                                    </ul>
                                </div>

                                <div className="component-column">
                                    <h4>Sensors (A-M)</h4>
                                    <ul>
                                        <li>Ultrasonic Sensor x2</li>
                                        <li>IR Sensor x2</li>
                                        <li>DHT 11 (Temp/Humidity) x1</li>
                                        <li>MQ 2 & MQ 3 Gas Sensors x1 each</li>
                                        <li>Soil Moisture Sensor x1</li>
                                    </ul>
                                </div>

                                <div className="component-column">
                                    <h4>Sensors (P-Z) & Modules</h4>
                                    <ul>
                                        <li>PIR Motion Sensor x1</li>
                                        <li>Flame Sensor x1</li>
                                        <li>Sound Sensor x1</li>
                                        <li>Vibration Sensor x1</li>
                                        <li>Heart Rate Sensor x1</li>
                                        <li>BMP 180 (Barometric) x1</li>
                                        <li>MPU 6050 (Gyro/Accel) x1</li>
                                    </ul>
                                </div>

                                <div className="component-column">
                                    <h4>Hardware & Build</h4>
                                    <ul>
                                        <li>BO Motor with Jack x2 & BO Wheel x2</li>
                                        <li>Servo Motor SG 90 x2</li>
                                        <li>Breadboard 400 Pin x1</li>
                                        <li>Water Pump Module & Pipe x1</li>
                                        <li>LCD I2C Display x1</li>
                                        <li>LED Packet x1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="technology-section" id="technology">
                    <h2>Technologies Covered in TeBOT</h2>
                    <p className="section-intro">Master multiple STEM domains with a single platform</p>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <div className="tech-icon">🤖</div>
                            <h3>Robotics</h3>
                            <p>Build autonomous systems and learn path planning using the provided line follower paper and sensors.</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">📡</div>
                            <h3>Smart Automation</h3>
                            <p>Create real-world solutions like the Smart Bridge using multi-sensor integration.</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">💻</div>
                            <h3>Coding</h3>
                            <p>Master programming with 50+ projects supported by comprehensive course materials.</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">⚙️</div>
                            <h3>Electronics</h3>
                            <p>Understand circuit building with breadboards, resistors, and various jumper cables.</p>
                        </div>
                    </div>
                </section>

                <section className="projects-section" id="projects">
                    <h2>Featured TeBOT Projects</h2>
                    <p className="section-intro">Choose from over 50 projects including:</p>
                    <div className="projects-scroll" id="projects-scroll">
                        <div className="project-card">
                            <img src={project1} alt="Smart Bridge" />
                            <h4>Smart Bridge</h4>
                            <p>Automated bridge infrastructure control</p>
                        </div>
                        <div className="project-card">
                            <img src={project2} alt="Line Follower" />
                            <h4>Line Follower</h4>
                            <p>Precision navigation using sensor paths</p>
                        </div>
                        <div className="project-card">
                            <img src={project3} alt="Flame Detector" />
                            <h4>Flame Detector</h4>
                            <p>Automated fire safety and alert system</p>
                        </div>
                        <div className="project-card">
                            <img src={project4} alt="Smart Garden" />
                            <h4>Smart Garden</h4>
                            <p>Soil and moisture monitoring for plants</p>
                        </div>
                        <div className="project-card">
                            <img src={project1} alt="Smart Bridge" />
                            <h4>Smart Bridge</h4>
                            <p>Automated bridge infrastructure control</p>
                        </div>
                        <div className="project-card">
                            <img src={project2} alt="Line Follower" />
                            <h4>Line Follower</h4>
                            <p>Precision navigation using sensor paths</p>
                        </div>
                        <div className="project-card">
                            <img src={project3} alt="Flame Detector" />
                            <h4>Flame Detector</h4>
                            <p>Automated fire safety and alert system</p>
                        </div>
                        <div className="project-card">
                            <img src={project4} alt="Smart Garden" />
                            <h4>Smart Garden</h4>
                            <p>Soil and moisture monitoring for plants</p>
                        </div>
                    </div>
                </section>

                <section className="form-section" id="interest-form">
                    <div className="form-container">
                        <h2>Get TeBOT Advance for Your School! 📬</h2>
                        <p>Join the STEM revolution with 50+ hands-on projects</p>
                        <form className="inquiry-form" id="inquiry-form">
                            <div className="form-row">
                                <input type="text" name="school_name" placeholder="School Name" required />
                                <input type="text" name="contact_person" placeholder="Contact Person Name" required />
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email Address" required />
                                <input type="tel" name="phone" placeholder="Phone Number" required />
                            </div>
                            <textarea name="message" placeholder="Tell us how we can help your students innovate with TeBOT..." rows="3" required></textarea>
                            <button type="submit" className="form-btn">📧 Send Inquiry Now</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TeBoT;
