import React, { useEffect } from 'react';
import './StemLab.css';
import heroImage from '../assets/ForSchoolsStemLabImages/virtual-learning-MZKzsgnz.jpg';

function StemLab() {
    useEffect(() => {
        // Animation observer for scroll-triggered animations
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

        let statsObserver = null;
        let vpObserver = null;

        // ==========================================
        // 1. SMOOTH SCROLLING FOR HERO BUTTON
        // ==========================================
        const scrollButton = document.querySelector('.stemlab-page-root .scroll-to-programs');
        if(scrollButton) {
            scrollButton.addEventListener('click', (e) => {
                e.preventDefault();
                const programsSection = document.getElementById('programs');
                
                if (programsSection) {
                    const yOffset = -50; 
                    const y = programsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                        top: y, 
                        behavior: 'smooth'
                    });
                }
            });
        }

        // ==========================================
        // 2. STATS COUNTER ANIMATION
        // ==========================================
        const counters = document.querySelectorAll('.stemlab-page-root .counter');
        const speed = 200;

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 25);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        const statsObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, statsObserverOptions);

        const statsSection = document.querySelector('.stemlab-page-root .stats-section');
        if(statsSection) {
            statsObserver.observe(statsSection);
        }

        // ==========================================
        // 3. VERTICAL PRODUCTS (OFFERINGS) ANIMATION
        // ==========================================
        const vpCards = document.querySelectorAll('.stemlab-page-root .vp-card');

        if(vpCards.length > 0) {
            const vpObserverOptions = {
                root: null,
                threshold: 0.15
            };

            vpObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 150);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, vpObserverOptions);

            vpCards.forEach(card => {
                vpObserver.observe(card);
            });
        }

        // ==========================================
        // 4. BUTTON INTERACTIVITY (Popups)
        // ==========================================
        const handleClick = (e) => {
            if (e.target.matches('.stemlab-page-root .btn-primary') && e.target.closest('.stemlab-page-root .product-card')) {
                const card = e.target.closest('.stemlab-page-root .product-card');
                const title = card.querySelector('h3').innerText;
                alert(`🚀 Initiating launch sequence for: ${title}`);
            }
        };

        document.body.addEventListener('click', handleClick);

        // ==========================================
        // 5. LOAD SHOWCASE VIDEO FROM data-video-id
        // ==========================================
        const videoWrapper = document.querySelector('.stemlab-page-root .video-wrapper');
        if (videoWrapper) {
            const vid = videoWrapper.dataset.videoId;
            const iframe = videoWrapper.querySelector('iframe');
            if (vid && iframe && vid.trim() !== '') {
                iframe.src = `https://www.youtube.com/embed/${vid}`;
            }
        }

        // ==========================================
        // 6. INITIALIZE MULTIPLE MODEL PLAYERS
        // ==========================================
        const modelCards = document.querySelectorAll('.stemlab-page-root .model-card');
        if (modelCards.length > 0) {
            modelCards.forEach(card => {
                const vid = card.dataset.videoId;
                const iframe = card.querySelector('iframe');
                if (vid && iframe && vid.trim() !== '') {
                    iframe.src = `https://www.youtube.com/embed/${vid}?rel=0&showinfo=0`;
                }
            });
        }

        // ==========================================
        // 7. HERO-AWARE BUTTON POSITIONING
        // ==========================================
        const introSection = document.querySelector('.stemlab-page-root .intro-section');
        const handleScroll = () => {
            if (!introSection) return;
            
            const introBottom = introSection.offsetHeight;
            const scrollToTopBtn = document.querySelector('button.scroll-to-top');
            const whatsappBtn = document.querySelector('.whatsapp-button');

            if (window.scrollY >= introBottom) {
                // Past hero - show scroll-to-top and position buttons side by side
                if (scrollToTopBtn) scrollToTopBtn.classList.remove('hidden-from-hero');
                if (whatsappBtn) whatsappBtn.classList.add('shifted');
            } else {
                // In hero - hide scroll-to-top
                if (scrollToTopBtn) scrollToTopBtn.classList.add('hidden-from-hero');
                if (whatsappBtn) whatsappBtn.classList.remove('shifted');
            }
        };

        if (introSection) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Call once on mount to set initial state
        }

        // Cleanup
        return () => {
            document.body.removeEventListener('click', handleClick);
            if (statsObserver) statsObserver.disconnect();
            if (vpObserver) vpObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="stemlab-page-root">
            <main className="main-content">
                <section className="intro-section">
                    <div className="container hero-grid">
                        <div className="hero-text">
                            <span className="sub-heading">Welcome to StemLabs</span>
                            <h1 className="section-title">Developing Minds for a <span className="highlight-orange">Better Tomorrow</span></h1>
                            <p className="section-desc">
                                We spark curiosity through our unique <strong>DICE</strong> methodology: 
                                Design Thinking, Innovation, Creativity, and Entrepreneurship. 
                                Our mission is to foster a deep interest in Science, Technology, Engineering, and Math 
                                through hands-on practical learning.
                            </p>
                            <div className="intro-buttons">
                                <button className="btn-primary">Our Programs</button>
                                <button className="btn-outline">Download Brochure</button>
                            </div>
                        </div>

                        <div className="hero-image">
                            <img src={heroImage} alt="Students building STEM project" onError={(e) => e.target.style.display='none'} />
                        </div>
                    </div>
                </section>

                <section className="methodology-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our <span className="highlight-teal">Methodology</span></h2>
                            <p>We move beyond textbooks with a "Build, Play, Learn" approach.</p>
                        </div>
                        <div className="dice-grid">
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-pencil-ruler"></i></div>
                                <h3>Design</h3>
                                <p>Encouraging students to visualize solutions and draft blueprints for their ideas.</p>
                            </div>
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-lightbulb"></i></div>
                                <h3>Innovation</h3>
                                <p>Teaching kids to look at problems differently and invent unique solutions.</p>
                            </div>
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-palette"></i></div>
                                <h3>Creativity</h3>
                                <p>Fostering artistic expression within technical projects using our specialized kits.</p>
                            </div>
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-rocket"></i></div>
                                <h3>Entrepreneurship</h3>
                                <p>Developing the leadership skills needed to turn inventions into real-world value.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="vertical-products-section">
                    <div className="container">
                        <div className="vp-grid">
                            <div className="vp-card card-blue">
                                <div className="vp-img">
                                    <div className="vp-letter">S</div>
                                </div>
                                <div className="vp-body">
                                    <h3>Science</h3>
                                    
                                    <p>Science builds a strong foundation of curiosity, observation, and logical thinking. Students explore core scientific concepts through hands-on experiments, real-world examples, and inquiry-based learning. The focus is on understanding how the natural and physical world works, encouraging questioning, hypothesis formation, and evidence-based conclusions.</p>
                                </div>
                            </div>

                            <div className="vp-card card-pink">
                                <div className="vp-img"><div className="vp-letter">T</div></div>
                                <div className="vp-body">
                                    <h3>Technology</h3>
                                    
                                    <p>Technology introduces learners to the practical use of tools, systems, and digital solutions. Students gain exposure to basic programming logic, robotics, electronics, and digital creativity. Through interactive learning and model-based activities, they understand how technology is designed, applied, and improved to solve real-life problems, preparing them for a technology-driven future.</p>
                                </div>
                            </div>

                            <div className="vp-card card-purple">
                                <div className="vp-img"><div className="vp-letter">E</div></div>
                                <div className="vp-body">
                                    <h3>Engineering</h3>
                                    
                                    <p>Engineering develops problem-solving and design thinking skills by transforming ideas into functional solutions. Students engage in building structures, machines, and working models using engineering principles. The learning process includes planning, designing, testing, and optimizing projects, helping students understand how engineering impacts industries, infrastructure, and everyday life.</p>
                                </div>
                            </div>

                            <div className="vp-card card-red">
                                <div className="vp-img"><div className="vp-letter">M</div></div>
                                <div className="vp-body">
                                    <h3>Mathematics</h3>
                                    
                                    <p>Mathematics strengthens analytical reasoning, accuracy, and logical decision-making. Students apply mathematical concepts such as numbers, patterns, measurements, and data analysis within STEM projects and real-world scenarios. Rather than rote learning, the focus is on practical application, enabling learners to use mathematics as a powerful tool for innovation and research.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="video-section" id="showcase-video">
                    <div className="container">
                        <div className="section-header">
                            <h2>Project <span className="highlight-orange">Showcase</span></h2>
                            <p>Watch one of our featured student projects below.</p>
                        </div>

                        <div className="video-wrapper" data-video-id="M7lc1UVf-VE">
                            <iframe title="Project Showcase" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>

                <section className="models-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>STEM <span className="highlight-teal">Models</span></h2>
                            <p>Short videos showcasing our STEM products and student projects.</p>
                        </div>

                        <div className="models-grid">
                            <div className="model-card" data-video-id="M7lc1UVf-VE">
                                <div className="model-media">
                                    <iframe title="Robotics Kit" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Robotics Kit</h4>
                            </div>

                            <div className="model-card" data-video-id="M7lc1UVf-VE">
                                <div className="model-media">
                                    <iframe title="Smart Car" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Smart Car</h4>
                            </div>

                            <div className="model-card" data-video-id="M7lc1UVf-VE">
                                <div className="model-media">
                                    <iframe title="Hydraulics Demo" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Hydraulics Demo</h4>
                            </div>

                            <div className="model-card" data-video-id="M7lc1UVf-VE">
                                <div className="model-media">
                                    <iframe title="Wind Energy Model" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Wind Energy Model</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="stats-section">
                    <div className="container stats-grid">
                        <div className="stat-item">
                            <h2 className="counter" data-target="400">0</h2>
                            <p>Graduated Builders</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="counter" data-target="200">0</h2>
                            <p>Graduated Freshmen</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="counter" data-target="50">0</h2>
                            <p>Partner Institutions</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="counter" data-target="15">0</h2>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </section>

                <section className="gallery-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lab <span className="highlight-teal">Gallery</span> & Models</h2>
                            <p>A glimpse into the innovative machines our students build.</p>
                        </div>
                        
                        <div className="gallery-grid">
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Robotic Arm</h4>
                                    <p>Hydraulics & Mechanics</p>
                                </div>
                                <img src={heroImage} alt="Robotic Arm" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Smart Car</h4>
                                    <p>Sensors & Automation</p>
                                </div>
                                <img src={heroImage} alt="Smart Car" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Industrial Crane</h4>
                                    <p>Pulleys & Gears</p>
                                </div>
                                <img src={heroImage} alt="Industrial Crane" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Wind Energy</h4>
                                    <p>Renewable Power Models</p>
                                </div>
                                <img src={heroImage} alt="Windmill" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Space Rover</h4>
                                    <p>Advanced Exploration</p>
                                </div>
                                <img src={heroImage} alt="Mars Rover" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Automated Bridge</h4>
                                    <p>Civil Engineering</p>
                                </div>
                                <img src={heroImage} alt="Bridge" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Success <span className="highlight-orange">Stories</span></h2>
                            <p>Trusted by leading schools and happy parents.</p>
                        </div>

                        <div className="testimonial-grid">
                            <div className="testimonial-card">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p className="review-text">
                                    "The hands-on approach has completely changed how our students perceive science. 
                                    The kits are durable and the curriculum is perfectly aligned with our academic goals."
                                </p>
                                <div className="reviewer-info">
                                    <h5>Principal</h5>
                                    <span>Oakridge International School</span>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p className="review-text">
                                    "My son used to struggle with math concepts, but building models helped him visualize 
                                    the problems. He now loves his physics classes!"
                                </p>
                                <div className="reviewer-info">
                                    <h5>Parent</h5>
                                    <span>Student at Whitefield Global School</span>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p className="review-text">
                                    "StemLabs provided excellent training for our teachers. The transition to a 
                                    practical-based learning environment was seamless."
                                </p>
                                <div className="reviewer-info">
                                    <h5>Coordinator</h5>
                                    <span>Flomont World School</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default StemLab;