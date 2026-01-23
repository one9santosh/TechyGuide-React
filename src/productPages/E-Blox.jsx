import { useEffect, useRef } from 'react';
import './E-Blox.css';

// Import images
import robotKids from '../assets/ProductE-BloxImages/vecteezy_ai-generated-cute-robot-kids-with-isolated-transparant_38049144.png';
import robot1 from '../assets/ProductE-BloxImages/robot_2582246.png';
import robot2 from '../assets/ProductE-BloxImages/robotics_12775607.png';
import robot3 from '../assets/ProductE-BloxImages/robot_3558910.png';
import robot4 from '../assets/ProductE-BloxImages/robot_4512237.png';
import robot5 from '../assets/ProductE-BloxImages/robotics_1434292.png';
import hacker from '../assets/ProductE-BloxImages/hacker_10817459.png';
import bgImage1 from '../assets/ProductE-BloxImages/9743528.png';
import bgImage2 from '../assets/ProductE-BloxImages/5073198.jpg';

export default function EBlox() {
        // Animation observer for scroll-triggered animations
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("show");
                        }
                    });
                },
                { threshold: 0.1 }
            );

            document.querySelectorAll(".hidden-left, .hidden-right, .fade-up").forEach((el) => observer.observe(el));
        }, []);

        // WhatsApp form submission handler
        useEffect(() => {
            const form = document.getElementById('inquiry-form');
            if (!form) return;
            const handleSubmit = (e) => {
                e.preventDefault();
                const inputs = form.querySelectorAll('input, textarea');
                const data = {};
                inputs.forEach(input => {
                    if (input.name || input.placeholder) {
                        data[input.name || input.placeholder] = input.value;
                    }
                });
                // Compose WhatsApp message in readable format
                let message = `E-Blox Lab Proposal Request\n`;
                if (data['School Name']) message += `School Name: ${data['School Name']}\n`;
                if (data['Contact Person Name']) message += `Name: ${data['Contact Person Name']}\n`;
                if (data['Phone Number']) message += `Phone Number: ${data['Phone Number']}\n`;
                if (data['Email Address']) message += `Email: ${data['Email Address']}\n`;
                if (data['State']) message += `State: ${data['State']}\n`;
                if (data['Message']) message += `Message: ${data['Message']}\n`;
                message += `From page: E-Blox`;
                const phone = '8197984847';
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
                form.reset();
            };
            form.addEventListener('submit', handleSubmit);
            return () => form.removeEventListener('submit', handleSubmit);
        }, []);
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        const projectsContainer = root?.querySelector('#projects-scroll');
        let cleanupFn = undefined;

        // --- Seamless auto-scroll for projects-scroll (TeBoT style) ---
        if (projectsContainer) {
            // Duplicate cards for seamless loop (only once)
            if (projectsContainer.children.length && !projectsContainer.classList.contains('looped')) {
                const cards = Array.from(projectsContainer.children);
                cards.forEach(card => {
                    projectsContainer.appendChild(card.cloneNode(true));
                });
                projectsContainer.classList.add('looped');
            }
            let lastTimestamp = 0;
            let animationId = null;
            let stopped = false;
            let isPaused = false;
            projectsContainer.addEventListener('mouseenter', () => isPaused = true);
            projectsContainer.addEventListener('mouseleave', () => isPaused = false);
            projectsContainer.addEventListener('touchstart', () => isPaused = true);
            projectsContainer.addEventListener('touchend', () => isPaused = false);
            // Increase speed and smoothness
            // Use a fixed increment per frame for ultra-smooth, buttery scroll
            const pixelsPerFrame = 2.2; // adjust for desired speed (lower for smoother)
            const scroll = () => {
                if (stopped) return;
                if (!isPaused) {
                    projectsContainer.scrollLeft += pixelsPerFrame;
                    const singleSetWidth = projectsContainer.scrollWidth / 2;
                    if (projectsContainer.scrollLeft >= singleSetWidth) {
                        projectsContainer.scrollLeft -= singleSetWidth;
                    }
                }
                animationId = requestAnimationFrame(scroll);
            };
            animationId = requestAnimationFrame(scroll);
            // Proper cleanup for this animation
            cleanupFn = () => {
                stopped = true;
                if (animationId) cancelAnimationFrame(animationId);
            };
        }

        // Enhanced loading animation
        const contentLayout = root?.querySelector('.content-layout');
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
        const heroButton = root?.querySelector('.btn-secondary');
        const heroImage = root?.querySelector('.image-section img');
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

        // Enhanced touch support
        if (heroImage && 'ontouchstart' in window) {
            heroImage.addEventListener('touchstart', function() {
                this.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))';
            });
            heroImage.addEventListener('touchend', function() {
                this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
            });
        }

        // Cleanup
        return cleanupFn;
    }, []);

    return (
        <div className="eblox-page-root" ref={rootRef} style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 149, 0.267), rgba(0, 130, 115, 0.25)), url(${bgImage1}), linear-gradient(rgba(0, 130, 115, 0.6), rgba(0, 130, 115, 0.6)), url(${bgImage2})`,
            backgroundColor: '#008273',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '80% 50%',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <div className="background-container">
                <main className="content-layout">
                    <div className="image-section">
                        <img src={robotKids} alt="E-Blox Kit" />
                    </div>

                    <div className="info-section">
                        <h1>E-Blox Kit</h1>
                        <h2>Multi-purpose electronics kit for young learners with 20+ products</h2>
                        <button className="btn-secondary">Explore Features</button>
                    </div>
                </main>
            </div>

            <div className="ibot-page" id="root">

                <section className="intro-section" id="introduction">
                    <div className="intro-container">
                        <h2>Introduction to E-Blox Kit</h2>
                        <p className="intro-tagline">Encouraging hands-on exploration of electronics and renewable energy concepts</p>
                        <div className="video-container">
                            <iframe
                                className="intro-video"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="E-Blox Kit Introduction"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </section>

                <section className="features-section" id="features">
                    <h2>Why E-Blox is the Best Choice</h2>
                    <div className="features-container">
                        <div className="feature-item feature-left feature-bg-1">
                            <div className="feature-image">
                                <img src={robot1} alt="Modular Design" />
                            </div>
                            <div className="feature-content">
                                <h3>Constructive & Modular</h3>
                                <p>Designed specifically for easy assembly and learning. The modular blocks allow students to build and rebuild with creativity.</p>
                                <ul className="feature-points">
                                    <li>✓ Designed for Assembly</li>
                                    <li>✓ High Reusability</li>
                                    <li>✓ Creative Freedom</li>
                                </ul>
                            </div>
                        </div>

                        <div className="feature-item feature-right feature-bg-2">
                            <div className="feature-content">
                                <h3>Plug & Play Setup</h3>
                                <p>Ready-to-use components with JST connectors enable quick setup, so students can focus on learning logic rather than complex wiring.</p>
                                <ul className="feature-points">
                                    <li>✓ Quick Setup</li>
                                    <li>✓ JST Connectors</li>
                                    <li>✓ Error-Free Wiring</li>
                                </ul>
                            </div>
                            <div className="feature-image">
                                <img src={robot2} alt="Plug and Play" />
                            </div>
                        </div>

                        <div className="feature-item feature-left feature-bg-3">
                            <div className="feature-image">
                                <img src={robot3} alt="Safety First" />
                            </div>
                            <div className="feature-content">
                                <h3>Child Safe Design</h3>
                                <p>Perfect for the classroom. Our components are low voltage, non-toxic, and certified safe for young innovators.</p>
                                <ul className="feature-points">
                                    <li>✓ Low Voltage System</li>
                                    <li>✓ Non-toxic Materials</li>
                                    <li>✓ Classroom-Safe</li>
                                </ul>
                            </div>
                        </div>

                        <div className="feature-item feature-right feature-bg-4">
                            <div className="feature-content">
                                <h3>Renewable Energy Concepts</h3>
                                <p>Students can build practical projects that teach them about green energy, such as mini windmills and smart lighting.</p>
                                <ul className="feature-points">
                                    <li>✓ Solar & Wind Basics</li>
                                    <li>✓ Energy Conversion</li>
                                    <li>✓ Practical Applications</li>
                                </ul>
                            </div>
                            <div className="feature-image">
                                <img src={robot4} alt="Renewable Energy" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="kit-section" id="kit-details">
                    <h2> E-Blox Kit Contents</h2>
                    <div className="kit-container">
                        <div className="kit-image">
                            <img src={robot5} alt="E-Blox Components" />
                        </div>
                        <div className="kit-info">
                            <h3>Official Component List</h3>
                            <p>The E-Blox kit includes specialized blocks and connectors for building over 20 unique electronics products.</p>
                            <div className="kit-components">
                                <div className="component-column">
                                    <h4>Logic & Sensors</h4>
                                    <ul>
                                        <li>Dark Block x1</li>
                                        <li>Light Block x1</li>
                                        <li>Sound Sensor Block x1</li>
                                        <li>IR Block x1</li>
                                        <li>Distance Block x1</li>
                                    </ul>
                                </div>
                                <div className="component-column">
                                    <h4>Output & Sound</h4>
                                    <ul>
                                        <li>Sound Block x1</li>
                                        <li>Buzzer x1</li>
                        <li>Invert Block x1</li>
                                        <li>Motor Driver Block x2</li>
                                    </ul>
                                </div>
                                <div className="component-column">
                                    <h4>Power & Motors</h4>
                                    <ul>
                                        <li>Power Block x1</li>
                                        <li>I Shape BO motor (JST) x2</li>
                                        <li>Wire Tap Block x2</li>
                                        <li>JST Connector Wires x4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="technology-section" id="technology">
                    <h2>STEM Concepts Covered in E-Blox</h2>
                    <p className="section-intro">Master foundational electronics through block-based learning</p>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <div className="tech-icon">⚡</div>
                            <h3>Basic Electronics</h3>
                            <p>Learn about circuits, invert logic, and how power flows through different modular blocks.</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">🍃</div>
                            <h3>Renewable Energy</h3>
                            <p>Understand how windmills and solar-style sensors can be used to create sustainable tech models.</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">⚙️</div>
                            <h3>Mechanical Motion</h3>
                            <p>Explore motor drivers and BO motors to build moving projects like fans and vehicles.</p>
                        </div>
                    </div>
                </section>

                <section className="projects-section" id="projects">
                    <h2>20+ Practical Projects</h2>
                    <p className="section-intro">Building real-world electronics applications</p>
                    <div className="projects-scroll" id="projects-scroll">
                        <div className="project-card">
                            <img src={robot2} alt="Study Lamp" />
                            <h4>Smart Study Lamp</h4>
                            <p>A lamp that turns on automatically when it gets dark</p>
                        </div>
                        <div className="project-card">
                            <img src={robot3} alt="Mini Windmill" />
                            <h4>Mini Windmill</h4>
                            <p>Learning mechanical energy and rotation</p>
                        </div>
                        <div className="project-card">
                            <img src={robot4} alt="Table Fan" />
                            <h4>Portable Table Fan</h4>
                            <p>Building a motorized fan with the Motor Driver block</p>
                        </div>
                        <div className="project-card">
                            <img src={robot1} alt="Proximity Alarm" />
                            <h4>Proximity Alarm</h4>
                            <p>Using Distance and Sound blocks to detect motion</p>
                        </div>
                        <div className="project-card">
                            <img src={hacker} alt="Sound Sensor" />
                            <h4>Clap Switch</h4>
                            <p>Activating lights or motors using the Sound Sensor block</p>
                        </div>
                    </div>
                </section>

                <section className="form-section" id="interest-form">
                    <div className="form-container">
                        <h2>Get E-Blox Lab for Your School! 📬</h2>
                        <p>Start the electronics journey for young learners today</p>
                        <form className="inquiry-form" id="inquiry-form">
                            <div className="form-row">
                                <input type="text" name="School Name" placeholder="School Name" required />
                                <input type="text" name="Contact Person Name" placeholder="Contact Person Name" required />
                            </div>
                            <div className="form-row">
                                <input type="email" name="Email Address" placeholder="Email Address" required />
                                <input type="tel" name="Phone Number" placeholder="Phone Number" required />
                            </div>
                            <textarea name="Message" placeholder="Tell us how E-Blox can help your students..." rows="3" required></textarea>
                            <button type="submit" className="form-btn">📧 Send Inquiry Now</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
