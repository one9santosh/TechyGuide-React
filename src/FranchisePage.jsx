import React, { useEffect } from 'react';
import './FranchisePage.css';
import studentsImg from './assets/franchisepageimages/students.jpg';
import testimonial1 from './assets/franchisepageimages/Website Testimonial_1.png';
import testimonial11 from './assets/franchisepageimages/Website Testimonial_11.png';
import testimonial13 from './assets/franchisepageimages/Website Testimonial_13.png';
import testimonial14 from './assets/franchisepageimages/Website Testimonial_14.png';
import testimonial15 from './assets/franchisepageimages/Website Testimonial_15.png';

function FranchisePage() {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        let started = false;

        const animateCounter = (el) => {
            const target = +el.getAttribute('data-target');
            const duration = 1600; // ms
            const start = performance.now();

            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const value = Math.floor(progress * target);
                if (progress < 1) {
                    el.innerText = value.toLocaleString();
                    requestAnimationFrame(step);
                } else {
                    el.innerText = target.toLocaleString() + '+';
                }
            };
            requestAnimationFrame(step);
        };

        const runCounters = () => {
            counters.forEach(c => animateCounter(c));
        };

        const stats = document.querySelector('.stats-bar');
        if (!stats || counters.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    runCounters();
                    obs.disconnect();
                }
            });
        }, { threshold: 1.00 });

        observer.observe(stats);

        // Parallax fallback: adjust hero background position on scroll (respects reduced-motion)
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const layers = document.querySelectorAll('.parallax-layers .layer');
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const rect = hero.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                const inView = rect.bottom > 0 && rect.top < viewportHeight;

                if (inView) {
                    const heroTop = rect.top;
                    // base offset: distance hero has moved relative to viewport
                    const base = Math.max(-heroTop, 0);
                    // apply different multipliers for each layer
                    layers.forEach((layer, i) => {
                        const depth = (i + 1) * 0.15; // 0.15, 0.30, ...
                        const translateY = Math.round(base * depth);
                        layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
                    });
                }

                ticking = false;
            });
        };

        // Initial position
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        // Button immediate-press feedback and queued animations
        const BUTTON_ANIM_DURATION = 420; // ms
        const queue = [];
        let running = false;

        function runNext() {
            if (queue.length === 0) { running = false; return; }
            running = true;
            const btn = queue.shift();
            if (!btn) { running = false; return; }
            btn.classList.add('btn-animate');
            setTimeout(() => {
                btn.classList.remove('btn-animate');
                runNext();
            }, BUTTON_ANIM_DURATION);
        }

        function enqueue(btn) {
            // ensure element still in DOM
            if (!btn || !btn.isConnected) return;
            queue.push(btn);
            if (!running) runNext();
        }

        const buttons = Array.from(document.querySelectorAll('.btn'));
        if (buttons.length === 0) return;

        buttons.forEach(btn => {
            // immediate visual feedback on pointer down
            btn.addEventListener('pointerdown', () => {
                btn.classList.add('btn-pressed');
            }, { passive: true });

            ['pointerup','pointercancel','pointerleave'].forEach(ev => {
                btn.addEventListener(ev, () => btn.classList.remove('btn-pressed'));
            });

            // enqueue a short animation when clicked; keeps order if multiple clicks occur
            btn.addEventListener('click', (e) => {
                enqueue(btn);
            });
        });

        // keyboard activation support: enqueue when user presses Enter/Space on a focused .btn
        const handleKeydown = (e) => {
            if (e.key !== ' ' && e.key !== 'Enter') return;
            const el = document.activeElement;
            if (el && el.classList && el.classList.contains('btn')) {
                e.preventDefault();
                // short pressed visual
                el.classList.add('btn-pressed');
                setTimeout(() => el.classList.remove('btn-pressed'), 160);
                enqueue(el);
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <div className="franchise-page">
            {/* ============ HEADER / HERO SECTION ============ */}
            <header className="hero" id="home">
                <div className="hero-bottom-fade"></div>
                <div className="hero-content container">
                    <p className="tagline">FOLLOW INNOVATION!</p>
                    <h1 className="kit-title">Start Business with India's <br /><span className="accent">No.1</span><br />Robotics & Coding Learning Centre</h1>
                    <p className="hero-desc">Empowering the next generation with AI, Robotics, and 21st-century skills.</p>
                    
                    <div className="hero-buttons">
                        <a className="btn btn-orange" href="#requirements">Start Franchise</a>
                        <a className="btn btn-glass" href="#why">Learn More</a>
                    </div>
                </div>
            </header>

            
            {/* ============ WHY CHOOSE US SECTION ============ */}
            <section className="section gray-bg" id="why">
                <div className="container">
                    <h2 className="section-title">Why Choose Techyguide?</h2>
                    <p className="lead">Join India's No.1 Robotics & Coding Learning Centre — a proven, scalable franchise model built on trust, curriculum excellence, and financial viability.</p>

                    <div className="pillars-grid">
                        <div className="pillar-card card">
                            <div className="pillar-img" style={{backgroundImage: `url(${studentsImg})`}}></div>
                            <div className="pillar-icon">🌍</div>
                            <h3>ROBOTICS COURSES FOR KIDS</h3>
                            <p>Recognized as India's No. 1 Robotics & Coding Learning Centre, ensuring brand trust and localized advantages.</p><br />
                            <ul className="feature-list">
                                <li><strong>26+ States:</strong> Presence across the entire country.</li>
                                <li><strong>350+ Labs:</strong> State-of-the-art maker labs delivered.</li>
                            </ul>
                        </div>

                        <div className="pillar-card card blue-accent">
                            <div className="pillar-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop')"}}></div>
                            <div className="pillar-icon">📚</div>
                            <h3>STEM WORKSHOPS IN SCHOOLS</h3>
                            <p>The franchise model handles technical complexities so you can focus on business growth.</p><br />
                            <ul className="feature-list">
                                <li><strong>Future-Ready Tech:</strong> AI, 3D Printing, and IoT.</li>
                                <li><strong>End-to-End:</strong> Training for 1,500+ educators provided.</li>
                            </ul>
                        </div>

                        <div className="pillar-card card teal-accent">
                            <div className="pillar-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=400&auto=format&fit=crop')"}}></div>
                            <div className="pillar-icon">⚡</div>
                            <h3>ROBOTICS COMPETITIONS/EVENTS</h3>
                            <p>Streamline your operations with our proprietary tech-stack built for modern education.</p><br />
                            <ul className="feature-list">
                                <li><strong>Smart LMS:</strong> Automated attendance and digital certification.</li>
                                <li><strong>Parent Portal:</strong> Real-time progress tracking for every child.</li>
                                <li><strong>CRM Support:</strong> Integrated lead management for higher conversions.</li>
                            </ul>
                        </div>

                        <div className="pillar-card card purple-accent">
                            <div className="pillar-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop')"}}></div>
                            <div className="pillar-icon">🏆</div>
                            <h3>SALE OF ROBOTICS KITS & PRODUCTS</h3>
                            <p>We provide exclusive access and mentorship for national and international robotics olympiads.</p><br />
                            <ul className="feature-list">
                                <li><strong>World Stage:</strong> Mentorship for WRO and FLL competitions.</li>
                                <li><strong>Annual Olympiad:</strong> In-house nationwide robotics challenges.</li>
                                <li><strong>Project Incubation:</strong> Turning student ideas into real prototypes.</li>
                            </ul>
                        </div>

                        <div className="pillar-card card">
                            <div className="pillar-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop')"}}></div>
                            <div className="pillar-icon">💻</div>
                            <h3>HARDWARE & SOFTWARE </h3>
                            <p>Equipped with the latest tools and resources, our centers provide an immersive experience that prepares students for future careers in robotics.</p><br />
                            <ul className="feature-list">
                                <li><strong>Rapid ROI:</strong> Full return on investment within 12–18 months.</li>
                                <li><strong>Low Entry:</strong> Affordable investment for entrepreneurs.</li>
                            </ul>
                        </div>

                        <div className="pillar-card card">
                            <div className="pillar-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop')"}}></div>
                            <div className="pillar-icon">🎓</div>
                            <h3>TRAINING & SUPPORT</h3>
                            <p>Become part of the largest tech community spread across nations.</p><br />
                            <ul className="feature-list">
                                <li><strong>Idea Sharing:</strong> Access to a thriving ecosystem of innovators.</li>
                                <li><strong>Prestige:</strong> Immediate credibility for school collaborations.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ============ REVENUE STREAMS SECTION ============ */}

            </section>
            <section className="revenue-section" id="revenue">
                <div className="container">
                    <h2 className="section-title">Revenue Streams</h2>
                    <p className="lead">Multiple ways to grow your business and maximize your ROI.</p>

                    <div className="revenue-grid">
                        <div className="revenue-card">
                            <div className="rev-icon">🎓</div>
                            <div className="rev-content">
                                <h3>Course Fees</h3>
                                <p>Recurring monthly income from Robotics, Coding, and AI batches (Ages 6-18).</p>
                                <span className="rev-tag">High Margin</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <div className="rev-icon">🏢</div>
                            <div className="rev-content">
                                <h3>School Workshops</h3>
                                <p>Bulk revenue through STEM workshops and Lab setup consultancy in local schools.</p>
                                <span className="rev-tag">B2B Revenue</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <div className="rev-icon">🤖</div>
                            <div className="rev-content">
                                <h3>Kit Sales</h3>
                                <p>Direct profit from selling exclusive Techyguide Robotics & DIY Science kits.</p>
                                <span className="rev-tag">Product Sales</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <div className="rev-icon">🏆</div>
                            <div className="rev-content">
                                <h3>Competitions</h3>
                                <p>Revenue from organizing regional Robotics Olympiads and hackathons.</p>
                                <span className="rev-tag">Event Based</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="revenue-highlight">
                        <div className="highlight-text">
                            <h3>Expected Monthly ROI</h3>
                            <p>₹40,000 - ₹1,50,000+</p>
                        </div>
                        <div className="highlight-visual">
                            <div className="pulse-circle"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ STATISTICS SECTION ============ */}
            <section className="stats-bar">
                <div className="stat-item">
                    <h2 className="counter" data-target="26">0</h2>
                    <p>States Covered</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="350">0</h2>
                    <p>Labs Delivered</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="1500">0</h2>
                    <p>Educators Trained</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="100000">0</h2>
                    <p>Students Impacted</p>
                </div>
            </section>

            {/* ============ REQUIREMENTS SECTION ============ */}
            <section className="section gray-bg" id="requirements">
                <div className="container">
                    <h2 className="section-title">Requirements to Start</h2>
                    <div className="requirements-grid">
                        <div className="card requirement-card">
                            <div className="icon">📍</div>
                            <h3>Space</h3>
                            <ul>
                                <li>300 – 1,000 sq. ft. in a prominent Space.</li>
                                <li>Location - Benguluru,Hyderabad,..</li>
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">💰</div>
                            <h3>Investment</h3>
                            <ul>
                                <li>Franchise Fee: ₹50,000 (one time)</li>
                                <li>Setup Cost: ₹2,00,000(Hardware,software& training)</li>
                                <li>Infrastructure Set Up Cost: Rs.3,00,000</li>
                                <li>Average Course Fee: ₹1,500 – ₹2,500</li>
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">🔌</div>
                            <h3>Infrastructure</h3>
                            <ul>
                                <li>High-speed internet & workbenches.</li>
                                <li>A LAN is a private, high-speed network that connects computers.</li>
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">👥</div>
                            <h3>Staffing</h3>
                            <ul>
                                <li>1-2 Instructors (Training provided).</li>
                                <li>Monthly Revenue: ₹40,000- 50,000</li>
                                <li>Considering 20 students initially.</li>
                                <li>ROI expected within 12–18 months.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ============ WHAT WILL YOU GET SECTION ============ */}
            <section className="containerbox">
                <h2 className="section-title">What Will You Get?</h2>

                <div className="box">
                    <div className="box-content">
                        <img src={studentsImg} alt="Lab Layout" />
                        <div className="text-overlay">LAB LAYOUT & SET UP DESIGN</div>
                    </div>
                    <div className="details">
                        <p>Professional workspace planning and ergonomic design for modern labs.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <img src={studentsImg} alt="Hardware" />
                        <div className="text-overlay">HARDWARE & SOFTWARE</div>
                    </div>
                    <div className="details">
                        <p>Access to cutting-edge robotics, 3D printers, and interactive modules.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <img src={studentsImg} alt="Curriculum" />
                        <div className="text-overlay">CONTENT & CURRICULUM</div>
                    </div>
                    <div className="details">
                        <p>Comprehensive lesson plans and digital resources for all grade levels.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <img src={studentsImg} alt="Training" />
                        <div className="text-overlay">TRAINING & SUPPORT</div>
                    </div>
                    <div className="details">
                        <p>Hands-on teacher training and dedicated technical support for schools.</p>
                    </div>
                </div>
            </section>
            {/* ============ some snapshots ============ */}
            <section className="snapshot-section" id="snapshots">
                <div className="containersnapshot">
                    <h2 className="section-title">Some Snapshots</h2>
                    <div className="view">
                        <div className="block big"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 1" /></div>
                        <div className="block small"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 2" /></div>
                        <div className="block small"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 3" /></div>
                        <div className="block big"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 4" /></div>
                        <div className="block big"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 5" /></div>
                        <div className="block small"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 6" /></div>
                        <div className="block small"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 7" /></div>
                        <div className="block big"><img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" alt="Snapshot 8" /></div>
                    </div>
                </div>
            </section>

            {/* ============ SUCCESS STORIES SECTION ============ */}
            <section className="section" id="stories">
                <div className="container">
                    <h2 className="section-title">Success Stories</h2>
                    
                    <div className="story-viewport">
                        <div className="story-track">
                            <div className="story-item"><img src={testimonial1} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial11} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial13} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial14} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial15} alt="Story" /></div>
                            
                            <div className="story-item"><img src={testimonial1} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial11} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial13} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial14} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial15} alt="Story" /></div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ============ ADDITIONAL INFO SECTION ============ */}
            <section className="section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-box blue-border">
                            <h3>Franchise Overview</h3>
                            <ul>
                                <li><strong>High Growth Market:</strong> Tap into STEM demand via NEP 2020.</li>
                                <li><strong>Low Risk:</strong> Scalable model with established brand equity.</li>
                                <li><strong>Social Impact:</strong> Equip kids with logic and critical thinking.</li>
                            </ul>
                        </div>
                        <div className="info-box blue-border">
                            <h3>Who Can Join</h3>
                            <ul>
                                <li><strong>Entrepreneurs:</strong> Profitable business with a social purpose.</li>
                                <li><strong>Existing Centers:</strong> Schools/Tuition centers looking to upgrade.</li>
                                <li><strong>Tech Enthusiasts:</strong> Educators passionate about hands-on learning.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FranchisePage;
