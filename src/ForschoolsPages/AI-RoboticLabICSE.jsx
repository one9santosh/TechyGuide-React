import React, { useEffect, useRef } from "react";
import "./AI-RoboticLabICSE.css";
import logoTagline from "../assets/ForSchools_AI-RoboticsLabICSE_images/Logo_TG_Tagline 2.png";

const AIRoboticLabICSE = () => {
	const rootRef = useRef(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) return;

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

		root
			.querySelectorAll(".hidden-left, .hidden-right, .fade-up")
			.forEach((el) => observer.observe(el));

		// 2. Animated Counters
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

		// 3. Curriculum Tabs
		const tabBtns = root.querySelectorAll(".tab-btn");
		const tabPanes = root.querySelectorAll(".tab-pane");
		const tabHandlers = [];

		const tabHandler = (btn) => () => {
			tabBtns.forEach((b) => b.classList.remove("active"));
			tabPanes.forEach((p) => p.classList.remove("active"));
			btn.classList.add("active");
			const target = btn.getAttribute("data-tab");
			const pane = root.querySelector(`#${target}`);
			if (pane) {
				pane.classList.add("active");
			}
		};

		tabBtns.forEach((btn) => {
			const handler = tabHandler(btn);
			tabHandlers.push({ btn, handler });
			btn.addEventListener("click", handler);
		});

		// 4. FAQ Accordion
		const accordionHeaders = root.querySelectorAll(".accordion-header");
		const accordionHandlers = [];
		accordionHeaders.forEach((header) => {
			const handler = () => {
				const body = header.nextElementSibling;
				header.classList.toggle("active");
				if (header.classList.contains("active")) {
					body.style.maxHeight = body.scrollHeight + "px";
				} else {
					body.style.maxHeight = 0;
				}
			};
			accordionHandlers.push({ header, handler });
			header.addEventListener("click", handler);
		});

		// 6. Smooth Scroll
		const anchorHandlerMap = [];
		root.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			const handler = (e) => {
				e.preventDefault();
				const targetSelector = anchor.getAttribute("href");
				const targetEl = targetSelector ? root.querySelector(targetSelector) : null;
				if (targetEl) {
					targetEl.scrollIntoView({ behavior: "smooth" });
				}
			};
			anchorHandlerMap.push({ anchor, handler });
			anchor.addEventListener("click", handler);
		});

		// --- DIY Kit Slider Logic ---
		let slideIndex = 0;
		const slides = root.querySelectorAll(".diy-slide");
		let sliderTimeout;

		if (slides.length > 0) {
			slides.forEach((slide) => (slide.style.display = "none"));

			const showSlides = () => {
				slides.forEach((slide) => (slide.style.display = "none"));
				slideIndex++;
				if (slideIndex > slides.length) {
					slideIndex = 1;
				}
				slides[slideIndex - 1].style.display = "block";
				sliderTimeout = setTimeout(showSlides, 3000);
			};

			showSlides();
		}

		// Form submission
		const form = root.querySelector("#enquiryForm");
		const formHandler = (e) => {
			e.preventDefault();
			const btn = form.querySelector("button");
			const originalText = btn.innerHTML;
			const school = root.querySelector("#schoolName")?.value || "";
			const name = root.querySelector("#fullName")?.value || "";
			const phone = root.querySelector("#phoneNumber")?.value || "";
			const email = root.querySelector("#emailId")?.value || "";
			const state = root.querySelector("#state")?.value || "";
			const msg = root.querySelector("#message")?.value || "";

			btn.innerText = "Opening WhatsApp...";
			btn.style.opacity = "0.7";

			setTimeout(() => {
				const businessPhone = "918197984847";
				const text = `*New ICSE Lab Enquiry* %0a%0a` +
					`*School:* ${school}%0a` +
					`*Name:* ${name}%0a` +
					`*Phone:* ${phone}%0a` +
					`*Email:* ${email}%0a` +
					`*State:* ${state}%0a` +
					`*Message:* ${msg}`;

				const whatsappUrl = `https://wa.me/${businessPhone}?text=${text}`;
				window.open(whatsappUrl, "_blank");
				form.reset();
				btn.innerHTML = originalText;
				btn.style.opacity = "1";
			}, 1000);
		};

		if (form) {
			form.addEventListener("submit", formHandler);
		}

		return () => {
			observer.disconnect();
			statsObserver.disconnect();
			tabHandlers.forEach(({ btn, handler }) => btn.removeEventListener("click", handler));
			accordionHandlers.forEach(({ header, handler }) => header.removeEventListener("click", handler));
			anchorHandlerMap.forEach(({ anchor, handler }) => anchor.removeEventListener("click", handler));
			if (sliderTimeout) {
				clearTimeout(sliderTimeout);
			}
			if (form) {
				form.removeEventListener("submit", formHandler);
			}
		};
	}, []);

	return (
		<div className="ai-roboticlab-icse-root" ref={rootRef}>
			<a href="#contact-section" className="floating-cta">
				<i className="fas fa-file-invoice-dollar" /> Get ICSE Proposal
			</a>

			<section className="hero-section">
				<div className="hero-bg-animation" />
				<div className="container hero-container">
					<div className="hero-text hidden-left">
						<div className="brand-tag">
							<img src={logoTagline} alt="TechyGuide Logo" className="hero-logo" />
							<span>ICSE Aligned</span>
						</div>
						<h1>
							Empowering Schools with <br />
							<span className="highlight-text">ICSE AI & Robotics</span>
						</h1>
						<p>
							Comprehensive Lab Solutions for <strong>Subject Code 066 (AI)</strong>. Fully aligned with CISCE guidelines and NEP 2020 to foster innovation and hands-on learning.
						</p>
						<div className="hero-btns">
							<a href="#packages" className="btn btn-orange">Setup Lab</a>
							<a href="#curriculum" className="btn btn-glass">Curriculum</a>
						</div>
					</div>
					<div className="hero-visual hidden-right">
						<div className="floating-badge">
							<i className="fas fa-robot" />
							<div>
								<strong>Subject Code 066</strong>
								<span>ICSE Compliant</span>
							</div>
						</div>
						<img src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?auto=format&fit=crop&q=80&w=600" alt="ICSE Student Robotics" className="main-hero-img" />
					</div>
				</div>
			</section>

			<section className="guidelines-section" id="mandates">
				<div className="container">
					<div className="guideline-header text-center fade-up">
						<h2 className="section-heading">Why Setup an AI Lab?</h2>
						<p className="section-subtext">Meeting the Council for the Indian School Certificate Examinations (CISCE) Standards</p>
					</div>

					<div className="guidelines-grid">
						<div className="guide-card fade-up">
							<div className="guide-img">
								<img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" alt="AI Code 066" />
								<div className="guide-badge">Subject Code 066</div>
							</div>
							<div className="guide-content">
								<h3>ICSE Artificial Intelligence</h3>
								<p>CISCE has introduced <strong>Subject Code 066</strong> to provide foundational knowledge of AI concepts, algorithms, machine learning, and ethical use of technology.</p>
							</div>
						</div>

						<div className="guide-card fade-up">
							<div className="guide-img">
								<img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" alt="Experiential Learning" />
								<div className="guide-badge">NEP 2020</div>
							</div>
							<div className="guide-content">
								<h3>Experiential Learning</h3>
								<p>Aligned with <strong>NEP 2020</strong>, the curriculum supports project-based learning. It bridges the gap between theory and real-world application through hands-on robotics.</p>
							</div>
						</div>

						<div className="guide-card fade-up">
							<div className="guide-img">
								<img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" alt="Skills" />
								<div className="guide-badge">21st Century Skills</div>
							</div>
							<div className="guide-content">
								<h3>Critical Skill Development</h3>
								<p>Our labs nurture essential skills such as critical thinking, problem-solving, logical reasoning, and creativity, preparing students for future challenges.</p>
							</div>
						</div>

						<div className="guide-card fade-up">
							<div className="guide-img">
								<img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="STEM" />
								<div className="guide-badge">Integrated STEM</div>
							</div>
							<div className="guide-content">
								<h3>Interdisciplinary Approach</h3>
								<p>Promotes the integration of concepts from <strong>Physics, Mathematics, and Computer Science</strong>, ensuring a holistic educational experience.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="stats-section">
				<div className="container stats-grid">
					<div className="stat-item fade-up">
						<h2 className="counter" data-target="350">0</h2><span>+</span>
						<p>Robotics Labs Setup</p>
					</div>
					<div className="stat-item fade-up">
						<h2 className="counter" data-target="50">0</h2><span>+</span>
						<p>ATL Labs Across India</p>
					</div>
					<div className="stat-item fade-up">
						<h2 className="counter" data-target="150000">0</h2><span>+</span>
						<p>Students Trained</p>
					</div>
					<div className="stat-item fade-up">
						<h2 className="counter" data-target="100">0</h2><span>+</span>
						<p>Govt Schools (Tender)</p>
					</div>
				</div>
			</section>

			<section className="curriculum-section" id="curriculum">
				<div className="container">
					<h2 className="section-heading text-center fade-up">ICSE Curriculum Roadmap</h2>
					<p className="section-subtext text-center fade-up">Covering Subject Code 066, Coding, and Robotics from Grades 1-10.</p>

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
										<h4><i className="fas fa-shapes" /> Mechatronics</h4>
										<ul>
											<li>Simple Machines (Levers, Pulleys)</li>
											<li>Lego-based Structures</li>
											<li>Introduction to Bots</li>
										</ul>
									</div>
									<div className="curr-card">
										<h4><i className="fas fa-cat" /> Graphical Coding</h4>
										<ul>
											<li>Scratch Programming</li>
											<li>Logic & Loops</li>
											<li>Interactive Storytelling</li>
										</ul>
									</div>
									<div className="curr-card">
										<h4><i className="fas fa-bolt" /> Basic Electronics</h4>
										<ul>
											<li>LEDs & Circuits</li>
											<li>Motors & Batteries</li>
											<li>Understanding Sensors</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="tab-pane" id="middle">
								<div className="curr-grid">
									<div className="curr-card">
										<h4><i className="fab fa-python" /> Python & AI</h4>
										<ul>
											<li>Python Basics (Variables, Loops)</li>
											<li>Intro to AI & Algorithms</li>
											<li>Data Handling</li>
										</ul>
									</div>
									<div className="curr-card">
										<h4><i className="fas fa-robot" /> Robotics</h4>
										<ul>
											<li>Line Follower Robots</li>
											<li>Obstacle Avoidance</li>
											<li>Sensor Integration</li>
										</ul>
									</div>
									<div className="curr-card">
										<h4><i className="fas fa-wifi" /> IoT Basics</h4>
										<ul>
											<li>Smart Home Automation</li>
											<li>Wireless Control</li>
											<li>Introduction to Cloud</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="tab-pane" id="senior">
								<div className="curr-grid">
									<div className="curr-card">
										<h4><i className="fas fa-cogs" /> Robotics & Tinkercad</h4>
										<ul>
											<li><strong>Concepts:</strong> Evolution, Laws of Robotics, & Cobots</li>
											<li><strong>Components:</strong> Gears, Actuators, & Control Systems</li>
											<li><strong>Design:</strong> Visualization & Simulation using Tinkercad</li>
										</ul>
									</div>

									<div className="curr-card">
										<h4><i className="fas fa-brain" /> AI & Python Libraries</h4>
										<ul>
											<li><strong>AI Framework:</strong> Problem Scoping to Evaluation</li>
											<li><strong>Python Data:</strong> NumPy, Pandas, Matplotlib & SciPy</li>
											<li><strong>Theory:</strong> Machine Learning, Neural Networks & Ethics</li>
										</ul>
									</div>

									<div className="curr-card">
										<h4><i className="fas fa-microchip" /> Mobile Robotics Lab</h4>
										<ul>
											<li><strong>Line Follower:</strong> Sensor-based path tracking</li>
											<li><strong>Obstacle Avoider:</strong> Ultrasonic sensor integration</li>
											<li><strong>Edge Detector:</strong> Surface boundary detection logic</li>
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
					<h2 className="section-heading text-white fade-up">Required Lab Infrastructure</h2>
					<div className="infra-grid">
						<div className="infra-box fade-up">
							<i className="fas fa-laptop" />
							<h3>Computing</h3>
							<p><strong>Ratio:</strong> 2:1 (Student to Device)</p>
							<p><strong>Specs:</strong> Intel i5, 8GB RAM, Win 10+</p>
							<p><strong>Features:</strong> Bluetooth, Webcam, Wi-Fi</p>
						</div>
						<div className="infra-box fade-up">
							<i className="fas fa-chair" />
							<h3>Furniture</h3>
							<p><strong>Activity Tables:</strong> 1 per 4 students</p>
							<p><strong>Arena Tables:</strong> 2 for testing</p>
							<p><strong>Storage:</strong> 1 Lockable Cupboard</p>
						</div>
						<div className="infra-box fade-up">
							<i className="fas fa-project-diagram" />
							<h3>Presentation</h3>
							<p>Projector with proper screen setup for demonstrations and class presentations.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="packages-section" id="packages">
				<div className="container">
					<h2 className="section-heading text-center fade-up">ICSE Lab Packages</h2>
					<div className="pricing-wrapper">
						<div className="pricing-card fade-up">
							<h3>Mini Lab</h3>
							{/* <div className="price-tag">₹ 90,000 <small>(GST Inc.)</small></div> */}
							<div className="capacity">Up to 300 Students</div>
							<ul>
								<li><i className="fas fa-box" /> <strong>6</strong> I-BOT Starter Kits</li>
								<li><i className="fas fa-microchip" /> <strong>6</strong> TechBoT Electronics Kits</li>
								<li><i className="fas fa-robot" /> <strong>1</strong> Humanoid &amp; 1 Spider Kit</li>
								<li><i className="fas fa-chalkboard-teacher" /> 10 Online Training Sessions</li>
								<li><i className="fas fa-user-graduate" /> 3 Days Physical Training</li>
							</ul>
							<a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
						</div>

						<div className="pricing-card popular fade-up">
							<div className="badge">Recommended</div>
							<h3>Medium Lab</h3>
							{/* <div className="price-tag">₹ 2,20,000 <small>(GST Inc.)</small></div> */}
							<div className="capacity">Up to 700 Students</div>
							<ul>
								<li><i className="fas fa-box" /> <strong>12</strong> I-BOT Starter Kits</li>
								<li><i className="fas fa-microchip" /> <strong>12</strong> TechBoT Electronics Kits</li>
								<li><i className="fas fa-robot" /> <strong>2</strong> Humanoid &amp; 2 Spider Kits</li>
								<li><i className="fas fa-chalkboard-teacher" /> 15 Online Training Sessions</li>
								<li><i className="fas fa-user-graduate" /> 3 Days Physical Training</li>
							</ul>
							<a href="#contact-section" className="btn btn-orange">Request Details</a>
						</div>

						<div className="pricing-card fade-up">
							<h3>Large Lab</h3>
							{/* <div className="price-tag">₹ 3,40,000 <small>(GST Inc.)</small></div> */}
							<div className="capacity">Up to 1200 Students</div>
							<ul>
								<li><i className="fas fa-box" /> <strong>20</strong> I-BOT Starter Kits</li>
								<li><i className="fas fa-microchip" /> <strong>20</strong> TechBoT Electronics Kits</li>
								<li><i className="fas fa-robot" /> Advanced Add-on Kits</li>
								<li><i className="fas fa-chalkboard-teacher" /> 24 Online Training Sessions</li>
								<li><i className="fas fa-user-graduate" /> 3 Days Physical Training</li>
							</ul>
							<a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
						</div>

						<div className="pricing-card wide-card fade-up">
							<div className="badge-wide">Official Syllabus Aligned</div>
							<h3>ICSE Class 9-10 Expert Lab</h3>
							<p className="package-subtitle">Tailored for Subject Code 66 (Robotics &amp; AI)</p>
              
							<div className="wide-card-grid">
								<div className="wc-column">
									<h4><i className="fas fa-laptop-code" /> Computing &amp; Software</h4>
									<ul>
										<li><strong>15</strong> Desktop/Laptops (Python &amp; Tinkercad Pre-installed)</li>
										<li><strong>30</strong> Student Registration IDs for Tinkercad</li>
										<li>Python Coding Environment Setup</li>
									</ul>
								</div>
								<div className="wc-column">
									<h4><i className="fas fa-microchip" /> Core Hardware</h4>
									<ul>
										<li><strong>10 Sets</strong> Single Board Computers (Arduino Uno / Raspberry Pi)</li>
										<li><strong>10 Sets</strong> Robotics Components (Servo Motors, Ultrasonic &amp; IR Sensors)</li>
										<li>Soldering Stations, Allen Wrenches, Crimpers</li>
									</ul>
								</div>
								<div className="wc-column">
									<h4><i className="fas fa-robot" /> Advanced Projects</h4>
									<ul>
										<li>Line Follower &amp; Obstacle Avoidance Robots</li>
										<li>Edge Detection Mobile Robots</li>
										<li>Intelligent Waste Bin Projects</li>
									</ul>
								</div>
							</div>
              
							<div className="wc-footer">
								<div className="price-tag-wide">Custom Quote <small>(Based on Batch Size)</small></div>
								<a href="#contact-section" className="btn btn-full btn-orange">Request Syllabus Quote</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="diy-section">
				<div className="container">
					<div className="diy-container fade-up">
						<div className="diy-content">
							<div className="badge-diy">Hardware</div>
							<h2>Proprietary DIY Kits</h2>
							<p>Our labs feature in-house developed kits like I-BoT and TeBoT, designed for infinite prototyping and durability.</p>
              
							<ul className="diy-features">
								<li><i className="fas fa-microchip" /> <strong>Core:</strong> Arduino / ESP32 Compatible</li>
								<li><i className="fas fa-plug" /> <strong>Parts:</strong> Sensors, Motors, Jumpers</li>
								<li><i className="fas fa-tools" /> <strong>Build:</strong> Modular &amp; Reusable</li>
								<li><i className="fas fa-wifi" /> <strong>Tech:</strong> Bluetooth/WiFi Enabled</li>
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
							<div className="floating-kit-tag">Designed for ICSE</div>
						</div>
					</div>
				</div>
			</section>

			<section className="support-section">
				<div className="container">
					<h2 className="section-heading text-center fade-up">Support Ecosystem</h2>
					<p className="section-subtext text-center fade-up">Year-round support to ensure successful lab implementation.</p>

					<div className="support-grid fade-up">
						<div className="support-card">
							<div className="card-image"><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Training" /></div>
							<div className="card-content">
								<div className="card-icon"><i className="fas fa-chalkboard-teacher" /></div>
								<h4>3 Days Onsite Training</h4>
								<p>Physical training for teachers to kickstart the lab operations.</p>
							</div>
						</div>
						<div className="support-card">
							<div className="card-image"><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" alt="Virtual Training" /></div>
							<div className="card-content">
								<div className="card-icon"><i className="fas fa-laptop-code" /></div>
								<h4>24 Days Virtual Training</h4>
								<p>Ongoing virtual teacher training sessions throughout the first year.</p>
							</div>
						</div>
						<div className="support-card">
							<div className="card-image"><img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=600" alt="Monitoring" /></div>
							<div className="card-content">
								<div className="card-icon"><i className="fas fa-eye" /></div>
								<h4>Quarterly Monitoring</h4>
								<p>Regular virtual or onsite monitoring to ensure lab quality.</p>
							</div>
						</div>
						<div className="support-card">
							<div className="card-image"><img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600" alt="Certification" /></div>
							<div className="card-content">
								<div className="card-icon"><i className="fas fa-certificate" /></div>
								<h4>Certification</h4>
								<p>Certification for Schools and Teachers upon completion.</p>
							</div>
						</div>
						<div className="support-card">
							<div className="card-image"><img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600" alt="Assessment" /></div>
							<div className="card-content">
								<div className="card-icon"><i className="fas fa-clipboard-list" /></div>
								<h4>Assessment &amp; Question Bank</h4>
								<p>Provided question banks for conducting student assessments.</p>
							</div>
						</div>
						<div className="support-card">
							<div className="card-image"><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Competition" /></div>
							<div className="card-content">
								<div className="card-icon"><i className="fas fa-trophy" /></div>
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
							<iframe src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0&modestbranding=1" title="TechyGuide Lab Video" allowFullScreen />
						</div>
					</div>
				</div>
			</section>

			<section className="timeline-section">
				<div className="container">
					<h2 className="section-heading text-center fade-up">Execution Timeline (35 Days)</h2>
					<div className="timeline-box fade-up">
						<div className="t-item"><span>Day 0</span><p>MoU Signed</p></div>
						<div className="t-line" />
						<div className="t-item"><span>Day 5</span><p>50% Advance</p></div>
						<div className="t-line" />
						<div className="t-item"><span>Day 20</span><p>Material Delivery</p></div>
						<div className="t-line" />
						<div className="t-item"><span>Day 30</span><p>Setup &amp; Training</p></div>
						<div className="t-line" />
						<div className="t-item"><span>Day 33</span><p>Lab Go-Live</p></div>
						<div className="t-line" />
						<div className="t-item"><span>Day 35</span><p>Certification</p></div>
					</div>
				</div>
			</section>

			<section className="gallery-section">
				<div className="container">
					<h2 className="section-heading text-center fade-up">Our Labs in Action</h2>
					<p className="section-subtext text-center fade-up">Deployed in 350+ Schools including Gitanjali Vidyalaya, Millenium Public School, and more.</p>
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
						{/* First set of cards */}
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
							<p>"All the activities are exciting and engaging. I thank TechyGuide to develop such a product and course."</p>
							<div className="profile">
								<div className="profile-icon">NS</div>
								<div className="profile-info">
									<h4>Teacher</h4>
									<span>Noble School, Karnataka</span>
								</div>
							</div>
						</div>
						{/* Duplicate set for seamless loop */}
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
							<p>"All the activities are exciting and engaging. I thank TechyGuide to develop such a product and course."</p>
							<div className="profile">
								<div className="profile-icon">NS</div>
								<div className="profile-info">
									<h4>Teacher</h4>
									<span>Noble School, Karnataka</span>
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
						<div className="accordion-item"><button className="accordion-header">Does the package include GST?</button><div className="accordion-body"><p>Yes, all prices listed are inclusive of GST.</p></div></div>
						<div className="accordion-item"><button className="accordion-header">Is there a warranty on the equipment?</button><div className="accordion-body"><p>Yes, we provide a 1-year manufacturing warranty on all microcontrollers.</p></div></div>
						<div className="accordion-item"><button className="accordion-header">What does the teacher training cover?</button><div className="accordion-body"><p>The program includes 3 days of onsite physical training and 24 online sessions covering Coding, Robotics, AI, and IoT.</p></div></div>
					</div>
				</div>
			</section>

			<section className="contact-area" id="contact-section">
				<div className="container contact-grid">
					<div className="contact-info fade-up">
						<h2>Contact TechyGuide</h2>
						<p><strong>Corporate Office:</strong> #80, 2nd Floor, 1st Main, VSR Layout, A Narayanapura Main Road, Bangalore 560016.</p>
						<p><strong>Registered Office:</strong> 1st &amp; 2nd Floor, Jyoti Complex, Bhoisahi, Balasore-756001, Odisha.</p>
            
						<div className="info-box">
							<i className="fas fa-phone-alt" />
							<div>
								<strong>Call Us</strong>
								<p>+91 91140 36376</p>
							</div>
						</div>
						<div className="info-box">
							<i className="fas fa-envelope" />
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
							
							<button type="submit" className="btn btn-full">Send via WhatsApp <i className="fab fa-whatsapp" /></button>
						</form>
					</div>
				</div>
				<div className="copyright">
					<p>© 2026 TechyGuide OPC Pvt. Ltd. All Rights Reserved.</p>
				</div>
			</section>
		</div>
	);
};

export default AIRoboticLabICSE;
