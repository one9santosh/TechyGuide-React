import { useEffect } from 'react';
import './WorkshopPage.css';

function WorkshopPage() {
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

		// Smooth Scroll within workshop page root
		const root = document.querySelector('.workshop-page-root');
		const anchors = root ? root.querySelectorAll('a[href^="#"]') : [];
		anchors.forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const targetSel = this.getAttribute('href');
				const target = root ? root.querySelector(targetSel) : null;
				if (target) {
					target.scrollIntoView({ behavior: 'smooth' });
				}
			});
		});

		// Pause Testimonials on Hover (scoped)
		const marquee = root ? root.querySelector('.marquee-content') : null;
		if (marquee) {
			const onEnter = () => { marquee.style.animationPlayState = 'paused'; };
			const onLeave = () => { marquee.style.animationPlayState = 'running'; };
			marquee.addEventListener('mouseenter', onEnter);
			marquee.addEventListener('mouseleave', onLeave);
		}

		// ========================================
		// HERO-AWARE BUTTON POSITIONING
		// ========================================
		const heroSection = document.querySelector('.workshop-page-root .hero');
		const handleScroll = () => {
			if (!heroSection) return;
			
			const heroBottom = heroSection.offsetHeight;
			const scrollToTopBtn = document.querySelector('button.scroll-to-top');
			const whatsappBtn = document.querySelector('.whatsapp-button');

			if (window.scrollY >= heroBottom) {
				// Past hero - show scroll-to-top and position buttons side by side
				if (scrollToTopBtn) scrollToTopBtn.classList.remove('hidden-from-hero');
				if (whatsappBtn) whatsappBtn.classList.add('shifted');
			} else {
				// In hero - hide scroll-to-top
				if (scrollToTopBtn) scrollToTopBtn.classList.add('hidden-from-hero');
				if (whatsappBtn) whatsappBtn.classList.remove('shifted');
			}
		};

		if (heroSection) {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // Call once on mount to set initial state
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
			anchors.forEach(anchor => {
				anchor.replaceWith(anchor.cloneNode(true));
			});
			if (marquee) {
				marquee.style.animationPlayState = '';
			}
		};
	}, []);

	return (
		<div className="workshop-page-root">
			{/* Hero Section */}
			<section className="hero">
				<div className="hero-bg-shape"></div>

				<div className="hero-split left">
					<div className="content-box">
						<div className="tagline"><i className="fas fa-child"></i> COMMUNITY OF LEARNERS</div>
						<h1>Develop Independence <br /><span className="text-orange">Try New Adventures</span></h1>
						<p>Our workshops and summer/winter camps create a safe environment where children have fun while learning lifelong lessons.</p>

						<div className="btn-group">
							<a href="#workshops" className="btn-primary">Learn More</a>
							{/* <a href="#contact" className="btn-secondary">Contact Us</a> */}
						</div>

						<div className="stats-row">
							<div className="stat">
								<h3>30</h3>
								<span>Max Students/Batch</span>
							</div>
							<div className="stat">
								<h3>100%</h3>
								<span>Hands-on Activity</span>
							</div>
						</div>
					</div>
				</div>

				<div className="hero-split right">
					<div className="blob-image"></div>
				</div>
			</section>

			{/* Technology In Focus */}
			<section id="focus" className="section-padding bg-pattern">
				<div className="container">
					<div className="title-block">
						<h2>Technology In Focus</h2>
						<div className="underline"></div>
						<p>Core areas covered in our STEM curriculum.</p>
					</div>

					<div className="tech-grid">
						<div className="tech-card glass">
							<div className="card-icon"><i className="fas fa-cogs"></i></div>
							<div className="card-body">
								<h3>Mechatronics</h3>
								<p>Combining mechanics and electronics for advanced automation.</p>
							</div>
						</div>

						<div className="tech-card glass">
							<div className="card-icon"><i className="fas fa-robot"></i></div>
							<div className="card-body">
								<h3>Robotics</h3>
								<p>Design, construction, and operation of autonomous bots.</p>
							</div>
						</div>

						<div className="tech-card glass">
							<div className="card-icon"><i className="fas fa-bolt"></i></div>
							<div className="card-body">
								<h3>Electronics</h3>
								<p>Circuit design, sensors, and series/parallel connections.</p>
							</div>
						</div>

						<div className="tech-card glass">
							<div className="card-icon"><i className="fas fa-wifi"></i></div>
							<div className="card-body">
								<h3>Internet of Things</h3>
								<p>Connecting physical objects to the digital world.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Workshop Packages */}
			<section id="workshops" className="section-padding">
				<div className="container">
					<div className="title-block">
						<h2>Workshop Packages</h2>
						<div className="underline"></div>
						<p>Choose the best learning path for your students.</p>
					</div>

					<div className="pricing-grid">
						<div className="pricing-card">
							<div className="p-header">
								<h3>1 Day Workshop</h3>
								{/* <div className="price">₹5,999 <span className="small"></span></div> */}
							</div>
							<div className="p-body">
								<ul>
									<li><i className="fas fa-clock"></i> 2-3 Hours / 2-3 Batches</li>
									<li><i className="fas fa-cubes"></i> 4 Activities Covered</li>
									<li><i className="fas fa-gift"></i> <strong>Takeaway:</strong> 1 3D Model (Keychain)</li>
									<li><i className="fas fa-certificate"></i> Certificate of Participation</li>
								</ul>
								<div className="curriculum-box">
									<h4>Curriculum:</h4>
									<ul>
										<li>Intro to Robotics & TeBoT</li>
										<li>Maze Solving Robot</li>
										<li>Waving Robot</li>
										<li>Automatic Street Light</li>
										<li>Electronics & 3D Pen</li>
									</ul>
								</div>
								<a href="#contact" className="btn-primary full-width">Book Now</a>
							</div>
						</div>

						<div className="pricing-card featured">
							<div className="badge">Most Popular</div>
							<div className="p-header">
								<h3>3 Day Workshop</h3>
								{/* <div className="price">₹17,999 <span className="small"></span></div> */}
							</div>
							<div className="p-body">
								<ul>
									<li><i className="fas fa-clock"></i> 2-3 Hours / 2-3 Batches</li>
									<li><i className="fas fa-cubes"></i> 10 Activities Covered</li>
									<li><i className="fas fa-gift"></i> <strong>Takeaway:</strong> 1 3D Model</li>
									<li><i className="fas fa-certificate"></i> Certificate of Participation</li>
								</ul>
								<div className="curriculum-box">
									<h4>Curriculum:</h4>
									<ul>
										<li><strong>All 1-Day Topics +</strong></li>
										<li>Print Name on TeBoT</li>
										<li>Soccer Robot</li>
										<li>Make a Swing</li>
										<li>Pasta Maker & Crawler</li>
										<li>Line Follower Robot</li>
									</ul>
								</div>
								<a href="#contact" className="btn-primary full-width">Book Now</a>
							</div>
						</div>

						<div className="pricing-card">
							<div className="p-header">
								<h3>5 Day Workshop</h3>
								{/* <div className="price">₹29,999 <span className="small"></span></div> */}
							</div>
							<div className="p-body">
								<ul>
									<li><i className="fas fa-clock"></i> 2-3 Hours / 2-3 Batches</li>
									<li><i className="fas fa-cubes"></i> 15 Activities Covered</li>
									<li><i className="fas fa-gift"></i> <strong>Takeaway:</strong> 1 3D Model</li>
									<li><i className="fas fa-certificate"></i> Certificate of Participation</li>
								</ul>
								<div className="curriculum-box">
									<h4>Curriculum:</h4>
									<ul>
										<li><strong>All 3-Day Topics +</strong></li>
										<li>Series & Parallel Connections</li>
										<li>Obstacle Avoiding Car</li>
										<li>Home Automation</li>
										<li>Counter Balance Mechanism</li>
										<li>IoT Integration</li>
									</ul>
								</div>
								<a href="#contact" className="btn-primary full-width">Book Now</a>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* Requirements */}
			<section id="requirements" className="req-section bg-dark">
				<div className="container">
					<div className="title-block light">
						<h2>Workshop Requirements</h2>
						<div className="underline"></div>
						<p>Basic infrastructure required to conduct the session.</p>
					</div>
					<div className="req-grid">
						<div className="req-item">
							<i className="fas fa-ruler-combined"></i>
							<span>500-600 Sq. Ft. Room</span>
						</div>
						<div className="req-item">
							<i className="fas fa-laptop"></i>
							<span>1 Laptop & Projector</span>
						</div>
						<div className="req-item">
							<i className="fas fa-chalkboard"></i>
							<span>Whiteboard / Screen</span>
						</div>
						<div className="req-item">
							<i className="fas fa-wifi"></i>
							<span>Internet Connection</span>
						</div>
						<div className="req-item">
							<i className="fas fa-mobile-alt"></i>
							<span>Smartphone (Optional)</span>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section id="gallery" className="section-padding">
				<div className="container">
					<div className="gallery-header">
						<h2>Innovation <span className="text-orange">In Action</span></h2>
						<p>A snapshot of our learning ecosystem.</p>
					</div>

					<div className="bento-grid">
						<div className="bento-item main-feature">
							<img src="https://images.unsplash.com/photo-1563968743333-044cef800494?q=80&w=2070&auto=format&fit=crop" alt="Students Learning" />
							<div className="bento-overlay">
								<div className="tech-badge">PRIMARY FOCUS</div>
								<h3>Student Engagement</h3>
								<p>Active learning environments where students lead the way.</p>
							</div>
						</div>

						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" alt="Circuits" />
							<div className="bento-overlay">
								<div className="tech-badge">ELECTRONICS</div>
								<h3>Circuit Design</h3>
							</div>
						</div>

						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" alt="Circuits" />
							<div className="bento-overlay">
								<div className="tech-badge">ELECTRONICS</div>
								<h3>Circuit Design</h3>
							</div>
						</div>

						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" alt="3D Printing" />
							<div className="bento-overlay">
								<div className="tech-badge">PROTOTYPING</div>
								<h3>3D Printing</h3>
							</div>
						</div>

						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop" alt="Coding" />
							<div className="bento-overlay">
								<div className="tech-badge">SOFTWARE</div>
								<h3>Python / AI</h3>
							</div>
						</div>

						<div className="bento-item wide-feature">
							<img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Robotics Team" />
							<div className="bento-overlay">
								<div className="tech-badge">TEAMWORK</div>
								<h3>Robothrone Competition</h3>
								<p>Annual robotics challenges fostering competitive spirit.</p>
							</div>
						</div>

						<div className="bento-item wide-feature">
							<img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Robotics Team" />
							<div className="bento-overlay">
								<div className="tech-badge">TEAMWORK</div>
								<h3>Robothrone Competition</h3>
								<p>Annual robotics challenges fostering competitive spirit.</p>
							</div>
						</div>
						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" alt="3D Printing" />
							<div className="bento-overlay">
								<div className="tech-badge">PROTOTYPING</div>
								<h3>3D Printing</h3>
							</div>
						</div>
						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" alt="3D Printing" />
							<div className="bento-overlay">
								<div className="tech-badge">PROTOTYPING</div>
								<h3>3D Printing</h3>
							</div>
						</div>
						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" alt="3D Printing" />
							<div className="bento-overlay">
								<div className="tech-badge">PROTOTYPING</div>
								<h3>3D Printing</h3>
							</div>
						</div>
						<div className="bento-item">
							<img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" alt="3D Printing" />
							<div className="bento-overlay">
								<div className="tech-badge">PROTOTYPING</div>
								<h3>3D Printing</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="testimonials-section">
				<div className="title-block">
					<h2>What They Say</h2>
					<div className="underline"></div>
				</div>

				<div className="marquee-wrapper">
						<div className="marquee-content">
							{/* set A */}
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>
							<div className="testimonial-card">
								<p>"TechyGuide workshops brought real innovation to our labs."</p>
								<div className="user"><span>- Science HOD</span></div>
							</div>
							<div className="testimonial-card">
								<p>"My daughter loved the 3D Pen activity."</p>
								<div className="user"><span>- Parent</span></div>
							</div>
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>

							{/* set B (duplicate for seamless loop) */}
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>
							<div className="testimonial-card">
								<p>"TechyGuide workshops brought real innovation to our labs."</p>
								<div className="user"><span>- Science HOD</span></div>
							</div>
							<div className="testimonial-card">
								<p>"My daughter loved the 3D Pen activity."</p>
								<div className="user"><span>- Parent</span></div>
							</div>
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>
						</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="cta-banner">
				<div className="container">
					<div className="cta-content">
						<h2>Book A Workshop Today</h2>
						<p>TechyGuide Private Limited</p>
						<div className="contact-details">
							<p><i className="fas fa-phone"></i> +91 91140 36376</p>
							<p><i className="fas fa-envelope"></i> reachus@techyguide.in</p>
							<p><i className="fas fa-globe"></i> www.techyguide.in</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default WorkshopPage;
