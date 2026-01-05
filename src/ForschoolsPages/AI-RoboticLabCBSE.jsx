import React, { useEffect, useRef } from "react";
import "./AI-RoboticLabCBSE.css";
import Logo from "../assets/ForSchoolsAI-RoboticslabCBSE/Logo_TG_Tagline 2.png";

function AIRoboticsLabCBSE() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap";
    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(fontLink);
    document.head.appendChild(faLink);

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

    root.querySelectorAll(".hidden-left, .hidden-right, .fade-up").forEach((el) => observer.observe(el));

    const statsSection = root.querySelector(".stats-section");
    let counted = false;
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          root.querySelectorAll(".counter").forEach((counter) => {
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

    const tabBtns = Array.from(root.querySelectorAll(".tab-btn"));
    const tabPanes = Array.from(root.querySelectorAll(".tab-pane"));
    const tabHandlers = tabBtns.map((btn) => () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      const pane = root.querySelector(`#${target}`);
      if (pane) pane.classList.add("active");
    });
    tabBtns.forEach((btn, idx) => btn.addEventListener("click", tabHandlers[idx]));

    const accordionHeaders = Array.from(root.querySelectorAll(".accordion-header"));
    const accordionHandlers = accordionHeaders.map((header) => () => {
      const body = header.nextElementSibling;
      header.classList.toggle("active");
      if (header.classList.contains("active")) {
        body.style.maxHeight = `${body.scrollHeight}px`;
      } else {
        body.style.maxHeight = 0;
      }
    });
    accordionHeaders.forEach((header, idx) => header.addEventListener("click", accordionHandlers[idx]));

    const anchorHandler = (e) => {
      e.preventDefault();
      const targetSel = e.currentTarget.getAttribute("href");
      const targetEl = root.querySelector(targetSel);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    };
    const anchors = Array.from(root.querySelectorAll('a[href^="#"]'));
    anchors.forEach((anchor) => anchor.addEventListener("click", anchorHandler));

    let slideIndex = 0;
    const slides = Array.from(root.querySelectorAll(".diy-slide"));
    let sliderTimeout;
    if (slides.length > 0) {
      slides.forEach((slide) => (slide.style.display = "none"));
      const showSlides = () => {
        slides.forEach((slide) => (slide.style.display = "none"));
        slideIndex += 1;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        sliderTimeout = setTimeout(showSlides, 3000);
      };
      showSlides();
    }

    const form = root.querySelector("#enquiryForm");
    const formHandler = (e) => {
      e.preventDefault();
      
      if (!form) return;
      
      const btn = form.querySelector("button");
      if (!btn) return;
      
      const originalText = btn.innerHTML;
      const school = form.querySelector("#schoolName")?.value || "";
      const person = form.querySelector("#fullName")?.value || "";
      const phone = form.querySelector("#phoneNumber")?.value || "";
      const email = form.querySelector("#emailId")?.value || "";
      const state = form.querySelector("#state")?.value || "";
      const msg = form.querySelector("#message")?.value || "";
      
      // Validate required fields
      if (!school || !person || !phone) {
        alert("Please fill in all required fields");
        return;
      }
      
      btn.innerText = "Opening WhatsApp...";
      btn.style.opacity = "0.7";
      
      setTimeout(() => {
        try {
          const businessPhone = "918197984847";
          const text = `*CBSE Lab Proposal Request*%0a%0a` +
            `*School Name:* ${school}%0a` +
            `*Name:* ${person}%0a` +
            `*Phone Number:* ${phone}%0a` +
            `*Email:* ${email}%0a` +
            `*State:* ${state}%0a` +
            `*Message:* ${msg}%0a%0a` ;
          const whatsappUrl = `https://wa.me/${businessPhone}?text=${text}`;
          window.open(whatsappUrl, "_blank");
          form.reset();
          btn.innerHTML = originalText;
          btn.style.opacity = "1";
        } catch (error) {
          console.error("Error opening WhatsApp:", error);
          btn.innerHTML = originalText;
          btn.style.opacity = "1";
          alert("Error opening WhatsApp. Please try again.");
        }
      }, 1000);
    };
    if (form) form.addEventListener("submit", formHandler);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
      tabBtns.forEach((btn, idx) => btn.removeEventListener("click", tabHandlers[idx]));
      accordionHeaders.forEach((header, idx) => header.removeEventListener("click", accordionHandlers[idx]));
      anchors.forEach((anchor) => anchor.removeEventListener("click", anchorHandler));
      if (sliderTimeout) clearTimeout(sliderTimeout);
      if (form) form.removeEventListener("submit", formHandler);
      if (fontLink.parentNode) fontLink.parentNode.removeChild(fontLink);
      if (faLink.parentNode) faLink.parentNode.removeChild(faLink);
    };
  }, []);

  return (
    <div className="ai-roboticslab-cbse-root" ref={rootRef}>
      <a href="#contact-section" className="floating-cta">
        <i className="fas fa-file-invoice-dollar"></i> Get Proposal
      </a>

      <section className="hero-section">
        <div className="hero-bg-animation"></div>
        <div className="container hero-container">
          <div className="hero-text hidden-left">
            <div className="brand-tag">
              <img src={Logo} alt="TechyGuide Logo" className="hero-logo" />
              <span>GeM Registered Vendor</span>
            </div>
            <h1>
              Building Future Innovators with <br />
              <span className="highlight-text">AI & Robotics</span>
            </h1>
            <p>
              We transform traditional education through hands-on learning.
              <strong>350+ Labs</strong> installed across India. Fully aligned
              with <strong>NEP 2020</strong> and CBSE Skill Education.
            </p>
            <div className="hero-btns">
              <a href="#packages" className="btn btn-orange">Setup Lab</a>
              <a href="#curriculum" className="btn btn-glass">Curriculum</a>
            </div>
          </div>
          <div className="hero-visual hidden-right">
            <div className="floating-badge">
              <i className="fas fa-school"></i>
              <div>
                <strong>150,000+</strong>
                <span>Students Trained</span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600"
              alt="Student with Robot"
              className="main-hero-img"
            />
          </div>
        </div>
      </section>

      <section className="guidelines-section" id="mandates">
        <div className="container">
          <div className="guideline-header text-center fade-up">
            <h2 className="section-heading">Why Establish an AI & Robotics Lab?</h2>
            <p className="section-subtext">
              Aligned with Government Mandates &amp; National Education Policy (NEP) 2020
            </p>
          </div>

          <div className="guidelines-grid">
            <div className="guide-card fade-up">
              <div className="guide-img">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
                  alt="NEP 2020"
                />
                <div className="guide-badge">NEP 2020 Core</div>
              </div>
              <div className="guide-content">
                <h3>Experiential Learning Mandate</h3>
                <p>
                  The <strong>National Education Policy (NEP) 2020</strong> explicitly mandates a shift from rote learning to
                  <em> experiential, hands-on learning</em>. Schools are directed to integrate coding and computational thinking from
                  <strong> Grade 6 onwards</strong> to foster a culture of innovation.
                </p>
                <ul className="guide-points">
                  <li><i className="fas fa-check-circle"></i> vocational exposure (Grade 6-8)</li>
                  <li><i className="fas fa-check-circle"></i> Mathematical &amp; Computational Thinking</li>
                  <li><i className="fas fa-check-circle"></i> No hard separation between curricular &amp; co-curricular</li>
                </ul>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600"
                  alt="CBSE Skill Education"
                />
                <div className="guide-badge">CBSE</div>
              </div>
              <div className="guide-content">
                <h3>Official Skill Subjects</h3>
                <p>
                  CBSE has officially introduced <strong>Artificial Intelligence (Subject Code 417 &amp; 843)</strong> and Data Science as skill subjects. ICSE has also introduced Robotics &amp; AI (Subject Code 66). Our lab infrastructure is 100% compliant with the hardware requirements for these board exams.
                </p>
                <ul className="guide-points">
                  <li><i className="fas fa-check-circle"></i> CBSE Subject Code 417 (AI)</li>
                  <li><i className="fas fa-check-circle"></i> 50 Marks Practical Component</li>
                </ul>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                  alt="Future Skills"
                />
                <div className="guide-badge">Future Ready</div>
              </div>
              <div className="guide-content">
                <h3>21st Century Skills Framework</h3>
                <p>
                  Government initiatives like <strong>Atal Innovation Mission (AIM)</strong> emphasize creating "Creators" not just "Consumers". The curriculum must focus on Critical Thinking, Creativity, Collaboration, and Communication (4Cs).
                </p>
                <ul className="guide-points">
                  <li><i className="fas fa-check-circle"></i> Problem Solving &amp; Logic</li>
                  <li><i className="fas fa-check-circle"></i> Digital Fluency</li>
                  <li><i className="fas fa-check-circle"></i> Design Thinking Approach</li>
                </ul>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                  alt="STEM Integration"
                />
                <div className="guide-badge">STEM Pedagogy</div>
              </div>
              <div className="guide-content">
                <h3>Interdisciplinary Integration</h3>
                <p>
                  Guidelines suggest that AI &amp; Robotics should not be taught in silos but integrated with <strong>Physics, Mathematics, and Science</strong>. Our kits demonstrate concepts like friction, electricity, and geometry through physical robot building.
                </p>
                <ul className="guide-points">
                  <li><i className="fas fa-check-circle"></i> Physics (Sensors &amp; Motors)</li>
                  <li><i className="fas fa-check-circle"></i> Math (Algorithms &amp; Logic)</li>
                  <li><i className="fas fa-check-circle"></i> Art (3D Design &amp; Printing)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="350">0</h2>
            <span>+</span>
            <p>Robotics Labs</p>
          </div>
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="50">0</h2>
            <span>+</span>
            <p>ATL Labs Setup</p>
          </div>
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="100">0</h2>
            <span>+</span>
            <p>Govt Schools (Tender)</p>
          </div>
          <div className="stat-item fade-up">
            <h2 className="counter" data-target="150000">0</h2>
            <span>+</span>
            <p>Students Impacted</p>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-content-wrapper">
            <h2 className="section-heading text-center text-white fade-up">
              Experience the Future of Learning
            </h2>
            <p
              className="section-subtext text-center text-white fade-up"
              style={{ opacity: 0.9, maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}
            >
              Watch how TechyGuide's state-of-the-art AI &amp; Robotics labs are revolutionizing education across <strong>350+ schools</strong>. From hands-on coding to building humanoid robots, we turn classrooms into innovation hubs.
            </p>

            <div className="video-container fade-up">
              <iframe
                src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0&modestbranding=1"
                title="TechyGuide Innovation Lab"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="curriculum-section" id="curriculum">
        <div className="container">
          <h2 className="section-heading text-center fade-up">
            Curriculum Roadmap (Grades 1-12)
          </h2>
          <p className="section-subtext text-center fade-up">
            A structured learning path covering Mechatronics, Coding, IoT, and AI.
          </p>

          <div className="tabs-wrapper fade-up">
            <div className="tabs-header">
              <button className="tab-btn active" data-tab="primary">Grades 1-5</button>
              <button className="tab-btn" data-tab="middle">Grades 6-8</button>
              <button className="tab-btn" data-tab="senior">Grades 9-12</button>
            </div>

            <div className="tabs-content">
              <div className="tab-pane active" id="primary">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-shapes"></i> Mechatronics</h4>
                    <ul>
                      <li>Lego-based structures (Bridges, Towers)</li>
                      <li>Simple Machines (Levers, Pulleys)</li>
                      <li>Humanoid Robot introduction</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-bolt"></i> Electronics</h4>
                    <ul>
                      <li>LED Circuits &amp; Switches</li>
                      <li>Understanding Sensors (IR, Sound)</li>
                      <li>Batteries &amp; Motors</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-cat"></i> Coding (Scratch)</h4>
                    <ul>
                      <li>Animations &amp; Storytelling</li>
                      <li>Interactive Games (Catch the Ball)</li>
                      <li>Drawing Shapes &amp; Loops</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="middle">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fab fa-python"></i> Python Basics</h4>
                    <ul>
                      <li>Variables &amp; Data Types</li>
                      <li>Loops &amp; Conditional Statements</li>
                      <li>Basic Algorithms</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-robot"></i> Advanced Robotics</h4>
                    <ul>
                      <li>Line Follower Robot</li>
                      <li>Obstacle Avoider</li>
                      <li>Smart Dustbin &amp; Door Alarms</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-wifi"></i> Intro to IoT &amp; AI</h4>
                    <ul>
                      <li>Home Automation Basics</li>
                      <li>Hand Tracking &amp; Face Detection</li>
                      <li>Chatbot Creation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="senior">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-brain"></i> Advanced AI</h4>
                    <ul>
                      <li>Deep Learning Concepts</li>
                      <li>Computer Vision (Gesture Control)</li>
                      <li>AI Ethics &amp; Governance</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-network-wired"></i> Industrial IoT</h4>
                    <ul>
                      <li>Cloud Integration</li>
                      <li>Weather Monitoring Systems</li>
                      <li>Smart Agriculture (Irrigation)</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-cogs"></i> Complex Robotics</h4>
                    <ul>
                      <li>Fire Fighting Robot</li>
                      <li>Maze Solver Algorithms</li>
                      <li>Human Following Robot</li>
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
              <p><strong>Features:</strong> Bluetooth, Webcam, Wi-Fi.</p>
            </div>
            <div className="infra-box fade-up">
              <i className="fas fa-chair"></i>
              <h3>Furniture</h3>
              <p><strong>Activity Tables:</strong> 1 per 4 students</p>
              <p><strong>Arena Tables:</strong> 2 (For robot testing)</p>
              <p><strong>Storage:</strong> Lockable Cupboards.</p>
            </div>
            <div className="infra-box fade-up">
              <i className="fas fa-project-diagram"></i>
              <h3>Display</h3>
              <p>Projector with screen setup for class demonstrations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="packages-section" id="packages">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Select Your Lab Package</h2>
          <div className="pricing-wrapper">
            <div className="pricing-card fade-up">
              <h3>Mini Lab</h3>
              <div className="capacity">Up to 300 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> <strong>6</strong> I-BOT Starter Kits</li>
                <li><i className="fas fa-microchip"></i> <strong>6</strong> TechBoT Electronics Kits</li>
                <li><i className="fas fa-robot"></i> <strong>1</strong> Humanoid Add-on</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 10 Online Training Sessions</li>
                <li><i className="fas fa-user-graduate"></i> 1 LMS Access per Student</li>
              </ul>
              <a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
            </div>

            <div className="pricing-card popular fade-up">
              <div className="badge">Best Value</div>
              <h3>Medium Lab</h3>
              <div className="capacity">Up to 700 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> <strong>12</strong> I-BOT Starter Kits</li>
                <li><i className="fas fa-microchip"></i> <strong>12</strong> TechBoT Electronics Kits</li>
                <li><i className="fas fa-robot"></i> <strong>1</strong> Humanoid Add-on</li>
                <li><i className="fas fa-spider"></i> Spider Kit &amp; Robotic Arm</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 15 Online Training Sessions</li>
              </ul>
              <a href="#contact-section" className="btn btn-primary">Request Details</a>
            </div>

            <div className="pricing-card fade-up">
              <h3>Large Lab</h3>
              <div className="capacity">Up to 1200 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> <strong>20</strong> I-BOT Starter Kits</li>
                <li><i className="fas fa-microchip"></i> <strong>20</strong> TechBoT Electronics Kits</li>
                <li><i className="fas fa-robot"></i> <strong>2</strong> Humanoid Add-ons</li>
                <li><i className="fas fa-tools"></i> 2 Spider Kits &amp; 2 Robotic Arms</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 24 Online Training Sessions</li>
              </ul>
              <a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Comprehensive Support Ecosystem</h2>
          <p className="section-subtext text-center fade-up">We partner with you for success with a year-round support structure.</p>

          <div className="support-grid fade-up">
            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" alt="Curriculum" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-book-reader"></i></div>
                <h4>Gradewise Curriculum</h4>
                <p>Structured, NEP-aligned lesson plans tailored for Grades 1-12 covering coding &amp; robotics.</p>
              </div>
            </div>

            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Teacher Training" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                <h4>5 Days Teacher Training</h4>
                <p>Intensive onsite workshops at your school to certify and empower your faculty.</p>
              </div>
            </div>

            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600" alt="LMS" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-laptop-code"></i></div>
                <h4>LMS Access</h4>
                <p>24/7 digital platform access for students &amp; teachers with tutorials and quizzes.</p>
              </div>
            </div>

            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=600" alt="Support" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-headset"></i></div>
                <h4>Monthly Tech Support</h4>
                <p>Dedicated account managers to resolve hardware or software queries instantly.</p>
              </div>
            </div>

            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" alt="Webinars" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-video"></i></div>
                <h4>Live Webinars</h4>
                <p>Monthly expert-led online sessions to introduce new technologies and projects.</p>
              </div>
            </div>

            <div className="support-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600" alt="Certification" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-clipboard-check"></i></div>
                <h4>Certification</h4>
                <p>Official course completion certificates for the School, Teachers, and Students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="diy-section">
        <div className="container">
          <div className="diy-container fade-up">
            <div className="diy-content">
              <div className="badge-diy">Hardware Highlight</div>
              <h2>Premium DIY Robotics Kits</h2>
              <p>Our labs come equipped with robust, modular, and reusable kits designed for infinite prototyping.</p>

              <ul className="diy-features">
                <li><i className="fas fa-microchip"></i> <strong>Core:</strong> Arduino / ESP32 / Raspberry Pi</li>
                <li><i className="fas fa-plug"></i> <strong>Components:</strong> Sensors, Motors, OLED Displays</li>
                <li><i className="fas fa-tools"></i> <strong>Build:</strong> Metal Chassis &amp; Mechanical Parts</li>
                <li><i className="fas fa-wifi"></i> <strong>Tech:</strong> Bluetooth &amp; WiFi Enabled</li>
              </ul>
              <a href="#contact-section" className="btn btn-light btn-mt">Get Kit Details</a>
            </div>

            <div className="diy-image slider-wrapper">
              <div className="diy-slide fade">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" alt="TeBot Kit" />
                <div className="slide-caption">TeBot Kit</div>
              </div>

              <div className="diy-slide fade">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" alt="I-Bot Kit" />
                <div className="slide-caption">I-Bot Kit</div>
              </div>

              <div className="diy-slide fade">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="E-Blox Kit" />
                <div className="slide-caption">E-Blox Kit</div>
              </div>

              <div className="floating-kit-tag">50+ Projects Included</div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Execution Timeline (35 Days)</h2>
          <div className="timeline-box fade-up">
            <div className="t-item">
              <span>Day 0</span>
              <p>MoU Signed</p>
            </div>
            <div className="t-line"></div>
            <div className="t-item">
              <span>Day 20</span>
              <p>Material Delivery</p>
            </div>
            <div className="t-line"></div>
            <div className="t-item">
              <span>Day 30</span>
              <p>Setup &amp; Training</p>
            </div>
            <div className="t-line"></div>
            <div className="t-item">
              <span>Day 33</span>
              <p>Lab Go-Live</p>
            </div>
            <div className="t-line"></div>
            <div className="t-item">
              <span>Day 35</span>
              <p>Certification</p>
            </div>
          </div>
          <p className="text-center" style={{ marginTop: "20px", color: "#666" }}>
            *Renewal of services occurs on Day 365
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Our Labs in Action</h2>
          <div className="gallery-grid">
            <div className="gallery-item large fade-up">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Robotics Class" />
              <div className="gallery-overlay"><h5>Hands-on Learning</h5></div>
            </div>
            <div className="gallery-item fade-up">
              <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=600" alt="Electronics" />
              <div className="gallery-overlay"><h5>Electronics</h5></div>
            </div>
            <div className="gallery-item fade-up">
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600" alt="3D Printing" />
              <div className="gallery-overlay"><h5>3D Printing</h5></div>
            </div>
            <div className="gallery-item fade-up">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" alt="AI Coding" />
              <div className="gallery-overlay"><h5>AI Programming</h5></div>
            </div>
            <div className="gallery-item fade-up">
              <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=600" alt="RoboThrone" />
              <div className="gallery-overlay"><h5>RoboThrone</h5></div>
            </div>
            <div className="gallery-item fade-up">
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600" alt="3D Printing" />
              <div className="gallery-overlay"><h5>3D Printing</h5></div>
            </div>
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
              <p>
                "We have used TechyGuide's ATL service. Their services were very good and they always respond to our queries promptly."
              </p>
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
              <p>
                "I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting and helpful for my students."
              </p>
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
              <p>
                "Very much satisfied with TechyGuide's service and products. All activities are exciting and engaging."
              </p>
              <div className="profile">
                <div className="profile-icon">NS</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Nobel School, Karnataka</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "Trainers are exceptionally good at their knowledge. They did amazing to our skills. Thank you!"
              </p>
              <div className="profile">
                <div className="profile-icon">JS</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Jajoo Int. School, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "We have used TechyGuide's ATL service. Their services were very good and they always respond to our queries promptly."
              </p>
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
              <p>
                "I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting and helpful for my students."
              </p>
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
              <p>
                "We have used TechyGuide's ATL service. Their services were very good and they always respond to our queries promptly."
              </p>
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
              <p>
                "I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting and helpful for my students."
              </p>
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
              <p>
                "Very much satisfied with TechyGuide's service and products. All activities are exciting and engaging."
              </p>
              <div className="profile">
                <div className="profile-icon">NS</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Nobel School, Karnataka</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "Trainers are exceptionally good at their knowledge. They did amazing to our skills. Thank you!"
              </p>
              <div className="profile">
                <div className="profile-icon">JS</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Jajoo Int. School, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "We have used TechyGuide's ATL service. Their services were very good and they always respond to our queries promptly."
              </p>
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
              <p>
                "I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting and helpful for my students."
              </p>
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
              <button className="accordion-header">Is there a warranty on the equipment?</button>
              <div className="accordion-body">
                <p>Yes, we provide a 1-year manufacturing warranty on all microcontrollers included in the kits.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">What does the teacher training cover?</button>
              <div className="accordion-body">
                <p>The program includes 3 days of onsite physical training and 10-24 virtual sessions (depending on the package) covering Coding, Robotics, AI, and IoT.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">How often do you monitor the lab?</button>
              <div className="accordion-body">
                <p>We conduct quarterly virtual or onsite monitoring of the lab to ensure equipment status and curriculum progress.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">Do you provide content for students?</button>
              <div className="accordion-body">
                <p>Yes, students get access to our Learning Management System (LMS) with content for Coding, AI, Robotics, and IoT. There is also a Question Bank for assessments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area" id="contact-section">
        <div className="container contact-grid">
          <div className="contact-info fade-up">
            <h2>Contact TechyGuide</h2>
            <p><strong>Corporate Office:</strong> #80, 2nd Floor, 1st Main, VSR Layout, A Narayanapura Main Road, Bangalore 560016.</p>
            <p><strong>Registered Office:</strong> 1st & 2nd Floor, Jyoti Complex, Bhoisahi, Balasore-756001, Odisha.</p>
            <div className="info-box">
              <i className="fas fa-phone-alt"></i>
              <div>
                <strong>Call Us</strong>
                <p>+91 91140 36376</p>
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
                <input type="text" id="schoolName" required placeholder="Enter School Name" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Name</label>
                  <input type="text" id="fullName" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" required placeholder="Mobile Number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailId">Email ID</label>
                  <input type="email" id="emailId" required placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" required placeholder="State" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="3" placeholder="Any specific requirement?"></textarea>
              </div>
              <button type="submit" className="btn btn-full">Send via WhatsApp <i className="fab fa-whatsapp"></i></button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 TechyGuide OPC Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
}

export default AIRoboticsLabCBSE;