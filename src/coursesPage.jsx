import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './coursesPage.css';
import robotImg from './assets/CoursesPageImages/robot.png';
import bgImg from './assets/CoursesPageImages/5073198.jpg';
import pythonImg from './assets/CoursesPageImages/python.jpg';
import videoFile from './assets/CoursesPageImages/video.mp4';
import ageIcon from './assets/CoursesPageImages/Girl Read Book.png';
import deliveryIcon from './assets/CoursesPageImages/laptop_computer_books_study_pc_icon_209299.png';
import batchIcon from './assets/CoursesPageImages/people_person_children_icon_148392.png';
import sessionIcon from './assets/CoursesPageImages/Time_Span-80_icon-icons.com_57260.png';
import durationIcon from './assets/CoursesPageImages/1491254394-timedurationclocknotification_82936.png';
import certIcon from './assets/CoursesPageImages/award_achievement_education_diploma_certification_certificate_icon_256751.png';
import testimonial1 from './assets/CoursesPageImages/Website Testimonial_1.png';
import testimonial11 from './assets/CoursesPageImages/Website Testimonial_11.png';
import testimonial13 from './assets/CoursesPageImages/Website Testimonial_13.png';
import testimonial14 from './assets/CoursesPageImages/Website Testimonial_14.png';
import testimonial15 from './assets/CoursesPageImages/Website Testimonial_15.png';

function CoursesPage() {
  useEffect(() => {
    // All JavaScript logic from script.js
    function openCourse(courseKey) {
      const modal = document.getElementById('courseModal');
      const title = document.getElementById('modalTitle');
      const curriculum = document.getElementById('modalCurriculum');

      // Set Title
      title.innerText = courseKey;

      // Detailed course information
      const courseDetails = {
        'Robotics': {
          curriculum: ['Arduino Programming & Hardware Setup', 'Sensor Integration (Ultrasonic, Camera, GPS)', 'Motor Control & Servo Programming', 'Robot Assembly & Mechanical Design', 'AI Integration & Machine Learning', 'Advanced Robotics Projects'],
          description: 'Build and program autonomous robots using Arduino, Raspberry Pi, and advanced sensors. Learn mechanical engineering principles, AI integration, and real-world robotics applications.',
          duration: '8 weeks intensive program',
          projects: ['Line Following Robot', 'Obstacle Avoiding Car', 'Voice Controlled Assistant', 'Smart Home Automation'],
          skills: ['Hardware Programming', 'Sensor Integration', 'AI & ML', 'Mechanical Design']
        },
        'Coding': {
          curriculum: ['Python Fundamentals & Syntax', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management & SQL', 'Web Development Basics', 'Final Capstone Project'],
          description: 'Master programming fundamentals with Python, JavaScript, and modern development practices. Build real applications and learn industry-standard coding techniques.',
          duration: '10 weeks comprehensive course',
          projects: ['Personal Finance Tracker', 'Weather Prediction App', 'E-commerce Website', 'Data Analysis Dashboard'],
          skills: ['Python Programming', 'Web Development', 'Database Design', 'Problem Solving']
        },
        'AI': {
          curriculum: ['Introduction to Artificial Intelligence', 'Machine Learning Algorithms', 'Neural Networks & Deep Learning', 'Computer Vision & Image Processing', 'Natural Language Processing', 'AI Ethics & Future Applications'],
          description: 'Explore the fascinating world of AI and machine learning. Build intelligent systems that can learn, adapt, and make decisions like humans.',
          duration: '12 weeks advanced program',
          projects: ['Image Recognition System', 'Chatbot Development', 'Recommendation Engine', 'Predictive Analytics Tool'],
          skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Science']
        },
        'AppDev': {
          curriculum: ['Mobile App Design Principles', 'React Native Development', 'Database Integration & APIs', 'User Interface Design', 'App Store Optimization', 'Publishing & Monetization'],
          description: 'Create stunning mobile applications for iOS and Android. Learn modern frameworks, UI/UX design, and app store deployment strategies.',
          duration: '8 weeks practical course',
          projects: ['Social Media App', 'E-commerce Mobile App', 'Fitness Tracking App', 'Food Delivery Platform'],
          skills: ['React Native', 'UI/UX Design', 'API Integration', 'App Publishing']
        },
        'WebDev': {
          curriculum: ['HTML5 & CSS3 Fundamentals', 'JavaScript ES6+ Programming', 'Frontend Frameworks (React)', 'Backend Development (Node.js)', 'Database Management', 'Full Stack Project Development'],
          description: 'Build modern, responsive websites using cutting-edge technologies. Master both frontend and backend development for complete web solutions.',
          duration: '10 weeks full-stack program',
          projects: ['Personal Portfolio Website', 'E-commerce Platform', 'Blog Management System', 'Real-time Chat Application'],
          skills: ['Frontend Development', 'Backend Programming', 'Database Design', 'Full Stack Architecture']
        },
        'Games': {
          curriculum: ['Game Design Fundamentals', 'Unity Engine Mastery', 'C# Programming for Games', '2D & 3D Graphics Programming', 'Physics & Animation Systems', 'Game Publishing & Marketing'],
          description: 'Design and develop engaging 2D and 3D games using Unity engine. Learn game mechanics, physics, animation, and monetization strategies.',
          duration: '12 weeks creative program',
          projects: ['2D Platformer Adventure', '3D Racing Simulator', 'Mobile Puzzle Game', 'Multiplayer Battle Arena'],
          skills: ['Unity Development', 'C# Programming', 'Game Physics', '3D Modeling']
        }
      };

      const course = courseDetails[courseKey];
      if (course) {
        curriculum.innerHTML = `
          <div style="text-align: left; max-width: 800px; margin: 0 auto;">
            <div style="margin-bottom: 15px;">
              <h4 style="color: var(--primary-blue); margin: 0 0 5px 0;">Course Description</h4>
              <p style="line-height: 1.4; color: #555; margin: 0;">${course.description}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <h4 style="color: var(--primary-blue); margin: 0 0 5px 0;">Duration</h4>
              <p style="color: #666; font-weight: 500; margin: 0;">${course.duration}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <h4 style="color: var(--primary-blue); margin: 0 0 8px 0;">Curriculum</h4>
              ${course.curriculum.map((item, index) => `
                <div style="padding: 6px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
                  <span style="color: var(--primary-orange); font-weight: bold; margin-right: 6px;">✓</span>
                  <span style="color: #444;">Module ${index + 1}: ${item}</span>
                </div>
              `).join('')}
            </div>
            <div style="margin-bottom: 15px;">
              <h4 style="color: var(--primary-blue); margin: 0 0 8px 0;">Projects You'll Build</h4>
              ${course.projects.map(project => `
                <div style="padding: 4px 0; color: #555;">
                  <span style="color: var(--primary-orange); margin-right: 5px;">🚀</span>${project}
                </div>
              `).join('')}
            </div>
            <div>
              <h4 style="color: var(--primary-blue); margin: 0 0 8px 0;">Skills You'll Master</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${course.skills.map(skill => `
                  <span style="background: #f0f8ff; color: var(--primary-blue); padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">${skill}</span>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      } else {
        curriculum.innerHTML = '<div>Course details coming soon...</div>';
      }

      // Show modal with smooth animation
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
      document.body.classList.add('modal-open');
    }

    function closeModal() {
      const modal = document.getElementById('courseModal');
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }, 300);
    }

    // Close when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('courseModal');
      if (event.target === modal) {
        closeModal();
      }
    };

    // Reels Navigation
    function scrollReels(direction) {
      const container = document.querySelector('.courses-page-root .reels-container');
      const cardWidth = 300;
      const scrollAmount = cardWidth * 2;
      
      container.scrollBy({
        left: direction === 1 ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }

    // Video Play Control
    function playVideo(reelCard) {
      const video = reelCard.querySelector('.reel-bg');
      const playButton = reelCard.querySelector('.play-btn-circle');
      
      // Stop all other videos and show their play buttons
      document.querySelectorAll('.courses-page-root .reel-bg').forEach(v => {
        if (v !== video) {
          v.pause();
          v.currentTime = 0;
        }
      });
      
      document.querySelectorAll('.courses-page-root .play-btn-circle').forEach(btn => {
        btn.style.display = 'flex';
      });
      
      // Play/pause current video and hide/show play button
      if (video.paused) {
        video.play();
        playButton.style.display = 'none';
      } else {
        video.pause();
        playButton.style.display = 'flex';
      }
      
      // Show play button when video ends
      video.addEventListener('ended', () => {
        playButton.style.display = 'flex';
      });
    }

    const counters = document.querySelectorAll('.courses-page-root .stat-number');
    const speed = 300;

    const startCounting = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const inc = target / speed;

          const updateCount = () => {
            const currentCount = +counter.innerText;
            if (currentCount < target) {
              counter.innerText = Math.ceil(currentCount + inc);
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(startCounting, {
      threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

    // Attach event handlers to buttons
    const knowMoreButtons = document.querySelectorAll('.courses-page-root .know-more');
    knowMoreButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const courseKey = e.target.getAttribute('data-course');
        openCourse(courseKey);
      });
    });

    const closeModalBtn = document.querySelector('.courses-page-root .close-modal');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    const prevArrow = document.querySelector('.courses-page-root .prev-arrow');
    const nextArrow = document.querySelector('.courses-page-root .next-arrow');
    if (prevArrow) prevArrow.addEventListener('click', () => scrollReels(-1));
    if (nextArrow) nextArrow.addEventListener('click', () => scrollReels(1));

    const reelCards = document.querySelectorAll('.courses-page-root .reel-card');
    reelCards.forEach(card => {
      card.addEventListener('click', () => playVideo(card));
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="courses-page-root">
      <header className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: `url(${bgImg})` }} aria-label="Students learning robotics and coding online with TechyGuide in India"></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-image">
            <img src={robotImg} alt="Robotics Illustration" className="robot-img" />
          </div>
          <div className="hero-content">
            <p className="tagline">FOLLOW INNOVATION!</p>
            <h1 className="kit-title">Start Courses in India's <br /><span className="accent">No.1</span><br /> Robotics & Coding Centre</h1>
            <div className="hero-buttons">
              <a href="#courses" className="btn btn-orange">Book Your Free Session</a>
              <a href="#courses" className="btn btn-glass">Explore Courses</a>
            </div>
          </div>
        </div>
      </header>

      <section className="courses-section" id="courses">
        <h2 className="courses-title"><span className="accent">Industry-Relevant Skills for Young Innovators </span></h2>
        <div className="grid-wrapper">
          <div className="card">
            <img src={bgImg} className="card-img" alt="Student building a robot during TechyGuide robotics course" />
            <h2 className="courses-name">Robotics & Hardware</h2>
            <p>Master hardware and automation.</p>
            <p>Build intelligent machines while learning electronics, sensors, and automation concepts. Students design robots that interact with the physical world. </p>
            <button className="know-more" data-course="Robotics">Know more</button>
              <Link to="/shop" className="btn-claim">Buy Now</Link>
          </div>
          <div className="card">
            <img src={robotImg} className="card-img" alt="Kids learning Python programming online with TechyGuide" />
            <h2 className="courses-name">Python Coding</h2>
            <p>Learn logic and programming.</p>
            <p>Learn logical thinking and programming using Python’s beginner-friendly syntax. Ideal for automation, data handling, and AI foundations. </p>
            <button className="know-more" data-course="Coding">Know more</button>
              <Link to="/shop" className="btn-claim">Buy Now</Link>
          </div>
          <div className="card">
            <img src={robotImg} className="card-img" alt="Student exploring artificial intelligence concepts in online class" />
            <h2 className="courses-name">Artificial Intelligence</h2>
            <p>Explore the future of tech.</p>
            <p>Explore machine learning, neural networks, and smart decision-making systems. Students build AI models that learn and adapt. </p>
            <button className="know-more" data-course="AI">Know more</button>
              <Link to="/shop" className="btn-claim">Buy Now</Link>
          </div>
          <div className="card">
            <img src={robotImg} className="card-img" alt="Student creating mobile app during TechyGuide app development course" />
            <h2 className="courses-name">App Development</h2>
            <p>Build mobile apps.</p>
            <p>Design and develop mobile applications with intuitive interfaces and real functionality for Android platforms. </p>
            <button className="know-more" data-course="AppDev">Know more</button>
              <Link to="/shop" className="btn-claim">Buy Now</Link>
          </div>
          <div className="card">
            <img src={robotImg} className="card-img" alt="Student designing website during TechyGuide web development course" />
            <h2 className="courses-name">Web Development</h2>
            <p>Create modern websites.</p>
            <p>Learn HTML, CSS, and JavaScript to create responsive, modern websites from scratch. </p>
            <button className="know-more" data-course="WebDev">Know more</button>
              <Link to="/shop" className="btn-claim">Buy Now</Link>
          </div>
          <div className="card">
            <img src={robotImg} className="card-img" alt="Student developing a game in TechyGuide online class" />
            <h2 className="courses-name">Game Development </h2>
            <p>Design 2D and 3D games.</p>
            <p>Create engaging 2D and 3D games while understanding game mechanics, logic, and design principles. </p>
            <button className="know-more" data-course="Games">Know more</button>
              <Link to="/shop" className="btn-claim">Buy Now</Link>
          </div>
        </div>
      </section>

      <div id="courseModal" className="modal">
        <div className="modal-content">
          <span className="close-modal">&times;</span>
          <h1 id="modalTitle">Course Title</h1>
          <div className="modal-stats">
            <span>📖 6 Sessions</span><span>📝 10+ Projects</span><span>✅ 6 Quizzes</span>
          </div>
            <Link to="/shop" className="btn-claim modal-btn">Buy Now</Link>
          <div className="modal-body-section">
            <h3>What will you learn</h3>
            <div id="modalCurriculum" className="curriculum-list"></div>
          </div>
        </div>
      </div>

      <div className="stats-ribbon">
        <div className="stat-item age">
          <img src={ageIcon} alt="Age" /><p>Age group</p><span>7-17 years</span>
        </div>
        <div className="stat-item delivery">
          <img src={deliveryIcon} alt="Delivery" /><p>Program delivery</p><span>Online</span>
        </div>
        <div className="stat-item batch">
          <img src={batchIcon} alt="Batch" /><p>Batch size</p><span>1:1 Tutoring</span>
        </div>
        <div className="stat-item session">
          <img src={sessionIcon} alt="Session" /><p>Session</p><span>6 x 45-min</span>
        </div>
        <div className="stat-item duration">
          <img src={durationIcon} alt="Duration" /><p>Duration</p><span>6 days</span>
        </div>
        <div className="stat-item cert">
          <img src={certIcon} alt="Cert" /><p>Certification</p><span>STEM.org</span>
        </div>
      </div>

      <section className="info-flow-section">
        <div className="content-wrapper">
          <h2 className="main-title">Future-Ready Learning Paths </h2>

          <div className="flow-row">
            <div className="flow-image">
              <img src={pythonImg} alt="Student building a robot during TechyGuide robotics course" />
            </div>
            <div className="flow-text">
              <span className="number">01</span>
              <h3>Robotics & Hardware</h3>
              <p>Bridge the gap between digital logic and physical action. Robotics teaches you to build systems that interact with the real world, from autonomous drones to surgical assistants.Connect software logic with real-world action by building autonomous systems and smart machines. </p>
              <div className="underline"></div>
            </div>
          </div>

          <div className="flow-row reverse">
            <div className="flow-image">
              <img src={pythonImg} alt="Student exploring artificial intelligence concepts in online class" />
            </div>
            <div className="flow-text">
              <span className="number">02</span>
              <h3>Artificial Intelligence</h3>
              <p>Artificial Intelligence is the foundational layer of modern industry. Master neural networks and machine learning to build systems that learn and solve complex global challenges.Understand the technology driving modern industries, from healthcare to space exploration.  </p>
              <div className="underline"></div>
            </div>
          </div>

          <div className="flow-row">
            <div className="flow-image">
              <img src={pythonImg} alt="Kids learning Python programming online with TechyGuide" />
            </div>
            <div className="flow-text">
              <span className="number">03</span>
              <h3>Python Programming</h3>
              <p>The core of data science and automation. Python's simplicity allows for rapid prototyping, making it the most versatile tool for engineers at NASA and Google.A powerful, versatile language used by top global organizations for automation and data science. </p>
              <div className="underline"></div>
            </div>
          </div>

          <div className="flow-row reverse">
            <div className="flow-image">
              <img src={pythonImg} alt="Student creating mobile app during TechyGuide app development course" />
            </div>
            <div className="flow-text">
              <span className="number">04</span>
              <h3>App Development & Web Development</h3>
              <p>Learn how digital products are built, deployed, and scaled in the modern tech ecosystem.We help children become young creators of technology, not just users. In this program, students learn how to design and build their own websites and mobile apps using simple, fun, and interactive methods. </p>
              <div className="underline"></div>
            </div>
          </div>

          <div className="flow-row">
            <div className="flow-image">
              <img src={pythonImg} alt="Student designing website during TechyGuide web development course" />
            </div>
            <div className="flow-text">
              <span className="number">05</span>
              <h3>Web Development</h3>
              <p>Learn HTML, CSS, and JavaScript to create responsive, modern websites from scratch. </p>
              <div className="underline"></div>
            </div>
          </div>

          <div className="flow-row reverse">
            <div className="flow-image">
              <img src={pythonImg} alt="Student developing a game in TechyGuide online class" />
            </div>
            <div className="flow-text">
              <span className="number">06</span>
              <h3>Game Development </h3>
              <p>Create engaging 2D and 3D games while understanding game mechanics, logic, and design principles. 

  </p>
              <div className="underline"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-ribbon-section">
        <h2 className="section-title">Proven Results Across India</h2>
        <div className="stats-ribbon-container">
          <div className="stat-box">
            <div className="stat-number" data-target="1500">0</div>
            <div className="stat-label">Clients Served</div>
          </div>
          <div className="stat-box">
            <div className="stat-number stat-number-percent" data-target="98">0</div>
            <div className="stat-label">STUDENT Success Rate %</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" data-target="25">0</div>
            <div className="stat-label">Years of Combined Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" data-target="400">0</div>
            <div className="stat-label">Global Academic & Industry Partners</div>
          </div>
        </div>
      </section>

      <section className="reels-section">
        <div className="section-header">
          <p className="tagline">STUDENT SHOWCASE</p>
          <h2 className="section-title1">Classroom <span className="accent">Moments</span></h2>
        </div>

        <div className="reels-wrapper">
          <button className="nav-arrow prev-arrow">‹</button>
          
          <div className="reels-container">
            
            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/girl.png" alt="User" />
                    <span>Ananya S.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/boy.png" alt="User" />
                    <span>Rahul K.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/teacher.png" alt="User" />
                    <span>Mentor Raj</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/teacher.png" alt="User" />
                    <span>Mentor Raj</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/teacher.png" alt="User" />
                    <span>Mentor Raj</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/teacher.png" alt="User" />
                    <span>Mentor Raj</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/teacher.png" alt="User" />
                    <span>Mentor Raj</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/teacher.png" alt="User" />
                    <span>Mentor Raj</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-card">
              <video src={videoFile} className="reel-bg" loop></video>
              <div className="reel-overlay">
                <div className="play-btn-circle">
                  <div className="play-icon"></div>
                </div>
                <div className="reel-info">
                  <div className="user-tag">
                    <img src="https://img.icons8.com/color/48/teacher.png" alt="User" />
                    <span>Mentor Raj</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <button className="nav-arrow next-arrow">›</button>
        </div>
      </section>

      <section className="section" id="stories">
        <div className="container">
          <h2 className="section-title">What Parents, Students & Educators Say </h2>
          
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
    </div>
  );
}

export default CoursesPage;
