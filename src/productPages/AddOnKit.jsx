import React, { useEffect } from "react";
import img7 from "../assets/ProductsAddOnImages/7.png";
import armKitImg from "../assets/ProductsAddOnImages/20220708_115335.jpg";
import "./AddOnKit.css";

const AddOnKit = () => {
	useEffect(() => {
		// Animation observer for scroll-triggered animations
		const animationObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("show");
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll(".hidden-left, .hidden-right, .fade-up").forEach((el) => animationObserver.observe(el));

		const root = document.querySelector('.addonkit-page-root');
		if (!root) return;

		// AOS init (scoped)
		if (window.AOS) {
			window.AOS.init({ duration: 1000, once: true, offset: 100 });
		}

		// Loading screen
		const loadingScreen = root.querySelector('#loadingScreen');
		const hideLoading = () => {
			if (loadingScreen) {
				setTimeout(() => {
					loadingScreen.style.opacity = '0';
					setTimeout(() => {
						loadingScreen.style.display = 'none';
					}, 500);
				}, 2000);
			}
		};
		hideLoading();

		// Navbar scroll effect
		const navbar = root.querySelector('.navbar');
		const onScrollNavbar = () => {
			if (!navbar) return;
			if (window.scrollY > 50) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		};
		window.addEventListener('scroll', onScrollNavbar);

		// Mobile navigation
		const hamburger = root.querySelector('.hamburger');
		const navMenu = root.querySelector('.nav-menu');
		const onHamburgerClick = () => {
			if (!navMenu || !hamburger) return;
			navMenu.classList.toggle('active');
			hamburger.classList.toggle('active');
		};
		if (hamburger) {
			hamburger.addEventListener('click', onHamburgerClick);
		}

		// Smooth scrolling for anchors
		const anchors = root.querySelectorAll('a[href^="#"]');
		const onAnchorClick = (e) => {
			const targetSelector = e.currentTarget.getAttribute('href');
			if (!targetSelector) return;
			const target = root.querySelector(targetSelector);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				if (navMenu && hamburger) {
					navMenu.classList.remove('active');
					hamburger.classList.remove('active');
				}
			}
		};
		anchors.forEach((a) => a.addEventListener('click', onAnchorClick));

		// Back to top button
		const backToTop = root.querySelector('#backToTop');
		const onScrollBackToTop = () => {
			if (!backToTop) return;
			if (window.pageYOffset > 300) {
				backToTop.classList.add('show');
			} else {
				backToTop.classList.remove('show');
			}
		};
		if (backToTop) {
			window.addEventListener('scroll', onScrollBackToTop);
			backToTop.addEventListener('click', () => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}

		// CTA ripple + modal
		const ctaButton = root.querySelector('.cta-button');
		const onCtaClick = (e) => {
			const rect = ctaButton.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			const ripple = document.createElement('span');
			ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}px;top:${y}px;background:rgba(255,255,255,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s ease-out;pointer-events:none;`;
			ctaButton.appendChild(ripple);
			setTimeout(() => ripple.remove(), 600);

			const modal = document.createElement('div');
			modal.innerHTML = `
				<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
					<div style="background: white; padding: 3rem; border-radius: 20px; text-align: center; max-width: 500px; margin: 20px; transform: scale(0.8); transition: transform 0.3s ease;">
						<h2 style="color: #2c3e50; margin-bottom: 1rem;">🚀 Welcome to Add On Kit!</h2>
						<p style="margin-bottom: 2rem; color: #666;">Ready to start your STEM journey? Contact us to get started with our premium robotics kits.</p>
						<button onclick="this.parentElement.parentElement.remove()" style="background: #4fc3f7; color: white; border: none; padding: 12px 30px; border-radius: 25px; cursor: pointer; font-size: 1rem; transition: all 0.3s ease;">Close</button>
					</div>
				</div>`;
			document.body.appendChild(modal);
			setTimeout(() => {
				modal.firstElementChild.style.opacity = '1';
				modal.firstElementChild.firstElementChild.style.transform = 'scale(1)';
			}, 10);
		};
		if (ctaButton) ctaButton.addEventListener('click', onCtaClick);

		// Scroll indicator
		const scrollIndicator = root.querySelector('.scroll-indicator');
		if (scrollIndicator) {
			scrollIndicator.addEventListener('click', () => {
				const products = root.querySelector('#products');
				if (products) products.scrollIntoView({ behavior: 'smooth' });
			});
		}

		// Parallax effect disabled to maintain consistent gaps
		// const onParallax = () => {
		// 	const scrolled = window.pageYOffset;
		// 	root.querySelectorAll('.product-section').forEach((section, index) => {
		// 		const rect = section.getBoundingClientRect();
		// 		const speed = 0.1 + index * 0.05;
		// 		if (rect.top < window.innerHeight && rect.bottom > 0) {
		// 			section.style.transform = `translateY(${scrolled * speed}px)`;
		// 		}
		// 	});
		// };
		// window.removeEventListener('scroll', onParallax);

		// Counter animation
		const animateCounters = () => {
			root.querySelectorAll('.stat-number').forEach((counter) => {
				const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''), 10);
				const increment = target / 100;
				let current = 0;
				const updateCounter = () => {
					if (current < target) {
						current += increment;
						counter.textContent = `${Math.ceil(current)}${counter.textContent.includes('%') ? '%' : '+'}`;
						setTimeout(updateCounter, 20);
					}
				};
				updateCounter();
			});
		};

		// Intersection Observer
		let observer;
		if (window.IntersectionObserver) {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('animate-in');
							if (entry.target.classList.contains('hero-stats')) {
								animateCounters();
								observer.unobserve(entry.target);
							}
						}
					});
				},
				{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
			);

			const heroStats = root.querySelector('.hero-stats');
			const productSections = root.querySelectorAll('.product-section');
			const featureCards = root.querySelectorAll('.feature-card');
			if (heroStats) observer.observe(heroStats);
			productSections.forEach((section) => observer.observe(section));
			featureCards.forEach((card) => observer.observe(card));

			const featureGrid = root.querySelector('.features-grid');
			if (featureGrid) {
				const cards = featureGrid.querySelectorAll('.feature-card');
				cards.forEach((card, index) => {
					card.style.animationDelay = `${index * 0.2}s`;
				});
			}
		}

		return () => {
			window.removeEventListener('scroll', onScrollNavbar);
			anchors.forEach((a) => a.removeEventListener('click', onAnchorClick));
			if (hamburger) hamburger.removeEventListener('click', onHamburgerClick);
			if (ctaButton) ctaButton.removeEventListener('click', onCtaClick);
			if (backToTop) window.removeEventListener('scroll', onScrollBackToTop);
			if (observer) observer.disconnect();
		};
	}, []);

	return (
		<div className="addonkit-page-root">
			<div className="addonkit">
				<main className="content-layout">
					<div className="image-section">
						<img src={img7} alt="TEBOT Robot" />
					</div>
					<div className="info-section">
						<h1>ADD on KIT </h1>
						<h2>Empowering future innovators with the tools to build, code.</h2>
						<button className="btn-secondary">Explore Features</button>
					</div>
				</main>
			</div>

			<section className="products-wrapper">
				<div className="product-section">
					<div className="info-box" data-aos="fade-right">
						<span className="category-tag">Robotics</span>
						<h2>Robotic Arm Kit</h2>
						<p>Teaches functionality and mechanics of a robotic arm including practical pick-and-place activities supported by structured course content.</p>
						<ul className="feature-list">
							<li><strong>Precise:</strong> Accurate and controlled movements.</li>
							<li><strong>Motorised:</strong> Reliable motor-driven mechanisms.</li>
							<li><strong>Functional:</strong> Simulates real-world industrial tasks.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> Acrylic Parts, Servo Motor Sg 90 (x4), Arduino UNO, UNO Cable, Nuts and Bolts, Screwdriver, Bluetooth Module, Jumper Cables, Breadboard 170 Pin.
						</div>
					</div>
					<div className="image-box" data-aos="fade-left">
						<img src={armKitImg} alt="Robotic Arm Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section reverse">
					<div className="info-box" data-aos="fade-left">
						<span className="category-tag">Electronics</span>
						<h2>TechBoT Electronics Kit</h2>
						<p>Covers fundamentals of electronics and circuits with 30+ interactive projects and comprehensive learning materials. Suitable for Grade 3+.</p>
						<ul className="feature-list">
							<li><strong>Foundational:</strong> Basics of electronics and circuits.</li>
							<li><strong>Interactive:</strong> 30+ hands-on projects.</li>
							<li><strong>Suitable:</strong> Designed for learners from Grade 3 onwards.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> LED Set, HW Battery, SPST Switch, DC Motor, Laser Diode, Resistors, Breadboard 400 Pin, Timer IC 555, LDR Sensor, and more.
						</div>
					</div>
					<div className="image-box" data-aos="fade-right">
						<img src={armKitImg} alt="TechBoT Electronics Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section">
					<div className="info-box" data-aos="fade-up">
						<span className="category-tag">Advanced Robotics</span>
						<h2>Humanoid Kit (I-BOT)</h2>
						<p>A fully functional humanoid robot compatible with Bluetooth, voice commands, and AI. Features 32 acrylic parts for a detailed build.</p>
						<ul className="feature-list">
							<li><strong>Multi-control:</strong> Bluetooth, Voice, and AI commands.</li>
							<li><strong>Responsive:</strong> Reacts accurately to user inputs.</li>
							<li><strong>Integrative:</strong> Combines multiple advanced technologies.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> I-BOT, BO Motors, Ultrasonic Sensor, OLED Display, Bluetooth Amplifier, Speaker, ESP32 Cam Module, 12V Battery & Adapter.
						</div>
					</div>
					<div className="image-box" data-aos="zoom-in">
						<img src={armKitImg} alt="Humanoid Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section reverse">
					<div className="info-box" data-aos="fade-left">
						<span className="category-tag">Robotics</span>
						<h2>Otto Starter Kit</h2>
						<p>The perfect entry point for robotics. A mini humanoid robot that can walk, dance, and play tunes while teaching coding basics.</p>
						<ul className="feature-list">
							<li><strong>Playful:</strong> Capable of walking and dancing.</li>
							<li><strong>Musical:</strong> Integrated buzzer for playing tunes.</li>
							<li><strong>Simple:</strong> Easy assembly for beginners.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> 3D Printed Parts (x6), Servo Motor SG 90 (x4), Nano Shield, Arduino NANO, Ultrasonic Sensor, Buzzer, Screwdriver.
						</div>
					</div>
					<div className="image-box" data-aos="fade-right">
						<img src={armKitImg} alt="Otto Starter Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section">
					<div className="info-box" data-aos="fade-up">
						<span className="category-tag">Advanced Robotics</span>
						<h2>Otto Lee Kit</h2>
						<p>An advanced Bluetooth-controlled humanoid that supports multiple build configurations and dynamic custom movements.</p>
						<ul className="feature-list">
							<li><strong>Configurable:</strong> Supports multiple build options.</li>
							<li><strong>Wireless:</strong> Controlled via Bluetooth.</li>
							<li><strong>Dynamic:</strong> Performs custom movement routines.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> 3D Printed Parts (x12), 7x Servo Motors, Nano Shield, Arduino NANO, Bluetooth Module, Ultrasonic Sensor.
						</div>
					</div>
					<div className="image-box" data-aos="zoom-in">
						<img src={armKitImg} alt="Otto Lee Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section reverse">
					<div className="info-box" data-aos="fade-left">
						<span className="category-tag">Manufacturing</span>
						<h2>Otto Spider Kit</h2>
						<p>Spider-inspired robot with 8 degrees of movement. It can perform complex routines like dances and push-ups via Bluetooth control.</p>
						<ul className="feature-list">
							<li><strong>8-Degrees:</strong> High agility movement.</li>
							<li><strong>Entertaining:</strong> Performs dances and push-ups.</li>
							<li><strong>Agile:</strong> Capable of complex walking patterns.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> 3D Printed Parts (x10), 8x Servo Motors, Nano Shield, Arduino NANO, Bluetooth Module, Ultrasonic Sensor.
						</div>
					</div>
					<div className="image-box" data-aos="fade-right">
						<img src={armKitImg} alt="Otto Spider Kit" className="product-image" />
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="container">
					<div className="footer-content">
						<h3>Ready to Start Your STEM Journey?</h3>
						<p>Join thousands of students already building the future</p>
						<button className="cta-button">Get Started Today</button>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default AddOnKit;
