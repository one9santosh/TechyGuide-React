import { useEffect } from 'react';
import './StemTinkeringLab.css';
import logoImg from '../assets/ForSchoolsStemTinkeringLabImages/Logo_TG_Tagline 2.png';

function StemTinkeringLab() {
  useEffect(() => {
    // 1. Scroll Animation Observer
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

    document
      .querySelectorAll(".hidden-left, .hidden-right, .fade-up")
      .forEach((el) => observer.observe(el));

    // 2. Animated Counters
    const statsSection = document.querySelector(".stats-section");
    let counted = false;

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          document.querySelectorAll(".counter").forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const inc = target / 100;
            const update = () => {
              count += inc;
              if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
              } else {
                counter.innerText = target;
              }
            };
            update();
          });
          counted = true;
        }
      },
      { threshold: 0.5 }
    );

    if (statsSection) statsObserver.observe(statsSection);

    // 3. Curriculum Tabs
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabPanes.forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
      });
    });

    // 4. FAQ Accordion
    const accordionHeaders = document.querySelectorAll(".stem-tinkering-lab-root .accordion-header");
    const accordionCleanups = [];
    const anchorCleanups = [];

    accordionHeaders.forEach((header) => {
      const handleAccordionClick = () => {
        const body = header.nextElementSibling;
        header.classList.toggle("active");
        if (header.classList.contains("active")) {
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = 0;
        }
      };

      header.addEventListener("click", handleAccordionClick);
      accordionCleanups.push(() => header.removeEventListener("click", handleAccordionClick));
    });

    // 4b. Floating CTA smooth scroll
    const floatingCtas = document.querySelectorAll(".stem-tinkering-lab-root .floating-cta");

    floatingCtas.forEach((cta) => {
      const handleCtaClick = (e) => {
        e.preventDefault();
        const target = document.getElementById("contact-section");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };

      cta.addEventListener("click", handleCtaClick);
      anchorCleanups.push(() => cta.removeEventListener("click", handleCtaClick));
    });

    // 5. DIY Kit Slider Logic
    let slideIndex = 0;
    const slides = document.querySelectorAll(".diy-slide");
    
    if (slides.length > 0) {
      slides.forEach(slide => slide.style.display = "none"); 
      
      const showSlides = () => {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); 
      };

      showSlides();
    }

    // 6. Form Submission
    const form = document.getElementById('enquiryForm');
    let handleSubmit;

    if (form) {
      handleSubmit = (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;

        const school = document.getElementById('schoolName').value;
        const name = document.getElementById('fullName').value;
        const phone = document.getElementById('phoneNumber').value;
        const email = document.getElementById('emailId').value;
        const state = document.getElementById('state').value;
        const msg = document.getElementById('message').value;

        btn.innerText = 'Opening WhatsApp...';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
          const businessPhone = "918197984847"; 
          const text = `*STEM TINKERING LAB* %0a%0a` +
                       `*School:* ${school}%0a` +
                       `*Name:* ${name}%0a` +
                       `*Phone:* ${phone}%0a` +
                       `*Email:* ${email}%0a` +
                       `*State:* ${state}%0a` +
                       `*Message:* ${msg}`;

          const whatsappUrl = `https://wa.me/${businessPhone}?text=${text}`;
          window.open(whatsappUrl, '_blank');
          
          form.reset();
          btn.innerHTML = originalText;
          btn.style.opacity = '1';
        }, 1000);
      };

      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      accordionCleanups.forEach((cleanup) => cleanup());
      anchorCleanups.forEach((cleanup) => cleanup());
      if (form && handleSubmit) {
        form.removeEventListener('submit', handleSubmit);
      }
      observer.disconnect();
      if (statsSection) statsObserver.disconnect();
    };
  }, []);

  return (
    <div className="stem-tinkering-lab-root">
      <a href="#contact-section" className="floating-cta">
        <i className="fas fa-file-invoice-dollar"></i> Get STEM Proposal
      </a>

      <section className="hero-section">
        <div className="hero-bg-animation"></div>
        <div className="container hero-container">
          <div className="hero-text hidden-left">
            <div className="brand-tag">
              <img src={logoImg} alt="TechyGuide Logo" className="hero-logo" />
              <span>NEP 2020 Aligned</span>
            </div>
            <h1>Igniting Young Minds with <br /><span className="highlight-text">STEM Tinkering Labs</span></h1>
            <p>A space for "Making, Breaking, and Creating." Empowering students with hands-on skills in <strong>Robotics, IoT, 3D Printing, and AI</strong> to solve real-world problems.</p>
            <div className="hero-btns">
              <a href="#packages" className="btn btn-orange">Setup Lab</a>
              <a href="#curriculum" className="btn btn-glass">Curriculum</a>
            </div>
          </div>
          <div className="hero-visual hidden-right">
            <div className="floating-badge">
              <i className="fas fa-tools"></i>
              <div>
                <strong>Hands-on Learning</strong>
                <span>Innovation Hub</span>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" alt="STEM Student" className="main-hero-img" />
          </div>
        </div>
      </section>

      <section className="guidelines-section" id="mandates">
        <div className="container">
          <div className="guideline-header text-center fade-up">
            <h2 className="section-heading">Why Establish a STEM Lab?</h2>
            <p className="section-subtext">Aligned with National Education Policy (NEP) 2020 & 21st Century Skills</p>
          </div>

          <div className="guidelines-grid">
            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" alt="Skills" />
                <div className="guide-badge">Skill Building</div>
              </div>
              <div className="guide-content">
                <h3>Skill Development</h3>
                <p>Provides hands-on experience in coding, robotics, and AI applications. Encourages students to become "Job Creators" rather than just "Job Seekers".</p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Innovation" />
                <div className="guide-badge">Innovation</div>
              </div>
              <div className="guide-content">
                <h3>Fostering Innovation</h3>
                <p>Creates a culture of creativity where students identify local community problems and design working prototypes to solve them.</p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" alt="Integration" />
                <div className="guide-badge">STEM Integration</div>
              </div>
              <div className="guide-content">
                <h3>Interdisciplinary Learning</h3>
                <p>Promotes the integration of concepts from Science, Technology, Engineering, and Mathematics (STEM) into a unified learning experience.</p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" alt="Career" />
                <div className="guide-badge">Future Ready</div>
              </div>
              <div className="guide-content">
                <h3>Career Readiness</h3>
                <p>Equips students with knowledge of emerging technologies like IoT and 3D Printing, preparing them for higher education and professional careers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="350">0</h2><span>+</span>
            <p>Labs Setup Pan-India</p>
          </div>
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="50">0</h2><span>+</span>
            <p>ATL Labs Established</p>
          </div>
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="150000">0</h2><span>+</span>
            <p>Students Impacted</p>
          </div>
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="100">0</h2><span>+</span>
            <p>Govt Schools (Tender)</p>
          </div>
        </div>
      </section>

      <section className="curriculum-section" id="curriculum">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Grade-Wise Curriculum Roadmap</h2>
          <p className="section-subtext text-center fade-up">A structured learning path covering Arts, Electronics, Robotics, and Coding.</p>

          <div className="tabs-wrapper fade-up">
            <div className="tabs-header">
              <button className="tab-btn active" data-tab="primary">Primary (1-5)</button>
              <button className="tab-btn" data-tab="middle">Middle (6-8)</button>
              <button className="tab-btn" data-tab="senior">Secondary (9-10)</button>
            </div>
            
            <div className="tabs-content">
              <div className="tab-pane active" id="primary">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-palette"></i> Arts & Crafts</h4>
                    <ul>
                      <li>Paper Craft & Origami</li>
                      <li>Clay Modeling & Pottery</li>
                      <li>Thread Art & Stone Painting</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-bolt"></i> Basic Electronics</h4>
                    <ul>
                      <li>Introduction to LED & Batteries</li>
                      <li>Simple & Parallel Circuits</li>
                      <li>Fun with Switches & Buzzers</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-cubes"></i> Intro to Coding</h4>
                    <ul>
                      <li>Block-based Coding</li>
                      <li>Sequencing & Loops</li>
                      <li>Creating Simple Animations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="middle">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-robot"></i> Robotics & Automation</h4>
                    <ul>
                      <li>Line Follower & Obstacle Avoider</li>
                      <li>Automatic Street Light</li>
                      <li>Bluetooth Controlled Car</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-cube"></i> 3D Printing & Design</h4>
                    <ul>
                      <li>Introduction to 3D Pens</li>
                      <li>3D Design Software (Tinkercad)</li>
                      <li>Slicing & Printing Models</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-plane"></i> Drone Technology</h4>
                    <ul>
                      <li>Aerodynamics Basics</li>
                      <li>Assembly of Mini Drones</li>
                      <li>Flight Mechanics & Control</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="senior">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-wifi"></i> Internet of Things (IoT)</h4>
                    <ul>
                      <li>Smart Home Automation</li>
                      <li>Cloud Integration (Blynk/ThinkSpeak)</li>
                      <li>Sensors & Data Logging</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fab fa-python"></i> Python & AI</h4>
                    <ul>
                      <li>Python Programming Basics</li>
                      <li>Face Detection & Recognition</li>
                      <li>Computer Vision Projects</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-microchip"></i> Raspberry Pi</h4>
                    <ul>
                      <li>Introduction to Single Board Computers</li>
                      <li>OS Installation & Configuration</li>
                      <li>Interfacing Sensors with Pi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="infra-section">
        <div className="container">
          <h2 className="section-heading text-white fade-up">Lab Infrastructure Requirements</h2>
          <div className="infra-grid">
            <div className="infra-box fade-up">
              <i className="fas fa-laptop"></i>
              <h3>Computing</h3>
              <p><strong>Ratio:</strong> 2:1 (Student to Device)</p>
              <p><strong>Specs:</strong> Intel i5, 8GB RAM, Win 10+</p>
              <p><strong>Connectivity:</strong> Bluetooth, Webcam, Wi-Fi</p>
            </div>
            <div className="infra-box fade-up">
              <i className="fas fa-chair"></i>
              <h3>Furniture</h3>
              <p><strong>Activity Tables:</strong> 1 per 4 students</p>
              <p><strong>Arena Tables:</strong> 2 for robot testing</p>
              <p><strong>Storage:</strong> Lockable Cupboards</p>
            </div>
            <div className="infra-box fade-up">
              <i className="fas fa-project-diagram"></i>
              <h3>Presentation</h3>
              <p>Projector with proper screen setup for class presentations and demonstrations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="packages-section" id="packages">
        <div className="container">
          <h2 className="section-heading text-center fade-up">STEM Lab Packages</h2>
          <div className="pricing-wrapper">
            <div className="pricing-card fade-up">
              <h3>Mini Lab</h3>
              <div className="capacity">Up to 300 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> <strong>6</strong> I-BOT Starter Kits</li>
                <li><i className="fas fa-microchip"></i> <strong>6</strong> TechBoT Electronics Kits</li>
                <li><i className="fas fa-robot"></i> <strong>1</strong> Humanoid Add-on Kit</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 10 Online Training Sessions</li>
                <li><i className="fas fa-user-graduate"></i> 3 Days Physical Training</li>
              </ul>
              <a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
            </div>

            <div className="pricing-card popular fade-up">
              <div className="badge">Most Popular</div>
              <h3>Medium Lab</h3>
              <div className="capacity">Up to 700 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> <strong>12</strong> I-BOT Starter Kits</li>
                <li><i className="fas fa-microchip"></i> <strong>12</strong> TechBoT Electronics Kits</li>
                <li><i className="fas fa-spider"></i> <strong>1</strong> Spider Kit & 1 Humanoid</li>
                <li><i className="fas fa-tools"></i> <strong>1</strong> Robotic Arm Kit</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 15 Online Training Sessions</li>
              </ul>
              <a href="#contact-section" className="btn btn-orange">Request Details</a>
            </div>

            <div className="pricing-card fade-up">
              <h3>Large Lab</h3>
              <div className="capacity">Up to 1200 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> <strong>20</strong> I-BOT Starter Kits</li>
                <li><i className="fas fa-microchip"></i> <strong>20</strong> TechBoT Electronics Kits</li>
                <li><i className="fas fa-spider"></i> <strong>2</strong> Spider & 2 Humanoid Kits</li>
                <li><i className="fas fa-tools"></i> <strong>2</strong> Robotic Arm Kits</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 24 Online Training Sessions</li>
              </ul>
              <a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="diy-section">
        <div className="container">
          <div className="diy-container fade-up">
            <div className="diy-content">
              <div className="badge-diy">In-House Innovation</div>
              <h2>Proprietary DIY Kits</h2>
              <p>Our labs feature robust, modular kits developed in-house, designed for infinite prototyping and durability.</p>
              
              <ul className="diy-features">
                <li><i className="fas fa-microchip"></i> <strong>Core:</strong> Arduino / ESP32 Compatible</li>
                <li><i className="fas fa-plug"></i> <strong>Parts:</strong> Modular Sensors & Motors</li>
                <li><i className="fas fa-tools"></i> <strong>Build:</strong> Durable Chassis</li>
                <li><i className="fas fa-wifi"></i> <strong>Tech:</strong> Bluetooth/WiFi Enabled</li>
              </ul>
              <a href="#contact-section" className="btn btn-light btn-mt">View Kit Specs</a>
            </div>
            
            <div className="diy-image slider-wrapper">
              <div className="diy-slide fade">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" alt="I-BoT Kit" />
                <div className="slide-caption">I-BoT Starter Kit</div>
              </div>
              <div className="diy-slide fade">
                <img src="https://images.unsplash.com/photo-1563968743333-044cef80426d?auto=format&fit=crop&q=80&w=800" alt="TeBoT Kit" />
                <div className="slide-caption">TeBoT Kit</div>
              </div>
              <div className="diy-slide fade">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="E-Blox Kit" />
                <div className="slide-caption">E-Blox Kit</div>
              </div>
              <div className="floating-kit-tag">Made in India</div>
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Support Ecosystem</h2>
          <p className="section-subtext text-center fade-up">Comprehensive support from setup to certification.</p>

          <div className="support-grid fade-up">
            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Training" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                <h4>3 Days Onsite Training</h4>
                <p>Intensive hands-on training for teachers at your school.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" alt="Virtual Training" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-laptop-code"></i></div>
                <h4>Virtual Training</h4>
                <p>Regular online sessions (10-24 depending on package) throughout the year.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=600" alt="Monitoring" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-eye"></i></div>
                <h4>Quarterly Monitoring</h4>
                <p>Regular checks (Virtual/Onsite) to ensure lab functionality.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600" alt="Certification" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-certificate"></i></div>
                <h4>Certification</h4>
                <p>Certificates for School, Teachers, and Students upon program completion.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600" alt="Assessment" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-clipboard-list"></i></div>
                <h4>Question Bank</h4>
                <p>Provided question banks for conducting student assessments.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Competition" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-trophy"></i></div>
                <h4>Innovation Fest</h4>
                <p>Yearly innovation competition opportunity for students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-content-wrapper">
            <h2 className="section-heading text-center text-white fade-up">See Innovation in Action</h2>
            <p className="section-subtext text-center text-white fade-up" style={{ opacity: 0.9 }}>
              Transforming classrooms into hubs of creativity and logic.
            </p>
            <div className="video-container fade-up">
              <iframe src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0&modestbranding=1" title="TechyGuide Lab Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Execution Timeline (35 Days)</h2>
          <div className="timeline-box fade-up">
            <div className="t-item"><span>Day 0</span><p>MoU Signed</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 5</span><p>50% Advance</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 20</span><p>Delivery</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 30</span><p>Setup</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 33</span><p>Go-Live</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 35</span><p>Certify</p></div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Our Labs in Action</h2>
          <p className="section-subtext text-center fade-up">Deployed in 350+ Schools.</p>
          <div className="gallery-grid">
            <div className="gallery-item large fade-up"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Robotics" /><div className="gallery-overlay"><h5>Hands-on Learning</h5></div></div>
            <div className="gallery-item fade-up"><img src="https://images.unsplash.com/photo-1555664424-778a69022365?auto=format&fit=crop&q=80&w=600" alt="Electronics" /><div className="gallery-overlay"><h5>Electronics</h5></div></div>
            <div className="gallery-item fade-up"><img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600" alt="3D Printing" /><div className="gallery-overlay"><h5>3D Printing</h5></div></div>
            <div className="gallery-item fade-up"><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" alt="AI Coding" /><div className="gallery-overlay"><h5>AI Programming</h5></div></div>
            <div className="gallery-item fade-up"><img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=600" alt="Competition" /><div className="gallery-overlay"><h5>RoboThrone</h5></div></div>
            <div className="gallery-item fade-up"><img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=600" alt="Competition" /><div className="gallery-overlay"><h5>RoboThrone</h5></div></div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Trusted by Educators</h2>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"We have used TechyGuide's ATL service. Their services were very good and always respond to our queries promptly."</p>
              <div className="profile">
                <div className="profile-icon">GJ</div>
                <div className="profile-info">
                  <h4>Mr. Gopinath Jena</h4>
                  <span>HM, LN Nobel High School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting to me and helpful for my students."</p>
              <div className="profile">
                <div className="profile-icon">PD</div>
                <div className="profile-info">
                  <h4>Pankaj Kumar Dey</h4>
                  <span>Govt. Gandhi Sec. School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Trainers are exceptionally good at their knowledge. They did amazing to our skills. Thank you!"</p>
              <div className="profile">
                <div className="profile-icon">JS</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Jajoo Int. School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"We have used TechyGuide's ATL service. Their services were very good and always respond to our queries promptly."</p>
              <div className="profile">
                <div className="profile-icon">GJ</div>
                <div className="profile-info">
                  <h4>Mr. Gopinath Jena</h4>
                  <span>HM, LN Nobel High School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting to me and helpful for my students."</p>
              <div className="profile">
                <div className="profile-icon">PD</div>
                <div className="profile-info">
                  <h4>Pankaj Kumar Dey</h4>
                  <span>Govt. Gandhi Sec. School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Trainers are exceptionally good at their knowledge. They did amazing to our skills. Thank you!"</p>
              <div className="profile">
                <div className="profile-icon">JS</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Jajoo Int. School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"We have used TechyGuide's ATL service. Their services were very good and always respond to our queries promptly."</p>
              <div className="profile">
                <div className="profile-icon">GJ</div>
                <div className="profile-info">
                  <h4>Mr. Gopinath Jena</h4>
                  <span>HM, LN Nobel High School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting to me and helpful for my students."</p>
              <div className="profile">
                <div className="profile-icon">PD</div>
                <div className="profile-info">
                  <h4>Pankaj Kumar Dey</h4>
                  <span>Govt. Gandhi Sec. School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container small-container">
          <h2 className="section-heading fade-up">Frequently Asked Questions</h2>
          <div className="accordion fade-up">
            <div className="accordion-item">
              <button className="accordion-header">Does the package include GST?</button>
              <div className="accordion-body">
                <p>Yes, all prices listed are inclusive of GST.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">Is there a warranty?</button>
              <div className="accordion-body">
                <p>Yes, we provide a 1-year manufacturing warranty on all microcontrollers.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">What does the teacher training cover?</button>
              <div className="accordion-body">
                <p>The program includes 3 days of onsite physical training and online sessions covering Coding, Robotics, AI, and IoT.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area" id="contact-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Get Your STEM Lab Proposal</h2>
        </div>
        <div className="container contact-grid">
          <div className="contact-info fade-up">
            <p><strong>Corporate Office:</strong> #80, 2nd Floor, 1st Main, VSR Layout, A Narayanapura Main Road, Bangalore 560016.</p>
            <p><strong>Registered Office:</strong> 1st & 2nd Floor, Jyoti Complex, Bhoisahi, Balasore-756001, Odisha.</p>
            
            <div className="info-box">
              <i className="fas fa-phone-alt"></i>
              <div>
                <strong>Call Us</strong>
                <p>+91 8197984847</p>
              </div>
            </div>
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email Us</strong>
                <p>Sales@techyguide.in</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper fade-up">
            <form id="enquiryForm">
              <div className="form-group">
                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName" name="schoolName" required placeholder="Enter School Name" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Name</label>
                  <input type="text" id="fullName" name="fullName" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Mobile Number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailId">Email ID</label>
                  <input type="email" id="emailId" name="emailId" required placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" required placeholder="State" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="3" placeholder="Any specific requirement?"></textarea>
              </div>
              
              <button type="submit" className="btn btn-full">Send via WhatsApp <i className="fab fa-whatsapp"></i></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StemTinkeringLab;