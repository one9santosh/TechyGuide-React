import React, { useEffect, useRef, useState } from "react";
import "./ImpactProgram.css";
import FooterSection from "./FooterSection";

function ImpactProgram() {
  // Image paths
  const images = {
    bg2: new URL("./assets/impactImages/bg2.jpg", import.meta.url).href,
    bg3: new URL("./assets/impactImages/bg3.jpg", import.meta.url).href,
    bg4: new URL("./assets/impactImages/bg4.jpg", import.meta.url).href,
    bg11: new URL("./assets/impactImages/bg11.jpg", import.meta.url).href,
    csrInitiatives: new URL("./assets/impactImages/CSR-Initiatives.jpg", import.meta.url).href,
    governmentPrograms: new URL("./assets/impactImages/Government Programs.jpg", import.meta.url).href,
    genderEquality: new URL("./assets/impactImages/GenderEquality.png", import.meta.url).href,
    industry: new URL("./assets/impactImages/industry.png", import.meta.url).href,
    inEqualities: new URL("./assets/impactImages/inEqualities.png", import.meta.url).href,
    partnerships: new URL("./assets/impactImages/partnerships.png", import.meta.url).href,
    qualityEducation: new URL("./assets/impactImages/qualityEducation.png", import.meta.url).href,
    sustainable: new URL("./assets/impactImages/sustainable.png", import.meta.url).href,
    lab1: new URL("./assets/impactImages/lab1.jpg", import.meta.url).href,
    lab2: new URL("./assets/impactImages/lab2.jpg", import.meta.url).href,
    lab3: new URL("./assets/impactImages/lab3.jpg", import.meta.url).href,
    lab4: new URL("./assets/impactImages/lab4.jpg", import.meta.url).href,
    lab5: new URL("./assets/impactImages/lab5.jpg", import.meta.url).href,
    lab6: new URL("./assets/impactImages/lab6.jpg", import.meta.url).href,
    stemLab: new URL("./assets/impactImages/STEM-Lab.jpg", import.meta.url).href,
    diyKit1: new URL("./assets/impactImages/DIY-Learning-Kit-1.jpg", import.meta.url).href,
    workshop: new URL("./assets/impactImages/Workshop.jpg", import.meta.url).href,
  };
  const galleryImages = [
    { src: images.stemLab, alt: "STEM Lab", category: "lab" },
    { src: images.lab1, alt: "Lab 1", category: "lab" },
    { src: images.lab2, alt: "Lab 2", category: "lab" },
    { src: images.lab3, alt: "Lab 3", category: "lab" },
    { src: images.lab4, alt: "Lab 4", category: "lab" },
    { src: images.lab5, alt: "Lab 5", category: "lab" },
    { src: images.lab6, alt: "Lab 6", category: "lab" },
    { src: images.diyKit1, alt: "DIY Kit", category: "kit" },
    { src: images.workshop, alt: "Workshop", category: "workshop" },
  ];
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
  const [galleryFilter, setGalleryFilter] = useState("all");
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Counter animation when hero enters viewport
    const counters = root.querySelectorAll(".counter");
    const speed = 200;
    let hasAnimated = false;

    const animateCounters = () => {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = `${target}+`;
          }
        };
        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const heroSection = root.querySelector(".hero");
    if (heroSection) observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="impact-program" ref={rootRef}>
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(1, 132, 116, 0.86) 75%,
              rgba(255, 255, 255, 0.86) 100%
            ), url(${images.bg2})`,
          }}
        >
          <div className="overlay"></div>

          <div className="container">
            <div className="hero-content centered-content">
              <span className="badge">Government & CSR Initiatives</span>
              <h1>
                Impact That Shapes <span className="">Tomorrow</span>
              </h1>
              <p>
                Empowering students nationwide through Government & CSR
                partnerships. We are shaping the future with STEM and AI
                Innovation.
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <h3 className="counter" data-target="10">
                    0
                  </h3>
                  <span>Projects</span>
                </div>
                <div className="stat-item">
                  <h3 className="counter" data-target="247">
                    0
                  </h3>
                  <span>Schools</span>
                </div>
                <div className="stat-item">
                  <h3 className="counter" data-target="28516">
                    0
                  </h3>
                  <span>Students</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mission static-bg"
          style={{ backgroundImage: `url(${images.bg4})` }}
        >
          <div className="overlay-light"></div>
          <div className="container">
            <div className="mission-text">
              <h2>Breaking Barriers in STEM</h2>
              <p>
                TechyGuide is an innovative tech-education ecosystem. Designed
                for kids aged 7-18, our solutions empower educators and learners
                with tools to build coding, robotics, and problem-solving
                skills.
              </p>
              <p>
                <strong>
                  Contributing to UN Sustainable Development Goals:
                </strong>{" "}
                Quality Education, Gender Equality, Industry Innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="shaping-future">
          <div className="container">
            <h2>Shaping the Future with Government & CSR in STEM and AI Innovation</h2>
            <p className="section-intro">
              TechyGuide is an innovative tech-education ecosystem trusted by teachers and
              loved by students for transforming classroom learning. Designed for kids aged 7–18,
              our tailored solutions empower educators and learners with the tools to build
              coding, robotics, and problem-solving skills—driving quality education, fostering
              innovation, and contributing towards achieving the United Nations Sustainable
              Development Goals. Through strategic partnerships with government bodies and CSR 
              initiatives, we implement Smart STEM & Robotics Labs, deliver comprehensive teacher 
              training, and provide hands-on learning experiences that prepare students for future 
              technological challenges.
            </p>

            <div className="sdg-badges">
              <div className="sdg-main">
                <img src={images.sustainable} alt="Sustainable Development Goals" />
              </div>
              <div className="sdg-sub-badges">
                <div className="sdg-badge">
                  <img src={images.qualityEducation} alt="Quality Education" />
                </div>
                <div className="sdg-badge">
                  <img src={images.genderEquality} alt="Gender Equality" />
                </div>
                <div className="sdg-badge">
                  <img src={images.inEqualities} alt="Reduced Inequalities" />
                </div>
                <div className="sdg-badge">
                  <img src={images.industry} alt="Industry Innovation" />
                </div>
                <div className="sdg-badge">
                  <img src={images.partnerships} alt="Partnerships" />
                </div>
              </div>
            </div>
            
            <div className="initiatives-grid">
              <div className="initiative-card">
                <div className="initiative-icon">
                  <i className="fa-solid fa-landmark"></i>
                </div>
                <h3>Government Programs</h3>
                
                <div className="detail-item impact-highlight">
                  <div className="detail-icon">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <h4>Impact</h4>
                  <p>
                    The program empowers students and teachers with practical STEM and robotics
                    skills, fostering creativity and innovation. By bridging the digital divide,
                    it promotes entrepreneurship, career readiness, and builds resilient,
                    technology-driven communities.
                  </p>
                </div>
                
                <div className="gov-image">
                  <img src={images.governmentPrograms} alt="Government Programs" />
                </div>
                <p className="initiative-intro">
                  Through our Government impact programs, we are opening doors to cutting-edge
                  technology, vital resources, and transformative education igniting curiosity,
                  empowering young minds, and shaping the innovators and change-makers of tomorrow.
                </p>
                
                {/* Activities and Beneficiaries removed as requested */}
              </div>

              <div className="initiative-card">
                <div className="initiative-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3>CSR Initiatives</h3>
                
                <div className="detail-item impact-highlight">
                  <div className="detail-icon">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <h4>Impact</h4>
                  <p>
                    The program bridges educational gaps and builds digital confidence. It fosters
                    creativity, problem-solving, and innovation while promoting inclusive growth,
                    equal opportunities, and preparing communities for sustainable, technology driven
                    futures.
                  </p>
                </div>
                
                <div className="csr-image">
                  <img src={images.csrInitiatives} alt="CSR Initiative" />
                </div>
                <p className="initiative-intro">
                  Our CSR Programs are nurturing a new generation of global innovators, empowering
                  students to master STEM, AI, Coding, Tinkering, and Robotics, and preparing them
                  to thrive in the opportunities of the 21st century.
                </p>
                
                {/* Activities and Beneficiaries removed as requested */}
              </div>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <h2 className="section-title">Our Impact Across India</h2>

            <div className="project-grid">
              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.lab1} alt="Jharkhand Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="card-body">
                  <h3>STEM & Robotics Lab - Jharkhand</h3>
                  <p>
                    Established fully equipped STEM labs and structured teacher
                    training. Enhancing experiential learning.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 68+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 340+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 10,200+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.lab2} alt="Odisha Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="card-body">
                  <h3>STEM Learning - Keonjhar, Odisha</h3>
                  <p>
                    Delivering short-term STEM workshops and robotics
                    activities. Fast-track exposure to digital learning.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 5+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 17+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,015+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.lab3} alt="Gujarat Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="card-body">
                  <h3>Innovators in Ahmedabad, Gujarat</h3>
                  <p>
                    State-of-the-art STEM labs and student innovation projects.
                    Integrating experiential learning.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 77+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 385+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 12,719+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.lab4} alt="Lucknow Hub" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="card-body">
                  <h3>Innovation Hub - Lucknow, UP</h3>
                  <p>
                    Transforming classrooms into thriving innovation hubs with
                    comprehensive teacher training and labs.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 7+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 36+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,243+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.lab5} alt="Haryana Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="card-body">
                  <h3>Future Skills Workshop - Haryana</h3>
                  <p>
                    Collaborating with Literacy India, Gurgaon. Student-led
                    robotics experiments for underprivileged learners.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 12+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 72+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,987+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.lab6} alt="Hyderabad Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="card-body">
                  <h3>STEM Workshop - Hyderabad</h3>
                  <p>
                    CSR-driven interactive sessions. Fostering curiosity and
                    strengthening foundational digital skills.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 14+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 72+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,352+ Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="offerings">
          <div className="container">
            <h2 className="section-title">Our Solutions</h2>
            <div className="offering-grid">
              <div className="offer-box">
                <div className="offer-image-wrap">
                  <img src={images.stemLab} alt="Future-Ready Labs" className="offer-image" />
                </div>
                <i className="fa-solid fa-microchip"></i>
                <h3>Future-Ready Labs</h3>
                <p>
                  Transform classrooms into innovation hubs with fully equipped
                  STEM and robotics labs.
                </p>
              </div>
              <div className="offer-box">
                <div className="offer-image-wrap">
                  <img src={images.diyKit1} alt="DIY Learning Kits" className="offer-image" />
                </div>
                <i className="fa-solid fa-puzzle-piece"></i>
                <h3>DIY Learning Kits</h3>
                <p>
                  Interactive kits that make coding and robotics simple and fun
                  for sparking imagination.
                </p>
              </div>
              <div className="offer-box">
                <div className="offer-image-wrap">
                  <img src={images.workshop} alt="Engaging Workshops" className="offer-image" />
                </div>
                <i className="fa-solid fa-users-gear"></i>
                <h3>Engaging Workshops</h3>
                <p>
                  Immersive workshops for students and teachers to explore
                  technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section (placed after Our Solutions) */}
        <section className="gallery">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-row">
              {galleryImages
                .map((img, idx) => (
                <div
                  className="gallery-card"
                  key={idx}
                  onClick={() => setLightbox({ open: true, src: img.src, alt: img.alt })}
                >
                  <div className="gallery-image-wrap">
                    <img src={img.src} alt={img.alt} />
                  </div>
                  <div className="gallery-overlay">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section (auto-scrolling, inspired by CommunitySection) */}
        <section className="testimonials">
          <div className="container">
            <h2>Testimonials</h2>
            <p className="center-text">
              Hear from educators, students, and parents who are part of the TechyGuide revolution
            </p>

            <div className="testimonial-slider">
              <div className="testimonial-track">
                {/* Repeat items twice for seamless circular scroll */}
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    My daughter's confidence has grown tremendously since joining TechyGuide's robotics course. She's now teaching her classmates! Best educational investment we've made.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>MS</div>
                    <div className="info">
                      <h4>Meera Singh</h4>
                      <p>Parent</p>
                      <small>Cambridge International, Pune</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    TechyGuide transformed our school's approach to STEM education. The AI & Robotics Lab has sparked unprecedented interest among students, and we've seen remarkable improvement in their problem-solving skills.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>PS</div>
                    <div className="info">
                      <h4>Dr. Priya Sharma</h4>
                      <p>Principal</p>
                      <small>Delhi Public School, New Delhi</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The DIY kits and virtual courses are exceptional. Our students are now participating in national-level competitions and winning! The support from TechyGuide team has been outstanding.
                  </p>
                  <div className="author">
                    <div className="avatar">RK</div>
                    <div className="info">
                      <h4>Rajesh Kumar</h4>
                      <p>STEM Coordinator</p>
                      <small>St. Xavier's High School, Mumbai</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    Learning robotics at TechyGuide lab changed my life! I went from being afraid of technology to winning the Robothrone competition. Now I want to become an AI engineer.
                  </p>
                  <div className="author">
                    <div className="avatar">AP</div>
                    <div className="info">
                      <h4>Anjali Patel</h4>
                      <p>Student</p>
                      <small>Modern Academy, Bangalore</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The ATL Lab setup was seamless and the training provided to our teachers was comprehensive. TechyGuide doesn't just provide equipment — they build capability.
                  </p>
                  <div className="author">
                    <div className="avatar">RI</div>
                    <div className="info">
                      <h4>Prof. Ramesh Iyer</h4>
                      <p>Head of Department</p>
                      <small>National Public School, Chennai</small>
                    </div>
                  </div>
                </div>

                {/* Duplicate set for infinite loop */}
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    My daughter's confidence has grown tremendously since joining TechyGuide's robotics course. She's now teaching her classmates! Best educational investment we've made.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>MS</div>
                    <div className="info">
                      <h4>Meera Singh</h4>
                      <p>Parent</p>
                      <small>Cambridge International, Pune</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    TechyGuide transformed our school's approach to STEM education. The AI & Robotics Lab has sparked unprecedented interest among students, and we've seen remarkable improvement in their problem-solving skills.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>PS</div>
                    <div className="info">
                      <h4>Dr. Priya Sharma</h4>
                      <p>Principal</p>
                      <small>Delhi Public School, New Delhi</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The DIY kits and virtual courses are exceptional. Our students are now participating in national-level competitions and winning! The support from TechyGuide team has been outstanding.
                  </p>
                  <div className="author">
                    <div className="avatar">RK</div>
                    <div className="info">
                      <h4>Rajesh Kumar</h4>
                      <p>STEM Coordinator</p>
                      <small>St. Xavier's High School, Mumbai</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    Learning robotics at TechyGuide lab changed my life! I went from being afraid of technology to winning the Robothrone competition. Now I want to become an AI engineer.
                  </p>
                  <div className="author">
                    <div className="avatar">AP</div>
                    <div className="info">
                      <h4>Anjali Patel</h4>
                      <p>Student</p>
                      <small>Modern Academy, Bangalore</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The ATL Lab setup was seamless and the training provided to our teachers was comprehensive. TechyGuide doesn't just provide equipment — they build capability.
                  </p>
                  <div className="author">
                    <div className="avatar">RI</div>
                    <div className="info">
                      <h4>Prof. Ramesh Iyer</h4>
                      <p>Head of Department</p>
                      <small>National Public School, Chennai</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="impact">
          <div className="container">
            <h2>Ready to Empower Communities?</h2>
            <p>
              Together, Let's Empower Communities with the Power of Education!
            </p>
            <div className="contact-details">
              <a href="tel:+919114036376" className="btn">
                <i className="fa-solid fa-phone"></i> +91 91140 36376
              </a>
              <a
                href="mailto:reachus@techyguide.in"
                className="btn btn-outline"
              >
                <i className="fa-solid fa-envelope"></i> reachus@techyguide.in
              </a>
            </div>
          </div>
        </section>
      </div>
      {lightbox.open && (
        <div className="lightbox" onClick={() => setLightbox({ open: false, src: "", alt: "" })}>
          <img src={lightbox.src} alt={lightbox.alt} />
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({ open: false, src: "", alt: "" });
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
      <FooterSection />
    </>
  );
}

export default ImpactProgram;
